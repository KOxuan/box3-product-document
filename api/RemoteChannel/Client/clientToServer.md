<script setup>
import '/style.css'
</script>
# 客户端：客户端->服务端通讯
## 方法


#### <font id="API" />sendServerEvent(<font id="Type">event:any</font>)<font id="Type">:  void{#sendServerEvent}</font>
`客户端` 发送至 `服务端` 的事件。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| event | 是 | | any | 在服务端接收到的自定义事件，作为传入服务端脚本里监听器的参数，仅允许可序列化的值 |

> 定义于 [#L71](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L71)
