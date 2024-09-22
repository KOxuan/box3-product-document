
<script setup>
import '/style.css'
</script>
# UI可渲染基类

> UiRenderable 是继承自 [UiNode](/GameUI/UiNode) 类



## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>anchor<font id="Type">: [Vec2](/GameUI/maths/Vec2)</font>   {#anchor}
> 默认值：`{x:0,y:0}`

节点的锚点，用于确定节点的位置。

> 定义于 [#L137](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L137)

---


#### <font id="API" /><font id="ReadOnly">只读</font>position<font id="Type">: [Coord2](/GameUI/maths/Coord2)</font>   {#position}


节点的位置，相对于父节点的位置。

> 定义于 [#L138](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L138)

---


#### <font id="API" /><font id="ReadOnly">只读</font>backgroundColor<font id="Type">: [Vec3](/GameUI/maths/Vec3)</font>   {#backgroundColor}
> 默认值：#FFFFFF

节点的背景颜色。

> 定义于 [#L139](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L139)

---


#### <font id="API" />backgroundOpacity<font id="Type">: number</font>{#backgroundOpacity}
> 默认值：100

节点的背景透明度。

> 定义于 [#L140](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L140)

---


#### <font id="API" /><font id="ReadOnly">只读</font>size<font id="Type">: [Coord2](/GameUI/maths/Coord2)</font>   {#size}


节点的尺寸。

> 定义于 [#L141](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L141)

---


#### <font id="API" />zIndex<font id="Type">: number</font>   {#zIndex}
> 默认值：1

节点的层级，用于确定节点的渲染顺序。

> 定义于 [#L142](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L142)

---


#### <font id="API" />autoResize<font id="Type">: 'NONE' | 'X' | 'Y' | 'XY'</font>   {#autoResize}
> 默认值：'NONE'

节点的自动调整尺寸的方式。

> 定义于 [#L143](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L143)

---


#### <font id="API" />visible<font id="Type">: boolean</font>{#visible}
> 默认值：true

节点的可见性。

> 定义于 [#L144](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L144)

---


#### <font id="API" />pointerEventBehavior<font id="Type">: [PointerEventBehavior](./UiRenderable#PointerEventBehavior)</font>   {#pointerEventBehavior}
> 默认值：PointerEventBehavior.ENABLE

配置鼠标指针事件的响应方式，鼠标指针事件包括：

- pointerdown
- pointerup

> 定义于 [#L145](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L145)


### 事件

#### <font id="API" />pointerdown<font id="Type">: [EventEmitter](/GameUI/UiEvent)‹events‹this››</font>   {#pointerdown}

类似 Web 的 pointerdown 事件，会受到 `pointerEventBehavior` 的影响。

> 定义于 [#L108](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L108)

---


#### <font id="API" />pointerup<font id="Type">: [EventEmitter](/GameUI/UiEvent)‹events‹this››</font>   {#pointerup}
类似 Web 的 pointerup 事件，会受到 `pointerEventBehavior` 的影响。

> 定义于 [#L109](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L109)


```javascript
const img = UiImage.create(); // 静态方法，直接通过类上面的方法来使用。

//当监听到鼠标按下该图片元素时
img.events.add('pointerdown',(UiImage) => {
    //xxx
})

//当监听到鼠标抬起该图片元素时
img.events.add('pointerup', (UiImage) => {
    //xxx
})
```
---
```javascript
//当监听到鼠标按下任意元素时
input.onPointerDown.sub(({target}) => {
  //xxx
});

//当监听到鼠标抬起任意元素时
input.onPointerUp.sub(({target}) => {
  //xxx
});
```

## 枚举

#### <font id="API" />PointerEventBehavior{#PointerEventBehavior}
表示界面元素对鼠标指针按下事件的行为方式。

无论是哪种行为方式，鼠标指针事件在UI元素上触发时，都不会产生对应的玩家输入。

| **属性** | **说明** |
| --- | --- |
| DISABLE_AND_BLOCK_PASS_THROUGH | 不响应，且不允许位于元素后方的其他元素响应。 |
| DISABLE | 不响应。 |
| BLOCK_PASS_THROUGH | 不允许位于元素后方的其他元素响应。 |
| ENABLE | 正常响应。 |

> 定义于 [#L190](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L190)


