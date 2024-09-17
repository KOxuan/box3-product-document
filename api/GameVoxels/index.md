# 🧱游戏方块

- **GameVoxels** 是控制Box3所有方块的接口，你可以控制地形变化，利用循环语法批量生成/销毁方块，获取某个方块的类型、名称、旋转角度等。
- 可以通过全局对象 `voxels` 来使用它。

## 类

```typescript
declare const voxels:GameVoxels;
declare class GameVoxels {
    //...
}
```

## 属性
- [`shape`](./operate#shape) : 当前世界地形最大尺寸
- [`VoxelTypes`](./operate#VoxelTypes) : 返回包含所有方块名称的数组

## 方法
- [`id`](./operate#id) : 将方块id转换为方块名称
- [`name`](./operate#name) : 将方块名称转换为方块id
- [`setVoxel`](./operate#setVoxel) : 在指定的坐标位置放置一个方块
- [`setVoxelId`](./operate#setVoxelId) : 使用方块ID，直接在指定的坐标位置放置方块
- [`getVoxelId`](./operate#getVoxelId) : 直接获取指定位置的方块ID
- [`getVoxelRotation`](./operate#getVoxelRotation) : 获取某个坐标位置的方块旋转码