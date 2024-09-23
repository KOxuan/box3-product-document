<script setup>
import '/style.css'
</script>
# 监听输入事件
```typescript
declare const input: InputSystem;
```
## 方法

#### <font id="API" />unlockPointer()<font id="Type"> :  void</font> {#unlockPointer}
用后在游戏界面显示鼠标指针。

> 定义于 [#L257](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L257)

---


#### <font id="API" />lockPointer()<font id="Type"> :  void</font> {#lockPointer}
调用后在游戏界面隐藏鼠标指针，由于浏览器限制，此操作可能会失败。

有兴趣可以查看[Pointer Lock 2.0](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock)。

> 定义于 [#L262](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L262)


## 鼠标指针锁定监听事件

用于全局监听当玩家指针锁定状态变化或出错时产生的事件。

#### <font id="API" />pointerlockchange<font id="Type"> : [UiEvent](/GameUI/UiEvent)‹{ isLocked }›</font> {#pointerlockchange}
当显示/隐藏鼠标指针时触发

**isLocked <font id="Type">: boolean</font>**

表示鼠标指针是否隐藏。

> 定义于 [#L230](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L230)

---


#### <font id="API" />pointerlockerror<font id="Type"> : [UiEvent](/GameUI/UiEvent)‹undefined›</font> {#pointerlockerror}
当鼠标隐藏出错时触发，无事件对象

> 定义于 [#L231](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L231)

```javascript
//当显示/隐藏鼠标指针时触发
input.pointerLockEvents.add('pointerlockchange',({ isLocked }) => {
  //...
})

//当鼠标隐藏出错时触发，无事件对象
input.pointerLockEvents.add('pointerlockerror', () => {
  //...
})
```



## 单元素点击监听事件

#### <font id="API" />pointerdown<font id="Type">: [UiEvent](/GameUI/UiEvent)‹this›</font>   {#pointerdown}

类似 Web 的 pointerdown 事件，会受到 `pointerEventBehavior` 的影响。

> 定义于 [#L108](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L108)

---


#### <font id="API" />pointerup<font id="Type">: [UiEvent](/GameUI/UiEvent)‹this›</font>   {#pointerup}
类似 Web 的 pointerup 事件，会受到 `pointerEventBehavior` 的影响。

> 定义于 [#L109](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L109)


```javascript
const img = UiImage.create(); // 静态方法，直接通过类上面的方法来使用。

//当监听到鼠标按下该图片元素时
img.events.add('pointerdown',(UiImage) => {
  //...
})

//当监听到鼠标抬起该图片元素时
img.events.add('pointerup', (UiImage) => {
  //...
})
```

## 全局点击监听事件


```javascript
//当监听到鼠标按下任意元素时
input.onPointerDown.sub(({ UiNode }) => {
  //...
});

//当监听到鼠标抬起任意元素时
input.onPointerUp.sub(({ UiNode }) => {
  //...
});

```