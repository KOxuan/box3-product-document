<script setup>
import '/style.css'
</script>
# 响应数据
## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>ok<font id="Type">: boolean</font>{#ok} 
响应是否成功。
HTTP 状态码的范围在 200-299

> 定义于 [#L13252](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13252)
---


#### <font id="API" /><font id="ReadOnly">只读</font>status<font id="Type">: number</font> {#status} 


响应数字状态码。

> 定义于 [#L13244](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13244)
---


#### <font id="API" /><font id="ReadOnly">只读</font>statusText<font id="Type">: string</font>{#statusText} 

响应文本状态信息。

> 定义于 [#L13245](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13245)
---


#### <font id="API" /><font id="ReadOnly">只读</font>headers<font id="Type">: [GameHttpFetchHeaders](/GameHttpAPI/request#GameHttpFetchHeaders)</font>{#headers} 

响应的请求头。

> 定义于 [#L13246](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13246)

## 方法

#### <font id="API" />json()<font id="Type">: Promise‹any›</font>{#json} 

获取JSON格式化响应网址数据。

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹any› | 异步JSON格式化后返回网址数据 |

> 定义于 [#L13247](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13247)

---


#### <font id="API" />text()<font id="Type">: Promise‹string›</font>{#text} 
获取字符串化响应网址数据。

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹string› | 异步返回网址字符串数据 |

> 定义于 [#L13248](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13248)

---


#### <font id="API" />arrayBuffer()<font id="Type">: Promise‹ArrayBuffer›</font>{#arrayBuffer} 
获取二进制数据缓冲区响应网址数据。

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹ArrayBuffer› | 异步二进制数据缓冲区返回网址字符串数据 |

> 定义于 [#L13249](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13249)

---


#### <font id="API" />close()<font id="Type">: Promise‹void›</font>{#close} 
关闭连接。


> 定义于 [#L13250](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13250)