<script setup>
import '/style.css'
</script>
# 屏幕信息

## 方法

#### <font id="API" />getDeviceInfo()<font id="Type">: [DeviceInfo](./navigator#DeviceInfo)</font>{#getDeviceInfo}

获取该客户端当前设备以及屏幕分辨率

```javascript
const deviceInfo = navigator.getDeviceInfo()
console.log(JSON.stringify(deviceInfo)) // {"deviceType":"Desktop","screen":{"width":1800,"height":913}}

```

## 接口

#### <font id="API" />DeviceInfo{#DeviceInfo}
设备信息

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| deviceType | 'Desktop' &#124; 'Mobile' | 屏幕的类型，Desktop 桌面端，Mobile 移动端|
| screen.width | number | 屏幕宽度 |
| screen.height | number | 屏幕高度 |
