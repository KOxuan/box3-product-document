<script setup>
import '/style.css'
</script>
# UI图片

> UiImage 是继承自 [UiRenderable](/GameUI/UiRenderable) 类

## 属性

#### <font id="API" />image<font id="Type">: string</font>   {#image} 
> 默认值：''

图片元素的内容，应为图片的路径或者 URL。

---


#### <font id="API" />imageOpacity<font id="Type">: number</font>{#imageOpacity} 
> 默认值：100
 
图片元素的透明度。


## 静态方法

#### <font id="API" />create()<font id="Type">: UiImage</font>{#create} 
创建一个新的 Ui图片 实例。初始`parent`为空。

**返回值**

| **类型** | **说明** |
| --- | --- |
| UiImage | 新建 UiImage 元素实例 |


