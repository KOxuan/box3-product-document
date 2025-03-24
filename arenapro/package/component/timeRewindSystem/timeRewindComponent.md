# 入门篇：时间回溯系统 的使用

本示例效果：

![](https://static.codemao.cn/pickduck/S1m-XAR21l.gif?hash=lpJSxLOdVJZljJ2dm3sQm3asFbEF)

## 基本概念

TimeRewindComponent 是一个用于实现时间回溯功能的组件，它允许实体记录和回放状态变化。主要特点：

- 支持多种状态的记录和回放
- 提供灵活的配置选项
- 支持回溯事件回调

## 快速开始

1. 创建时间回溯系统：

```typescript
const sys = new TimeRewindSystem();
sys.config = {
  maxRecordTime: 2500, // 最大记录时间（毫秒）
  recordInterval: 50, // 记录间隔（毫秒）
  rewindSpeed: 1.0, // 回放速度
};
```

2. 为实体添加时间回溯组件：

```typescript
const node = new EntityNode(entity);
node.addComponent(TimeRewindComponent);

const trc = node.getComponent(TimeRewindComponent);
if (trc) {
  trc.config = {
    stateHandlers: {
      // 配置位置状态处理器
      position: {
        get: () => entity.position,
        set: (value) => {
          entity.position = value;
        },
      },
    },
    callbacks: {
      onStart: () => console.log("回溯开始"),
      onEnd: () => console.log("回溯结束"),
      onProgress: (progress) => console.log("回溯进度：", progress),
    },
  };
}
```

## 配置详解

### 状态处理器（StateHandler）

状态处理器定义了如何获取和设置实体的特定状态：

```typescript
interface IStateHandler<T = any> {
  get: () => T; // 获取状态值
  set: (value: T) => void; // 设置状态值
}
```

### 回调函数

组件提供三种回调函数：

- `onStart`：回溯开始时触发
- `onEnd`：回溯结束时触发
- `onProgress`：回溯过程中触发，提供进度信息

## 性能优化

1. **合理设置记录间隔**

   - 较小的间隔可以提供更平滑的回放效果
   - 较大的间隔可以减少内存占用
   - 建议根据游戏类型选择 20-100ms 的间隔

   示例配置：

   ```typescript
   // 快节奏游戏（如动作游戏）的配置
   const fastPacedConfig = {
     maxRecordTime: 1500,
     recordInterval: 20, // 更短的间隔以获得流畅的回放
     rewindSpeed: 1.5,
   };

   // 慢节奏游戏（如策略游戏）的配置
   const slowPacedConfig = {
     maxRecordTime: 5000,
     recordInterval: 100, // 更长的间隔以节省内存
     rewindSpeed: 1.0,
   };
   ```

2. **选择性记录状态**

   - 只记录必要的状态变化
   - 避免记录可以通过其他状态计算得出的数据
   - 示例：优化状态记录

   ```typescript
   // 不推荐：记录所有状态
   const badConfig = {
     stateHandlers: {
       position: {
         get: () => entity.position,
         set: (v) => (entity.position = v),
       },
       velocity: {
         get: () => entity.velocity,
         set: (v) => (entity.velocity = v),
       },
       acceleration: {
         get: () => entity.acceleration,
         set: (v) => (entity.acceleration = v),
       },
       // 不必要：可以通过位置计算
       speed: { get: () => entity.speed, set: (v) => (entity.speed = v) },
     },
   };

   // 推荐：只记录关键状态
   const goodConfig = {
     stateHandlers: {
       position: {
         get: () => entity.position,
         set: (v) => (entity.position = v),
       },
       velocity: {
         get: () => entity.velocity,
         set: (v) => (entity.velocity = v),
       },
       // 加速度和速度可以通过位置和速度计算得出
     },
   };
   ```

## 示例代码

```typescript
/**
 * 初始化时间回溯系统
 * @returns {TimeRewindSystem} 配置好的时间回溯系统实例
 */
function initTimeRewindSystem(): TimeRewindSystem {
  const sys = new TimeRewindSystem();
  sys.config = {
    maxRecordTime: 2500,
    recordInterval: 50,
    rewindSpeed: 1.0,
  };
  return sys;
}

/**
 * 创建并配置实体的时间回溯节点
 * @param entity - 游戏实体
 * @returns {EntityNode} 配置好的实体节点
 */
function createTimeRewindNode(entity: GameEntity): EntityNode {
  const node = new EntityNode(entity);
  node.addComponent(TimeRewindComponent);

  const trc = node.getComponent(TimeRewindComponent);
  if (trc) {
    trc.config = {
      stateHandlers: {
        position: {
          get: () => node.entity.position,
          set: (value) => {
            node.entity.position = value;
          },
        },
        meshOrientation: {
          get: () => node.entity.meshOrientation,
          set: (value) => (node.entity.meshOrientation = value),
        },
      },
      callbacks: {
        onStart: () => console.log(`回溯开始${entity.id}`),
        onEnd: () => console.log(`回溯结束${entity.id}`),
        onProgress: (progress) =>
          console.log(`回溯进度${entity.id}：`, progress),
      },
    };
  }

  return node;
}

// 初始化系统
const sys = initTimeRewindSystem();

// 获取并配置实体
const entity1 = world.querySelector("#实体名称");
const entity2 = world.querySelector("#实体名称2");

if (entity1 && entity2) {
  // 创建并配置实体节点
  const nodes = [createTimeRewindNode(entity1), createTimeRewindNode(entity2)];

  // 添加到系统
  nodes.forEach((node) => sys.addEntityNode(node));

  // 延迟启动回溯
  setTimeout(() => sys.startRewind(), 3000);
}
```
