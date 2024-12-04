<script setup>
import '/style.css'
</script>
# 音乐音效
## 属性

#### <font id="API" />ambientSound<font id="Type">: [GameSoundEffect](./music#GameSoundEffect)</font>{#ambientSound}
> 默认值：无

改变地图背景音乐，从地图运行开始循环播放。

背景音乐的音量会根据用户在[设置-声音]更改。





::: details 点击查看示例代码
```javascript
// 将背景音乐设置为下雨声
world.ambientSound.sample = 'audio/rain.mp3';
```
:::
---


#### <font id="API" />playerJoinSound<font id="Type">: [GameSoundEffect](./music#GameSoundEffect)</font>{#playerJoinSound}
> 默认值：无

当玩家进入地图时，播放的音效。通过world.onPlayerJoin()触发。





---


#### <font id="API" />playerLeaveSound<font id="Type">: [GameSoundEffect](./music#GameSoundEffect)</font>{#playerLeaveSound}
> 默认值：无

当玩家离开地图时，播放的音效。通过world.onPlayerLeave()触发。




---


#### <font id="API" />placeVoxelSound<font id="Type">: [GameSoundEffect](./music#GameSoundEffect)</font>{#placeVoxelSound}
> 默认值："audio/place_block.mp3"

方块被放置时，播放的音效。通过voxels.setVoxel()触发。




---


#### <font id="API" />breakVoxelSound<font id="Type">: [GameSoundEffect](./music#GameSoundEffect)</font>{#breakVoxelSound}
> 默认值："audio/break_block.mp3"

方块被销毁时，播放的音效。通过voxels.setVoxel()触发。





## 方法

#### <font id="API" />sound(<font id="Type">config:[GameSoundEffect](./music#GameSoundEffect) | string</font>) <font id="Type">: [Sound](/Sound/)</font>{#sound}

播放一段声音，所有玩家都能听到。在[文件管理]窗口右下角[上传音频]，通过 .sound()方法传入声音文件的路径。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| config | _是_ | | GameSoundEffect &#124; string | 音乐配置，也可以只填写音乐路径 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| GameSound | 音乐对象 |




:::info
**💡提示**

除了 world.sound()，Entity 和 Player 也拥有类似播放声音的功能。

使用 entity.sound() 可以在实体的位置播放声音，设置 radius 范围后，周围的玩家都可以听见声音。

使用 entity.player.sound() 仅某个玩家自己可以听到声音，其他玩家都听不到。
:::

::: details 点击查看示例代码
```javascript
// 播放一段声音，所有玩家都能听见
world.sound('audio/drama.mp3');
```
---
```javascript
// 在指定的位置播放 'airhorn' 声音
world.sound({
  sample: 'audio/airhorn.mp3',
  position: new GameVector3(64, 10, 64),
  radius: 64  // 只有距离位置64半径的玩家能听见。(1个方块的距离是16)
```
:::

## 接口

#### <font id="API" />GameSoundEffect{#GameSoundEffect}
使用 Sound()方法播放声音时，传入的参数。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| sample | string | 声音文件路径。可在文件管理器中上传自定义声音。如 'audio/chat.mp3'在指定声音文件路径时，必须确保文件已经上传在文件管理器中。 |
| radius | number | 声音范围。默认为32。距离实体越近，声音听的越清晰。 |
| gain | number | 音量增益。正常为1，数值越大，声音越响。 |
| gainRange | number | 音量增益方差。计算公式为：effect.gain + (Math.random() - 0.5) * effect.gainRange |
| pitch | number | 音高增益。正常为1。大于1，声音播放越快。小于1，声音播放越慢。 |
| pitchRange | number | 音高增益方差。计算公式为：effect.pitch + (Math.random() - 0.5) * effect.pitchRange |



