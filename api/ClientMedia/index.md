# C-🎙游戏录音

- **ClientMedia** 是`客户端`管理游戏录音的对象，用于对客户端设备外部录音的操作。
- 在`客户端脚本`中，可以通过全局对象 `media` 来使用它。

## 类

```typescript
declare const media: ClientMedia;

declare class ClientMedia {
    //...
}
```

## 方法
- [`playAudio`](./media#playAudio) : 播放录音后的音频
- [`stopPlayAudio`](./media#stopPlayAudio) : 停止播放录音音频
- [`startRecording`](./media#startRecording) : 开始录音
- [`stopRecording`](./media#stopRecording) : 停止录音