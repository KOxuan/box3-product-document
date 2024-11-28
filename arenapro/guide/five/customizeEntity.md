# 自定义 GameEntity及GamePlayer 类

在TypeScript（TS）开发中，直接扩展或修改全局类（如`GameEntity/GamePlayer`）可能带来潜在的风险，特别是当这些全局类由第三方库或框架提供时。为了避免未来可能出现的命名冲突和兼容性问题。

但你坚定要使用本功能，你需要继承`GameEntity/GamePlayer`类。

## 继承类

```typescript
// GameEntity.d.ts
declare interface GameEntity extends GameEntity {
    // 自定义属性
    customProperty: string;
    
    // 自定义方法
    customMethod(): void;
}

// GamePlayer.d.ts
declare interface GamePlayer extends GamePlayer {
    // 自定义属性
    customProperty: string;
    
    // 自定义方法
    customMethod(): void;
}
```

## 使用

```typescript
// 现在你可以安全地访问自定义属性和方法
entity.customProperty = 'someValue';
entity.customMethod();
```