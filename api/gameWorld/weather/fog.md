<script setup>
import '/style.css'
</script>
# 天气-雾

## 属性

#### <font id="API" />maxFog  <font id="Type">: number</font>    
> 默认值：1

最大雾量。

> 定义于 [#L10038](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10038)

---


#### <font id="API" />fogColor <font id="Type">: [GameRGBColor](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)</font> 
> 默认值：GameRGBColor(1, 1, 1)

雾的颜色。

> 定义于 [#L10013](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10013)
---


#### <font id="API" />fogStartDistance  <font id="Type">: number</font>   
> 默认值：0

雾起始距离。

> 定义于 [#L10018](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10018)

---


#### <font id="API" />fogHeightOffset  <font id="Type">: number</font>  
> 默认值：0

雾高度。

> 定义于 [#L10033](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10033)

---


#### <font id="API" />fogUniformDensity  <font id="Type">: number</font> 
> 默认值：0

均匀雾量，若值大于0，越难看到天空。

> 定义于 [#L10033](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10033)

---


#### <font id="API" />fogHeightFalloff <font id="Type">: number </font>
> 默认值：0.8

高度衰减系数。数值在0-1之间。值越小，雾越浓。

> 定义于 [#L10028](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10028)
