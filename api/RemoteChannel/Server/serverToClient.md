<script setup>
import '/style.css'
</script>
# 服务端：服务端->客户端通讯
## 方法

#### <font id="API" />sendClientEvent(<font id="Type">entities:[GamePlayer](/GamePlayer/) | [GamePlayer](/GamePlayer/)[],clientEvent:any</font>)<font id="Type">:  void</font>{#sendClientEvent} 
`服务端` 发送至 `客户端`，向**指定玩家**发送事件。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entities | 是 | | GamePlayer &#124; GamePlayer[] | 玩家实体列表，代表发送对象，传入空数组时不会产生任何效果 |
| clientEvent | 是 | | any | 自定义事件，在客户端接收到时，传入监听器的参数，仅允许可序列化的值 |

> 定义于 [#L13395](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13395)
---


#### <font id="API" />broadcastClientEvent(<font id="Type">clientEvent:any</font>)<font id="Type">:  void</font>{#broadcastClientEvent} 
`服务端` 发送至 `客户端`，向**所有玩家**发送事件。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| clientEvent | 是 | | any | 自定义事件，在客户端接收到时，传入监听器的参数，仅允许可序列化的值 |

> 定义于 [#L13396](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13396)
