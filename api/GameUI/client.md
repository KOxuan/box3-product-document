# 🖼️游戏用户界面

- **GameUI** 是管理游戏界面的对象，用于对玩家界面UI的操作。
- 在`客户端脚本`中，可以通过全局对象 `ui`，`remoteChannel`，`input`，`navigator` ，`screenWidth` ，`screenHeight` 来使用它。

## 类

```typescript
declare const ui: UiNode;
declare const remoteChannel: ClientRemoteChannel;
declare const navigator: Navigator;
declare const input: InputSystem;
declare const screenWidth: number; // 全局对象，获取当前玩家屏幕宽度
declare const screenHeight: number; // 全局对象，获取当前玩家屏幕高度

declare class InputSystem {
    //...
}
declare class Navigator {
    //...
}
declare class UiNode {
    //...
}
declare class ClientRemoteChannel {
    //...
}
```
