# S-🔊游戏跨端通讯

- **ServerRemoteChannel** 是管理`客户端`与`服务端`通讯的对象，用于对跨端传递信息的操作。
- 在`服务端脚本`中，可以通过全局对象 `remoteChannel` 来使用它。

## 类

```typescript
declare const remoteChannel: ServerRemoteChannel;
declare class ServerRemoteChannel {
    //...
}
```


## 方法
- [`sendClientEvent`](/RemoteChannel/Server/serverToClient#sendClientEvent) : `服务端` 发送至 `客户端`，向**指定玩家**发送事件。
- [`broadcastClientEvent`](/RemoteChannel/Server/serverToClient#broadcastClientEvent) : `服务端` 发送至 `客户端`，向**所有玩家**发送事件。

### 监听方法
- [`onServerEvent`](/RemoteChannel/Server/clientToServer#onServerEvent) : 监听`客户端`发来的事件