<script setup>
import '/style.css'
</script>

# 地图区域

## 方法

#### <font id="API" />addZone(<font id="Type">config:Partial‹[GameZoneConfig](./mapZone#GameZoneConfig)›</font>)<font id="Type">: [GameZone](./mapZone#GameZone)</font> {#addZone}

创建一个区域，用于检测实体进入或离开某个区域。 也可以用来设置环境参数，如雾、雨、天、雪、风、重力等定义区域内的环境参数。

**输入参数**

| **参数** | **必填** | **默认值** | **类型**                | **说明**                 |
| -------- | -------- | ---------- | ----------------------- | ------------------------ |
| config   | _是_     |            | Partial‹GameZoneConfig› | 指定区域的一组初始参数值 |

**返回值**

| **类型** | **说明** |
| -------- | -------- |
| GameZone | 区域对象 |

::: details 点击查看示例代码

```javascript
// 添加检测玩家进入或离开 x:48-64, y:8-20, z: 50-72 的区域
const area = world.addZone({
  selector: "player",
  bounds: new GameBounds3(
    new GameVector3(48, 8, 50),
    new GameVector3(64, 20, 72)
  ),
});

// 有玩家进入区域
area.onEnter(({ entity }) => {});

// 有玩家离开区域
area.onLeave(({ entity }) => {});
```

:::

#### <font id="API" />removeZone(<font id="Type">trigger:[GameZone](./mapZone#GameZone)</font>)<font id="Type">: void</font> {#removeZone}

删除指定区域

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明**     |
| -------- | -------- | ---------- | -------- | ------------ |
| trigger  | _是_     |            | GameZone | 要删除的区域 |

::: details 点击查看示例代码

```javascript
// 添加检测玩家进入或离开 x:0-64, y:0-20, z: 0-64 的区域
const area = world.addZone({
  selector: "player",
  bounds: new GameBounds3(
    new GameVector3(48, 8, 48),
    new GameVector3(72, 20, 72)
  ),
});

// 删除区域'area'
world.removeZone(area);
```

:::

#### <font id="API" />zones()<font id="Type">: [GameZone](./mapZone#GameZone)[]</font>{#zones}

返回所有的区域列表

**返回值**

| **类型**   | **说明**   |
| ---------- | ---------- |
| GameZone[] | 所有的区域 |

::: details 点击查看示例代码

```javascript
// 删除世界中所有区域
const allZones = world.zones();
allZones.forEach((zone) => {
  world.removeZone(zone);
});
```

:::

## 接口

#### <font id="API" />GameZoneConfig{#GameZoneConfig}

用于区域的参数

