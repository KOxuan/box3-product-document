<script setup>
import '/style.css'
</script>
# UI屏幕

> UiScreen 是继承自 [UiNode](/GameUI/UiNode) 类

## 属性

#### <font id="API" />visible<font id="Type">: boolean</font>{#visible}
> 默认值：true

屏幕是否可见。

> 定义于 [#L171](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L171)

---

#### <font id="API" />zIndex<font id="Type">: number</font>{#zIndex}
> 默认值：1

屏幕层级，层级越高的屏幕会显示在顶部，遮盖住层级较低的屏幕。

> 定义于 [#L172](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L172)



## 静态方法

#### <font id="API" />create()<font id="Type">: UiScreen</font>{#create} 
创建一个新的 Ui屏幕 实例。

**返回值**

| **类型** | **说明** |
| --- | --- |
| UiScreen | 新建 UiScreen 屏幕实例 |


> 定义于 [#L173](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L173)

---
#### <font id="API" />getAllScreen()<font id="Type">: UiScreen[]</font>{#getAllScreen} 
获取当前所有存在的屏幕实例。

**返回值**

| **类型** | **说明** |
| --- | --- |
| UiScreen[] | 所有 UiScreen 屏幕实例列表 |


> 定义于 [#L174](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L174)


::: details 点击查看示例代码
**根据名称获取指定屏幕对象**
```javascript 
// 查找屏幕名称为 'screen-1' 的屏幕对象
const foundObject = UiScreen.getAllScreen().find(obj => obj.name === 'screen-1');

if (foundObject) {
  console.log('找到了对象:', foundObject);
} else {
  console.log('未找到对象');
}
```

---
**UI元素挂载到指定屏幕上**
```javascript 
// 创建一个 aScreen 屏幕
const aScreen = UiScreen.create();
aScreen.name = "屏幕名称";

// 创建文本元素，并挂载到 aScreen 屏幕上
const text = UiText.create();
text.parent = aScreen;
text.position.offset.copy({ x: 10, y: 20 });
text.textContent = "你好";
```

---
**UI元素挂载到默认屏幕上**
```javascript 
// ui所指向的是默认屏幕。因此不需要格外搜索。
// 创建文本元素，并挂载到 aScreen 屏幕上
const text = UiText.create();
text.parent = ui;
text.position.offset.copy({ x: 10, y: 20 });
text.textContent = "你好";
```
:::



## 玩家屏幕变化监听事件

#### <font id="API" />resize<font id="Type">: [UiEvent](/GameUI/UiEvent)‹{ screenWidth , screenHeight }›</font>   {#resize}

屏幕尺寸变化事件，返回变化后的屏幕宽高。

```javascript 
// 监听玩家改变屏幕分辨率时触发
screen.events.add('resize', ({ screenWidth , screenHeight }) => {
  //...
});
```

**最佳实践**
> UI框架根据屏幕分辨率自动缩放UI元素，以达到适配效果。

```javascript 
//监听玩家屏幕分辨率产生变化事件
screen.events.add('resize', (evt) => {
  console.log('evt', evt.screenWidth, evt.screenHeight);
  scaleScreen(evt.screenHeight, evt.screenWidth);
});

//元素盒子
const box = ui.findChildByName('box');
//设置元素缩放
function scaleScreen(sH, sW) {
    let widthScaleFactor = 1
    if (sW < 1300) {
        widthScaleFactor = sW / 1300;
    }
    if (!box.uiScale) box.uiScale = UiScale.create();
    box.uiScale.scale = widthScaleFactor;
}
//进入游戏时设置缩放一次
scaleScreen(screenHeight, screenWidth)
```