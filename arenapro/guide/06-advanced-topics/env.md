# 进阶指南：管理环境变量

![](/QQ20250625-201437.png)

你正在开发一个需要连接到外部数据库或天气 API 的功能。你有一个 `config.ts` 文件，里面写着你的 `API_KEY`。你知道这是错误的，不应该将密钥硬编码在代码里。

于是，你做了任何有经验的 Node.js 开发者都会做的事：

1.  `npm install dotenv`
2.  在代码顶部加上 `require('dotenv').config()`
3.  在本地，一切工作正常。
4.  你将代码部署到 ArenaPro，服务器**立刻崩溃**，报错 model/fs 不存在。

**为什么？** 这篇指南将解释这个核心问题，并提供在 ArenaPro 上正确、安全地使用环境变量的唯一方法。

## 核心问题：运行时 vs. 构建时

问题的关键在于，ArenaPro 的服务器只接收你**构建后的 `.js` 文件**。你的 `package.json`, `.env`, `tsconfig.json` 等所有源文件都不会被上传。

- **标准 `dotenv` (运行时方案 - ❌ 错误)**: 它的工作原理是**在服务器上**寻找并读取 `.env` 文件。由于 `.env` 文件从未被上传，这个方案在 ArenaPro 上注定会失败。这就像你给了朋友一个购物清单，却没给他钱——他到了商店也什么都做不了。

- **`dotenv-webpack` (构建时方案 - ✅ 正确)**: 它在你**本地电脑上构建代码时**工作。它会读取你本地的 `.env` 文件，然后像“查找与替换”一样，把你代码中对 `process.env.YOUR_VARIABLE` 的引用，直接替换成 `.env` 文件里的真实字符串。这就像你帮朋友买好了所有东西，直接把装满货物的**背包**交给他——他拿到就能用。

**可视化对比**

| 你的本地代码 (`.ts`)                   | 你的 `.env` 文件 (本地) | 构建后上传到平台的代码 (`.js`) |
| -------------------------------------- | ----------------------- | ------------------------------ |
| `console.log(process.env.EVENT_NAME);` | `EVENT_NAME=中秋活动`   | `console.log("中秋活动");`     |

最终上传的代码已经不包含 `process.env` 的引用，它被替换成了真实的值。这是在 ArenaPro 中使用环境变量的唯一途径。

## 配置步骤

#### 第 1 步：安装 `dotenv-webpack`

这是一个仅在开发时需要的工具，所以我们将其安装为“开发依赖” (`--save-dev`)。

```bash
npm install dotenv-webpack --save-dev
```

#### 第 2 步：创建 `.env` 文件

在你的项目根目录（与 `package.json` 同一级）下，创建一个名为 `.env` 的文件。

```ini
# .env 文件
ENABLE_SPECIAL_EVENT=true
API_KEY=ABC-123-XYZ-456
```

#### 第 3 步：配置 `webpack.config.js`

如果你还没有 `webpack.config.js` 文件，请在根目录创建它。然后添加 `dotenv-webpack` 插件。

```javascript
// webpack.config.js
const Dotenv = require("dotenv-webpack");

module.exports = {
  // ... 其他配置 ...
  plugins: [
    new Dotenv({
      path: "./.env", // .env 文件相对于此配置文件的路径
    }),
  ],
  // ... 其他配置 ...
};
```

## 💥 关键规则：避免 `process is not defined` 错误

这是使用此功能时**最常见的、100% 会导致程序崩溃**的错误。

::: danger 致命错误：`ReferenceError: process is not defined`
如果在代码中使用了 `process.env.SOME_VAR`，但 `dotenv-webpack` 在 `.env` 文件里**找不到** `SOME_VAR` 的定义，它就不会做任何替换。

最终，`process.env.SOME_VAR` 这段代码会**原封不动地**保留在编译后的 JS 文件里。当这段代码在没有 Node.js 环境的 ArenaPro 平台上运行时，由于平台不认识 `process` 这个对象，程序会立刻崩溃。

**解决方案**：
一个原则：**确保你在代码中引用的每一个环境变量，都在 `.env` 文件中有定义。** 即使某个变量暂时没有值，也要给它一个空定义。

**正确的 `.env` 文件示例**:

```ini
# API 地址是必需的
API_URL=https://my-game-api.com
# 调试标志暂时不用，但必须有一个空定义，以防代码中有引用
DEBUG_FLAG=
```

:::

## 最佳实践

### 1. 将 `.env` 加入 `.gitignore`

`.env` 文件包含密钥等敏感信息。**永远不要**将它提交到 Git 仓库。

```
# .gitignore
.env
```

### 2. 创建一个 `.env.example` 文件

为了方便团队协作，你应该创建一个 `.env.example` 文件，它列出了所有必需的环境变量名，但不包含真实的值。这个文件**应该**被提交到 Git 仓库。

```ini
# .env.example
# 团队成员根据这个模板创建自己的 .env 文件
API_URL=
API_KEY=
ENABLE_SPECIAL_EVENT=false
```

---

> **上一篇：[类型安全：同步游戏资源](./asset-synchronization.md)**
>
> **下一篇：[管理多套代码入口 (分包)](./bulidName.md)**
