<script setup>
import '/style.css'
</script>
# 粒子效果
## 属性

#### <font id="API" />particleRate<font id="Type">: number</font>  {#particleRate}
> 默认值：0

实体平均每秒产生粒子的数量。如果希望实体停止释放粒子，可以将该属性改为0


> 定义于 [#L10847](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10847)


::: details 点击查看示例代码
```javascript
// 玩家身上每秒产生5个粒子
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 5,
  });
});
```
:::


---


#### <font id="API" />particleRateSpread<font id="Type">: number</font>  {#particleRateSpread}
> 默认值：0

如果设定了该属性的值，实体每一秒产生粒子的数量将不再是个固定值，而是从区间 [particleRate, particleRate + particleRateSpread) 里随机选取的一个整数。

例如，假设 particleRate=0，particleRateSpread=3，每秒产生的粒子数量是[0, 0+3) ，即[0, 3)区间里的一个随机整数，也就是可能为0，1，或2

> 定义于 [#L10852](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10852)

::: details 点击查看示例代码
```javascript
// 玩家身上每秒产生5～14个粒子
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 5,
    particleRateSpread: 10,
  });
});
```
:::
---


#### <font id="API" />particleLimit<font id="Type">: number</font>  {#particleLimit}
> 默认值：100

实体可产生的粒子总数的上限

> 定义于 [#L10857](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10857)

---


#### <font id="API" />particleLifetime<font id="Type">: number</font>  {#particleLifetime}
> 默认值：10

粒子的存活时间，以秒为单位

> 定义于 [#L10878](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10878)

::: details 点击查看示例代码
```javascript
// 粒子存活1秒
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleLifetime: 1,
    particleVelocity: new GameVector3(0, 0.5, 0),
  });
});
```
:::
---


#### <font id="API" />particleLifetimeSpread<font id="Type">: number</font>  {#particleLifetimeSpread}
> 默认值：0

如果设定了该属性的值，粒子的存活时间将不再是固定值，而是区间 [particleLifetime, particleLifetime + particleLifetimeSpread) 里的一个随机数，可能为小数

> 定义于 [#L10883](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10883)

::: details 点击查看示例代码
```javascript
// 粒子存活1～6秒
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleLifetime: 1,
    particleLifetimeSpread: 5,
    particleVelocity: new GameVector3(0, 0.5, 0),
  });
});
```
:::
---


#### <font id="API" />particleSize<font id="Type">: number[]</font>{#particleSize}
> 默认值：[1, 1, 1, 1, 1]

该属性的值可以是一个长度为0至5的数组。每个粒子的存活时间被平均分为五个阶段，对于长度为5的数组，数组里的每个值分别指定粒子在各个阶段的大小，其中，第一个值为粒子刚产生是的大小，第五个值为粒子消失时的大小。举几个例子，_假设粒子的存活时间被设定为5秒_，如果 particleSize 的值为

- [25, 25, 25, 25, 25]，在粒子存活的5秒内大小不会发生变化，产生时是25，消失时也是25
- [0, 25, 0, 25, 15]，粒子产生时大小为0，然后逐渐变为25，之后又逐渐变为0，再逐渐变为25，最后变为15，可以让该实体所产生的粒子具有逐渐放大缩小的效果
- [15， 25], 粒子产生时大小为15，1秒后逐渐变大至25，之后又逐渐缩小至最小值

> 定义于 [#L10868](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10868)

::: details 点击查看示例代码
```javascript
// 粒子放大缩小最后膨胀消失
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleSize: [2, 4, 8, 4, 10],
    particleLifetime: 1,
    particleVelocity: new GameVector3(0, 0.5, 0),
  });
});
```
:::
---


#### <font id="API" />particleSizeSpread<font id="Type">: number</font>  {#particleSizeSpread}
> 默认值：0

- 如果设定了该属性，但没设定 particleSize 的值，每产生一个粒子，会从区间[0， particleSizeSpread)里选取的一个随机数作为它的大小
- 如果同时设定了 particleSize 和 particleSizeSpread 两个属性，每产生一个粒子，从区间[0， particleSizeSpread)里选取一个随机数x，这个粒子第i个阶段的大小将为 particleSize[i]+x

> 定义于 [#L10873](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10873)

---


#### <font id="API" />particleColor<font id="Type">: [GameVector3](/GameVector3/)[]</font>{#particleColor}
> 默认值：[ new GameRGBColor(1,1,1), new GameRGBColor(1,1,1), new GameRGBColor(1,1,1), new GameRGBColor(1,1,1), new GameRGBColor(1,1,1) ]

类似 particleSize，该属性的值可以是一个长度为0至5的数组，数组里的每个值分别指定了粒子在各个阶段的颜色。类似地，可以通过该属性使粒子具有颜色渐变的效果


> 定义于 [#L10863](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10863)

::: details 点击查看示例代码
```javascript
// 玩家身上着火了
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleSize: [2, 4, 8, 4, 10],
    particleColor: [
      new GameRGBColor(10, 9, 2),
      new GameRGBColor(5, 0.25, 0.1),
      new GameRGBColor(3, 0.05, 0.05),
      new GameRGBColor(0, 0, 0),
      new GameRGBColor(0, 0, 0),
    ],
    particleLifetime: 1,
    particleVelocitySpread: new GameVector3(2, 2, 2),
  });
});
```
:::
---


#### <font id="API" />particleVelocity<font id="Type">: [GameVector3](/GameVector3/)</font>{#particleVelocity}
> 默认值：GameVector3(0, 0, 0)

该实体产生的所有粒子的初始速度，如果将该属性设为new GameVector3(x, y, z)，x，y，z三个值分别指定粒子在对应三个方向上的速率

> 定义于 [#L10888](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10888)

::: details 点击查看示例代码
```javascript
// 从玩家的位置向一个点发射粒子
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleSize: [2, 2, 2, 2, 10],
    particleLifetime: 2,
    particleVelocity: new GameVector3(0, 0, 50),
  });
});
```
:::
---


#### <font id="API" />particleVelocitySpread<font id="Type">: [GameVector3](/GameVector3/)</font>{#particleVelocitySpread}
> 默认值：GameVector3(0, 0, 0)

增加该实体产生的所有粒子初始速度的不确定性，如果将该属性设为new GameVector3(sx, sy, sz)，每产生一个粒子，会基于这三个值分别产生一个随机值加到 x/y/z 三个方向所对应的速率上。通过设定这个属性，可以使粒子具有向随机方向运动的效果

> 定义于 [#L10893](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10893)

::: details 点击查看示例代码
```javascript
// 从玩家的位置扇形发射粒子
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 100,
    particleSize: [2, 2, 2, 2, 10],
    particleLifetime: 2,
    particleVelocity: new GameVector3(0, 0, 50),
    particleVelocitySpread: new GameVector3(30, 2, 2),
  });
});
```
:::
---


#### <font id="API" />particleDamping<font id="Type">: number</font>{#particleDamping}
> 默认值：0

- 如果该属性的值为正数，会短暂减少该实体所产生粒子的初始速度，数值越大，减少初始速度的效果持续得越久
- 如果为负值，会短暂增加粒子的初始速度，数值越小，增加初始速度的效果越明显


> 定义于 [#L10901](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10901)

::: details 点击查看示例代码
```javascript
// 蓄力发射
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 100,
    particleSize: [2, 2, 2, 2, 10],
    particleLifetime: 2,
    particleVelocity: new GameVector3(0, 0, 50),
    particleVelocitySpread: new GameVector3(30, 2, 2),
    particleDamping: 3,
  });
});
```
:::
---


#### <font id="API" />particleAcceleration<font id="Type">: [GameVector3](/GameVector3/)</font>{#particleAcceleration}
> 默认值：GameVector3(0, 0, 0)

该实体所产生粒子的加速度

> 定义于 [#L10907](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10907)

---


#### <font id="API" />particleNoise<font id="Type">: number</font>{#particleNoise}
> 默认值：0

指定粒子相对于之前运动方向的最大偏离值，数值越大，各个粒子的运动相对原有方向的偏离越明显


> 定义于 [#L10912](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10912)

---


#### <font id="API" />particleNoiseFrequency<font id="Type">: number</font>{#particleNoiseFrequency}
> 默认值：1

指定粒子改变运动方向的频率，数值越大，各个粒子的运动方向越没有规律


> 定义于 [#L10917](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10917)

::: details 点击查看示例代码
```javascript
// 风飘雪
world.onPlayerJoin(({ entity }) => {
  Object.assign(entity, {
    particleRate: 30,
    particleSize: [2, 2, 2, 2, 10],
    particleLifetime: 2,
    particleVelocity: new GameVector3(0, 0, 50),
    particleNoise: 20,
    particleNoiseFrequency: 10,
  });
});
```
:::
