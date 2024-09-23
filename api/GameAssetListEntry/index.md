# 💾游戏资产管理

- **GameAssetListEntry** 是控制游戏中的资产对象，用于获取游戏内模型、图片、音频等资源。
- 可以通过**全局对象** `resources` 来使用它。

## 资产结构
注意：脚本文件位于第一层级，没有父级
```
ArenaMap
├─ 代码文件列表
├─ snow
│  └─ 雪花纹理文件列表 
├─ picture
│  └─ 图片文件列表
├─ mesh
│  └─ 模型文件列表
├─ lut
│  └─ 滤镜文件列表
└─ audio
   └─ 音频文件列表
```

## 类

```typescript
declare const resources: {
  ls: (path?: 'snow' | 'mesh' |'picture' | 'audio' | 'lut') => GameAssetListEntry[];
};
declare class GameAssetListEntry {
    //...
}
```

## 方法
- [`ls`](./ls#ls) : 获取地图中的资产树

## 接口
- [`GameAssetListEntry`](./ls#GameAssetListEntry) : 资产列表

## 枚举
- [`GameAssetType`](./ls#GameAssetType) : 资产类型

