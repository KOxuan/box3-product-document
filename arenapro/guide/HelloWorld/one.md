# 编写ts代码

在本项目中，`App.ts`是默认的服务端入口文件，类似于神岛的`index.js`。

如果你对ts语言不熟悉，可以查看：[typescript语言入门教程](https://typescript.p6p.net/about/experience.html)
## 功能需求
1.当玩家加入地图后，向控制台输出：`Hello World！{玩家名称}。`

2.当玩家加入地图后，给该玩家一个独特的对话框，内容为：`Hello World！{玩家名称}`

## 功能效果
![](/QQ20241025-105839.png)

### 第一步：监听玩家加入游戏
![](/QQ20241101-150107.png)


### 第二步：向控制台打印消息

![](/QQ20241101-150138.png)


### 第三步：向玩家弹出对话框
![](/QQ20241101-150220.png)

这里运用了泛型，目的是约束类型，方便语法提示，具体请看：[dialog](/codeDiff/dialog)

## 完整代码
```typescript
/** 当有新玩家加入游戏时，触发此回调函数
*   回调函数参数 entity 包含了玩家的信息
*/
world.onPlayerJoin(({ entity }) => {
  // 在控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  /** 创建一个对话框，向玩家展示欢迎信息
  *   对话框类型为 TEXT，即文本对话框
  *   设置对话框标题为 "欢迎新玩家"
  *   设置对话框内容为 "Hello World！${entity.player.name}"
  *   设置标题背景颜色为 (0.93, 0.95, 0.54, 1.00)
  *   设置内容背景颜色为 (0.54, 0.68, 0.95, 1.00)
  */
  entity.player.dialog<GameTextDialogParams>({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00),
  });
})
```
