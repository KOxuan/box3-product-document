<script setup>
import '/style.css'
</script>
# 天气-雪

### 属性

#### <font id="API" />snowColor <font id="Type">: [GameRGBAColor](/GameRGBAColor/) </font> {#snowColor}
> 默认值：GameRGBAColor(1, 1, 1, 1)

雪花颜色。


---


#### <font id="API" />snowTexture <font id="Type">: string </font>    {#snowTexture}
> 默认值：无

雪花纹理。此处填写文件管理器中的纹理资源名称。如 'snow/heart.part'


---


#### <font id="API" />snowDensity <font id="Type">: string </font>   {#snowDensity}
> 默认值：0

雪的密度。密度越大，雪花越多。


---


#### <font id="API" />snowFallSpeed <font id="Type">: string </font>   {#snowFallSpeed}
> 默认值：1

雪花下落速度。如果小于0，则反向运动。


---


#### <font id="API" />snowSpinSpeed <font id="Type">: [GameVector3](/GameVector3/) </font>{#snowSpinSpeed}
> 默认值：GameVector3(0, 0, 0)

雪花自旋速度。


---


#### <font id="API" />snowSizeLo <font id="Type">: number </font>   {#snowSizeLo}
> 默认值：0

雪花的最小直径。


---


#### <font id="API" />snowSizeHi <font id="Type">: number </font> {#snowSizeHi}
> 默认值：1

雪花的最大直径。

