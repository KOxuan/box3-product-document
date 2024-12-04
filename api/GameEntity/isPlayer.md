<script setup>
import '/style.css'
</script>
# 是否为玩家

- **GamePlayerEntity** 是包含玩家属性的实体，可以同时访问[**GameEntity**](/GameEntity/)和[**GamePlayer**](/GamePlayer/)。

## 类型

```typescript
declare type GamePlayerEntity = GameEntity & {
  player: GamePlayer;
  isPlayer: true;
};
```
## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>isPlayer<font id="Type">: boolean</font>{#isPlayer} 

如果为真，则实体为玩家。



---


#### <font id="API" />player<font id="Type">: [GamePlayer](/GamePlayer/) | undefined</font>{#player} 

如果是玩家，可以访问此属性。索引与玩家相关的全部状态和方法

