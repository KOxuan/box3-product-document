# 进阶功能(七)：自定义构建流程 (Webpack)

ArenaPro 为你提供了一套开箱即用、性能优良的构建流程。但在某些特殊场景下，你可能希望能更深地介入这个流程，例如在代码发布前对其进行加密混淆，或者注入一些编译时才有的常量。

ArenaPro 的构建系统由 **Webpack** 驱动。通过在你的项目根目录下创建一个 `webpack.config.js` 文件，你就可以对构建流程进行深度自定义。

## ⚠️ 在你自定义 Webpack 之前，请阅读！

:::danger
**这是一个非常高级的功能，请谨慎使用。**

- **责任自负**: 一旦你创建了自定义的 `webpack.config.js`，你就接管了项目的构建配置。如果因配置不当导致构建失败或运行时错误，你需要自行排查解决。
- **高风险**: 很多 Webpack 插件，特别是那些会修改代码逻辑的（如混淆、压缩），可能会与 ArenaPro 引擎产生冲突，导致游戏无法正常运行。
- **从小处着手**: 不要直接复制粘贴网上复杂的配置。从一个最简单的配置开始，一次只增加或修改一个选项，并立即测试其效果。
- **充分测试**: 每次修改配置后，请务必完整地测试你的游戏，确保所有功能都正常。

如果你不确定自己在做什么，我们强烈建议你**不要**使用这个功能。
:::

## 如何开始？

在你的项目根目录（与 `package.json` 同级）创建一个名为 `webpack.config.js` 的文件。

这个文件的基本结构如下，它导出一个函数，该函数需要返回一个 Webpack 配置对象。ArenaPro 会将你返回的对象与默认配置进行智能合并。

```javascript
// webpack.config.js

// 默认的 webpack 配置会作为参数传入，方便你进行微调
module.exports = function (defaultConfig) {
  // 你可以在这里修改 defaultConfig
  // ...

  // 或者完全返回一个新的配置对象
  return {
    ...defaultConfig, // 推荐继承默认配置
    // 在这里添加你的自定义配置
    plugins: [
      ...(defaultConfig.plugins || []), // 继承默认插件
      // ... 在这里添加你的新插件
    ],
  };
};
```

## 实战 1：保护你的代码 (代码混淆)

代码混淆是一种通过重命名变量、加密字符串、打乱执行流程等方式，让你的代码变得极难阅读和理解的技术。这可以有效地保护你的核心逻辑不被轻易地逆向工程。

我们将使用 `webpack-obfuscator` 插件来实现这个目标。

### 第 1 步：安装插件

```bash
npm install webpack-obfuscator javascript-obfuscator --save-dev
```

### 第 2 步：配置 `webpack.config.js`

我们推荐一个相对安全且有效的配置子集。

```javascript
// webpack.config.js
const WebpackObfuscator = require("webpack-obfuscator");

module.exports = function (defaultConfig) {
  // 只在生产模式 (完整构建) 时启用混淆
  const isProduction = process.env.NODE_ENV === "production";

  return {
    ...defaultConfig,
    plugins: [
      ...(defaultConfig.plugins || []),
      // 确保只在生产构建时应用混淆
      isProduction &&
        new WebpackObfuscator({
          // 一个相对安全的配置集
          compact: true,
          controlFlowFlattening: false, // 这个选项有时会影响性能
          deadCodeInjection: false, // 这个选项有时会影响性能
          debugProtection: false, // 避免干扰你自己调试
          disableConsoleOutput: false, // 避免干扰你自己调试
          stringArray: true,
          rotateStringArray: true,
          selfDefending: false, // 避免干扰引擎
          shuffleStringArray: true,
          splitStrings: true,
          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false,
        }),
    ].filter(Boolean), // 使用 .filter(Boolean) 优雅地移除数组中的 false 值
  };
};
```

配置完成后，当你执行**完整构建 (`Alt+Q`)** 时，最终输出的代码就会被混淆。HMR 模式则不受影响，方便你日常开发。

## 实战 2：注入全局常量

另一个常见的场景是注入全局常量。例如，你希望在代码中能直接访问到项目的版本号。

这可以通过 Webpack 内置的 `DefinePlugin` 插件轻松实现。

```javascript
// webpack.config.js
const webpack = require("webpack");
const packageJson = require("./package.json"); // 读取 package.json

module.exports = function (defaultConfig) {
  return {
    ...defaultConfig,
    plugins: [
      ...(defaultConfig.plugins || []),
      // 注入一个全局常量 __APP_VERSION__
      new webpack.DefinePlugin({
        __APP_VERSION__: JSON.stringify(packageJson.version),
      }),
    ],
  };
};
```

配置完成后，你就可以在代码中直接使用 `__APP_VERSION__` 这个变量了，Webpack 在构建时会把它替换成 `package.json` 中的真实版本号字符串。

```ts
// 在你的代码中
// declare const __APP_VERSION__: string; // 在 .d.ts 文件中声明一下，以获得类型提示

console.log(`当前游戏版本: ${__APP_VERSION__}`);
```

---

> **上一篇：[管理多套代码入口 (分包)](./bulidName.md)**
>
> **下一篇：[安全地使用外部 NPM 包](./npmPackage.md)**
