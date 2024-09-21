<script setup>
import '/style.css'
</script>
# 画面滤镜
## 属性

#### <font id="API" />colorLUT<font id="Type">: string </font>{#colorLUT}
> 默认值：''

用于渲染玩家所见游戏世界的色调

> 定义于 [#L11819](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11819)

```javascript
world.onPlayerJoin(({ entity:{ player } }) => {
  // 玩家进入游戏的时候随机更改游戏世界的色调
  const luts = resources.ls('lut');
  const randLut = luts[(luts.length * Math.random()) | 0].path;
  player.directMessage('lut = ' + randLut)
  player.colorLUT = randLut;
});
```

