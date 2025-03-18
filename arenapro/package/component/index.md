# 游戏组件化编程：模块化思维的工程实践

## 安装指南

### 使用 ArenaPro 插件安装

1. 在 VScode 编辑器中，按下`Ctrl + Shift + P`打开命令面板。
2. 搜索“ArenaPro”并运行`ArenaPro: 查看神岛NPM包`命令。
3. 在弹出的输入框中输入`component`进行搜索。
4. 点击搜索结果，然后在左下角弹窗中点击“确认安装”，等待安装完成。

### 使用 npm 安装

你也可以在终端中直接运行以下命令来安装 @dao3fun/component：

```bash
npm install @dao3fun/component
```

## 定义与行业实践

游戏组件化编程是一种通过「高内聚、低耦合」的设计原则，将游戏实体拆分为独立功能单元（Component），再通过组合式架构构建复杂游戏对象的开发范式。该模式在三大主流引擎中的实现对比：

| 引擎特性     | Cocos Creator    | Unity                | Unreal Engine     | Box3 引擎             |
| ------------ | ---------------- | -------------------- | ----------------- | --------------------- |
| **组件载体** | 节点(Node)       | 游戏对象(GameObject) | 演员(Actor)       | 扩展节点(EntityNode)  |
| **脚本语言** | TypeScript       | C#                   | C++/蓝图          | TypeScript/JavaScript |
| **生命周期** | onLoad/onDestroy | Awake/OnDestroy      | BeginPlay/EndPlay | onLoad/onDestroy      |

> **架构对比说明**：神岛引擎采用轻量级 ECS 变体架构，在保留经典组件模式优点的同时，通过 EntityNode 实现更灵活的组件挂载机制

## 神岛引擎组件化模型解析

### ▋ 节点系统（EntityNode）

采用**可继承的实体节点**架构，每个节点具备：

```typescript
class EntityNode {
  entity: T; // 基础实体对象
  components: Map<string, Component>; // 组件存储库
}
```

## 组件化开发优势矩阵

| 传统开发痛点     | 组件化解决方案          | 工程效益                 | 实现原理              |
| ---------------- | ----------------------- | ------------------------ | --------------------- |
| 功能耦合度太高   | 单一职责原则            | 提升代码可维护性         | 组件边界强制划分      |
| 重复开发相似功能 | 组件复用机制            | 减少 70%冗余代码         | 通过继承/组合实现复用 |
| 多人协作困难     | 独立组件开发+接口标准化 | 并行开发效率提升 40%     | 接口契约+类型系统约束 |
| 后期扩展成本高   | 热插拔式组件装配        | 系统扩展无需修改既有代码 | 运行时动态加载/卸载   |

## 实战示例：构建可交互 NPC

```typescript
// 创建基础节点（包含坐标变换等基础能力）
const npcNode = new EntityNode(world.querySelector("#NPC"));

/**
 * 组件装配流水线：
 * 1. 模型组件 - 加载可视化资源
 * 2. 刚体组件 - 实现物理碰撞
 * 3. 控制组件 - 管理NPC行为逻辑
 * 4. 对话组件 - 处理玩家交互
 */
npcNode
  .addComponent(ModelComponent, {
    path: "mesh/npc.vb",
    lodLevels: [10, 20, 30], // LOD配置
  })
  .addComponent(RigidBody, {
    mass: 0, // 静态物体
    collisionType: "trigger",
  })
  .addComponent(NPCController, {
    patrolPath: ["wp1", "wp2"],
    moveSpeed: 1.5,
  })
  .addComponent(DialogTrigger, {
    radius: 2.5, // 交互半径
    dialogId: "DLG_VILLAGER_01",
    cooldown: 5000, // 交互冷却时间(ms)
  });

// 组件间状态协同（通过事件总线通信）
npcNode
  .getComponent(DialogTrigger)
  .on("start-dialog", () => {
    // 暂停NPC移动逻辑
    npcNode.getComponent(NPCController).pauseMovement();
    // 禁用物理碰撞
    npcNode.getComponent(RigidBody).setCollision(false);
  })
  .on("end-dialog", () => {
    // 恢复NPC行为
    npcNode.getComponent(NPCController).resumeMovement();
    npcNode.getComponent(RigidBody).setCollision(true);
  });
```

## 实战示例：多组件挂载

```typescript
/**
 * 【广播组件】职责说明：
 * - 监听全局玩家加入事件
 * - 使用实体say方法进行消息广播
 * - 自动绑定到节点生命周期
 */
class SayComponent extends Component<GameEntity> {
  onPlayerJoinId: GameEventHandlerToken | undefined;
  protected start(): void {
    // 使用箭头函数保持this指向
    this.onPlayerJoinId = world.onPlayerJoin(({ entity }) => {
      this.node.entity.say(`欢迎${entity.player.name}加入游戏`);
    });
  }

  protected onDestroy(): void {
    // 重要：移除事件监听防止内存泄漏
    this.onPlayerJoinId.cancel();
  }
}

/**
 * 【跳跃组件】功能特性：
 * - 初始化时执行基础跳跃
 * - 可扩展定时跳跃逻辑
 * - 物理参数可配置化
 */
class CaperComponent extends Component<GameEntity> {
  // 组件配置参数（可通过addComponent注入）
  config = {
    baseForce: 1.0,
    randomRange: 0.5,
  };

  protected start(): void {
    const jumpForce =
      this.config.baseForce + Math.random() * this.config.randomRange;
    this.node.entity.velocity.y += jumpForce;
  }
}

// 实体组件装配流程
const e = world.querySelector("#实体名称");
if (e) {
  new EntityNode(e)
    .addComponent(SayComponent) // 添加广播能力
    .addComponent(CaperComponent, {
      // 配置跳跃参数
      baseForce: 1.2,
      randomRange: 0.8,
    });
}
```

> **开发建议**：
>
> 1. 采用「功能卡片」设计法：将每个功能点写在便利贴上，确保单个卡片对应单个组件
> 2. 组件通信规范：
>    - 节点内通信：优先使用节点事件总线（this.node.emit）
>    - 跨节点通信：使用全局 EventEmitter
>    - 避免直接组件引用，保持松耦合
> 3. 性能优化：
>    - 高频更新组件实现 update 节流
>    - 使用组件池管理频繁创建/销毁的组件
