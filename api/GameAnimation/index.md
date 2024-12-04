<script setup>
import '/style.css'
</script>
# S-动画对象
:::info
**GameAnimation**，作为 `animate()` 方法的统一返回类型，支持后续的动画操作。 

Animation 动画，可对World世界、Entity实体及Player玩家等对象添加动画。动画将在本地播放运行，获得更好的性能，播放更流畅、平滑。
:::


## 属性

#### <font id="API" />currentTime<font id="Type">: number </font>
> 默认值：0

动画的当前播放时间（多少动画帧）



---


#### <font id="API" /><font id="ReadOnly">只读</font>playState<font id="Type">: [GameAnimationPlaybackState](./#GameAnimationPlaybackState)</font>
> 默认值：GameAnimationPlaybackState.PENDING

当前动画播放状态


---


#### <font id="API" />playbackRate<font id="Type">: number </font>
> 默认值：1

每tick动画播放速度


---


#### <font id="API" />startTime<font id="Type">: number </font>
> 默认值：0

动画开始的时间tick


---


#### <font id="API" /><font id="ReadOnly">只读</font>target<font id="Type">: [GameWorld](/GameWorld/) | [GameEntity](/GameEntity/) | [GamePlayer](/GamePlayer/)</font> 

动画作用的对象



## 方法

#### <font id="API" />play(<font id="Type">playback?:Partial‹[GameAnimationPlaybackConfig](./#GameAnimationPlaybackConfig)›</font>)<font id="Type">:  void</font>
播放或者恢复动画的播放

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| playback | 否 || Partial‹GameAnimationPlaybackConfig›|播放的参数|



---


#### <font id="API" />cancel()<font id="Type">:  void</font>
暂停动画的播放


---


#### <font id="API" />keyframes()<font id="Type">: Partial‹KeyframeType›[]</font>
获取所有的动画关键帧

**返回值**

| **类型** | **说明** |
| --- | --- |
| Partial‹KeyframeType›[] | 已配置的动画关键帧列表 |



---


#### <font id="API" /><font id="Event" >事件</font>onFinish(<font id="Type">handler:(event:[GameAnimationEvent](./#GameAnimationEvent))=>void</font>)<font id="Type">: [GameEventHandlerToken](/GameEventHandlerToken/)</font>
当动画结束播放时触发

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | 是 ||function|监听到动画播放完毕时的处理函数|



---


#### <font id="API" /><font id="Event" >事件</font>onReady(<font id="Type">handler:(event:[GameAnimationEvent](./#GameAnimationEvent))=>void</font>)<font id="Type">: [GameEventHandlerToken](/GameEventHandlerToken/)</font>
当动画开始播放时触发

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | 是 ||function|监听到动画开始播放时的处理函数|



## 接口

#### <font id="API" />GameAnimationEvent{#GameAnimationEvent}
**动画事件**

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| animation | GameAnimation | 动画对象 |
| target | TargetType | 播放动画的目标对象 |
| cancelled | boolean | 动画是否被取消 |
| tick | number | 事件发生时间 |



---


#### <font id="API" />GameAnimationPlaybackConfig{#GameAnimationPlaybackConfig}
用于动画播放配置的参数组

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| delay | number | 播放延迟 |
| direction | [GameAnimationDirection](#krLiY) | 播放方向 |
| duration | number | 播放时长 |
| endDelay | number | 结束延迟 |
| iterationStart | number | 反复播放开始时间 |
| iterations | number | 反复播放次数 |
| startTick | number | 开始时间 |



---


#### <font id="API" />GameAnimationPlaybackState{#GameAnimationPlaybackState}
动画播放状态

| **属性** | **说明** |
| --- | --- |
| FINISHED | 已完成 |
| PENDING | 挂起等待 |
| RUNNING | 播放中 |



### 示例代码
```javascript
//先从模型库搜索"电梯"的模型, 并把它拖入场景中
const elevator = world.querySelector('#电梯-1') //获取电梯板实体
elevator.fixed = true//不受外力影响
elevator.collides = true//允许碰撞
const startPos = [64, 11, 64]//电梯的最低位置
const endPos = [64, 50, 64]//电梯的最高位置

const ani = elevator.animate([// 1+5+1+2=9, 总时间15秒被切成9份
  { position: startPos, duration: 1 },// 1/9 的时间停留在地面
  { position: startPos, duration: 5 },// 5/9 的时间用于地面往楼顶移动
  { position: endPos, duration: 1 },// 1/9 的时间停留在楼顶
  { position: endPos, duration: 2 },// 2/9 的时间从楼顶回到地面
], {
  duration: 16 * 15, //播放一个循环共用时15秒,
  iterations: 1,//动画只播放1次
  direction: GameAnimationDirection.WRAP,//让动画实体从终点回到起点
})

ani.onReady(() => {//当动画开始播放时
  world.say('电梯准备启动')
})

ani.onFinish(() => {//当动画结束播放时
  world.say('电梯自己停了')
})

world.onPress(({ button }) => {
  if (button === GameButtonType.ACTION0) {//左键重新播放动画
    ani.play({
      duration: 16 * 15, //播放一个循环共用时15秒(每秒16帧),
      iterations: Infinity,//动画无限次循环播放
      direction: GameAnimationDirection.WRAP,//让动画实体从终点回到起点
    })
  }
  else if (button === GameButtonType.ACTION1) {//右键停止动画
    ani.cancel()
  }
})
```
---
```javascript
//先从模型库搜索"单元方块"的模型, 并把它拖入场景中
const vox = world.querySelector('#单元方块-1') //获取实体
vox.meshScale = vox.meshScale.scale(4) //让实体变大4倍

const ani = vox.animate([
  { position: [0, 12, 0], meshColor: [1, 1, 0, 1] },
  { position: [0, 12, 127], meshColor: [1, 0, 0, 1] },
  { position: [127, 12, 127], meshColor: [0, 1, 0, 1] },
  { position: [127, 12, 0], meshColor: [0, 0, 1, 1] },
], {
  iterations: 3,//兜3圈
  direction: GameAnimationDirection.WRAP,//从终点回到起点
  duration: 16 * 5, //兜一圈5秒(每秒16帧)
})

ani.onReady(() => {//当动画开始播放时
  world.say('开始兜圈')
})

ani.onFinish(() => {//当动画结束播放时
  world.say('兜圈结束')
})
```
