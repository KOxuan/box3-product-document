# 游戏组件化编程：模块化思维的工程实践

`@dao3fun/component` 是一个为神岛引擎（Box3）设计的组件化开发框架，它提供了一套完整的组件系统解决方案，帮助开发者构建可维护、可扩展的游戏项目。

## 主要特性

- **组件化架构**：提供标准的组件生命周期管理，参考 cocos creater 引擎
- **事件系统**：支持组件间的事件通信机制
- **类型安全**：完整的 TypeScript 类型支持
- **可配置性**：支持组件参数配置和热更新
- **性能优化**：内置组件池管理和更新优化机制

## 安装指南

### 使用 ArenaPro 插件安装

1. 在 VScode 编辑器中，按下`Ctrl + Shift + P`打开命令面板。
2. 搜索"ArenaPro"并运行`ArenaPro: 查看神岛NPM包`命令。
3. 在弹出的输入框中输入`component`进行搜索。
4. 点击搜索结果，然后在左下角弹窗中点击"确认安装"，等待安装完成。

### 使用 npm 安装

你也可以在终端中直接运行以下命令来安装：

```bash
npm install @dao3fun/component
```

## 核心概念

### EntityNode（实体节点）

EntityNode 是组件系统的核心，它作为组件的容器，管理组件的生命周期和通信。

```typescript
class EntityNode<T = any> {
  // 获取实体引用
  readonly entity: T;

  // 添加组件
  addComponent<T extends Component>(
    componentClass: ComponentClass<T>,
    config?: Partial<T>
  ): this;

  // 获取组件
  getComponent<T extends Component>(
    componentClass: ComponentClass<T>
  ): T | null;

  // 移除组件
  removeComponent<T extends Component>(componentClass: ComponentClass<T>): this;

  // 事件系统
  on(event: string, callback: Function, context?: any): this;
  emit(event: string, ...args: any[]): this;

  /** ... */
}
```

### Component（组件基类）

所有自定义组件都应继承自 Component 基类，它提供了标准的生命周期钩子：

```typescript
class Component<T = any> {
  // 组件所属节点
  protected readonly node: EntityNode<T>;

  // 生命周期钩子
  protected onLoad?(): void; // 组件加载时
  protected start?(): void; // 组件启动时
  protected update?(dt: number): void; // 每帧更新
  protected onDestroy?(): void; // 组件销毁时
  protected onEnable?(): void; // 组件启用时
  protected onDisable?(): void; // 组件禁用时
}
```

## 最佳实践

### 组件设计原则

1. **单一职责**：每个组件只负责一个独立的功能
2. **可配置性**：通过配置参数而不是硬编码来控制组件行为
3. **低耦合**：组件间通过事件通信，避免直接引用
4. **可复用**：设计通用组件，提高代码复用率

### 组件通信最佳实践

1. **节点内通信**：使用节点事件系统

```typescript
// 发送方组件
class SenderComponent extends Component {
  protected start(): void {
    this.node.emit("message", "数据");
  }
}

// 接收方组件
class ReceiverComponent extends Component {
  protected start(): void {
    this.node.on("message", this.onMessage, this);
  }

  private onMessage(data: string): void {
    console.log("收到消息:", data);
  }
}
```

## 调试与开发工具

1. **组件检查器**：使用 `node.components` 查看当前节点的所有组件

```typescript
class DebugComponent extends Component {
  protected start(): void {
    console.log("当前节点组件列表:", Array.from(this.node.components.values()));
  }
}
```

2. **事件追踪**：支持通配符\*，开启事件日志记录

```typescript
class EventTracker extends Component {
  protected start(): void {
    this.node.on("*", (event, ...args) => {
      console.log(`[Event] ${event}:`, args);
    });
  }
}
```

3. **性能监控**

```typescript
class PerformanceMonitor extends Component {
  private updateTimes: number[] = [];

  protected update(dt: number): void {
    this.updateTimes.push(dt);
    if (this.updateTimes.length > 60) {
      const avgTime =
        this.updateTimes.reduce((a, b) => a + b) / this.updateTimes.length;
      console.log(`平均帧时间: ${avgTime}ms`);
      this.updateTimes.length = 0;
    }
  }
}
```

