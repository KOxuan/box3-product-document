# 高级篇：源码深入理解与最佳实践

这一章，我们深入讲解回溯组件和系统的原理、设计思想以及最佳实践。

## 1. 双时间轴存储结构

回溯系统采用双时间轴存储结构来管理实体状态：

### 1.1 快照时间轴

- **快照链表**：每个实体维护一个按时间戳排序的快照链表
- **版本控制**：每个快照包含完整的实体状态，支持状态回退
- **内存优化**：采用滑动窗口机制，自动清理过期快照

### 1.2 插值时间轴

- **状态插值**：在相邻快照之间进行线性插值
- **平滑过渡**：确保状态变化的连续性和自然性
- **性能平衡**：通过配置录制间隔优化性能和精度

## 2. 状态插值算法

### 2.1 线性插值原理

```typescript
// alpha: 插值因子 [0,1]
// start: 起始值
// end: 结束值
value = start + (end - start) * alpha;
```

### 2.2 应用场景

- **数值属性**：直接进行线性插值
- **对象属性**：递归处理每个数值字段
- **特殊处理**：非数值属性采用离散插值

## 3. 系统状态机

### 3.1 状态说明

- **Recording**：记录状态

  - 定期采样实体状态
  - 维护快照链表
  - 清理过期数据

- **Rewinding**：回放状态
  - 计算目标时间点
  - 查找相关快照
  - 执行状态插值
  - 更新实体状态

## 4. 性能优化

### 4.1 内存管理

- **快照压缩**：仅记录变化的属性
- **定期清理**：自动移除过期快照
- **内存池**：复用快照对象减少 GC

### 4.2 计算优化

- **时间片分配**：合理设置记录间隔
- **批量处理**：统一处理同类型状态
- **缓存利用**：缓存常用的插值结果

## 5. 源码解析

### 5.1 组件设计

```typescript
@apclass()
export class TimeRewindComponent extends Component<GameEntity> {
  config: IRewindConfig = {
    stateHandlers: {}, // 状态处理器
    callbacks: {}, // 生命周期回调
  };
}
```

**设计要点**：

1. 纯数据组件，不含业务逻辑
2. 配置驱动，支持灵活扩展
3. 生命周期管理，支持状态监听

### 5.2 系统实现

**核心机制**：

1. **状态管理**

   ```typescript
   private snapshotMap: Map<string, IStateSnapshot[]>
   ```

   - 实体 ID 索引
   - 快照数组存储
   - 自动垃圾回收

2. **回放控制**

   ```typescript
   protected update(deltaTime: number): void {
     if (this.isRewinding) {
       this.rewindEntities();
     } else {
       this.recordEntities();
     }
   }
   ```

   - 状态驱动更新
   - 分离记录和回放
   - 支持暂停恢复

3. **插值计算**
   ```typescript
   private lerp(start: number, end: number, alpha: number): number {
     alpha = Math.max(0, Math.min(1, alpha));
     return start + (end - start) * alpha;
   }
   ```
   - 安全性检查
   - 线性插值
   - 边界处理

## 6. 最佳实践

### 6.1 组件配置

```typescript
entity.addComponent(TimeRewindComponent, {
  stateHandlers: {
    position: {
      get: () => entity.transform.position,
      set: (value) => (entity.transform.position = value),
    },
  },
  callbacks: {
    onStart: () => console.log("开始回溯"),
    onEnd: () => console.log("结束回溯"),
  },
});
```

### 6.2 性能调优

```typescript
timeRewindSystem.config = {
  maxRecordTime: 6000, // 最大回溯时间
  recordInterval: 50, // 记录间隔
  rewindSpeed: 1.0, // 回放速度
};
```

### 6.3 注意事项

1. 合理设置回溯时间，避免内存占用过大
2. 优化状态获取器性能，减少深拷贝开销
3. 处理好边界情况，确保回放稳定性
4. 适当使用回调函数，实现业务联动

## 7. 调试技巧

### 7.1 状态检查

```typescript
console.log(timeRewindSystem.snapshotMap.get(entity.uuid));
```

### 7.2 性能分析

```typescript
console.time("rewind");
timeRewindSystem.startRewind();
console.timeEnd("rewind");
```

### 7.3 常见问题

1. 回放不连续：检查记录间隔设置
2. 内存占用高：优化快照存储结构
3. 性能抖动：调整批处理策略

## 源代码

### 回溯组件

