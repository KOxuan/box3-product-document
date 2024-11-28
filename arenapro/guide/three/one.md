# 使用TypsScript编写游戏服务端代码

---

在本项目中，`App.ts`文件作为服务端代码的默认入口，其功能与神岛项目中的`index.js`相似。

若你对TypeScript语言不太熟悉，可以查阅[TypeScript语言入门教程](https://typescript.p6p.net/about/experience.html)以获取更多信息。

## 功能需求

1. 当玩家加入地图后，系统需在控制台输出包含玩家名称的欢迎信息：`Hello World！{玩家名称}`。

2. 同时，系统应向该玩家展示一个独特的对话框，内容同样为：`Hello World！{玩家名称}`。

## 功能效果预览

![功能效果预览图](/QQ20241025-105839.png)

### 实现步骤

#### 第一步：监听玩家加入游戏事件

![监听玩家加入游戏事件示意图](/QQ20241101-150107.png)

通过监听`world.onPlayerJoin`事件，我们可以获取到新加入玩家的相关信息。

#### 第二步：向控制台打印欢迎信息

![向控制台打印欢迎信息示意图](/QQ20241101-150138.png)

利用`console.log`方法，我们可以将包含玩家名称的欢迎信息输出到控制台。

#### 第三步：向玩家弹出欢迎对话框

![向玩家弹出欢迎对话框示意图](/QQ20241101-150220.png)

通过调用`entity.player.dialog`方法，我们可以向玩家展示一个包含欢迎信息的对话框。在这里，我们使用了泛型`<GameTextDialogParams>`来约束对话框的参数类型，以便获得更好的语法提示和类型检查。

## 完整代码示例

```typescript
/** 当有新玩家加入游戏时触发的回调函数 */
world.onPlayerJoin(({ entity }) => {
  // 在控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  /** 创建一个对话框，向玩家展示欢迎信息 */
  entity.player.dialog<GameTextDialogParams>({
    type: GameDialogType.TEXT, // 对话框类型为文本
    title: '欢迎新玩家', // 对话框标题
    content: `Hello World！${entity.player.name}`, // 对话框内容
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00), // 标题背景颜色
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00), // 内容背景颜色
  });
});
```