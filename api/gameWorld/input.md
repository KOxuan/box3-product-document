<script setup>
import '/style.css'
</script>
# 点击与互动
## 方法

#### <font id="API" /><font id="Event">事件</font> onInteract(<font id="Type">handler:(event:[GameInteractEvent](./input#gameinteractevent))=>void</font>) <font id="Type">: [GameEventHandlerToken](https://www.yuque.com/box3lab/api/gll7mhwasgn9hoq0)</font>
若实体开启了互动功能enableInteract = true，则玩家与实体进行互动时触发。

当玩家走进实体的互动范围，实体身上就会出现按键提示，玩家按下互动按钮(默认为键盘 E 按键)与该实体进行互动。

触发onInteract事件同时还会触发实体默认的互动音效

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | _是_ | | function | 监听到互动时的处理函数 |


> 定义于 [#L9898](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9898)


::: details 点击查看示例代码

```javascript
/* 在场景中搜索名称为 NPC 的模型，允许和它进行互动 */
const npc = world.querySelector('#NPC');
npc.enableInteract = true;   // 开启实体互动功能
npc.interactHint = 'NPC';    // 进入互动范围时提示的文字
npc.interactRadius = 32;     // 互动范围大小

// 场景中所有可以互动的实体，互动时都会触发此事件
world.onInteract( ({entity, targetEntity}) => {
  targetEntity.say('你好! ' + entity.player.name);
});
```
:::

---


#### <font id="API" /><font id="Event">事件</font> onClick(<font id="Type">handler:(event:[GameInputEvent](./input#gameinputevent))=>void</font>) <font id="Type">: [GameEventHandlerToken](https://www.yuque.com/box3lab/api/gll7mhwasgn9hoq0)</font>
当玩家用鼠标点击实体时触发

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | _是_ | | function | 监听到鼠标点击时的处理函数 |

> 定义于 [#L9838](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9838)


::: details 点击查看示例代码
```javascript
// 被点击到的实体y方向速度增加
world.onClick(({ entity }) => {
  console.log('clicked');
  entity.velocity.y += 1;
})
```
:::
---


#### <font id="API" /><font id="Event">事件</font> onPress(<font id="Type">handler:(event:[GameInputEvent](./input#gameinputevent))=>void</font>) <font id="Type">: [GameEventHandlerToken](https://www.yuque.com/box3lab/api/gll7mhwasgn9hoq0)</font>
当玩家按下按钮时触发

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | _是_ | | function | 监听到鼠标按下时的处理函数 |

> 定义于 [#L9844](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9844)

::: details 点击查看示例代码
```javascript
/* 按下左键时，在控制台输入记录 */
world.onPress(({ button, entity }) => {
  if(button === 'action0'){
    console.log(` ${entity.player.name} 按下了左键`);
  }
})
```
---
```javascript
/* 按下左键时，弹出一个简单对话框 */
world.onPress(({ button, entity }) => {
  if(button != 'action0' || !entity.isPlayer || entity.player.dead) return;
  entity.player.dialog({
    type: 'text',
    content: `你好，${entity.player.name}，很高兴认识你。`,
  })
})
```
---
```javascript
/* 点击左键，将鼠标指针位置的方块替换为石头。点击右键，销毁方块。 */
world.onPress(({ button, raycast }) => {
  const pos = raycast.voxelIndex  // 射线击中的方块网格坐标
  if(button === 'action0'){       // 鼠标左键
    voxels.setVoxel(pos.x,pos.y,pos.z,'stone')  // 将方块替换为石头
  }else if(button === 'action1'){ // 鼠标右键
    voxels.setVoxel(pos.x,pos.y,pos.z,'air')    // 将方块替换为空气
  }
})
```
:::
---


####  <font id="API" /><font id="Event">事件</font> onRelease(<font id="Type">handler:(event:[GameInputEvent](./input#gameinputevent))=>void</font>) <font id="Type">: [GameEventHandlerToken](https://www.yuque.com/box3lab/api/gll7mhwasgn9hoq0)</font>
当玩家松开按钮时触发

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | _是_ | | function | 监听到鼠标松开时的处理函数 |

> 定义于 [#L9850](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9850)

:::info
**💡提示**

提示：GameWorld 和 GamePlayer 都有触发点击/按下按钮的事件。他们的区别就是：

- **GameWorld** 会监听世界所有实体的事件
- **GamePlayer** 只监听玩家本身的事件
:::

::: details 点击查看示例代码
```javascript
world.onRelease(({ button, position }) => {
  console.log(`press: {button} {position}`)
})
```
:::


## 接口

#### <font id="API" />GameInteractEvent
当实体互动时触发的事件

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| entity | [GameEntity](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013) | 发起互动的实体 |
| targetEntity | [GameEntity](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013) | 收到互动请求的实体 |
| tick | number | 事件发生时间 |


---


#### <font id="API" />GameInputEvent
输入事件，在玩家按下或松开按钮时触发

事件发生的时刻，即为玩家按下/松开按钮的同一刻

| **参数** | **类型** | **说明** | **补充** |
| --- | --- | --- | --- |
| entity | [GameEntity](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013) | 被点击的实体 / 按下按钮的玩家 | **onClick()前，onPress()onRelease()后** |
| clicker | [GameEntity](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013) | 发起点击事件的玩家 | **onPress()onRelease()不可用** |
| button | [GameButtonType](./input#gamebuttontype) | 点击的按钮，ACTION0 = 左键，ACTION1 = 右键 | |
| distance | number | 玩家到被点击实体的距离 | **onPress()onRelease()不可用** |
| clickerPosition | [GameVector3](https://www.yuque.com/box3lab/api/sug8utrs043aep5v) | 点击鼠标的瞬间玩家所在位置 | **onPress()onRelease()不可用** |
| raycast | [GameRaycastResult](./querySelectorEntity#gameraycastresult) | 按下按钮瞬间，从玩家视角投射的射线检测结果 | |
| tick | number | 事件发生时间 | |
| position | number | 按下按钮瞬间，玩家的位置 | **onClick()不可用** |
| pressed | boolean | 是否按下了按钮。若为 true，则为按下了按钮。 | **onClick()不可用** |



## 枚举

#### <font id="API" />GameButtonType
玩家按下的按钮类型

| **属性** | **说明** |
| --- | --- |
| WALK | 步行按钮 |
| RUN | 奔跑按钮 |
| CROUCH | 下蹲按钮 |
| JUMP | 跳跃按钮 |
| DOUBLE_JUMP | 二段跳按钮 |
| FLY | 飞行按钮 |
| ACTION0 | 鼠标左键 / 虚拟按钮A |
| ACTION1 | 鼠标右键 / 虚拟按钮B |


