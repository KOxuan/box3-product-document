<script setup>
import '/style.css'
</script>
# UI输入

> UiInput 是继承自 [UiText](/GameUI/node/UiText) 类

## 属性

#### <font id="API" />placeholder<font id="Type">: string</font>{#placeholder}
> 默认值：'Type something here'

输入框的未输入时文本提示内容。

> 定义于 [#L162](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L162)

---


#### <font id="API" /><font id="ReadOnly">只读</font>placeholderColor<font id="Type">: [Vec3](/GameUI/maths/Vec3)</font>{#placeholderColor}
> 默认值：#ACACA4

输入框显示的占位文本的颜色。

> 定义于 [#L163](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L163)

---


#### <font id="API" /><font id="ReadOnly">只读</font>placeholderOpacity<font id="Type">: number</font>{#placeholderOpacity}
> 默认值：100

输入框提示文本的不透明度。

> 定义于 [#L164](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L164)

---


#### <font id="API" /><font id="ReadOnly">只读</font>isFocus<font id="Type">: boolean</font>{#isFocus}

输入框是否聚焦。

> 定义于 [#L165](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L165)




## 静态方法

#### <font id="API" />create()<font id="Type">: UiInput</font>{#create}
创建并返回一个新的 Ui输入，初始`parent`为空。

**返回值**

| **类型** | **说明** |
| --- | --- |
| UiInput | 新建 UiInput 元素实例 |


> 定义于 [#L168](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L168)


## 方法

#### <font id="API" />focus()<font id="Type">:  void</font>{#focus}
使输入框聚焦。

> 定义于 [#L166](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L166)

---


#### <font id="API" />blur()<font id="Type">: string</font>{#blur}
使输入框失去焦点。

**返回值**

| **类型** | **说明** |
| --- | --- |
| string | 输入框当前的输入值。 |

> 定义于 [#L167](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L167)



## 事件

#### <font id="API" />focus<font id="Type">: [EventEmitter](/GameUI/UiEvent)‹events‹thi››</font>
使输入框聚焦。


---


#### <font id="API" />blur<font id="Type">: [EventEmitter](/GameUI/UiEvent)‹events‹this››</font>
使输入框失去焦点。

```javascript
const input = UiInput.create(); // 静态方法，直接通过类上面的方法来使用。

//当监听到该输入框得到焦点时
input.events.add('focus',(uiInput) => {
    //xxx
})

//当监听到该输入框失去焦点时
input.events.add('blur', (uiInput) => {
    //xxx
})
```
