<script setup>
import '/style.css'
</script>
# 外观
## 属性

#### <font id="API" />mesh<font id="Type">: string</font>{#mesh} 

实体形状数据(mesh)的hash。如果设为空字符串/''，则实体无mesh。 除非实体为玩家，否则设定实体

只有提前在场景中放置模型，才能获得模型的Mesh属性。

模型被放置后，会自动保存在文件列表中。模型文件对应的 **'mesh/*.vb'** 名称便是 mesh属性。

> 定义于 [#L10783](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10783)

::: details 点击查看示例代码
```javascript
/* 玩家进入游戏时，变成一颗星星。5秒后恢复。 */
world.onPlayerJoin(async({ entity }) => {
  const originPlayerMesh = entity.mesh; // 需要先在场景摆放一个名字为 星星 的模型
  entity.mesh = world.querySelector('#星星').mesh
  entity.meshScale = new GameVector3(1/24, 1/24, 1/24);
  entity.meshOrientation = new GameQuaternion(0, 1, 0, 0)
  entity.player.invisible = true; await sleep(5000)
  entity.mesh = originPlayerMesh
  entity.player.invisible = false;

});
```
:::
---


#### <font id="API" />position<font id="Type">: [GameVector3](/GameVector3/)</font>{#position} 

实体的位置。

> 定义于 [#L10718](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10718)

::: details 点击查看示例代码
```javascript
//随机摆放所有东西的位置
world.querySelectorAll('*').forEach((e) => {
  e.position.set(new GameVector3(
    Math.random()*10,
    10+Math.random()*10,
    Math.random()*10);
}));
```
:::
---


#### <font id="API" />meshOrientation<font id="Type">: [GameQuaternion](/GameQuaternion/)</font>{#meshOrientation} 

实体的旋转角度。

> 定义于 [#L10796](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10796)

---


#### <font id="API" />meshScale<font id="Type">: [GameVector3](/GameVector3/)</font>{#meshScale} 

实体的缩放比例。

> 定义于 [#L10792](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10792)

---


#### <font id="API" />meshColor<font id="Type">: [GameRGBAColor](/GameRGBAColor/)</font>{#meshColor} 

实体的颜色。

> 定义于 [#L10804](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10804)

---


#### <font id="API" />meshInvisible<font id="Type">: boolean</font>{#meshInvisible} 
> 默认值：false

可控制实体隐形，当值设为true时，则实体隐形。

> 定义于 [#L10788](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10788)

---


#### <font id="API" />meshEmissive<font id="Type">: number </font>{#meshEmissive} 
> 默认值：0

实体的发光度。

> 定义于 [#L10812](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10812)

---


#### <font id="API" />meshMetalness<font id="Type">: number</font>{#meshMetalness} 
> 默认值：0

实体的金属感。

> 定义于 [#L10808](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10808)

---


#### <font id="API" />meshShininess<font id="Type">: number</font>{#meshShininess} 
> 默认值：0

范围：0-1

实体的反光度，设为1则为非常光滑。

> 定义于 [#L10816](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10816)

---


#### <font id="API" />meshOffset<font id="Type">: [GameVector3](/GameVector3/)</font>{#meshOffset} 
> 默认值：GameVector3(0, 0, 0)

实体的位移。

> 定义于 [#L10800](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10800)

---


#### <font id="API" />showEntityName<font id="Type">: boolean</font>{#showEntityName} 
> 默认值：false

如果为真，则展示实体的默认名称。

如果通过customName自定义了需要展示的名称，则展示customName。

> 定义于 [#L10952](https://github.com/box3lab/arena_dts/blob/main/GameAPI_2024_9_27.d.ts#L10952)

---


#### <font id="API" />customName<font id="Type">: string</font>{#customName} 
> 默认值：''

允许自定义需要展示的名称，默认为空。

> 定义于 [#L10957](https://github.com/box3lab/arena_dts/blob/main/GameAPI_2024_9_27.d.ts#L10957)

---


#### <font id="API" />nameRadius<font id="Type">: number</font>{#nameRadius} 
> 默认值：16

名称展示范围，数值越小，则需要靠近实体才会出现名称。

> 定义于 [#L10962](https://github.com/box3lab/arena_dts/blob/main/GameAPI_2024_9_27.d.ts#L10962)

---


#### <font id="API" />nameColor<font id="Type">: [GameVector3](/GameVector3/)</font>{#nameColor} 
> 默认值：GameVector3(1, 1, 1)

进入实体名称展示范围时，实体名称的颜色。

> 定义于 [#L10967](https://github.com/box3lab/arena_dts/blob/main/GameAPI_2024_9_27.d.ts#L10967)

::: details 点击查看示例代码
展示实体名称之前，在场景中必须先有一个实体。

在模型列表中，挑选一个你喜欢的模型，将它放置在场景中，并记住模型的名字。
```javascript
// 先在场景中放置一个名称为 NPC 的实体。
const npc = world.querySelector('#NPC');
npc.showEntityName = true; // 允许展示实体名称
npc.nameRadius = 16;   // 实体名称的展示范围
npc.nameColor = new GameRGBColor(1,0,1);  // 互动提示的文字颜色
// 此时没有通过 customName 自定义展示的名称，customName 为空字符串
// 因此展示的实体名称为实体的默认名称 —— “NPC”

// 如果通过 customName 指定自定义的名称， 则会展示 customName
npc.customName = "Miss Miao"; // 显示自定义的名称
```
:::

## 方法

#### <font id="API" />lookAt(<font id="Type">targetPosition:[GameVector3](/GameVector3/),meshFacing?:"X" | "Y" | "Z",up?:[GameVector3](/GameVector3/)</font>)<font id="Type">: void</font>{#lookAt} 

将实体旋转至面向指定位置的方向。

通过此方法进行的旋转会瞬时发生，仅影响实体的朝向，不会影响实体的运动状态。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| targetPosition | 是 | | GameVector3 | 世界坐标，希望让实体朝向的位置 |
| meshFacing | | Z | "X" &#124; "Y" &#124; "Z" | 定义模型在未旋转状态下的参考方向，处理模型设计时未朝向Z轴时的情况：  - 当取X、Z时，定义模型的正方向分别为X、Z轴正方向，上方向为 Y 轴正方向  - 当取Y时，定义模型的正方向为Y轴正方向，上方向为Z轴正方向  - 默认值为Z，即模型设计时朝向Z轴正方向|
| up | | | GameVector3 | 上向量，默认取 Y 轴正方向 |


> 定义于 [#L10704](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10704)