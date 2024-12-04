# S-🔗游戏外部数据请求

- **GameHttpAPI** 是可以链接外部网站数据的对象，用于对接第三方平台接口的操作。
- 可以通过全局对象 `http` 来使用它。
- 注意：非神岛白名单内的网址将无法建立有效的连接。

## 类

```typescript
declare const http: GameHttpAPI;
declare class GameHttpAPI {
    //...
}
```

## 属性
- [`ok`](./response#ok) : 响应是否成功。 HTTP 状态码的范围在 200-299
- [`status`](./response#status) : 响应数字状态码
- [`statusText`](./response#statusText) : 响应文本状态信息
- [`headers`](./response#headers) : 响应的请求头

## 方法
- [`json`](./request#json) : 获取JSON格式化响应网址数据
- [`text`](./response#text) : 获取字符串化响应网址数据
- [`arrayBuffer`](./response#arrayBuffer) : 获取二进制数据缓冲区响应网址数据
- [`close`](./response#close) : 关闭连接

## 接口
- [`GameHttpFetchRequestOptions`](./request#GameHttpFetchRequestOptions) : 请求时的配置
- [`GameHttpFetchHeaders`](./request#GameHttpFetchHeaders) : 请求头配置