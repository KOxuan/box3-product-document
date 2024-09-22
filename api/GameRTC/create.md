<script setup>
import '/style.css'
</script>
# 新建通道

## 方法
#### <font id="API" />createChannel(<font id="Type">channelId:string</font>)<font id="Type">: Promise‹[GameRTCChannel](/GameRTC/operate)›</font>{#createChannel}
新建一个rtc通道

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| channelId | 是 |  | string | 自定义通道标识 |


**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹GameRTCChannel› | 异步返回rtc对象 |

> 定义于 [#L13414](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13414)


