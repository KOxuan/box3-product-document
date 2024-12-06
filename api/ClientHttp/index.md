# C-🔗游戏外部数据请求

- **ClientHttp** 是`客户端`管理游戏外部请求的对象，用于对客户端向互联网进行请求的操作。
- 在`客户端脚本`中，可以通过全局对象 `http` 来使用它。

## 类

```typescript
declare const http: ClientHttp;

declare class ClientHttp {
    //...
}
```

## 方法
- [`fetch`](./requestAndResponse#fetch) : 请求指定网站，获取响应数据