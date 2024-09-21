<script setup>
import '/style.css'
</script>
# 基础信息
## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>name<font id="Type">: string</font>   {#name}

玩家的昵称。

> 定义于 [#L11749](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11749)

::: details 点击查看示例代码
```javascript
// 在所有玩家中，通过玩家名称筛选出某一位玩家
const myPlayer = world.querySelectorAll('player').filter(e => e.player.name === '吉吉喵')[0];
```
---
```javascript
// 如果'吉吉喵'和'魔术喵'加入游戏，会被缩小到0.25倍。其他玩家不受影响
const TEST_PLAYER = ['吉吉喵', '魔术喵']

world.onPlayerJoin(({ entity }) => {
    if (!TEST_PLAYER.includes(entity.player.name)) return
    entity.player.scale = 0.25;
})
```
:::
---


#### <font id="API" /><font id="ReadOnly">只读</font>userId<font id="Type">: string</font> {#userId}

玩家的用户ID，个人中心昵称下方可见。

> 定义于 [#L11753](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11753)
---

#### <font id="API" /><font id="ReadOnly">只读</font>boxId<font id="Type">: string</font> {#boxid}

玩家的Box ID(3-15字符)。

> 定义于 [#L11761](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11761)
:::info
该属性已不推荐使用，建议使用 `entity.player.userId` 获取玩家ID。
:::
---
#### <font id="API" /><font id="ReadOnly">只读</font>userKey<font id="Type">: string</font> {#userKey}

玩家的唯一识别码(16字符)，可以用于存储玩家信息到数据库，无法控制更改。 

> 定义于 [#L11757](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11757)
:::info
该属性已不推荐使用，建议使用 `entity.player.userId` 获取玩家ID。
:::
---


#### <font id="API" /><font id="ReadOnly">只读</font>avatar<font id="Type">: string</font>  {#avatar}

玩家的头像url直链。

> 定义于 [#L11765](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11765)
---


#### <font id="API" />movementBounds<font id="Type">: [GameBounds3 ](https://www.yuque.com/box3lab/api/qcs07pc87u5iyfn7)</font>{#movementBounds}
> 默认值：new GameBounds3(new GameVector3(-50, -50, -50), new GameVector3(178, 178, 178))

玩家的活动范围限制，如超出此范围，则传回出生点

> 定义于 [#L11779](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11779)
---


#### <font id="API" />url<font id="Type">: [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)</font>{#url}

获取该玩家进入地图时所用的URL链接地址, 主要用于获取URL参数, 以便区别对待进来的玩家

> 定义于 [#L11769](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11769)

## 方法

#### <font id="API" />querySocial(<font id="Type">socialType:[SocialType](./info#SocialType)</font>)<font id="Type">: Promise<number[]></font>{#querySocial}
查询当前玩家的社交关系

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| socialType | 是 | | SocialType | 查询的方式 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹number[]› | 异步返回玩家 ID 列表 |


> 定义于 [#L11738](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11738)
---


#### <font id="API" />openUserProfileDialog(<font id="Type">userId:number</font>)<font id="Type">:  void</font>{#openUserProfileDialog}
对当前玩家，调起指定ID玩家的个人主页。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| userId | 是 | | number | 玩家的用户ID |


> 定义于 [#L11737](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11737)

## 枚举

#### <font id="API" />SocialType{#SocialType}
玩家的社交关系类型

| **属性** | **说明** |
| --- | --- |
| FOLLOWING | 关注 |
| FOLLOWERS | 粉丝 |
| FRIENDS | 好友 |



> 定义于 [#L9336](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9336)
