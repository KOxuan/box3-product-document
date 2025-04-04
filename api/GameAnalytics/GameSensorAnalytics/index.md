# S-📊 游戏神策分析

**GameSensorAnalytics** 是神策平台的专业数据分析模块，提供完整的游戏数据采集与分析能力。通过该模块，你可以追踪玩家行为、记录关键事件并构建全面的数据分析体系。

你可以通过全局对象 `analytics.sensor` 来使用这些功能。

::: warning 注意
神策分析平台仅支持企业用户使用。
:::

## 类定义

```typescript
declare class GameSensorAnalytics {
  //...
}
```

## 方法

- [`init`](./track#init) : 初始化神策埋点配置方法
- [`track`](./track#track) : 追踪数据事件方法
