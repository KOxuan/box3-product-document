<script setup>
import '/style.css'
</script>
# 客户端：服务端->客户端通讯

## 方法


#### <font id="API" /><font id="Event" >事件</font>onClientEvent(<font id="Type">handler:(event:[ClientEvent](./serverToClient#ClientEvent))=>void</font>)<font id="Type">: void</font>{#onClientEvent}
监听`服务端`发来的事件

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | 是 | | function | 监听到服务端传过来的数据时处理函数 |



## 接口

#### <font id="API" />ClientEvent{#ClientEvent}
`服务端` 发送至 `客户端`的自定义事件。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| args | any | 服务端通过该事件发送的数据。 |


