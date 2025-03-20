# 游戏组件化编程：模块化思维的工程实践

一个为神岛引擎（Box3）设计的基于 TypeScript 的轻量级组件化开发框架，它提供了一套完整的组件系统解决方案，帮助开发者构建可维护、可扩展的游戏项目。

## 基础概念：组件系统是什么？

想象你在玩乐高积木，每个积木块都有特定的功能：有的是轮子 🚗，有的是引擎 🔧，有的是车身。把这些积木按照特定方式组合在一起，就能构建出一辆完整的玩具车！

在游戏开发中，组件系统就像这样的乐高积木：

- 实体(Entity)就像是乐高底板，提供基础支撑
- 组件(Component)就像是不同功能的积木块，每个都有特定功能
- EntityNode 就像是把积木块组装在一起的说明书，指导如何组合

## 入门：基础用法

### 1. 创建实体节点

```typescript
// 创建一个实体节点
const node = new EntityNode();
```

### 2. 定义组件

```typescript
@apclass // 记得加上这个装饰器！
class MovementComponent extends Component {
  speed: number = 5;

  update(deltaTime: number) {
    // 在这里写移动逻辑
    const position = this.node.entity.position;
    position.x += this.speed * deltaTime;
  }
}
```

### 3. 组件的生命周期

```typescript
@apclass
class LifecycleComponent extends Component {
  // 1. 组件被创建时调用
  onLoad() {
    console.log("初始化设置");
  }

  // 2. 组件首次启动时调用
  start() {
    console.log("开始运行");
  }

  // 3. 每帧更新时调用
  update(deltaTime: number) {
    console.log("更新中...");
  }

  // 4. 组件启用/禁用时调用
  onEnable() {
    console.log("已启用");
  }
  onDisable() {
    console.log("已禁用");
  }

  // 5. 组件销毁时调用
  onDestroy() {
    console.log("清理资源");
  }
}
```

## 进阶：组件通信

### 1. 直接引用

```typescript
@apclass
class PlayerComponent extends Component {
  // 获取其他组件
  start() {
    const movement = this.node.getComponent(MovementComponent);
    movement.speed = 10;
  }
}
```

### 2. 事件系统

```typescript
@apclass
class ScoreSystem extends Component {
  private score = 0;

  onLoad() {
    // 监听得分事件
    this.node.on("addScore", (points: number) => {
      this.score += points;
      this.node.emit("scoreChanged", this.score);
    });
  }
}
```

## 高级：性能优化

### 1. 组件权重

```typescript
@apclass
class PhysicsComponent extends Component {
  onLoad(): void {
    this.weight = -2; // 最先更新物理
  }
}

@apclass
class AnimationComponent extends Component {
  onLoad(): void {
    this.weight = -1; // 其次更新动画
  }
}
```

### 2. 缓存优化

```typescript
@apclass
class OptimizedComponent extends Component {
  private _transform: Transform;
  private _position = { x: 0, y: 0, z: 0 };

  onLoad() {
    // 缓存常用组件
    this._transform = this.node.getComponent(Transform);
  }

  update() {
    // 复用对象，避免创建新对象
    Object.assign(this._position, this._transform.position);
    // 使用 _position 进行计算...
  }
}
```

### 3. 异步操作

```typescript
@apclass
class ResourceLoader extends Component {
  async loadResources() {
    try {
      const model = await this.loadModel("character");
      const texture = await this.loadTexture("skin");
      this.node.emit("resourcesLoaded", { model, texture });
    } catch (error) {
      console.error("资源加载失败:", error);
    }
  }
}
```

## 调试技巧

### 1. 性能监控

```typescript
// 获取组件性能数据
const stats = node.getComponentPerformance(MovementComponent);
console.log(`平均执行时间: ${stats.averageExecutionTime}ms`);
```

### 2. 调试工具

```typescript
@apclass
class DebugComponent extends Component {
  public debugMode = false;

  update() {
    if (this.debugMode) {
      this.drawDebugInfo();
    }
  }

  private drawDebugInfo() {
    // 绘制调试信息
    console.log("位置:", this.node.entity.position);
    console.log("状态:", this.node.entity.state);
  }
}
```

## 最佳实践

1. **组件设计原则**

   - 单一职责：每个组件只做一件事
   - 低耦合：减少组件间依赖
   - 高内聚：相关功能放在一起

2. **命名规范**

   - 组件名称使用 PascalCase
   - 以 Component 结尾
   - 描述性命名：MovementComponent、CollisionComponent

3. **错误处理**

   ```typescript
   @apclass
   class SafeComponent extends Component {
     update() {
       try {
         this.doUpdate();
       } catch (error) {
         console.error("更新出错:", error);
         this.handleError(error);
       }
     }
   }
   ```

4. **资源管理**

   ```typescript
   @apclass
   class ResourceComponent extends Component {
     private resources: any[] = [];

     onLoad() {
       // 加载资源
       this.resources.push(this.loadResource());
     }

     onDestroy() {
       // 释放资源
       this.resources.forEach((resource) => resource.dispose());
       this.resources = [];
     }
   }
   ```

记住：

- 从简单开始，逐步添加功能
- 保持代码整洁和可维护性
- 合理使用生命周期函数
- 注意性能优化
- 做好错误处理和资源管理

更多代码示例，请看[组件示例](./example)

## 迁移到 Cocos Creator 的优势

学习 `@dao3fun/component` 组件系统对于后续使用 Cocos Creator 开发有很大帮助：

### 1. 相似的组件概念

- 两者都采用基于组件的设计模式
- 生命周期钩子函数非常相似：

  ```typescript
  // @dao3fun/component
  onLoad() {}
  start() {}
  update() {}
  onDestroy() {}

  // Cocos Creator
  onLoad() {}
  start() {}
  update() {}
  onDestroy() {}
  ```

### 2. 类似的组件通信机制

- 节点事件系统

  ```typescript
  // @dao3fun/component
  this.node.emit("eventName", data);
  this.node.on("eventName", callback);

  // Cocos Creator
  this.node.emit("eventName", data);
  this.node.on("eventName", callback);
  ```

### 3. 相同的组件管理方式

- 组件获取和操作

  ```typescript
  // @dao3fun/component
  const comp = this.node.getComponent(MyComponent);
  this.node.addComponent(MyComponent);

  // Cocos Creator
  const comp = this.node.getComponent(MyComponent);
  this.node.addComponent(MyComponent);
  ```

### 4. 类似的开发思维

- 都强调组件化、模块化开发
- 都使用 TypeScript 进行开发
- 都采用面向对象的编程范式

### 5. 性能优化经验可复用

- 组件池化管理
- 更新频率优化
- 资源管理策略

这些相似性使得你在学习完 `@dao3fun/component` 后，能够更快地上手 Cocos Creator 的开发。主要区别在于：

1. Cocos Creator 提供了更完整的引擎功能
2. Cocos Creator 有可视化编辑器
3. Cocos Creator 的组件装饰器语法略有不同

更多 Cocos Creator 相关资源：

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [组件系统文档](https://docs.cocos.com/creator/manual/zh/scripting/component.html)
