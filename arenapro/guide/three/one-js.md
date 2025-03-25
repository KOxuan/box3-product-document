# 使用 JavaScript 编写游戏服务端代码

::: warning

当你在 VSCode 编辑器中工作时，我们强烈推荐主要使用`TypeScript`进行代码编写。尽管我们提供了使用`JavaScript`的选项，但这是为了照顾编程初学者，旨在通过降低语言的学习难度，并利用更强大的编辑器功能来促进编程技能的提升。

⚠️ 请注意，JavaScript 并不是我们插件主要推荐的语言，选择它主要是为了减少学习成本。

如果你需要配置代码检查，请参考：[JS 相关配置指南](/bestPractices/allowJs)。

:::

## 项目结构

- **入口文件**: `App.js` 是服务端代码的默认入口，其功能类似于神岛项目中的`index.js`
- **目录结构**:
  - `server` 文件夹：服务端代码
  - `client` 文件夹：客户端代码
  - `src` 文件夹：脚本文件

## 功能实现

### 核心功能

1. **控制台输出**

   - 当玩家加入地图后，系统需在控制台输出包含玩家名称的欢迎信息：`Hello World！{玩家名称}`

2. **玩家对话框**

   - 同时，系统应向该玩家展示一个独特的对话框，内容同样为：`Hello World！{玩家名称}`

3. **功能封装**
   - 将对话框功能封装成函数，放置`b.js`文件中，并导入到`App.js`中使用

![功能效果展示](/QQ20241025-105839.png)

### 实现步骤

1. **监听玩家加入事件**
   ![监听玩家加入事件界面](/QQ20241025-105932.png)

2. **控制台打印信息**
   ![控制台打印信息界面](/QQ20241025-110039.png)

3. **弹出欢迎对话框**
   ![弹出对话框界面](/QQ20241025-110125.png)

4. **创建功能模块**
   - 在`src`文件夹中新建`b.js`文件，用于封装对话框逻辑
     ![新建b.js文件](/QQ20241129-120537.png)

## 代码实现

### App.js

```javascript
// 导入dialog模块
import { dialog } from "./b";

// 玩家加入事件处理
world.onPlayerJoin(({ entity }) => {
  // 控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  // 显示欢迎对话框
  dialog(entity);
});
```

### b.js

```javascript
/**
 * 显示欢迎对话框
 * @param {Object} entity - 游戏实体，包含玩家信息和方法
 */
export function dialog(entity) {
  entity.player.dialog({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.0),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.0),
  });
}
```

![b.js代码示例](/QQ20241129-120550.png)
![App.js代码示例](/QQ20241129-120601.png)
