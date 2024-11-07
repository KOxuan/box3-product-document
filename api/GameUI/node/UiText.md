<script setup>
import '/style.css'
</script>
# UI文本

> UiText 是继承自 [UiRenderable](/GameUI/UiRenderable) 类

![](/QQ20240923-102346.png)

## 属性

#### <font id="API" />textContent<font id="Type">: string</font>{#textContent}  
> 默认值：'Text'

文本元素的内容，支持转义字符与换行，会对自身元素的自适应大小产生影响。

换行后，所有受到元素大小影响的属性，均需以新的大小进行计算，包括且不限于：

- textXAlignment
- textYAlignment

> 定义于 [#L152](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L152)

---


#### <font id="API" />textFontSize<font id="Type">: number</font>{#textFontSize}  
> 默认值：14

节点显示的文本的字体大小。

> 定义于 [#L153](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L153)

---


#### <font id="API" /><font id="ReadOnly">只读</font>textColor<font id="Type">: [Vec3](/GameUI/maths/Vec3)</font>{#textColor}  
> 默认值：{}

节点显示的文本的颜色。

> 定义于 [#L154](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L154)

---


#### <font id="API" />textXAlignment<font id="Type">: 'Center' | 'Left' | 'Right'</font>{#textXAlignment}  
> 默认值：'Center'

节点显示的文本的水平对齐方式。

> 定义于 [#L155](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L155)

---


#### <font id="API" />textYAlignment<font id="Type">: 'Center' | 'Top' | 'Bottom'</font>{#textYAlignment}  
> 默认值：'Center'

节点显示的文本的垂直对齐方式。

> 定义于 [#L156](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L156)

---


#### <font id="API" />autoWordWrap<font id="Type">: boolean</font>{#autoWordWrap}  
> 默认值：false

是否开启自动换行。

> 定义于 [#L157](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L157)


---


#### <font id="API" />textLineHeight<font id="Type">: number</font>{#textLineHeight}  
> 默认值：1.2

文本的行高。

> 定义于 [#L158](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L158)

---

#### <font id="API" /><font id="ReadOnly">只读</font>textStrokeColor<font id="Type">: [Vec3](/GameUI/maths/Vec3)</font>{#textStrokeColor}  
> 默认值：{}

文本的描边颜色。

> 定义于 [#L365](https://github.com/box3lab/arena_dts/blob/main/ClientAPI_2024_11_1.d.ts#L365)

---

#### <font id="API" />textStrokeOpacity<font id="Type">: number</font>{#textStrokeOpacity}  
> 默认值：1

文本描边的不透明度。

> 定义于 [#L369](https://github.com/box3lab/arena_dts/blob/main/ClientAPI_2024_11_1.d.ts#L369)

---

#### <font id="API" />textStrokeThickness<font id="Type">: number</font>{#textStrokeThickness}  
> 默认值：0

文本描边的厚度。

> 定义于 [#L373](https://github.com/box3lab/arena_dts/blob/main/ClientAPI_2024_11_1.d.ts#L373)

---

#### <font id="API" />textFontFamily<font id="Type">: [UITextFontFamily](./UiText#UITextFontFamily)</font>{#textFontFamily}  
> 默认值：UITextFontFamily.Default

文本使用的字体。

> 定义于 [#L377](https://github.com/box3lab/arena_dts/blob/main/ClientAPI_2024_11_1.d.ts#L377)

## 静态方法

#### <font id="API" />create()<font id="Type">: UiText</font>{#create}  

创建并返回一个新的 Ui文本，初始`parent`为空。

**返回值**

| **类型** | **说明** |
| --- | --- |
| UiText | 新建 UiText 元素实例 |

> 定义于 [#L159](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L159)


## 枚举


#### <font id="API" />UITextFontFamily{#UITextFontFamily}
字体样式

| **属性** | **说明** |
| --- | --- |
| Default | 默认字体  |
| BoldRound | 粗圆体 |
| CodeNewRomanBold |  Code New Roman Bold  |


> 定义于 [#L481](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L481)
