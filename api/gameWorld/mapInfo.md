<script setup>
import '/style.css'
</script>
# 地图信息
## 属性

#### <font id="ReadOnly">只读</font> projectName`: string`
> 默认值：当前地图名称

本张地图名称，对应项目设置中的名称。

> 定义于 [#L9947](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9947)

---


#### <font id="ReadOnly">只读</font> currentTick`: number`    
> 默认值：0

世界当前的Tick计数。

> 定义于 [#L9948](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9948)

---


#### <font id="ReadOnly">只读</font> url <font id="Type">: [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)</font>  
> 默认值：当前地图链接

获取当前地图所在的URL链接地址。

> 定义于 [#L9984](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9684)
---


## 方法

#### <font id="Event">事件</font> onTick(<font id="Type">handler:(event:[GameChatEvent](#jneYE))=>void</font>) <font id="Type">: [GameEventHandlerToken](https://www.yuque.com/box3lab/api/gll7mhwasgn9hoq0/edit)</font>  

这是世界的计时事件，每64毫秒触发一次，Tick计数加1。

监听此事件可以让世界以64毫秒为间隔循环执行代码。

在理想情况下，每Tick为64毫秒。若网络发生延迟，可能会有变化。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| handler | _是_ | | function | 每64毫秒触发的处理函数 |

> 定义于 [#L9784](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9784)

::: details 点击查看示例代码
```javascript
// 监听此事件，会在控制台持续输出 tick 计数
world.onTick(({ tick }) => {
  console.log('tick ' + tick);
});
```
---
```javascript
// 当玩家进入地图
world.onPlayerJoin(({ entity }) => { // 每Tick的间隔向控制台输出提示
  const token = world.onTick(() => {
    console.log("tick !")
  }); // 2秒后，结束事件
  setTimeout(() => {
    console.log('cancel tick handler');
    token.cancel();  // 不再记录tick事件
  }, 2000);
});
```
:::

## 接口

#### GameTickEvent
每一刻(tick)触发一次的事件

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| tick | number | 事件发生时间 |
| prevTick | number | 上一个已处理的时刻 |
| elapsedTimeMS | number | 两个时刻之间的时间间隔(毫秒) |
| skip | boolean | 是否因为延迟而跳过了某些 Tick |

> 定义于 [#L12457](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L12457)

