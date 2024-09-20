# 🕺游戏模型动作

- **GameMotionController** 动作作为实体的一部分，动作模块负责控制由 Voxa 导入的模型所带有的动作。包括加载特定动作，暂停动作，重播动作和设置默认动作等。

## 类

```typescript
declare class GameMotionController {
    //...
}
```

## 属性
- [`target`](./handler#target) : 得到当前entity对象

## 方法
- [`loadByName`](./controller#loadByName) : 加载特定动作或动作序列，并返回对应的动作对象
- [`pause`](./controller#pause) : 暂停实体上的动作播放
- [`resume`](./controller#resume) : 恢复实体上的动作播放
- [`setDefaultMotionByName`](./controller#setDefaultMotionByName) : 设置默认动作
- [`play`](./handler#play) : 播放当前实体动作
- [`cancel`](./handler#cancel) : 中途打断此动作播放，并触发 onFinish 事件


### 监听方法
- [`onFinish`](./handler#onFinish) : 响应结束状态的监听函数

## 接口
- [`GameMotionConfig`](./controller#GameMotionConfig) : 动作配置
- [`GameMotionClipConfig`](./controller#GameMotionClipConfig) : 动作序列配置
- [`GameMotionEvent`](./handler#GameMotionEvent) : 动作事件