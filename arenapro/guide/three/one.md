# 使用TypsScript编写游戏服务端代码

---

在本项目中，`App.ts`文件作为服务端代码的默认入口，其功能与神岛项目中的`index.js`相似。

若你对TypeScript语言不太熟悉，可以查阅[TypeScript语言入门教程](https://typescript.p6p.net/about/experience.html)以获取更多信息。

## 功能需求

1. 当玩家加入地图后，系统需在控制台输出包含玩家名称的欢迎信息：`Hello World！{玩家名称}`。

2. 同时，系统应向该玩家展示一个独特的对话框，内容同样为：`Hello World！{玩家名称}`。

3. 并且将对话框封装成函数，放置`b.ts`文件中，并导入到`App.ts`中使用。

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

#### 第四步：新建b.ts文件并封装

在服务端（server）下的src文件夹中新建一个`b.ts`文件，用于封装对话框的逻辑。

![](/QQ20241129-115545.png)

我们需要导出这个函数，以便在`App.ts`中调用。

注意：在ArenaPro中，我们统一使用`ESM`模块语法，服务端和客户端都可以使用。

`b.ts`
![](/QQ20241129-115944.png)

`App.ts`
![](/QQ20241129-120043.png)


## 完整代码示例

```typescript
// -----------------App.ts-----------------

// 导入dialog模块，用于在玩家加入时显示欢迎对话框
import { dialog } from './b'

// 当玩家加入游戏时触发
world.onPlayerJoin(({ entity }) => {
  // 打印欢迎信息到控制台
  console.log(`Hello World！${entity.player.name}`);

  // 调用dialog函数显示欢迎对话框
  dialog(entity);
});

// -----------------b.ts-----------------

/**
 * 显示欢迎对话框给指定的玩家实体
 * @param entity 游戏实体，包含玩家信息和方法
 */
export function dialog(entity: GameEntity & {
    player: GamePlayer;
    isPlayer: true;
}) {
    // 创建并显示一个文本类型的对话框
    entity.player.dialog<GameTextDialogParams>({
        type: GameDialogType.TEXT,
        title: '欢迎新玩家',
        content: `Hello World！${entity.player.name}`,
        titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00),
        contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00),
    });
}
```