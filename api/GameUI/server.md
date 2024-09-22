# 🖼️游戏用户界面

- **GameUI** 是管理游戏界面的对象，用于对玩家界面UI的操作。
- 在`服务端脚本`中，可以通过全局对象 `remoteChannel` 来使用它。

## 类

```typescript
declare const remoteChannel: ServerRemoteChannel;
declare class ServerRemoteChannel {
    //...
}
```
::: tip
在推出此功能前，已有GUI功能，基于xml编写，但已不推荐使用，因有更优方案且不支持可视化编辑。推荐使用GameUI。
对旧版GUI感兴趣可查阅[d.ts文件](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13224)。
:::


## 方法
- [`sendClientEvent`](/GameUI/remoteChannel/server#sendClientEvent) : `服务端` 发送至 `客户端`，向**指定玩家**发送事件。
- [`broadcastClientEvent`](/GameUI/remoteChannel/server#broadcastClientEvent) : `服务端` 发送至 `客户端`，向**所有玩家**发送事件。

### 监听方法
- [`onServerEvent`](/GameUI/remoteChannel/server#onServerEvent) : 监听`客户端`发来的事件