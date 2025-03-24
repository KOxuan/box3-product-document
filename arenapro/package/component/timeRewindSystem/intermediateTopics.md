# 进阶篇：回溯系统核心概念与实现

## 1. 状态处理器设计

### 1.1 核心概念

状态处理器是回溯系统的基础，它负责实体状态的获取和设置：

```typescript
interface IStateHandler<T = any> {
  get: () => T; // 获取状态
  set: (value: T) => void; // 设置状态
}
```

### 1.2 设计原则

1. **单一职责**

   - 每个处理器只负责一个状态属性
   - 保持获取和设置逻辑的对称性
   - 避免在处理器中包含业务逻辑

2. **数据独立性**

   - 确保状态数据的深拷贝
   - 避免对象引用导致的数据污染
   - 处理好循环引用的情况

3. **类型安全**
   - 使用泛型约束状态类型
   - 在设置时进行类型检查
   - 处理好可空值的情况

### 1.3 常见陷阱

1. **对象引用问题**

   ```typescript
   // 错误示例
   get: () => this.position,  // 直接返回引用

   // 正确示例
   get: () => ({...this.position}),  // 返回副本
   ```

2. **异步处理**

   ```typescript
   // 错误示例
   get: async () => await fetchState(),  // 异步获取

   // 正确示例
   get: () => this.cachedState,  // 同步返回缓存
   ```

3. **性能问题**

   ```typescript
   // 低效示例
   get: () => JSON.parse(JSON.stringify(this.state)),  // 深拷贝开销大

   // 优化示例
   get: () => Object.assign({}, this.state),  // 浅拷贝足够时使用
   ```

## 2. 回溯系统实现

### 2.1 核心流程

1. **状态记录**

   - 定期采样实体状态
   - 创建状态快照
   - 维护快照链表

2. **状态回放**
   - 定位目标时间点
   - 查找相关快照
   - 计算插值参数
   - 更新实体状态

### 2.2 关键算法

1. **快照管理**

   ```typescript
   // 添加快照
   snapshots.push({
     timestamp: currentTime,
     states: this.captureStates(entity),
     entityId: entity.uuid,
   });

   // 清理过期快照
   while (
     snapshots.length > 1 &&
     currentTime - snapshots[0].timestamp > maxRecordTime
   ) {
     snapshots.shift();
   }
   ```

2. **状态插值**

   ```typescript
   // 计算插值因子
   const alpha =
     (targetTime - snapshot1.timestamp) /
     (snapshot2.timestamp - snapshot1.timestamp);

   // 执行插值
   const value = snapshot1.value + (snapshot2.value - snapshot1.value) * alpha;
   ```

### 2.3 性能考虑

1. **内存管理**

   - 使用对象池复用快照对象
   - 及时清理过期数据
   - 优化数据结构

2. **计算优化**
   - 缓存常用计算结果
   - 批量处理状态更新
   - 避免频繁的 GC

## 3. 调试与优化

### 3.1 调试工具

1. **状态检查**

   ```typescript
   // 打印快照信息
   console.log("Snapshots:", this.snapshotMap.get(entity.uuid));

   // 检查状态变化
   console.log("State Change:", {
     before: prevState,
     after: currentState,
   });
   ```

2. **性能分析**
   ```typescript
   // 记录处理时间
   console.time("rewind");
   this.rewindEntities();
   console.timeEnd("rewind");
   ```

### 3.2 常见问题

1. **状态不连续**

   - 原因：快照间隔过大
   - 解决：调整 recordInterval
   - 优化：增加插值平滑度

2. **内存泄漏**

   - 原因：快照清理不及时
   - 解决：检查清理逻辑
   - 优化：设置合理的 maxRecordTime

3. **性能抖动**
   - 原因：GC 频繁触发
   - 解决：使用对象池
   - 优化：批量处理更新

### 3.3 优化建议

1. **配置调优**

   ```typescript
   timeRewindSystem.config = {
     maxRecordTime: 6000, // 根据实际需求设置
     recordInterval: 50, // 平衡精度和性能
     rewindSpeed: 1.0, // 控制回放速度
   };
   ```

2. **代码优化**

   ```typescript
   // 优化前
   states[key] = JSON.parse(JSON.stringify(value));

   // 优化后
   states[key] = this.cloneState(value); // 使用专用的克隆函数
   ```

3. **内存优化**

   ```typescript
   // 使用对象池
   class SnapshotPool {
     private pool: IStateSnapshot[] = [];

     acquire(): IStateSnapshot {
       return this.pool.pop() || this.createSnapshot();
     }

     release(snapshot: IStateSnapshot): void {
       this.pool.push(snapshot);
     }
   }
   ```
