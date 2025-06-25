# 🔑 管理环境变量

在项目开发中，处理敏感信息（如 API 密钥）和环境特定配置（如服务端口）是一项核心任务。将这些值硬编码到代码中会带来安全风险和维护困难。最佳实践是通过环境变量来管理它们。

然而在神岛项目中，标准的 `dotenv` 包在运行时加载变量的方式并不可行。此时，我们需要一个能在 **构建时** 将环境变量注入代码的工具。

`dotenv-webpack` 就是解决这个问题的理想选择。它是一个 Webpack 插件，可以在打包过程中读取你的 `.env` 文件，并将其中的变量替换到代码中。

## 🤔 为什么不能直接用 `dotenv`?

这与神岛平台的运行机制有关。神岛平台只接受 JavaScript 文件（例如 `server.js` 和 `client.js`）。**创作者无法将项目中的 `.env` 文件或其他辅助文件一同上传到平台。**

- **`dotenv` (运行时方案 - 不可行 ❌)**: 它的工作方式是在代码启动时，去服务器的文件系统中寻找并读取 `.env` 文件来加载环境变量。由于我们无法上传 `.env` 文件，这个库在平台上会因为找不到文件而彻底失效。

- **`dotenv-webpack` (构建时方案 - 可行 ✅)**: 它在创作者的本地计算机上运行构建命令时工作。它会读取创作者本地的 `.env` 文件，然后像"查找与替换"一样，将代码中所有 `process.env.VAR` 的引用替换成 `.env` 文件里的真实字符串值，并生成最终的 JS 文件。

因此，上传到平台的 JS 文件已经是一个包含了所有配置值的"成品"，它本身不再需要去外部寻找 `.env` 文件。这是在神岛项目中正确使用环境变量的关键。

## ✨ 核心优势

<table>
  <tr>
    <th width="180">优势</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>🛡️ 安全性</b></td>
    <td>将密钥、密码等敏感信息与源代码分离，避免其泄露到 Git 等版本控制系统中</td>
  </tr>
  <tr>
    <td><b>⚙️ 构建时注入</b></td>
    <td>变量在打包时被直接注入，最终代码中不包含对 <code>dotenv</code> 的依赖，符合平台要求</td>
  </tr>
  <tr>
    <td><b>🤝 环境一致性</b></td>
    <td>确保无论在哪个环境部署，代码都能获取到正确的配置</td>
  </tr>
</table>

## 📦 安装与配置

### ⬇️ 安装

由于 `dotenv-webpack` 只在开发和构建阶段使用，我们将其安装为开发依赖 (`--save-dev`)。

```bash
npm install dotenv-webpack --save-dev
```

### 📝 创建 .env 文件

在项目根目录（与 `package.json` 同级）创建一个 `.env` 文件。

```txt
# .env

# 服务配置
PORT=3000
HOST=

# API 密钥
API_KEY=ABC-123-XYZ-456
```

### ⚙️ 配置 Webpack

在你的 `webpack.config.js` 文件中引入并使用该插件。

```javascript
// webpack.config.js
const Dotenv = require("dotenv-webpack");

module.exports = {
  // ... 其他 webpack 配置，如 entry, output, module ...

  plugins: [
    // 插件会自动寻找并加载项目根目录下的 .env 文件
    // 如果你的 .env 文件不在根目录，可以像这样指定路径
    new Dotenv({
      path: "../.env",
    }),
  ],

  // ...
};
```

## 🚀 在代码中使用

配置好 Webpack 后，你就可以在代码中直接使用 `process.env` 来访问这些变量了。

```javascript
// Webpack 在打包时已经将 .env 中的变量注入到 process.env
const port = process.env.PORT || 8080;

// 验证 API 密钥是否可用
// 在打包后的代码中，process.env.API_KEY 会被替换为实际的值
console.log(`API 密钥: ${process.env.API_KEY}，端口：${port}`); // API 密钥: ABC-123-XYZ-456，端口：3000
```

## 💡 常见用途

以下是一些常见场景，创作者可以利用 `.env` 文件让项目变得更灵活、更安全。

<table>
  <tr>
    <th width="180">用途</th>
    <th>说明与示例</th>
  </tr>
  <tr>
    <td><b>🔌 管理第三方密钥</b></td>
    <td>
      如果你的作品需要连接外部服务（如排行榜 API、数据统计），应将 API Key 存放在 <code>.env</code> 中。<br>
      <b>示例:</b> <code>LEADERBOARD_API_KEY=abc-123-def-456</code>
    </td>
  </tr>
  <tr>
    <td><b>🚩 控制功能开关</b></td>
    <td>
      无需修改代码即可轻松启用或禁用某个功能，非常适合用于测试新功能或控制活动开关。<br>
      <b>示例:</b> <code>ENABLE_NEW_YEAR_EVENT=true</code><br>
      <b>代码:</b> <code>if (process.env.ENABLE_NEW_YEAR_EVENT === 'true') { /* ... */ }</code>
    </td>
  </tr>
  <tr>
    <td><b>🔧 区分开发与生产</b></td>
    <td>
      为本地测试和线上正式版设置不同的参数，例如 API 服务器地址。<br>
      <b>示例:</b> 本地用 <code>API_URL=http://localhost:3000</code>, 线上用 <code>API_URL=https://api.mygame.com</code>
    </td>
  </tr>
    <tr>
    <td><b>🐛 开启调试模式</b></td>
    <td>
      通过一个开关控制是否输出详细的调试日志，方便开发时排查问题。<br>
      <b>示例:</b> <code>DEBUG_MODE=true</code><br>
      <b>代码:</b> <code>if (process.env.DEBUG_MODE === 'true') { console.log('Debug info...'); }</code>
    </td>
  </tr>
</table>

## 🌟 最佳实践

<table>
  <tr>
    <th width="180">实践类别</th>
    <th>建议</th>
  </tr>
  <tr>
    <td><b>🚫 Git 忽略</b></td>
    <td>
      • 务必将 <code>.env</code> 文件添加到 <code>.gitignore</code> 中<br>
      • 永远不要将包含敏感信息的文件提交到版本控制系统
    </td>
  </tr>
  <tr>
    <td><b>📄 示例文件</b></td>
    <td>
      • 创建一个 <code>.env.example</code> 文件作为团队配置模板<br>
      • 该文件应包含所有必需的变量名，但值为示例或空<br>
      • <code>.env.example</code> 文件应当提交到 Git 仓库
    </td>
  </tr>
</table>

## 📝 总结

`dotenv-webpack` 是在 Webpack 项目中管理环境变量的便捷工具。通过遵循最佳实践并注意安全风险，可以极大地改善项目的配置管理流程。对于神岛开发者来说，这是分离配置与代码、提升协作效率的有效手段。