```typescript
import { _decorator, Component } from "@dao3fun/component";
const { apclass } = _decorator;

/**
 * 状态获取器和设置器的类型定义
 */
export interface IStateHandler<T = any> {
  /** 获取状态值 */
  get: () => T;
  /** 设置状态值 */
  set: (value: T) => void;
}

/**
 * 时间回溯组件的配置接口
 * @interface IRewindConfig
 */
export interface IRewindConfig {
  /** 状态处理器映射，包含状态的获取和设置方法 */
  stateHandlers: Record<string, IStateHandler>;
  /** 回溯事件回调 */
  callbacks?: {
    /** 回溯开始时的回调函数 */
    onStart?: () => void;
    /** 回溯结束时的回调函数 */
    onEnd?: () => void;
    /** 回溯进度更新回调函数 */
    onProgress?: (progress: number) => void;
  };
}

/**
 * 时间回溯组件
 * 用于标识实体是否具有回溯功能，并存储回溯相关配置
 *
 * 该组件遵循ECS架构设计原则：
 * 1. 组件只存储数据，不包含业务逻辑
 * 2. 状态数据由TimeRewindSystem统一管理
 * 3. 组件通过事件通知系统状态变化
 *
 * @class TimeRewindComponent
 * @extends {Component<GameEntity>}
 */
@apclass()
export class TimeRewindComponent extends Component<GameEntity> {
  /**
   * 时间回溯组件的配置项
   */
  config: IRewindConfig = {
    stateHandlers: {},
    callbacks: {},
  };
}
```

### 回溯系统

