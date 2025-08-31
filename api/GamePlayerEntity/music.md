<script setup>
import '/style.css'
</script>
# 音乐音效
## 属性

#### <font id="API" />music<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#music}
> 默认值： ''

为指定的玩家播放背景音乐（循环播放），此声音仅该玩家能听见，其他玩家无法听到。 背景音乐的音量会根据用户在[设置-声音]更改。


---


#### <font id="API" />action0Sound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#action0Sound}
> 默认值： ''

当玩家按下 'action0' 按键（鼠标左键 / 虚拟按钮A）时，播放的音效。


---


#### <font id="API" />action1Sound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#action1Sound}
> 默认值： ''

当玩家按下 'action1' 按键（鼠标右键 / 虚拟按钮B）时，播放的音效。


---


#### <font id="API" />crouchSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#crouchSound}
> 默认值： ''

当玩家按下 'crouchButton ' 按键进行蹲下时，播放的音效。


---


#### <font id="API" />jumpSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#jumpSound}
> 默认值： 'audio/jump.mp3'

当玩家按下 'jumpButton ' 按键进行跳跃时，播放的音效


---


#### <font id="API" />doubleJumpSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#doubleJumpSound}
> 默认值：'audio/double_jump.mp3'

当玩家触发二段跳时，播放的音效


---


#### <font id="API" />landSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#landSound}
> 默认值：'audio/land.mp3'

玩家落地时，播放的音效


---


#### <font id="API" />enterWaterSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#enterWaterSound}
> 默认值：'audio/dive.mp3'

当玩家进入液体时，播放的音效


---


#### <font id="API" />leaveWaterSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#leaveWaterSound}
> 默认值：'audio/land.mp3'

当玩家离开液体时，播放的音效


---


#### <font id="API" />swimSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#swimSound}
> 默认值：'audio/swim.mp3'

当玩家正在游泳时，播放的音效

:::warning
注：游泳的音效在前进时才会循环播放。如果在水中静止不动，不会播放音效。
:::


---


#### <font id="API" />spawnSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#spawnSound}
> 默认值：'audio/spawn.mp3'

当玩家重生时，播放的音效。通过`entity.player.onRespawn()`触发


---


#### <font id="API" />stepSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#stepSound}
> 默认值：'audio/step.mp3'

当玩家行走时，每迈出一步，播放的音效


---


#### <font id="API" />startFlySound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#startFlySound}
> 默认值：''

玩家开始飞行时的音效


---


#### <font id="API" />stopFlySound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#stopFlySound}
> 默认值：''

玩家结束飞行时播放的音效



## 方法

#### <font id="API" />sound(<font id="Type">config:[GameSoundEffect](/GameWorld/music#GameSoundEffect) | string</font>)<font id="Type">: [Sound](/Sound/)</font>{#sound}

为指定的玩家播放声音，此声音仅该玩家能听见，其他玩家无法听到。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| config | 是 | | GameSoundEffect &#124; string | 音乐配置，也可以只填写音乐路径 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| GameSound | 音乐对象 |




::: details 点击查看示例代码
```javascript
// 玩家进入范围时，播放 `boost` 声音特效。
const area = world.addZone({
  selector: 'player',
  bounds: {
    lo: [59,  8, 59],
    hi: [66, 20, 66],
  },
})

// 有玩家进入区域
area.onEnter(({ entity }) => {
  entity.player.sound('audio/whistle.mp3')
});

// 有玩家离开区域
area.onLeave(({ entity }) => {
  entity.player.sound('audio/boost.mp3')
});
```
---
```javascript
/* 玩家蹲着走路时, 有不同的行走声音特效。*/

// 蹲下声音
const crouchSound = new GameSoundEffect();
crouchSound.sample = 'audio/hurt.mp3';

// 蹲下行走声音
const crouchWalkSound = new GameSoundEffect();
crouchWalkSound.sample = 'audio/land.mp3';

// 玩家进入游戏时
world.onPlayerJoin(({ entity }) => { // 备份原始的行走声音
  lastStepSound = entity.player.stepSound // 设置蹲下按钮的音效
  entity.player.crouchSound = crouchSound // 按下蹲下按钮
  entity.player.onPress(({ button }) => {
    if(button === GameButtonType.CROUCH){
      // 将走路声音替换为蹲下行走的声音
      entity.player.stepSound = crouchWalkSound;
    }
  }); // 松开蹲下按钮
  entity.player.onRelease(({ button }) => {
    if(button === GameButtonType.CROUCH){
      // 将走路声音还原初始的声音
      entity.player.stepSound = lastStepSound;
    }
  });

});
```
:::

