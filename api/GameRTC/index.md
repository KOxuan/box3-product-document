# S-🗣️ 游戏实时语音通讯

**GameRTC** 是游戏中的实时语音通讯系统，提供以下核心功能：

- 语音通道：创建和管理语音通讯频道
- 权限控制：管理玩家的麦克风权限
- 成员管理：添加或移除通道成员
- 音量控制：调节玩家语音音量

你可以通过全局对象 `rtc` 来使用这些功能。

## 类定义

```typescript
declare const rtc: GameRTC;
declare class GameRTC {
  //...
}
```

## 方法列表

### 通道管理

- [`createChannel`](./create#createChannel) : 创建一个新的语音通道
- [`destroy`](./operate#destroy) : 销毁指定的语音通道
- [`getPlayers`](./operate#getPlayers) : 获取通道内的所有玩家列表

### 权限管理

- [`getMicrophonePermission`](./operate#getMicrophonePermission) : 请求获取指定玩家的麦克风权限
- [`publishMicrophone`](./operate#publishMicrophone) : 允许玩家在通道内开启麦克风
- [`unpublish`](./operate#unpublish) : 关闭玩家在通道内的麦克风

### 成员管理

- [`add`](./operate#add) : 将玩家添加到语音通道
- [`remove`](./operate#remove) : 将玩家从语音通道中移除

### 音量控制

- [`getVolume`](./operate#getVolume) : 获取指定玩家在通道内的音量
- [`setVolume`](./operate#setVolume) : 设置指定玩家在通道内的音量
