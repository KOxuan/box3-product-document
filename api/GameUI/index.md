# 🖼️游戏用户界面

- **GameUI** 是管理游戏界面的对象，用于对玩家界面UI的操作。
- 在`客户端脚本`中，可以通过全局对象 `ui`，`input`，`navigator` ，`screenWidth` ，`screenHeight` 来使用它。

::: tip
在推出此功能前，已有GUI功能，基于xml编写。但已不推荐使用，因有更优方案且支持可视化编辑。推荐使用最新的GameUI。
对旧版GUI感兴趣可查阅[d.ts文件](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13224)。
:::


## 类

```typescript
declare const ui: UiNode;
declare const navigator: Navigator;
declare const input: InputSystem;
declare const screenWidth: number; // 全局对象，获取当前玩家屏幕宽度
declare const screenHeight: number; // 全局对象，获取当前玩家屏幕高度

declare class InputSystem {
    //...
}
declare class Navigator {
    //...
}
declare class UiNode {
    //...
}
```


## 属性
- [`name`](./UiNode#name) : 该节点的标识，可重复
- [`parent`](./UiNode#parent) : 节点的父节点，非根节点的父节点为空时，该节点将不会被渲染
- [`children`](./UiNode#children) : 节点的子节点。如需要调整子节点结构，应修改子节点的`parent`属性
- [`events`](./UiNode#events) : 管理节点相关的事件
- [`uiScale`](./UiNode#uiScale) : 节点等比例缩放数据
- [`visible`](./UiScreen#visible) : 屏幕是否可见
- [`zIndex`](./UiScreen#zIndex) : 屏幕层级，层级越高的屏幕会显示在顶部，遮盖住层级较低的屏幕
- [`anchor`](./UiRenderable#anchor) : 节点的锚点，用于确定节点的位置
- [`position`](./UiRenderable#position) : 节点的位置，相对于父节点的位置
- [`backgroundColor`](./UiRenderable#backgroundColor) : 节点的背景颜色
- [`backgroundOpacity`](./UiRenderable#backgroundOpacity) : 节点的背景透明度
- [`size`](./UiRenderable#size) : 节点的尺寸
- [`zIndex`](./UiRenderable#zIndex) : 节点的层级，用于确定节点的渲染顺序
- [`autoResize`](./UiRenderable#autoResize) : 节点的自动调整尺寸的方式
- [`visible`](./UiRenderable#visible) : 节点的可见性
- [`pointerEventBehavior`](./UiRenderable#pointerEventBehavior) : 配置鼠标指针事件的响应方式
- [`image`](./node/UiImage#image) : 图片元素的内容，应为图片的路径或者 URL
- [`imageOpacity`](./node/UiImage#imageOpacity) : 图片元素的透明度
- [`imageDisplayMode`](./node/UiImage#imageDisplayMode) : 图像显示模式的声明
- [`textContent`](./node/UiText#textContent) : 文本元素的内容
- [`richText`](./node/UiText#richText) : 文本内容是否支持富文本
- [`textFontSize`](./node/UiText#textFontSize) : 节点显示的文本的字体大小
- [`textColor`](./node/UiText#textColor) : 节点显示的文本的颜色
- [`textXAlignment`](./node/UiText#textXAlignment) : 节点显示的文本的水平对齐方式
- [`textYAlignment`](./node/UiText#textYAlignment) : 节点显示的文本的垂直对齐方式
- [`autoWordWrap`](./node/UiText#autoWordWrap) : 是否开启自动换行
- [`textLineHeight`](./node/UiText#textLineHeight) : 文本的行高
- [`textStrokeColor`](./node/UiText#textStrokeColor) : 文本的描边颜色
- [`textStrokeOpacity`](./node/UiText#textStrokeOpacity) : 文本描边的不透明度
- [`textStrokeThickness`](./node/UiText#textStrokeThickness) : 文本描边的厚度
- [`textStrokeColor`](./node/UiText#textStrokeColor) : 文本的描边颜色
- [`textFontFamily`](./node/UiInput#textFontFamily) : 文本使用的字体
- [`placeholderColor`](./node/UiInput#placeholderColor) : 输入框显示的占位文本的颜色
- [`placeholderOpacity`](./node/UiInput#placeholderOpacity) : 输入框提示文本的不透明度
- [`isFocus`](./node/UiInput#isFocus) : 输入框是否聚焦

## 方法
- [`findChildByName`](./UiNode#findChildByName) : 按名称查找子节点，返回对应子节点对象
- [`clone`](./UiNode#clone) : 按名称查找子节点，返回对应子节点对象
- [`create`](./UiScreen#create) : 创建一个新的 `Ui屏幕` 实例
- [`getAllScreen`](./UiScreen#getAllScreen) : 获取当前所有存在的屏幕实例
- [`create`](./node/UiBox#create) : 创建一个新的 `Ui盒子` 实例
- [`create`](./node/UiImage#create) : 创建一个新的 `Ui图片` 实例
- [`create`](./node/UiText#create) : 创建一个新的 `Ui文本` 实例
- [`create`](./node/UiInput#create) : 创建一个新的 `Ui输入` 实例
- [`focus`](./node/UiInput#isFocus) : 使输入框聚焦
- [`blur`](./node/UiInput#blur) : 使输入框失去焦点
- [`getDeviceInfo`](./navigator#getDeviceInfo) : 获取该客户端当前设备以及屏幕分辨率
- [`unlockPointer`](./input#unlockPointer) : 调用后在游戏界面显示鼠标指针
- [`lockPointer`](./input#lockPointer) : 调用后在游戏界面隐藏鼠标指针
- [`on`](./UiEvent#on) : 监听指定的事件
- [`once`](./UiEvent#once) : 与 on 的区别是仅触发一次
- [`remove`](./UiEvent#remove) : 移除找到的第一个 listener
- [`removeAll`](./UiEvent#removeAll) : 移除找到的所有 listener，不传则移除事件下所有
- [`add`](./UiEvent#add) : 与 on 是同一个方法,只是方法名不同
- [`emit`](./UiEvent#emit) : 触发指定的事件
- [`off`](./UiEvent#off) : 与 remove 是同一个方法,只是方法名不同

## 枚举
- [`PointerEventBehavior`](./UiRenderable#PointerEventBehavior) : 表示界面元素对鼠标指针按下事件的行为方式
- [`ImageDisplayMode`](./node/UiImage#ImageDisplayMode) : 控制图像的显示方式
- [`UITextFontFamily`](./node/UiText#UITextFontFamily) : 字体样式