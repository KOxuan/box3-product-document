
# 临时频道

## 方法

#### <font id="API" />createTempChat(<font id="Type">chatId:string[]</font>)<font id="Type">: Promise‹string›</font>{#createTempChat}
创建临时聊天频道

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| chatId | _否_ | | string[] | 创建临时频道时同时加入频道的玩家userId数组 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string› | 创建临时频道后的频道id |

> 定义于 [#L9923](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9923)

::: details 点击查看示例代码
```javascript
world.createTempChat().then(chatId => {
  console.log(`创建临时频道成功，频道id是${chatId}`)
})
```
:::

---


#### <font id="API" />destroyTempChat(<font id="Type">chatId:string[]</font>)<font id="Type">: Promise‹string[]›</font>{#destroyTempChat}
批量销毁临时聊天频道

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| chatId | _是_ | | string[] | 需要销毁的临时频道id数组 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string[]› | 删除失败的临时频道id数组 |

> 定义于 [#L9927](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9927)

::: details 点击查看示例代码
```javascript
world.destroyTempChat(['chatId1','chatId2']).then(failedChatIds => {
 if(!failedChatIds.length){
   console.log(`聊天室销毁成功`)
 }else{
   console.log(`以下聊天室销毁失败：${failedChatIds.join(',')}`)
 }
})
```
:::
---


#### <font id="API" />addTempChatPlayer(<font id="Type">chatId:string,player:string[]</font>)<font id="Type">: Promise‹string[]›</font>{#addTempChatPlayer}
向临时聊天频道添加玩家

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| chatId | _是_ | | string | 临时聊天频道id |
| player | _是_ | | string[] | 加入聊天频道的玩家userId数组 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string[]› | 添加成功的玩家id数组 |

> 定义于 [#L9931](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9931)

::: details 点击查看示例代码
```javascript
world.createTempChat().then(chatId => {
  world.addTempChatPlayer(chatId, ['userId1','userId2']).then(userIds => {
    console.log(`以下玩家id添加聊天频道成功${userIds.join(',')}`)
  })
})
```
:::
---


#### <font id="API" />removeTempChatPlayer(<font id="Type">chatId:string,player:string[]</font>)<font id="Type">: Promise‹string[]›</font>{#removeTempChatPlayer}
向临时聊天频道移除玩家

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| chatId | _是_ | | string | 临时聊天频道id |
| player | _是_ | | string[] | 需要在聊天频道中移除的玩家userId数组 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string[]› | 移除成功的玩家id数组 |

> 定义于 [#L9935](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9935)

::: details 点击查看示例代码
```javascript
world.createTempChat(['userId1','userId2']).then(chatId => {
  world.removeTempChatPlayer(chatId, ['userId1']).then(userIds => {
    console.log(`以下玩家id在频道中被移除${userIds.join(',')}`)
  })
})
```
:::
---


#### <font id="API" />getTempChats()<font id="Type">: Promise‹string[]›</font>{#getTempChats}
获取当前地图存在的临时聊天频道

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string[]› | 当前地图存在的临时聊天频道id数组 |

> 定义于 [#L9939](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9939)

::: details 点击查看示例代码
```javascript
world.getTempChats().then(chatIds => {
   console.log(`当前有以下临时聊天频道${chatIds.join(',')}`)
})
```
:::
---


#### <font id="API" />getTempChatUsers(<font id="Type">chatId:string</font>)<font id="Type">: Promise‹string[]›</font>{#getTempChatUsers}
获取临时聊天频道中的玩家

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| chatId | _是_ | | string | 临时聊天频道id |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string[]› | 在临时聊天频道中的玩家id数组 |

> 定义于 [#L9943](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9943)

::: details 点击查看示例代码
```javascript
world.getTempChatUsers('chatId').then(userIds => {
  console.log(`临时聊天频道有以下玩家${userIds.join(',')}`)
})
```
:::