## 常见问题解答

### 组件间通信方式选择

- 同节点组件通信：使用 `this.node.emit/on`
- 不同节点组件通信：使用全局 `EventEmitter`
- 父子节点通信：使用 `getComponent` 直接调用

### 性能优化建议

1. 避免在 update 中进行重复计算
2. 使用对象池管理频繁创建/销毁的组件
3. 合理使用事件系统，避免过多的事件监听
4. 及时清理不需要的事件监听和定时器

### 如何正确管理组件的事件监听？

```typescript
class EventManagerComponent extends Component {
  protected start(): void {
    // 添加事件监听
    GameWorldEvent.on(world.onPlayerJoin, this.handlePlayerJoin, this);
    this.node.on("customEvent", this.handleCustomEvent, this);
  }

  protected onDestroy(): void {
    // 清理事件监听
    GameWorldEvent.off(world.onPlayerJoin, this.handlePlayerJoin, this);
    this.node.off("customEvent", this.handleCustomEvent, this);
  }

  private handlePlayerJoin(): void {
    // 处理玩家加入事件
  }

  private handleCustomEvent(): void {
    // 处理自定义事件
  }
}
```

### 组件之间如何共享数据？

1. **通过事件系统**：适用于松耦合场景

```typescript
// 发送方
this.node.emit("scoreChange", 100);

// 接收方
this.node.on("scoreChange", (score: number) => {
  // 处理数据
});
```

2. **通过全局单例**：适用于全局状态管理

```typescript
class GameDataManager extends Component {
  private static instance: GameDataManager;
  public gameData = {
    score: 0,
    level: 1,
  };

  protected onLoad(): void {
    GameDataManager.instance = this;
  }

  static getInstance(): GameDataManager {
    return GameDataManager.instance;
  }
}
```

### 如何处理组件的异常情况？

```typescript
class SafeComponent extends Component {
  protected start(): void {
    try {
      this.initializeComponent();
    } catch (error) {
      console.error("组件初始化失败:", error);
      // 优雅降级处理
      this.handleError(error);
    }
  }

  private handleError(error: Error): void {
    // 1. 记录错误
    console.error("组件错误:", error);

    // 2. 尝试恢复
    this.tryRecover();

    // 3. 如果无法恢复，禁用组件
    if (!this.canRecover()) {
      this.enabled = false;
    }
  }
}
```

### 组件配置如何管理？

1. **使用配置接口**

```typescript
interface PlayerConfig {
  speed: number;
  jumpForce: number;
  maxHealth: number;
}

class PlayerComponent extends Component {
  private config: PlayerConfig = {
    speed: 1,
    jumpForce: 10,
    maxHealth: 100,
  };

  // 通过 addComponent 时可以传入配置
  // node.addComponent(PlayerComponent, { config: customConfig });
}
```

### 如何处理组件的依赖关系？

```typescript
class DependentComponent extends Component {
  protected start(): void {
    // 检查必要组件
    const requiredComp = this.node.getComponent(RequiredComponent);
    if (!requiredComp) {
      console.error("缺少依赖组件 RequiredComponent");
      this.enabled = false;
      return;
    }

    // 自动添加依赖组件
    if (!this.node.getComponent(AutoAddComponent)) {
      this.node.addComponent(AutoAddComponent);
    }
  }
}
```

### 如何实现组件的热重载？

```typescript
class HotReloadableComponent extends Component<GameEntity> {
  private state = {};

  protected onDisable(): void {
    // 保存状态
    this.saveState();
  }

  protected onEnable(): void {
    // 恢复状态
    this.restoreState();
  }

  private saveState(): void {
    // 保存需要在重载时保持的状态
    this.state = {
      position: this.node.entity.position.clone(),
      data: this.getCurrentData(),
    };
  }

  private restoreState(): void {
    // 恢复之前保存的状态
    if (this.state) {
      this.node.entity.position = this.state.position;
      this.setCurrentData(this.state.data);
    }
  }
}
```
