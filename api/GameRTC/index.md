# S-🗣️游戏实时语音通讯

- **GameRTC** 是实时通讯技术，用于与其他游戏玩家语音交流的操作。
- 可以通过全局对象 `rtc` 来使用它。

## 类

```typescript
declare const rtc: GameRTC;
declare class GameRTC {
    //...
}
```

## 方法
- [`createChannel`](./create#createChannel) : 新建一个rtc通道200-299
- [`getMicrophonePermission`](./operate#getMicrophonePermission) : 向该通道申请获取一个玩家的录音权限
- [`add`](./operate#add) : 向该通道加入一个玩家
- [`remove`](./operate#remove) : 向该通道删除一个玩家
- [`unpublish`](./operate#unpublish) : 向该通道一个玩家关闭麦克风
- [`publishMicrophone`](./operate#publishMicrophone) : 向该通道一个玩家开启麦克风
- [`getPlayers`](./operate#getPlayers) : 获取该通道目前所有的玩家
- [`destroy`](./operate#destroy) : 删除该通道
- [`getVolume`](./operate#getVolume) : 获取该通道一个玩家音量
- [`setVolume`](./operate#setVolume) : 向该通道设置一个玩家音量