# C-🧭游戏导航器

- **ClientNavigator** 是管理客户端导航的对象，用于对玩家界面屏幕数据的操作。
- 在`客户端脚本`中，可以通过全局对象`navigator`来使用它。

## 类

```typescript
declare const navigator: ClientNavigator;

declare class ClientNavigator {
    //...
}
```

## 方法
- [`getDeviceInfo`](./navigator#getDeviceInfo) : 获取该客户端当前设备以及屏幕分辨率

## 接口
- [`DeviceInfo`](./navigator#DeviceInfo) : 设备信息
