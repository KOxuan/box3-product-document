# 进阶指南：管理多套代码入口 (分包)

你的项目正在成长。你已经有了一个功能完善的“主城”，现在你开始制作一个全新的“PVP 竞技场”子玩法。它们各自拥有完全不同的 UI、实体和游戏逻辑。

你遇到的第一个问题就是：

- 如何让 `Alt+Q` (完整构建) 只构建**竞技场**的代码，而不包含主城的代码？
- 如何在 Arena 编辑器中，为主城地图链接 `lobby.js`，为竞技场地图链接 `arena.js`？
- HMR（热更新）模式下又该如何工作？

`dao3.config.json` 文件中的 `outputAndUpdate` 配置项，就是专为解决这个“多入口”或“代码分包”问题而设计的。

## `outputAndUpdate`: 定义你的所有构建目标

`outputAndUpdate` 是一个数组，它允许你定义项目中的所有“构建目标”。数组中的每一个对象，都代表一套独立的、可被构建的代码包。

### 实战演练：配置“主城”与“竞技场”

假设你的 `src/` 目录结构如下：

```
src/
├── lobby/       # 主城代码
│   ├── server.ts
│   └── client.ts
└── arena/       # 竞技场代码
    ├── server.ts
    └── client.ts
```

现在，我们在 `outputAndUpdate` 数组中为它们分别创建一个配置对象：

```jsonc
// dao3.config.json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        // --- 目标 1: 主城 ---
        {
          "name": "lobby.js",
          "serverEntry": "src/lobby/server.ts",
          "clientEntry": "src/lobby/client.ts",
          "description": "游戏的主城/大厅逻辑"
        },
        // --- 目标 2: 竞技场 ---
        {
          "name": "arena.js",
          "serverEntry": "src/arena/server.ts",
          "clientEntry": "src/arena/client.ts",
          "description": "PVP 竞技场玩法逻辑"
        }
      ]
    }
  }
}
```

## 切换构建目标

一旦你定义了多个构建目标，ArenaPro 的工具链就会变得更加智能。

### 完整构建 (`Alt+Q`)：按需选择

当你按下 `Alt+Q` 或在 VS Code 命令面板中运行 `ArenaPro: Build` 时，插件会检测到你定义了多个目标，并**弹出一个选择框**，让你明确本次要构建哪一个。

- 如果你选择 “lobby.js”，插件将只构建主城代码，并生成 `_server_lobby.js` 和 `_client_lobby.js`。
- 如果你选择 “arena.js”，插件将只构建竞技场代码。

这个交互式的选择过程，是管理和构建不同子玩法的核心，它避免了手动修改配置文件可能带来的错误。

### HMR 模式：自动同步

HMR（热更新）模式的行为则不同。当你启动 HMR 后，它会**同时监视和编译 `outputAndUpdate` 中定义的所有目标**。

它的工作方式非常智能：

- 你在本地修改了 `arena/server.ts`，HMR 会立刻重新编译出最新的 `arena.js`。
- 当你在 Arena 编辑器中打开的是**竞技场地图**时，它会自动加载和更新 `arena.js`。
- 如果你切换到**主城地图**，它会自动加载和更新 `lobby.js`。

你无需进行任何手动切换。HMR 会根据你当前正在编辑的地图，自动同步对应的代码。

## 最佳实践

- **一个目标，一个用途**：为每一个独立的子玩法（或功能包）创建一个清晰的构建目标。
- **清晰命名**：为你的输出文件 (`name` 字段) 和描述 (`description`) 使用清晰、有意义的名称，如 `lobby.js`, `dungeon-level-1.js`。这会直接体现在构建时的选择框中。
- **依赖 VS Code 的选择框**：不要再使用手动调整数组顺序的旧方法。通过 `Alt+Q` 调出选择框是官方推荐的、最安全可靠的工作流。

---

> **上一篇：[管理环境变量](./env.md)**
>
> **下一篇：[自定义构建流程 (Webpack)](./webpackPlugins.md)**
