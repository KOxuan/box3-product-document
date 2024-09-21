<script setup>
import '/style.css'
</script>
# 战斗与生命值
## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>dead<font id="Type">: boolean</font>  {#dead}
> 默认值：false

玩家是否已死亡，生命值hp低于0。若玩家死亡，则会倒在地上。

> 定义于 [#L11815](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11815)
---


#### <font id="API" />spawnPoint<font id="Type">: [GameVector3 ](https://www.yuque.com/box3lab/api/sug8utrs043aep5v)</font>{#spawnPoint}
> 默认值：new GameVector3(64, 140, 64)

玩家复活后的出生点

> 定义于 [#L11774](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11774)

## 方法

#### <font id="API" />forceRespawn()<font id="Type">:  void</font>{#forceRespawn}
让玩家强制重生，立即返回出生点

> 定义于 [#L11645](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11645)
---


#### <font id="API" /><font id="Event">事件</font>onRespawn(<font id="Type">handler:(event:[GameRespawnEvent](/GameWorld/fight#GameRespawnEvent))=>void</font>)<font id="Type">: [GameEventHandlerToken](/GameEventHandlerToken/)</font>{#onRespawn}
玩家复活时调用的事件

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | 是 | | function | 监听玩家复活后的处理函数 |


> 定义于 [#L11640](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11640)
