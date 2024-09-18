# 元素-UiRenderable

这里的UiRenderable是UI渲染类，是所有UI元素的渲染相关的基类，它定义了所有UI界面上可见元素的共有属性。


## UiRenderable 属性
此元素继承至 [UiNode](./UiNode)。
| 属性        |      解释      | 
| ------------- | ----------- | 
| anchor      | 节点的锚点，用于确定节点的位置。 | 
| position      | 节点的位置，相对于父节点的位置。 | 
| backgroundColor      | 节点的背景颜色。 | 
| backgroundOpacity      | 节点的背景透明度。 | 
| size      | 节点的尺寸。 | 
| zIndex      | 节点的层级，用于确定节点的渲染顺序。 | 
| autoResize      | 节点的自动调整尺寸的方式。 | 
| visible      | 节点的可见性。 | 
| pointerEventBehavior      | 配置鼠标指针事件的响应方式， | 