<script setup>
import '/style.css'
</script>
# 点击与互动
## 属性

#### <font id="API" />rendering3d<font id="Type">: boolean</font>{#rendering3d} 
> 默认值：true

控制是否渲染3D场景。
- 当关闭(false)时，3D 场景的渲染将在客户端暂停，画面会停留在最后一次渲染的状态。
- 2D UI界面不受此属性影响，除 3D 渲染外的客户端行为不受此属性影响。



::: details 点击查看示例代码
```javascript
const renderingBtn = ui.findChildByName('rendering3d');
renderingBtn.events.on('pointerdown', () => {
    console.info('渲染开关！');
    world.rendering3d = !world.rendering3d;
})
```
:::

