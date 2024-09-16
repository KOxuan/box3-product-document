<script setup>
import '/style.css'
</script>
# 天气-雪

### 属性

#### <font id="API" />snowColor <font id="Type">: [GameRGBAColor](https://www.yuque.com/box3lab/api/hlidmzg26mskni2e) </font> 
> 默认值：GameRGBAColor(1, 1, 1, 1)

雪花颜色。

> 定义于 [#L10062](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10062)
---


#### <font id="API" />snowTexture <font id="Type">: string </font>    
> 默认值：无

雪花纹理。此处填写文件管理器中的纹理资源名称。如 'snow/heart.part'

> 定义于 [#L10066](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10066)
---


#### <font id="API" />snowDensity <font id="Type">: string </font>   
> 默认值：0

雪的密度。密度越大，雪花越多。

> 定义于 [#L10054](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10054)
---


#### <font id="API" />snowFallSpeed <font id="Type">: string </font>   
> 默认值：1

雪花下落速度。如果小于0，则反向运动。

> 定义于 [#L10054](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10054)
---


#### <font id="API" />snowSpinSpeed <font id="Type">: [GameVector3   ](https://www.yuque.com/box3lab/api/sug8utrs043aep5v) </font>
> 默认值：GameVector3(0, 0, 0)

雪花自旋速度。

> 定义于 [#L10058](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10058)
---


#### <font id="API" />snowSizeLo <font id="Type">: number </font>   
> 默认值：0

雪花的最小直径。

> 定义于 [#L10046](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10046)
---


#### <font id="API" />snowSizeHi <font id="Type">: number </font> 
> 默认值：1

雪花的最大直径。

> 定义于 [#L10050](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10050)