# 使用JavaScript编写游戏服务端代码


::: warning

当你在VSCode编辑器中工作时，我们强烈推荐主要使用`TypeScript`进行代码编写。尽管我们提供了使用`JavaScript`的选项，但这是为了照顾编程初学者，旨在通过降低语言的学习难度，并利用更强大的编辑器功能来促进编程技能的提升。

⚠️ 请注意，JavaScript并不是我们插件主要推荐的语言，选择它主要是为了减少学习成本。

如果你需要配置代码检查，请参考：[JS相关配置指南](/bestPractices/allowJs)。

:::

### 项目概述

在本项目中，`App.js`文件是服务端代码的默认入口，其功能类似于神岛项目中的`index.js`。

### 功能需求

1. **玩家加入地图时**：
   - 向控制台输出欢迎信息，格式为：`Hello World！{玩家名称}。`
   - 给该玩家展示一个独特的对话框，内容为：`Hello World！{玩家名称}`。

### 功能效果

![功能效果展示](/QQ20241025-105839.png)

### 步骤详解

#### 第一步：监听玩家加入游戏事件

![监听玩家加入事件界面](/QQ20241025-105932.png)

#### 第二步：在控制台打印欢迎信息

![控制台打印信息界面](/QQ20241025-110039.png)

#### 第三步：向玩家弹出欢迎对话框

![弹出对话框界面](/QQ20241025-110125.png)

### 完整代码实现

```javascript
/**
 * 当有新玩家加入游戏时，触发此回调函数。
 * 回调函数参数包含玩家的实体信息。
 */
world.onPlayerJoin(({ entity }) => {
  // 在控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  /**
   * 创建一个对话框，向玩家展示欢迎信息。
   * 对话框类型设置为TEXT（文本对话框）。
   * 设置对话框标题为"欢迎新玩家"。
   * 设置对话框内容为"Hello World！{玩家名称}"。
   * 设置标题背景颜色为浅黄色（RGBA值：0.93, 0.95, 0.54, 1.00）。
   * 设置内容背景颜色为浅蓝色（RGBA值：0.54, 0.68, 0.95, 1.00）。
   */
  entity.player.dialog({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00),
  });
});
```
