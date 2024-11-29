# 使用JavaScript编写游戏服务端代码


::: warning

当你在VSCode编辑器中工作时，我们强烈推荐主要使用`TypeScript`进行代码编写。尽管我们提供了使用`JavaScript`的选项，但这是为了照顾编程初学者，旨在通过降低语言的学习难度，并利用更强大的编辑器功能来促进编程技能的提升。

⚠️ 请注意，JavaScript并不是我们插件主要推荐的语言，选择它主要是为了减少学习成本。

如果你需要配置代码检查，请参考：[JS相关配置指南](/bestPractices/allowJs)。

:::

### 项目概述

在本项目中，`App.js`文件是服务端代码的默认入口，其功能类似于神岛项目中的`index.js`。

### 功能需求


1. 当玩家加入地图后，系统需在控制台输出包含玩家名称的欢迎信息：`Hello World！{玩家名称}`。

2. 同时，系统应向该玩家展示一个独特的对话框，内容同样为：`Hello World！{玩家名称}`。

3. 并且将对话框封装成函数，放置`b.js`文件中，并导入到`App.js`中使用。

### 功能效果

![功能效果展示](/QQ20241025-105839.png)

### 步骤详解

#### 第一步：监听玩家加入游戏事件

![监听玩家加入事件界面](/QQ20241025-105932.png)

#### 第二步：在控制台打印欢迎信息

![控制台打印信息界面](/QQ20241025-110039.png)

#### 第三步：向玩家弹出欢迎对话框

![弹出对话框界面](/QQ20241025-110125.png)

#### 第四步：新建b.js文件并封装

在服务端（server）下的src文件夹中新建一个`b.js`文件，用于封装对话框的逻辑。

![](/QQ20241129-120537.png)

我们需要导出这个函数，以便在`App.js`中调用。

注意：在ArenaPro中，我们统一使用`ESM`模块语法，服务端和客户端都可以使用。

`b.js`
![](/QQ20241129-120550.png)

`App.js`
![](/QQ20241129-120601.png)

### 完整代码实现

```javascript
// -----------------App.js-----------------

// 导入dialog模块，用于在玩家加入时显示欢迎对话框
import { dialog } from './b'

// 当玩家加入游戏时触发
world.onPlayerJoin(({ entity }) => {
  // 打印欢迎信息到控制台
  console.log(`Hello World！${entity.player.name}`);

  // 调用dialog函数显示欢迎对话框
  dialog(entity);
});

// -----------------b.js-----------------

/**
 * 显示欢迎对话框给指定的玩家实体
 * @param entity 游戏实体，包含玩家信息和方法
 */
export function dialog(entity) {
    // 创建并显示一个文本类型的对话框
    entity.player.dialog({
        type: GameDialogType.TEXT,
        title: '欢迎新玩家',
        content: `Hello World！${entity.player.name}`,
        titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00),
        contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00),
    });
}
```
