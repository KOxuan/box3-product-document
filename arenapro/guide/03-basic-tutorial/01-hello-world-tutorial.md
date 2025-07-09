# 基础教程：你的第一个 ts 脚本

你已经完成了所有准备工作，现在让我们正式踏上 ArenaPro 的创作之旅！

本教程将手把手地引导你完成一个完整的开发流程：**编写代码 → 构建上传 → 运行测试**。我们将实现一个最经典的功能：`当玩家进入地图时，向他们显示一条欢迎信息。`

::: tip 🤔 JS vs. TS?
你可能已经注意到，我们的示例是 ts 脚本。

我们**强烈推荐**你使用 TypeScript，因为它能提供无与伦比的代码自动补全和错误检查功能，极大地提升开发效率和代码质量。

想了解更多？请查阅我们的 **[JavaScript vs. TypeScript 指南](/bestPractices/typescript-vs-javascript)**。

:::

## 第 1 步：编写代码

我们的目标是：当一个新玩家加入游戏时，在他们的游戏界面上弹出一个欢迎对话框。

我们只需要在服务端的入口文件 `server/src/App.ts` 中添加几行代码即可。

1.  在 VS Code 的文件浏览器中，展开 `server/src` 文件夹，找到并打开 `App.ts` 文件。
2.  **清空文件中的所有内容**，然后复制并粘贴以下代码：

```typescript [server/App.ts]
// 当有新玩家加入游戏时，这个函数就会被自动触发
world.onPlayerJoin(({ entity }) => {
  // 调用玩家身上的 `dialog` API，弹出一个文本对话框
  entity.player.dialog<GameTextDialogParams>({
    type: GameDialogType.TEXT,
    title: "系统消息",
    content: `欢迎来到我们的世界, ${entity.player.name}！`,
  });
});
```

<details>
<summary><strong>代码解释</strong></summary>

- `world.onPlayerJoin(...)`: 这是一个事件监听器。`world` 代表整个游戏世界，`.onPlayerJoin` 会在每当有新玩家进入地图时，自动执行我们提供的函数。
- `({ entity })`: 这是 ES6 的解构语法。玩家进入事件会提供一个包含很多信息的对象，我们用 `{ entity }` 的方式，只从中取出我们关心的 `entity`（实体）对象。这个 `entity` 就代表了刚刚加入的那个玩家。
- `entity.player.dialog<...>(...)`: 这是调用玩家身上的 `dialog` (对话框) API。

#### 🤔 尖括号 `<...>` 是什么？

你可能注意到了 `<GameTextDialogParams>` 这段特殊的代码。这是 TypeScript 的一个核心特性，叫做**泛型 (Generics)**。

它的作用是**增强代码的智能提示和安全性**。

你可以把 `entity.player.dialog` 看作一个“万能”的对话框函数，它能打开各种不同类型的对话框（比如文本框、选项框等）。

通过在尖括号里指定 `<GameTextDialogParams>`，我们等于是在告诉 VS Code：**“嘿，这次我只想打开一个‘文本对话框’！”**

这样一来，VS Code 就能精确地知道这个对话框需要哪些参数（比如 `title` 和 `content`），并给你提供：

1.  **精准的自动补全**：当你输入 `{` 时，它会自动提示你 `title`, `content` 等可用属性。
2.  **实时的错误检查**：如果你不小心写错了属性名（例如把 `content` 写成 `conent`），VS Code 会立刻用红色波浪线提示你，避免你把错误带到游戏中。

这就是 TypeScript 相比 JavaScript 的强大之处！

</details>

## 第 2 步：构建并上传

代码写好了，现在我们需要把它“打包”并上传到云端。

1.  **启动构建**：
    - **最快的方式**：按下快捷键 `Alt + Q`。
    - **界面**：在 vscode 底部栏点击`完整编译项目`。
2.  **等待完成**：
    - 插件会自动检测依赖、打包代码、并将最终生成的文件上传到你之前链接好的地图中。
    - 当终端显示 **“打包且上传成功”** 的绿色提示时，就说明这一步完成了。

![构建成功](/QQ_1721023950939.webp)

<details>
<summary><strong>工作原理：VSCode 和游戏编辑器是如何协同工作的？</strong></summary>

你可能会好奇，为什么我们不能直接在游戏里运行 `.ts` 文件。这是因为游戏引擎只认识标准的 JavaScript。我们的工作流程就像一个翻译和打包的过程：

1.  **编写 (VSCode)**: 我们在 VSCode 中编写 TypeScript (`.ts`) 代码，因为它更安全、更智能。
2.  **构建 (ArenaPro)**: 按下 `Alt+Q` 时，ArenaPro 插件会像一个工厂，把我们所有的 `.ts` 代码（以及可能的其他模块）编译、打包成一个游戏引擎认识的 JavaScript 文件 (`_server_bundle.js`)。
3.  **上传 (ArenaPro)**: 插件自动将这个打包好的 `_server_bundle.js` 文件上传到云端，与你的地图关联。
4.  **加载 (游戏编辑器)**: 游戏编辑器本身并不知道 `_server_bundle.js` 的存在。我们在 `index.js` 中添加的 `require("./_server_bundle.js");` 就是一个明确的指令，告诉游戏引擎：“去把我们从 VSCode 上传的那个代码包加载进来并执行它！”

这个流程可以用下图表示：

![](/QQ20250709-210249.png)

</details>

## 第 3 步：在编辑器中运行代码

代码已上传至云端，但我们还需要最后一步：告诉神岛编辑器去执行它。

1.  **加载代码包**：

    - 在创作端的“脚本”界面，找到并打开**服务端的入口脚本** ( `index.js`)。
    - 在脚本的最上方，添加以下这行代码。它会告诉编辑器加载我们刚刚从 VS Code 上传的代码包 (`_server_bundle.js`)。
      ```javascript
      require("./_server_bundle.js");
      ```

2.  **运行并测试**：
    - 点击创作端顶部的 **“运行”** 按钮，启动游戏逻辑。
    - 此时，你应该能立刻看到屏幕上弹出的欢迎对话框！

![运行效果](/QQ20241025-105839.png)

## ✅ 恭喜！

你已经完整地体验了 ArenaPro 的核心开发流程。这个 **“编写 → 构建 → 运行”** 的循环，是你未来在 ArenaPro 中创作的基石。

现在你已经掌握了基础，可以开始探索更复杂的玩法，或者继续学习我们的下一篇教程，了解如何在代码和编辑器之间传递信息。

---

> **上一篇：[返回上一章：快速上手](../02-getting-started/index.md)**
