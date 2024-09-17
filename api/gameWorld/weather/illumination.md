
# 天气-光照

### 属性

#### <font id="API" />lightMode <font id="Type">: 'manual' | 'natural'</font>   {#lightMode}
> 默认值："natural"

作用于天空和环境光的照明类型。对应编辑器设置 [场景-日光-日光规律] 控件属性。

目前有提供2种光照模式，'manual'(自定义)或'natural'(动态)。

> 定义于 [#L9952](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9952)


---


#### <font id="API" />sunFrequency <font id="Type">: number</font>  {#sunFrequency}
> 默认值：0

太阳运动的频率，数值越大，昼夜交替越快。

昼夜时间计算公式: timeOfDay = (sunPhase + sunFrequency * tick) % 1

> 定义于 [#L9963](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9963)


---


#### <font id="API" />sunPhase <font id="Type">: number</font> {#sunPhase}
> 默认值：0

范围：0-1

太阳从升起至落下，在天空的初始位置。对应编辑器菜单 [场景-日光] 控件属性。
:::info 💡提示

关于太阳位置和世界时间的关系：

太阳位置 sunPhase = 0 世界时间为 06:00

太阳位置 sunPhase = 0.25 世界时间为 12:00

太阳位置 sunPhase = 0.5 世界时间为 18:00

太阳位置 sunPhase = 0.75 世界时间为第二天 00:00

太阳位置 sunPhase = 1 世界时间为第二天 06:00
:::

> 定义于 [#L9958](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9958)


---


#### <font id="API" />sunDirection :<font id="Type">:  [GameVector3   ](https://www.yuque.com/box3lab/api/sug8utrs043aep5v)</font> {#sunDirection}
> 默认值：GameVector3(0, -1, 0)

太阳光照明方向。仅在光照模式为manual自定义模式时生效。

> 定义于 [#L9973](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9973)


---


#### <font id="API" />sunLight : <font id="Type">:  [GameRGBColor    ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)</font> {#sunLight}
> 默认值：GameRGBColor(1000, 1000, 1000)

太阳光颜色亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L9978](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9978)


---


#### <font id="API" />skyLeftLight <font id="Type">: [GameRGBColor   ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz) </font>{#skyLeftLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在-X轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L9983](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9983)


---


#### <font id="API" />skyRightLight  <font id="Type">: [GameRGBColor   ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz) </font>{#skyRightLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在+X轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L9988](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9988)


---


#### <font id="API" />skyBottomLight <font id="Type">: [GameRGBColor    ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)</font>{#skyBottomLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在-Y轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L9993](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9993)


---


#### <font id="API" />skyTopLight <font id="Type"> ：[GameRGBColor   ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz) </font>{#skyTopLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在+X轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L9998](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9998)

---


#### <font id="API" />skyFrontLight : <font id="Type">:  [GameRGBColor    ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)</font>{#skyFrontLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在-Z轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L10003](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10003)


---


#### <font id="API" />skyBackLight <font id="Type">: [GameRGBColor   ](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)</font> {#skyBackLight}
> 默认值：GameRGBColor(0, 0, 0)

环境光在+Z轴方向的亮度。仅在光照模式为manual自定义模式时生效。

颜色值大于0时，颜色越亮。

> 定义于 [#L10008](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10008)

