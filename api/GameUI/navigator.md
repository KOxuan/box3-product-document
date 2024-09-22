<script setup>
import '/style.css'
</script>
# 导航器
```typescript
declare const navigator: Navigator;
```

## 方法

#### <font id="API" />getDeviceInfo()<font id="Type">: {deviceType: 'Desktop' | 'Mobile', screen: {width: number, height: number}}</font>{#getDeviceInfo}

获取该客户端当前设备以及屏幕分辨率
- Desktop 桌面端
- Mobile 移动端


> 定义于 [#L273](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L273)


```javascript
const deviceInfo = navigator.getDeviceInfo()
console.log(JSON.stringify(deviceInfo)) // {"deviceType":"Desktop","screen":{"width":1800,"height":913}}

```
