<script setup>
import '/style.css'
</script>
# 外部请求

## 方法

#### <font id="API" />fetch(<font id="Type">url: string, options?:Partial<[GameHttpFetchRequestOptions](./request#GameHttpFetchRequestOptions)></font>)<font id="Type">: Promise<[GameHttpFetchResponse](/GameHttpAPI/response)></font>{#fetch}

请求指定网站，获取响应数据

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| url | 是 | | string | 网址 |
| options | | | Partial‹GameHttpFetchRequestOptions› | 请求配置 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹GameHttpFetchResponse› | 异步返回响应数据 |

> 定义于 [#L13260](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13260)



## 接口

#### <font id="API" />GameHttpFetchRequestOptions{#GameHttpFetchRequestOptions}
请求时的配置。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| timeout | number | 超时时间（毫秒ms），超过后断开请求 |
| method | 'OPTIONS' &#124; 'GET' &#124; 'HEAD' &#124; 'PUT' &#124; 'POST' &#124; 'DELETE' &#124; 'PATCH' | 请求方式 |
| headers | [GameHttpFetchHeaders](./request#GameHttpFetchHeaders) | 请求头对象 |
| body | string &#124; ArrayBuffer | 请求体 |

> 定义于 [#L13237](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13237)


---


#### <font id="API" />GameHttpFetchHeaders{#GameHttpFetchHeaders}
请求头配置。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| [name: string] | string &#124; string[] | 请求头列表 |

> 定义于 [#L13234](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13234)

