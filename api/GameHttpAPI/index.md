# S-🔗 游戏外部数据请求

**GameHttpAPI** 是神奇代码岛提供的网络请求接口，它提供了以下核心功能：

- 外部数据请求：支持与外部网站和第三方平台进行数据交互
- 多格式响应：支持 JSON、文本和二进制数据的响应处理
- 请求配置：提供灵活的请求头和选项配置

你可以通过全局对象 `http` 来使用这些功能。

::: warning 注意
非神岛白名单内的网址将无法建立有效的连接。
:::

## 类定义

```typescript
declare const http: GameHttpAPI;
declare class GameHttpAPI {
  //...
}
```

## 属性列表

### 响应状态

- [`ok`](./response#ok) : 响应是否成功，HTTP 状态码在 200-299 范围内时返回 true
- [`status`](./response#status) : HTTP 响应状态码
- [`statusText`](./response#statusText) : HTTP 响应状态的文本描述

### 响应头

- [`headers`](./response#headers) : HTTP 响应头信息，包含服务器返回的元数据

## 方法

### 数据处理

- [`json`](./request#json) : 将响应数据解析为 JSON 格式
- [`text`](./response#text) : 将响应数据解析为文本字符串
- [`arrayBuffer`](./response#arrayBuffer) : 将响应数据解析为二进制数据缓冲区

### 连接管理

- [`close`](./response#close) : 主动关闭 HTTP 连接

## 接口定义

### 请求配置

- [`GameHttpFetchRequestOptions`](./request#GameHttpFetchRequestOptions) : HTTP 请求的配置选项，包含方法、请求头等
- [`GameHttpFetchHeaders`](./request#GameHttpFetchHeaders) : HTTP 请求头的配置接口