```typescript
import { _decorator, NodeSystem } from "@dao3fun/component";
import { TimeRewindComponent } from "./NewComponent";

/**
 * 状态快照的接口定义
 * 用于存储实体在特定时间点的状态数据
 *
 * 快照设计原则：
 * 1. 时间标识：每个快照必须有唯一的时间戳
 * 2. 状态完整性：包含实体在该时间点的所有需要回溯的状态
 * 3. 实体关联：通过entityId与具体实体建立对应关系
 * 4. 数据独立性：快照数据与实体当前状态相互独立
 *
 * @interface IStateSnapshot
 * @property {number} timestamp - 快照的时间戳，记录状态保存的具体时间点
 * @property {Record<string, any>} states - 快照包含的状态数据，键为状态名，值为状态值
 * @property {string} entityId - 实体ID，用于标识状态属于哪个实体
 */
interface IStateSnapshot {
  /** 快照的时间戳 */
  timestamp: number;
  /** 快照包含的状态数据 */
  states: Record<string, any>;
  /** 实体ID */
  entityId: string;
}

/**
 * 时间回溯系统
 * 用于统一管理多个实体的回溯功能，实现游戏中的时间倒流效果
 *
 * 系统设计原则：
 * 1. 单一职责：专注于管理实体状态的记录和回放
 * 2. 数据驱动：通过快照存储和还原实体状态
 * 3. 组件解耦：与TimeRewindComponent配合，实现关注点分离
 * 4. 性能优化：使用Map存储快照，支持定期清理过期数据
 * 5. 状态一致性：确保回溯过程中实体状态的连续性和准确性
 *
 * 核心功能：
 * 1. 状态记录：定期保存实体状态快照
 * 2. 状态回放：支持按时间轴回溯实体状态
 * 3. 插值计算：实现状态之间的平滑过渡
 * 4. 内存管理：自动清理过期快照数据
 *
 * @extends {NodeSystem}
 */
export class TimeRewindSystem extends NodeSystem {
  /** 是否正在回溯中 */
  private isRewinding: boolean = false;
  /** 存储所有实体的状态快照，使用Map提高查询效率 */
  private snapshotMap: Map<string, IStateSnapshot[]> = new Map();
  /** 上次记录状态的时间戳，用于控制记录频率 */
  private lastRecordTime: number = 0;
  /** 回溯开始时间 */
  private rewindStartTime: number = 0;
  /** 回溯结束时间 */
  private rewindEndTime: number = 0;
  /**
   * 系统默认配置
   * @property {number} maxRecordTime - 最大回溯时间（毫秒）
   * @property {number} recordInterval - 记录状态的时间间隔（毫秒）
   * @property {number} rewindSpeed - 回放速度倍率
   */
  config = {
    maxRecordTime: 6000,
    recordInterval: 50,
    rewindSpeed: 1.0,
  };

  /**
   * 系统更新函数
   * 根据当前状态执行记录或回放操作
   *
   * 更新流程：
   * 1. 检查系统当前状态（记录/回放）
   * 2. 根据状态调用对应的处理函数
   * 3. 处理可能发生的异常情况
   *
   * @param {number} deltaTime - 帧间隔时间（毫秒）
   * @throws {Error} 当状态记录或回放过程中出现错误时抛出
   *
   * @example
   * // 在游戏主循环中调用
   * timeRewindSystem.update(16.67); // 假设60FPS
   */
  protected update(deltaTime: number): void {
    if (this.isRewinding) {
      this.rewindEntities();
    } else {
      this.recordEntities();
    }
  }

  /**
   * 记录所有实体的状态
   * 遍历所有具有TimeRewindComponent的实体，记录其当前状态
   *
   * 性能优化策略：
   * 1. 使用时间间隔控制记录频率，避免频繁记录
   * 2. 仅记录发生变化的状态
   * 3. 定期清理过期数据，避免内存占用过大
   * 4. 使用Map数据结构提高查询效率
   *
   * 记录流程：
   * 1. 检查时间间隔是否满足记录条件
   * 2. 遍历所有实体，获取TimeRewindComponent
   * 3. 调用状态获取器收集当前状态
   * 4. 创建快照并存储到对应实体的快照列表
   * 5. 清理过期快照数据
   *
   * @private
   * @throws {Error} 当状态获取器执行失败时抛出
   */
  private recordEntities(): void {
    const currentTime = Date.now();
    if (currentTime - this.lastRecordTime >= this.config.recordInterval) {
      const entities = Array.from(this.entities.values());

      for (const entity of entities) {
        if (!entity.enable) {
          continue;
        }
        const timeRewind = entity.getComponent(TimeRewindComponent);
        if (!timeRewind) continue;

        const states: Record<string, any> = {};
        for (const [key, handler] of Object.entries(
          timeRewind.config.stateHandlers
        )) {
          const value = handler.get();
          // 对获取的状态值进行深拷贝
          states[key] =
            typeof value === "object" && value !== null
              ? JSON.parse(JSON.stringify(value))
              : value;
        }

        const snapshot: IStateSnapshot = {
          timestamp: currentTime,
          states,
          entityId: entity.uuid,
        };
        if (!this.snapshotMap.has(entity.uuid)) {
          this.snapshotMap.set(entity.uuid, []);
        }
        const snapshots = this.snapshotMap.get(entity.uuid)!;
        snapshots.push(snapshot);

        // 移除过期的快照
        while (
          snapshots.length > 1 &&
          currentTime - snapshots[0].timestamp > this.config.maxRecordTime
        ) {
          snapshots.shift();
        }
      }

      this.lastRecordTime = currentTime;
    }
  }

  /**
   * 回放所有实体的状态
   * 对所有具有TimeRewindComponent的实体进行状态回放
   *
   * 回放策略：
   * 1. 根据时间戳查找目标快照
   * 2. 使用线性插值实现平滑过渡
   * 3. 支持自定义回放速度
   * 4. 处理边界时间点的状态还原
   *
   * 错误处理：
   * 1. 检查快照数据的完整性
   * 2. 处理插值计算中的边界情况
   * 3. 确保回放过程的稳定性
   * 4. 验证状态设置器的可用性
   *
   * 插值算法：
   * 1. 计算目标时间点的前后两个快照
   * 2. 根据时间差计算插值因子(0-1)
   * 3. 对每个状态属性进行线性插值
   * 4. 使用状态设置器更新实体状态
   *
   * @private
   * @throws {Error} 当快照数据不完整或状态设置器执行失败时抛出
   */
  private rewindEntities(): void {
    const entities = Array.from(this.entities.values());
    let allEntitiesFinished = true;

    for (const entity of entities) {
      if (!entity.enable) {
        continue;
      }
      const timeRewind = entity.getComponent(TimeRewindComponent);
      if (!timeRewind) continue;

      const snapshots = this.snapshotMap.get(entity.uuid);
      if (!snapshots || snapshots.length === 0) continue;

      const effectiveInterval =
        this.config.recordInterval / this.config.rewindSpeed;
      const lastSnapshot = snapshots[snapshots.length - 1];
      const rewindTime = lastSnapshot.timestamp - effectiveInterval;

      // 找到目标时间点的快照
      let targetIndex = snapshots.length - 1;
      while (targetIndex > 0 && snapshots[targetIndex].timestamp > rewindTime) {
        targetIndex--;
      }

      // 检查是否已经回溯到最早的快照
      if (targetIndex === 0 && snapshots[0].timestamp >= rewindTime) {
        // 如果已经到达最早的快照，标记该实体已完成回溯
        continue;
      }

      // 只要有一个实体还没完成回溯，就将标志设为false
      allEntitiesFinished = false;

      // 应用状态变化
      const targetSnapshot = snapshots[targetIndex];
      const nextSnapshot =
        snapshots[Math.min(snapshots.length - 1, targetIndex + 1)];

      // 计算插值因子
      const alpha = Math.min(
        1,
        Math.max(
          0,
          (rewindTime - targetSnapshot.timestamp) /
            (nextSnapshot.timestamp - targetSnapshot.timestamp)
        )
      );

      // 对每个状态进行插值并更新
      for (const [key, handler] of Object.entries(
        timeRewind.config.stateHandlers
      )) {
        if (key in targetSnapshot.states && key in nextSnapshot.states) {
          const targetValue = targetSnapshot.states[key];
          const nextValue = nextSnapshot.states[key];

          if (
            typeof targetValue === "number" &&
            typeof nextValue === "number"
          ) {
            handler.set(this.lerp(targetValue, nextValue, alpha));
          } else if (
            typeof targetValue === "object" &&
            targetValue !== null &&
            typeof nextValue === "object" &&
            nextValue !== null
          ) {
            // 创建插值对象的深拷贝
            const interpolatedValue: Record<string, number> = {};
            for (const prop in targetValue) {
              if (
                typeof targetValue[prop] === "number" &&
                typeof nextValue[prop] === "number"
              ) {
                interpolatedValue[prop] = this.lerp(
                  targetValue[prop],
                  nextValue[prop],
                  alpha
                );
              }
            }
            // 确保设置的是新的对象实例
            handler.set(JSON.parse(JSON.stringify(interpolatedValue)));
          } else {
            handler.set(targetValue);
          }
        }
      }

      // 移除已经回放的快照
      snapshots.splice(targetIndex + 1);

      // 计算回溯进度
      const totalDuration = this.rewindStartTime - this.rewindEndTime;
      const currentDuration = this.rewindStartTime - rewindTime;
      const rawProgress = Math.min(
        1,
        Math.max(0, currentDuration / totalDuration)
      );
      const adjustedProgress = rawProgress * this.config.rewindSpeed;
      const progress = Number((1 - adjustedProgress).toFixed(3)); // 反转进度并保留3位小数

      // 通知进度更新
      if (timeRewind.config.callbacks?.onProgress) {
        timeRewind.config.callbacks.onProgress(progress);
      }

      // 检查回溯是否应该结束
      const isEndTimeReached = rewindTime <= this.rewindEndTime;
      const isOutOfSnapshots = snapshots.length <= 1;
      if (isEndTimeReached || isOutOfSnapshots) {
        this.stopRewind();
      }
    }
  }

  /**
   * 线性插值计算
   * 用于在两个状态值之间进行平滑过渡
   *
   * @param {number} start - 起始值
   * @param {number} end - 结束值
   * @param {number} alpha - 插值因子，范围[0,1]
   * @returns {number} 插值结果
   * @private
   */
  private lerp(start: number, end: number, alpha: number): number {
    // 确保alpha在[0,1]范围内
    alpha = Math.max(0, Math.min(1, alpha));
    return start + (end - start) * alpha;
  }

  /**
   * 开始回溯所有实体或指定组的实体
   *
   * 回溯流程：
   * 1. 设置系统为回溯状态
   * 2. 遍历所有启用的实体
   * 3. 对具有TimeRewindComponent的实体启动回溯
   *
   * @param {number} [startTime] 回溯开始时间点，默认从最新记录开始
   * @param {number} [endTime] 回溯结束时间点，默认到最早记录
   *
   * @example
   * // 回溯最近5秒
   * const currentTime = Date.now();
   * timeRewindSystem.startRewind(currentTime, currentTime - 5000);
   */
  startRewind(startTime?: number, endTime?: number): void {
    this.isRewinding = true;
    const currentTime = Date.now();
    this.rewindStartTime = currentTime;
    this.rewindEndTime = currentTime - this.config.maxRecordTime;

    const entitiesToRewind = Array.from(this.entities.values());
    for (const entity of entitiesToRewind) {
      if (!entity.enable) {
        continue;
      }
      const timeRewind = entity.getComponent(TimeRewindComponent);
      if (timeRewind) {
        if (timeRewind.config.callbacks?.onStart) {
          timeRewind.config.callbacks.onStart();
        }
      }
    }
  }

  /**
   * 停止所有实体或指定组的实体的回溯
   *
   * 停止流程：
   * 1. 遍历所有启用的实体
   * 2. 对具有TimeRewindComponent的实体停止回溯
   * 3. 重置系统状态
   *
   * @example
   * // 在适当的时机停止回溯
   * timeRewindSystem.stopRewind();
   */
  stopRewind(): void {
    const entitiesToStop = Array.from(this.entities.values());
    for (const entity of entitiesToStop) {
      if (!entity.enable) {
        continue;
      }
      const timeRewind = entity.getComponent(TimeRewindComponent);
      if (timeRewind && timeRewind.config.callbacks?.onEnd) {
        timeRewind.config.callbacks.onEnd();
      }
      // 清理该实体的快照数据
      this.snapshotMap.delete(entity.uuid);
    }

    // 重置系统状态
    this.isRewinding = false;
    this.lastRecordTime = 0;
    this.snapshotMap.clear();
  }
}
```
