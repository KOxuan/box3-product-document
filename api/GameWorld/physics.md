<script setup>
import '/style.css'
</script>
# 世界物理
## 属性

#### <font id="API" />useOBB<font id="Type">: boolean</font>  {#useOBB}
> 默认值：false

世界是否切换为OBB包围盒？反之为AABB包围盒。

![](/obbaabb.jpeg)
:::warning
⚠️启用OBB模式后，系统的性能表现会受到一定程度的影响。

由于OBB能够更紧密地贴合物体形状，它在碰撞检测中可能更为精确，但同时也会增加一定的计算负担，导致性能上的细微下降。

因此，决定是否启用OBB模式时，需要综合考虑其对性能的影响以及应用场景的具体需求。
:::

> 定义于 [#L10109](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10109)


---


#### <font id="API" />gravity<font id="Type">: number</font>      {#gravity}
> 默认值：-0.1

世界重力。对应编辑器菜单 [场景-物理-地心引力] 控件属性。

数值越小，行动越笨重。受重力影响最明显的属性是跳跃高度及下落速度。如果重力数值大于0，可以实现反重力。

> 定义于 [#L10099](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10099)

::: details 点击查看示例代码
```javascript
/* Example：点击鼠标左键，切换重力方向。*/

// 使用变量来记录重力反转的状态。
let toggleGravity = false

// 监听鼠标点击事件
world.onPress(({ button }) => {
  // 点击鼠标左键
  if (button === GameButtonType.ACTION0) {   // 切换开关状态
    // true变成false, false变成true.
    toggleGravity = !toggleGravity   // 修改重力数值
    // 如果true, 反向重力。如果false，恢复默认重力。
    world.gravity = toggleGravity ? -0.5 * world.gravity : -0.1   // 向玩家提供反馈
    world.say(`重力状态: ${toggleGravity ? '上升' : '落下'}`)
  }
});
```
:::
---


#### <font id="API" />airFriction<font id="Type">: number</font>     {#airFriction}
> 默认值：0.001

范围：0-1

空气阻力。对应编辑器菜单 [场景-速度阻尼] 控件属性。

数值越大，行走加速度越小。可以用来模拟大风的环境。

> 定义于 [#L10104](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10104)

### **方法**

 
#### <font id="API" />addCollisionFilter(<font id="Type">aSelector:[GameSelectorString](./querySelectorEntity#GameSelectorString),bSelector:[GameSelectorString](./querySelectorEntity#GameSelectorString)</font>)<font id="Type">:  void</font>{#addCollisionFilter}
添加碰撞过滤器，关闭两个实体组之间的碰撞。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| aSelector | _是_ | | GameSelectorString | 用于定义第一组实体的选择器 |
| bSelector | _是_ | | GameSelectorString | 用于定义第二组实体的选择器 |

> 定义于 [#L10193](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10193)

::: details 点击查看示例代码
```javascript
// 关闭玩家和玩家之间的碰撞
world.addCollisionFilter('player','player');

// 关闭玩家和带'groupA'标签的实体之间的碰撞 
world.addCollisionFilter('.groupA','player');

// 关闭玩家和名为'entity1'的实体之间的碰撞
world.addCollisionFilter('#entity1','player');

// 关闭全部实体之间的碰撞
world.addCollisionFilter('*','*');
```
:::
---


#### <font id="API" />removeCollisionFilter(<font id="Type">aSelector:[GameSelectorString](./querySelectorEntity#GameSelectorString),bSelector:[GameSelectorString](./querySelectorEntity#GameSelectorString)</font>)<font id="Type">:  void</font>{#removeCollisionFilter}
移除碰撞过滤器，不再关闭两个实体组aSelector、bSelector之间的碰撞。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| aSelector | _是_ | | GameSelectorString | 用于定义第一组实体的选择器 |
| bSelector | _是_ | | GameSelectorString | 用于定义第二组实体的选择器 |

> 定义于 [#L10201](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10201)

::: details 点击查看示例代码
```javascript
// 移除玩家和玩家之间的碰撞过滤器 remove collision filter for player & player 
world.removeCollisionFilter('player','player');

// 移除玩家和带'groupA'标签的实体之间的碰撞过滤器 remove collision filter for player & entity with tag named groupA 
world.removeCollisionFilter('.groupA','player');

// 移除玩家和名为'entity1'的实体之间的碰撞过滤器 remove collision filter for player & specific entity with id named entity1 
world.removeCollisionFilter('#entity1','player');
```
:::
---


#### <font id="API" />clearCollisionFilters()<font id="Type">:  void</font>{#clearCollisionFilters}
清除全部碰撞过滤器。


> 定义于 [#L10207](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10207)

---


#### <font id="API" />collisionFilters()<font id="Type">: string[][]</font>{#collisionFilters}
返回当前有效的全部碰撞过滤器。


**返回值**

| **类型** | **说明** |
| --- | --- |
| string[][] | 当前有效的全部碰撞过滤器 |


> 定义于 [#L10214](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10214)

::: details 点击查看示例代码
```javascript
// 打印全部碰撞过滤器 print all collision filters
world.collisionFilters().forEach(([ a, b ]) => console.log(a, b));
```
:::
---


#### <font id="API" />testSelector()<font id="Type">: boolean</font>{#testSelector}
测试实体是否符合某个选择器的条件。 

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| selector | _是_ | | GameSelectorString| 要测试的选择器 |
| entity | _是_ | | GameEntity | 要测试的实体 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| boolean | true: 实体符合选择器的条件; false: 实体不符合选择器的条件 |


> 定义于 [#L10185](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10185)

::: details 点击查看示例代码
```javascript
const e1 = world.createEntity({
  mesh:'mesh/花.vb',
  position:new GameVector3(64, 9, 64),
  meshScale:new GameVector3(0.1, 0.1, 0.1),
  collides:true,
  fixed:true,
});
e1.addTag('groupA');

// can use to test entity selectable with a tag
if (world.testSelector('.groupA', e1)) { 
  // 在这里插入某句执行代码
}
```
---
```javascript
const e1 = world.createEntity({
  id: '花朵',
  mesh:'mesh/花.vb',
  position:new GameVector3(64, 9, 64),
  meshScale:new GameVector3(0.1, 0.1, 0.1),
  collides:true,
  fixed:true,
});
e1.addTag('groupA');

// can use to test whether entity selectable with entity id 
if (world.testSelector('#花朵', e1)) {  
  // do something 
}
```
:::

