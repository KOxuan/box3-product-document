<script setup>
import '/style.css'
</script>
# 事件回调函数与异步处理机制

> <font id="Event">事件</font>，特别是在onXXX和nextXXXX这类方法中，它们均作为BOX3的监听事件函数。

使用**回调函数**形式调用：onXXXX
```javascript
// 玩家进入地图时，向TA发送一条私信。
world.onPlayerJoin(({ entity }) => {
  entity.player.directMessage(`你好，${entity.player.name}`);
});
```

使用**异步**形式调用：nextXXX
```javascript
//等待玩家进入游戏，向TA发送一条私信。执行一次后续不再执行
async function waitForPlayers() {
  const { entity } = await world.nextPlayerJoin();
  entity.player.directMessage(`你好，${entity.player.name}`);
}
//调用异步函数
waitForPlayers();

//-或-
(async () => {
  const { entity } = await world.nextPlayerJoin();
  entity.player.directMessage(`你好，${entity.player.name}`);
})();
```

这两个代码片段都用于在玩家进入游戏时发送私信，但它们在执行时机和代码结构上有所不同。

1. `world.nextPlayerJoin()`**函数：** 
   - 这个函数是一个异步函数，使用 `await` 关键字等待 `world.nextPlayerJoin()` 返回新的玩家实体。
   - 当有新玩家加入时，它使用 `entity.player.directMessage()` 向该玩家发送私信。
   - 这个函数是同步执行的，意味着它会一直等待直到有新玩家加入。
2. `world.onPlayerJoin()`**函数：** 
   - 这个监听器使用了 `world.onPlayerJoin` 方法，这是一个事件监听器，当有新玩家加入时会被触发。
   - 它接收一个回调函数，这个函数会在每次有新玩家加入时执行。
   - 在回调函数中，使用 `entity.player.directMessage()` 向新加入的玩家发送私信。
   - 这个监听器可以处理多个玩家加入的情况，而 waitForPlayers() 函数只能处理第一个加入的玩家。
- `world.nextPlayerJoin()` 函数通过异步等待实现对每个新加入的玩家发送私信，代码更简洁。
- `world.onPlayerJoin()` 监听器适合在需要更灵活地处理多个玩家加入的情况时使用，可以添加更复杂的逻辑。
