# 🔊游戏跨端通讯

- **ClientRemoteChannel** 是管理`客户端`与`服务端`通讯的对象，用于对跨端传递信息的操作。
- 在`客户端脚本`中，可以通过全局对象 `remoteChannel` 来使用它。

## 类

```typescript
declare const remoteChannel: ClientRemoteChannel;
declare class ClientRemoteChannel {
    //...
}
```


## 方法
- [`sendServerEvent`](/RemoteChannel/Client/serverToClient#sendServerEvent) : `客户端` 发送至 `服务端` 的事件。

### 监听方法
- [`onClientEvent`](/RemoteChannel/Client/clientToServer#onClientEvent) : 监听`服务端`发来的事件

## 接口
- [`ClientEvent`](/RemoteChannel/Client/clientToServer#ClientEvent) : `客户端` 发送至 `服务端`的自定义事件。