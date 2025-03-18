# 组件系统代码示例

本文档提供了使用 `@dao3fun/component` 组件系统的各种实用示例，帮助开发者快速掌握组件的创建、挂载和通信方式。

## 单组件示例

以下示例展示了如何创建一个简单的广播组件，挂载后指定实体会发送欢迎消息。

```typescript
import { Component, EntityNode } from "@dao3fun/component";

/**
 * @SayComponent - 实体广播组件
 */
class SayComponent extends Component<GameEntity> {
  protected start(): void {
    this.node.entity.say(`欢迎${entity.player.name}`);
  }
}

const e = world.querySelector("#实体名称");

if (e) {
  const node = new EntityNode(e);
  node.addComponent(SayComponent);
}
```

## 组件初始参数配置

组件可以通过构造函数的参数进行初始化，实现组件的配置化。以下示例展示了如何通过配置参数初始化组件。

```typescript
import { Component, EntityNode } from "@dao3fun/component";

/**
 * @SayComponent - 实体广播组件
 */
class SayComponent extends Component<GameEntity> {
  say = "ap";
  protected start(): void {
    console.log("SayComponent 说：", this.say);
  }
}

const e = world.querySelector("#实体名字-1");

if (e) {
  const node = new EntityNode(e);
  node.addComponent(SayComponent, {
    say: "hello",
  });
}
```

## 节点实例获取

通过 `find` 方法可以获取已绑定到节点上的实体实例。注意：只有已经通过 `EntityNode` 绑定的实体才能被找到。

```typescript
import { EntityNode, find } from "@dao3fun/component";

const e = world.querySelector("#实体名称-1");
const e2 = world.querySelector("#实体名称-2");

if (e && e2) {
  new EntityNode(e);

  console.log(find(e)?.entity.id); // 输出: 实体名称-1
  console.log(find(e2)?.entity.id); // 输出: undefined (因为e2未绑定到节点)
}
```

## 多组件挂载示例

一个实体可以挂载多个组件，每个组件负责不同的功能。以下示例展示了如何同时挂载广播和跳跃组件。

```typescript
import { Component, EntityNode } from "@dao3fun/component";

/**
 * @SayComponent - 实体广播组件
 */
class SayComponent extends Component<GameEntity> {
  protected start(): void {
    world.onPlayerJoin(({ entity }) => {
      this.node.entity.say(`欢迎${entity.player.name}加入游戏`);
    });
  }
}

/**
 * @CaperComponent - 物理跳跃组件
 */
class CaperComponent extends Component<GameEntity> {
  protected start(): void {
    this.node.entity.velocity.y++;
  }
}

const e = world.querySelector("#实体名称");

if (e) {
  const node = new EntityNode(e);
  node.addComponent(SayComponent);
  node.addComponent(CaperComponent);
}
```

## 单节点组件间通信

同一节点上的不同组件可以通过事件系统进行通信，实现组件间的解耦合。

```typescript
import { Component, EntityNode } from "@dao3fun/component";
/**
 * @SayComponent - 实体广播组件
 */
class SayComponent extends Component<GameEntity> {
  protected start(): void {
    this.node.on("say", this.log, this);
  }
  protected log(text: string): void {
    console.log(text);
  }
}

/**
 * @SayMgrComponent - 实体广播管理组件
 */
class SayMgrComponent extends Component<GameEntity> {
  protected start(): void {
    this.node.emit("say", "hello world，来自SayMgrComponent", this);
  }
}

const e = world.querySelector("#实体名称");

if (e) {
  const node = new EntityNode(e);
  node.addComponent(SayComponent);
  node.addComponent(SayMgrComponent);
}
```

## 多节点组件间通信

不同节点上的组件可以通过全局事件系统进行通信，实现跨节点的消息传递。

```typescript
import { Component, EntityNode, EventEmitter } from "@dao3fun/component";

const eventEmitter = new EventEmitter();

/**
 * @SayComponent - 实体广播组件
 */
class SayComponent extends Component<GameEntity> {
  protected start(): void {
    eventEmitter.on("say", this.log, this);
  }
  protected log(text: string): void {
    console.log(text);
  }
}

/**
 * @SayMgrComponent - 实体广播管理组件
 */
class SayMgrComponent extends Component<GameEntity> {
  protected start(): void {
    eventEmitter.emit("say", "hello world，来自SayMgrComponent");
  }
}

const e = world.querySelector("#实体名称-1");
const e2 = world.querySelector("#实体名称-2");

if (e && e2) {
  const node2 = new EntityNode(e2);
  node2.addComponent(SayComponent);

  const node = new EntityNode(e);
  node.addComponent(SayMgrComponent);
}
```

## 组件继承示例

通过组件继承，可以复用父组件的功能并扩展新的行为。以下示例展示了如何通过继承实现功能扩展。

```typescript
import { Component, EntityNode } from "@dao3fun/component";

/**
 * @CaperComponent - 物理跳跃组件
 */
class CaperComponent extends Component<GameEntity> {
  jump() {
    this.node.entity.velocity.y++;
  }
}

/**
 * @SayComponent - 实体广播跳跃组件
 */
class SayComponent extends CaperComponent {
  protected start(): void {
    this.jump();
  }
}

const e = world.querySelector("#实体名称");

if (e) {
  const node = new EntityNode(e);
  node.addComponent(SayComponent);
}
```

## 应用示例

以下示例展示了一个更复杂的应用场景：批量创建实体并为每个实体添加具有生命周期管理的组件。

```typescript
import { Component, EntityNode } from "@dao3fun/component";

/**
 * @CaperComponent - 管理游戏实体的跳跃行为
 * 定期使实体进行跳跃，并在总时间达到限制后自我销毁
 */
class CaperComponent extends Component<GameEntity> {
  static readonly JUMP_INTERVAL = 2000; // 跳跃间隔时间（毫秒）
  static readonly TOTAL_TIME_LIMIT = 10000; // 总时间限制（毫秒）

  time = 0;
  totalTime = 0;

  protected start(): void {
    console.log(`跳跃组件已挂载到实例${this.node.entity.id ?? "未知实体"}`);
  }

  protected update(deltaTime: number): void {
    this.time += deltaTime;
    this.totalTime += deltaTime;

    if (this.time >= CaperComponent.JUMP_INTERVAL) {
      this.up();
      this.time = 0;
    }

    if (this.totalTime >= CaperComponent.TOTAL_TIME_LIMIT) {
      this.remove();
    }
  }

  protected onDestroy(): void {
    console.log(`实例${this.node.entity.id ?? "未知实体"}的跳跃组件已销毁`);
  }

  up() {
    this.node.entity.velocity.y += getRandomFloat(0, 1.8);
  }

  remove() {
    this.node.removeComponent(CaperComponent);
  }
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

for (let i = 1; i <= 20; i++) {
  const e = world.createEntity({
    mesh: "mesh/光谱太阳能.vb",
    id: `光谱太阳能${i}号`,
    meshScale: new GameVector3(0.05, 0.05, 0.05),
    friction: 1,
    position: new GameVector3(getRandomFloat(1, 55), 9, getRandomFloat(1, 55)),
  });
  if (e) {
    const node = new EntityNode(e);
    node.addComponent(CaperComponent);
  }
}
```
