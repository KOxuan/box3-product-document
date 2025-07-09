<script setup>
import '/style.css'
</script>

# 音乐音效

> **上传音效**
>
> 编辑器目前内置了 30+款音效，可以在菜单- **[文件管理]** 的搜索 .mp3 查看。点击文件后，会弹出声音文件的详情属性。点击 **位置** 即可复制文件路径，在脚本中使用对应的方法播放。
>
> 如需上传自定义声音，可以在 **[文件管理]** 窗口，点击右下角浮动的加号按钮- **[上传音频]** 。

## 属性

#### <font id="API" />chatSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#chatSound}

> 默认值：'audio/chat.mp3'

当实体说话时，播放聊天音效。通过`say()`触发。

## ## <font id="API" />hurtSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#hurtSound}

> 默认值：'audio/hurt.mp3'

当实体触发受伤事件时，播放受伤音效。通过`onTakeDamage()`触发

---

#### <font id="API" />dieSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#dieSound}

> 默认值：'audio/die.mp3'

当实体触发死亡事件时，播放死亡音效。通过`onDie()`触发

---

#### <font id="API" />interactSound<font id="Type">: [GameSoundEffect](/GameWorld/music#GameSoundEffect)</font>{#interactSound}

> 默认值：无

当实体进行互动时，播放互动音效。此音效仅互动的玩家可听见。通过`onInteract()`触发。

## 方法

#### <font id="API" />sound(<font id="Type">config:[GameSoundEffect](/GameWorld/music#GameSoundEffect) | string</font>)<font id="Type">: [Sound](/Sound/)</font>{#sound}

在实体所在的位置播放声音。

**输入参数**

| **参数** | **必填** | **默认值** | **类型**                      | **说明**                       |
| -------- | -------- | ---------- | ----------------------------- | ------------------------------ |
| config   | 是       |            | GameSoundEffect &#124; string | 音乐配置，也可以只填写音乐路径 |

**返回值**

| **类型**  | **说明** |
| --------- | -------- |
| GameSound | 音乐对象 |

::: details 点击查看示例代码

```javascript
entity.sound("audio/chat.mp3");
```

---

```javascript
// 定义播放的声音参数
const bounceSound = {
  sample: "audio/chat.mp3", // 声音文件
  radius: 32, // 声音范围
  gain: 1, // 音量增益
  pitch: 1, // 音高调节
  gainRange: 0, // 音量增益方差
  pitchRange: 0, // 音高增益方差
};

// 每3秒，让所有玩家跳起。并播放声音。
const bounceEvent = setInterval(() => {
  world.querySelectorAll("player").forEach((e) => {
    e.sound(bounceSound); // 播放声音
    e.velocity.y += 1; // 给实体施加往上方向运动的力。
  });
  console.log("Jump");
}, 3000);

// 9秒后，停止弹跳。
setTimeout(() => {
  clearInterval(bounceEvent);
  console.log("Cancel Jump Event");
}, 9000);
```

---

```javascript
// 当开门/关门时，播放开门或关门的声音。
function toggleDoor(entity) {
  if (isOpen) {
    entity.sound("audio/door_close.mp3");
  } else {
    entity.sound("audio/door_open.mp3");
  }
  isOpen = !isOpen;
}
```

:::