| **参数**         | **类型**                                                       | **说明**                                                                                                     |
| ---------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| bounds           | [GameBounds3](/GameBounds3/)                                   | 区域的所指定的检测区域                                                                                       |
| selector         | [GameSelectorString](./querySelectorEntity#gameselectorstring) | 触发区域事件的实体搜索条件                                                                                   |
| force            | [GameVector3](/GameVector3/)                                   | 对实体施加的力的大小                                                                                         |
| massScale        | number                                                         | 控制实体的质量对力的影响程度。 0 = 像重力一样; 1 = 像风一样                                                  |
| fogColor         | [GameRGBColor](/GameRGBColor/)                                 | 雾的颜色                                                                                                     |
| fogDensity       | number                                                         | 雾均匀密度                                                                                                   |
| fogEnabled       | boolean                                                        | 雾是否开启                                                                                                   |
| fogHeightFalloff | number                                                         | 雾起始高度                                                                                                   |
| fogHeightOffset  | number                                                         | 雾衰减的速率                                                                                                 |
| fogMax           | number                                                         | 最大雾量                                                                                                     |
| fogStartDistance | number                                                         | 雾起始距离                                                                                                   |
| rainColor        | [GameRGBAColor](/GameRGBAColor/)                               | 雨的颜色                                                                                                     |
| rainDensity      | number                                                         | 雨的密度。密度越大，雨滴越多。                                                                               |
| rainDirection    | [GameVector3](/GameVector3/)                                   | 雨的方向                                                                                                     |
| rainEnabled      | boolean                                                        | 雨是否开启                                                                                                   |
| rainInterference | number                                                         | 雨的扰动幅度                                                                                                 |
| rainSizeHi       | number                                                         | 雨滴的最大直径                                                                                               |
| rainSizeLo       | number                                                         | 雨滴的最小直径                                                                                               |
| rainSpeed        | number                                                         | 雨的速度                                                                                                     |
| skyBackLight     | [GameRGBColor](/GameRGBColor/)                                 | 环境光在+Z 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyBottomLight   | [GameRGBColor](/GameRGBColor/)                                 | 环境光在-Y 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyEnabled       | boolean                                                        | 环境参数是否有效                                                                                             |
| skyFrontLight    | [GameRGBColor](/GameRGBColor/)                                 | 环境光在-Z 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyLeftLight     | [GameRGBColor](/GameRGBColor/)                                 | 环境光在-X 轴方向的亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。                 |
| skyLunarPhase    | number                                                         | 月亮的相位，数值在 0 和 1 之间。若大于 0.5 时，为上弦月。                                                    |
| skyMode          | "natural" &#124; "manual"                                      | 作用于天空和环境光的照明类型。目前有提供 2 种光照模式，'manual'(自定义)或'natural'(动态)。默认为 'natural'。 |
| skyRightLight    | [GameRGBColor](/GameRGBColor/)                                 | 环境光在+X 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skySunDirection  | [GameVector3](/GameVector3/)                                   | 太阳光照明方向。仅在光照模式为 manual 自定义模式时生效。                                                     |
| skySunFrequency  | number                                                         | 太阳运动的频率，数值越大，昼夜交替越快。                                                                     |
| skySunLight      | [GameRGBColor](/GameRGBColor/)                                 | 太阳光颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。                          |
| skySunPhase      | number                                                         | 太阳从升起至落下，在天空的位置。                                                                             |
| skyTopLight      | [GameRGBColor](/GameRGBColor/)                                 | 环境光在+Y 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| snowColor        | [GameRGBAColor](/GameRGBAColor/)                               | 雪花颜色                                                                                                     |
| snowDensity      | number                                                         | 雪的密度。密度越大，雪花越多。                                                                               |
| snowEnabled      | boolean                                                        | 雪是否开启                                                                                                   |
| snowFallSpeed    | number                                                         | 雪花下落速度。如果小于 0，则反向运动。                                                                       |
| snowSizeHi       | number                                                         | 雪花最大直径                                                                                                 |
| snowSizeLo       | number                                                         | 雪花最小直径                                                                                                 |
| snowSpinSpeed    | number                                                         | 雪花自旋速度                                                                                                 |
| snowTexture      | string                                                         | 雪花纹理                                                                                                     |

#### <font id="API" />GameZone{#GameZone}

用于区域的配置

| **参数**                            | **类型**                                                                                                                 | **说明**                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| entities                            | [GameEntity](/GameEntity/)                                                                                               | 列出在指定区域内的所有实体                                                                                   |
| remove                              | ()=>void                                                                                                                 | 删除该区域                                                                                                   |
| <font id="Event">事件</font>onEnter | (handler:(event:[GameTriggerEvent](./mapZone#GameTriggerEvent))=>void): [GameEventHandlerToken](/GameEventHandlerToken/) | 当玩家进入该区域时触发                                                                                       |
| <font id="Event">事件</font>onLeave | (handler:(event:[GameTriggerEvent](./mapZone#GameTriggerEvent))=>void): [GameEventHandlerToken](/GameEventHandlerToken/) | 当玩家离开该区域时触发                                                                                       |
| bounds                              | [GameBounds3](/GameBounds3/)                                                                                             | 区域的所指定的检测区域                                                                                       |
| selector                            | [GameSelectorString](./querySelectorEntity#gameselectorstring)                                                           | 触发区域事件的实体搜索条件                                                                                   |
| force                               | [GameVector3](/GameVector3/)                                                                                             | 对实体施加的力的大小                                                                                         |
| massScale                           | number                                                                                                                   | 控制实体的质量对力的影响程度。 0 = 像重力一样; 1 = 像风一样                                                  |
| fogColor                            | [GameRGBColor](/GameRGBColor/)                                                                                           | 雾的颜色                                                                                                     |
| fogDensity                          | number                                                                                                                   | 雾均匀密度                                                                                                   |
| fogEnabled                          | boolean                                                                                                                  | 雾是否开启                                                                                                   |
| fogHeightFalloff                    | number                                                                                                                   | 雾起始高度                                                                                                   |
| fogHeightOffset                     | number                                                                                                                   | 雾衰减的速率                                                                                                 |
| fogMax                              | number                                                                                                                   | 最大雾量                                                                                                     |
| fogStartDistance                    | number                                                                                                                   | 雾起始距离                                                                                                   |
| rainColor                           | [GameRGBAColor](/GameRGBAColor/)                                                                                         | 雨的颜色                                                                                                     |
| rainDensity                         | number                                                                                                                   | 雨的密度。密度越大，雨滴越多。                                                                               |
| rainDirection                       | [GameVector3](/GameVector3/)                                                                                             | 雨的方向                                                                                                     |
| rainEnabled                         | boolean                                                                                                                  | 雨是否开启                                                                                                   |
| rainInterference                    | number                                                                                                                   | 雨的扰动幅度                                                                                                 |
| rainSizeHi                          | number                                                                                                                   | 雨滴的最大直径                                                                                               |
| rainSizeLo                          | number                                                                                                                   | 雨滴的最小直径                                                                                               |
| rainSpeed                           | number                                                                                                                   | 雨的速度                                                                                                     |
| skyBackLight                        | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在+Z 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyBottomLight                      | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在-Y 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyEnabled                          | boolean                                                                                                                  | 环境参数是否有效                                                                                             |
| skyFrontLight                       | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在-Z 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skyLeftLight                        | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在-X 轴方向的亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。                 |
| skyLunarPhase                       | number                                                                                                                   | 月亮的相位，数值在 0 和 1 之间。若大于 0.5 时，为上弦月。                                                    |
| skyMode                             | "natural" &#124; "manual"                                                                                                | 作用于天空和环境光的照明类型。目前有提供 2 种光照模式，'manual'(自定义)或'natural'(动态)。默认为 'natural'。 |
| skyRightLight                       | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在+X 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| skySunDirection                     | [GameVector3](/GameVector3/)                                                                                             | 太阳光照明方向。仅在光照模式为 manual 自定义模式时生效。                                                     |
| skySunFrequency                     | number                                                                                                                   | 太阳运动的频率，数值越大，昼夜交替越快。                                                                     |
| skySunLight                         | [GameRGBColor](/GameRGBColor/)                                                                                           | 太阳光颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。                          |
| skySunPhase                         | number                                                                                                                   | 太阳从升起至落下，在天空的位置。                                                                             |
| skyTopLight                         | [GameRGBColor](/GameRGBColor/)                                                                                           | 环境光在+Y 轴方向的颜色亮度。仅在光照模式为 manual 自定义模式时生效。颜色值大于 0 时，颜色越亮。             |
| snowColor                           | [GameRGBAColor](/GameRGBAColor/)                                                                                         | 雪花颜色                                                                                                     |
| snowDensity                         | number                                                                                                                   | 雪的密度。密度越大，雪花越多。                                                                               |
| snowEnabled                         | boolean                                                                                                                  | 雪是否开启                                                                                                   |
| snowFallSpeed                       | number                                                                                                                   | 雪花下落速度。如果小于 0，则反向运动。                                                                       |
| snowSizeHi                          | number                                                                                                                   | 雪花最大直径                                                                                                 |
| snowSizeLo                          | number                                                                                                                   | 雪花最小直径                                                                                                 |
| snowSpinSpeed                       | number                                                                                                                   | 雪花自旋速度                                                                                                 |
| snowTexture                         | string                                                                                                                   | 雪花纹理                                                                                                     |

#### <font id="API" />GameTriggerEvent{#GameTriggerEvent}

当实体/玩家触发区域的事件

| **参数** | **类型**                   | **说明**       |
| -------- | -------------------------- | -------------- |
| entity   | [GameEntity](/GameEntity/) | 触发事件的实体 |
| tick     | number                     | 触发事件的时间 |
