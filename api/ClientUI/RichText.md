# UIText 富文本

富文本（RichText）用来显示一段带有不同样式效果的文字，你可以通过一些简单的`XML`标签来设置文字的样式。并且不同的`XML`标签是可以支持相互嵌套的。

## 功能开关
此功能默认关闭，开启后则文本内容可以支持富文本。

![](/QQ20241108-150717.png)

或者使用[richText](./node/UiText#richText)开启对富文本的支持。
## 富文本的支持
以下是目前支持的富文本标签：


**font 字体**

| **属性** | **类型** |**说明** |
| --- | --- | --- |
| size | string | 字体大小 | 
| color | string | 十六进制颜色值，参考：[颜色取色](https://www.rapidtables.org/zh-CN/web/color/RGB_Color.html#color-picker) | 
    
**stroke 描边**
      
| **属性** | **类型** |**说明** |
| --- | --- | --- |
| thickness | string | 描边宽度 | 
| opacity | string(0-1) | 描边透明度 | 
| color | string | 十六进制颜色值，参考：[颜色取色](https://www.rapidtables.org/zh-CN/web/color/RGB_Color.html#color-picker) | 
    


## 使用示例

```xml
你好，我是<font size="25" color="#F55505">吉吉喵</font>。我是神岛可爱的<stroke thickness="10" opacity="0.6">吉祥物</stroke>。

你好，我是<font size="25" color="#F55505"><font size="48" color="#5520D0">文档</font>喵</font>。我也是<font size="12" color="#2CDC67">神岛</font>可爱的<stroke thickness="10" opacity="0.6">吉祥物</stroke>。
```

## 关于富文本的说明

**生效规则**
      
- 富文本标签只影响被标记部分文本的样式，未被标记的文本则继承元素文本的初始配置。
- 在编辑模式下，文本输入过程不会解析富文本，但是会在确认文本输入后，尝试进行解析展示，属性面板内的文本内容始终为原始内容。
- 如用户富文本内容含有语法错误无法解析，则内容将被视为普通文本内容进行展示。
    
**富文本嵌套**
      
- 支持富文本嵌套使用。
- 当富文本中嵌套多个标签时，样式优先级依赖于嵌套顺序；内层的标签优先级更高，如：某个文本被两个不同的标签设置了颜色，最终显示的是内层标签的颜色。