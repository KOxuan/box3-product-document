<script setup>
import '/style.css'
</script>

# 屏幕信息

## 属性

#### <font id="API" /><font id="ReadOnly" >只读</font>userAgent<font id="Type">: string</font>{#userAgent}

获取该客户端的用户代理

值以及属性特性与浏览器本身的属性保持一致。

## 方法

#### <font id="API" />getDeviceInfo()<font id="Type">: [DeviceInfo](./navigator#DeviceInfo)</font>{#getDeviceInfo}

获取该客户端当前设备以及屏幕分辨率

```javascript
const deviceInfo = navigator.getDeviceInfo();
console.log(JSON.stringify(deviceInfo)); // {"deviceType":"Desktop","screen":{"width":1800,"height":913}}
```

## 接口

#### <font id="API" />DeviceInfo{#DeviceInfo}

设备信息

| **参数**      | **类型**                  | **说明**                                  |
| ------------- | ------------------------- | ----------------------------------------- |
| deviceType    | 'Desktop' &#124; 'Mobile' | 屏幕的类型，Desktop 桌面端，Mobile 移动端 |
| screen.width  | number                    | 屏幕宽度                                  |
| screen.height | number                    | 屏幕高度                                  |
