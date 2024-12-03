# 🌏游戏世界

- **ClientWorld** 是管理客户端下的游戏世界的对象，用于对客户端游戏的操作。
- 在`客户端脚本`中，可以通过全局对象 `world`来使用它。


## 类

```typescript
declare const world: ClientWorld;

declare class ClientWorld {
    //...
}
```


## 方法
- [`rendering3d`](./input#rendering3d) : 控制是否渲染3D场景。
