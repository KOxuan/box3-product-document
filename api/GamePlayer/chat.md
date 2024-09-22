<script setup>
import '/style.css'
</script>
# 对话与互动
## 方法

#### <font id="API" />directMessage(<font id="Type">message: string</font>)<font id="Type">:  void</font>{#directMessage}
向玩家直接发送私信

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| message | 是 | | string | 私信内容 |

> 定义于 [#L11618](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11618)

::: details 点击查看示例代码
```javascript
world.onPlayerJoin(({ entity }) => {
  entity.player.directMessage(`${entity.player.name}, 你好。`);
})
```
:::
---


#### <font id="API" />dialog(<font id="Type">config:Partial<[GameDialogCall](./chat#GameDialogCall)></font>)<font id="Type">: Promise<[GameDialogResponse](./chat#GameDialogResponse)></font>{#dialog}
在游戏中显示一个对话框。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| config | 是 | | Partial‹GameDialogCall› | 互动配置 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹GameDialogResponse› | 异步返回玩家的选择/输入内容 |

> 定义于 [#L11650](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11650)

::: details 点击查看示例代码
```javascript
/* 玩家进入游戏时，弹出一个欢迎对话框 */
world.onPlayerJoin(({entity}) => {
  entity.player.dialog({
    type: GameDialogType.TEXT,
    title: "吉吉喵",
    content: `你好，${entity.player.name}，很高兴认识你。`,
  });
})
```
---
```javascript
// 先在场景中放置一个名称为 NPC 的实体。
const npc = world.querySelector('#npc');
npc.enableInteract = true;
npc.interactHint = npc.id;
npc.interactRadius = 16;

// 玩家与实体进行交互时触发
npc.onInteract(async ({entity}) => {
  const result = await entity.player.dialog({
    type: GameDialogType.SELECT,
    title: npc.id,
    lookTarget:npc,
    content: `${entity.player.name}，你想尝试挑战这个游戏吗？`,
    options: ['当然', '下次吧。'],
  }); console.log(`选择了第 index: ${result.index} 个选项: ${result.value}`) // 如果选了第一个选项，也就是'当然'。就会执行特定事件
  if (result.index === 0){
    npc.say(`${result.value}？那就来吧！`);
  }
});
```
:::
---


#### <font id="API" />cancelDialogs()<font id="Type">:  void</font>{#cancelDialogs}
关闭该玩家的所有打开的对话框。

> 定义于 [#L11659](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11659)
---


#### <font id="API" />share(<font id="Type">content: string</font>)<font id="Type">:  void</font>{#share}
为该玩家显示分享弹窗，并能够自定义分享内容。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| content | | | string | 分享弹窗的内容，限制长度为40个字以内，超出后截断，并在末尾添加省略号`……` |

> **自动标签**
> 通过此 API 调用弹出的分享弹框的内容末尾，会自动新起一行添加`**#神奇代码岛 #地图**`标签，自动添加的内容不计入限制长度内。
> **编辑模式**
> 编辑模式下，此API弹出的分享弹窗分享的地址是编辑模式的地址。


> 定义于 [#L11736](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11736)
---


#### <font id="API" /><font id="Event" >事件</font>onChat(<font id="Type">handler:(event:[GameChatEvent](/GameWorld/chat/resident#GameChatEvent))=>void</font>)<font id="Type">: [GameEventHandlerToken](/GameEventHandlerToken/)</font>{#onChat}
当前玩家发起聊天时调用

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | 是 | | function | 监听到聊天的处理函数 |

> 定义于 [#L11623](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11623)
::: details 点击查看示例代码
```javascript
entity.player.onChat(({ entity, message }) => {
  // 当玩家发送‘grow’文字的时候放大2倍，当玩家发送‘shrink’文字的时候缩小2倍
  if (entity && entity.isPlayer) {
    if (message === 'grow') {
      entity.player.scale *= 2;
    } else if (message === 'shrink') {
      entity.player.scale /= 2;
    }
    world.say('adjusting scale of ' + entity.player.name + ' to ' + entity.player.scale);
  }
})
```
:::


## 接口

#### <font id="API" />GameDialogCall {#GameDialogCall}
在游戏中显示一个对话框。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| type | [GameDialogType](./chat#GameDialogType) | **必选**，对话框的类型。 |
| content | string | **必选**，对话框显示的正文内容。支持使用'\' 换行。 |
| contentBackgroundColor | [GameRGBAColor](/GameRGBAColor/) | 对话框正文窗口的背景颜色。 |
| contentTextColor | [GameRGBAColor](/GameRGBAColor/) | 对话框正文字体的颜色。 |
| title | string | **必选**，对话框显示的标题名称。 |
| titleBackgroundColor | [GameRGBAColor](/GameRGBAColor/) | 对话框显示的标题窗口背景颜色。 |
| titleTextColor  | [GameRGBAColor](/GameRGBAColor/) | 对话框显示的标题字体颜色。 |
| hasArrow  | boolean | 如果接下来还有新的对话，在当前对话框中是否显示箭头提示。仅在**文本对话框**中使用。 |
| confirmText | string | 仅在**输入对话框**使用。确认按钮显示的文本。如果为空，按钮文本默认显示为 '确认 &#124; Confirm'. |
| options  | string[] | 仅在**选项对话框**中使用。在对话框中提供一些可供玩家选择的对话选项。 |
| placeholder | string | 使相机镜头朝向指定实体或坐标的位置。 |
| lookTarget  | [GameVector3](/GameVector3/) &#124; [GameEntity](/GameEntity/) | 使相机镜头朝向指定实体或坐标的位置。 |
| lookTargetOffset  | [GameVector3](/GameVector3/) | 如果相机指定了注视目标，可以设置基于目标位置的偏移。 |
| lookUp  | [GameVector3](/GameVector3/) | 调整相机抬头向量。使画面上下左右颠倒。 |
| lookEye  | [GameVector3](/GameVector3/) &#124; [GameEntity](/GameEntity/) | 调整相机的位置。 |
| lookEyeOffset  | [GameVector3](/GameVector3/) |  如果相机位置指定了实体，可以设置基于目标位置的偏移。 |



> 定义于 [#L12149](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L12149)
---


#### <font id="API" />GameDialogResponse{#GameDialogResponse}

对话框回应

如果没有完成对话而点击了其他地方，使对话框被取消，则返回 **null**

如果是文本对话框，回应`'success'`

如果是选项对话框，回应**输入框填写的内容字符串**

如果是选项对话框，回应 [GameDialogSelectResponse ](./chat#GameDialogSelectResponse)

> 定义于 [#L11325](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11325)

---


#### <font id="API" />GameDialogSelectResponse{#GameDialogSelectResponse}
选项对话框回应

在选项对话框中，玩家点击了按钮，会得到对话框的回应事件。返回被玩家按下的选项信息。

| **参数** | **类型** | **说明** |
| --- | --- | --- |
| index | number | 选项编号（从0开始计数） |
| value | string | 选项内容 |

> 定义于 [#L11321](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11321)


## 枚举

#### <font id="API" />GameDialogType{#GameDialogType}
对话框样式类型

| **属性** | **说明** |
| --- | --- |
| TEXT | **文本**样式对话框 |
| INPUT | **输入**样式对话框 |
| SELECT | **选择**样式对话框 |


> 定义于 [#L11316](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11316)
