# NPM 包开发(二)：编写与构建代码

在上一篇指南中，我们成功创建了一个 NPM 包的项目骨架。现在，是时候填充内容了。

本篇指南的目标是：

1.  在 `src/index.ts` 中编写几个实用的工具函数。
2.  为这些函数添加标准的 JSDoc 注释。
3.  构建我们的包，并理解编译后的产物。

## # 第 1 步：编写你的库代码

打开 `src/index.ts` 文件，删除里面的所有内容，然后粘贴以下代码。我们将创建两个简单的、通用的工具函数。

```ts
// src/index.ts

/**
 * 将一个字符串的首字母转换为大写。
 *
 * @param str 要转换的字符串。
 * @returns 转换后的字符串。
 * @example
 * capitalize('hello world'); // => 'Hello world'
 */
export function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 将一个数字限制在指定的最小值和最大值之间。
 *
 * @param value 要限制的数字。
 * @param min 最小值。
 * @param max 最大值。
 * @returns 限制在范围内的数字。
 * @example
 * clamp(150, 0, 100); // => 100
 * clamp(-10, 0, 100); // => 0
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * 这是一个内部函数，因为它没有被 export，
 * 所以使用我们这个包的用户将无法访问或看到它。
 * @internal
 */
function internalHelper() {
  console.log("这是一个内部工具函数");
}
```

**两个关键点**：

- **`export`**: 只有使用了 `export` 关键字的函数、类或变量，才能被包的使用者 `import`。没有 `export` 的所有东西都是你包内部私有的。
- **JSDoc 注释 (`/** ... \*/`)\*\*: 为所有导出的函数编写这种格式的注释是一种极其重要的最佳实践。它不仅能帮助其他开发者理解你的代码，更重要的是，这些注释会出现在用户的代码提示中！

## 第 2 步：构建

代码写好了，现在我们需要把它“打包”。

1.  **启动构建**：
    - **最快的方式**：按下快捷键 `Alt + Q`。
    - **界面**：在 vscode 底部栏点击`完整编译项目`。
2.  **等待完成**：
    - 插件会自动检测依赖、打包代码。
    - 当终端显示 **“打包成功”** 的绿色提示时，就说明这一步完成了。

![构建成功](/QQ_1721023950939.webp)

## # 第 3 步：理解构建产物

构建成功后，你的项目目录中会出现一个新的 `dist` 文件夹：

```
my-awesome-lib/
├── dist/
│   ├── index.js       <-- 编译后的 JavaScript 代码
│   └── index.d.ts     <-- 类型声明文件
├── src/
│   └── index.ts
├── .gitignore
├── package.json
└── tsconfig.json
```

这两个新生成的文件是什么？

- **`dist/index.js`**:
  这是真正会被其他项目引用的 JavaScript 代码。你可以打开看看，它就是你写的 TypeScript 代码被编译后的样子。

- **`dist/index.d.ts`** (最关键的文件之一):
  这是一个**类型声明文件**。它只包含了你导出的函数、类和变量的“类型签名”，而没有任何具体的实现逻辑。

  ```ts
  // dist/index.d.ts (内容示例)

  /**
   * 将一个字符串的首字母转换为大写。
   *
   * @param str 要转换的字符串。
   * @returns 转换后的字符串。
   * @example
   * capitalize('hello world'); // => 'Hello world'
   */
  export declare function capitalize(str: string): string;

  /**
   * 将一个数字限制在指定的最小值和最大值之间。
   *
   * @param value 要限制的数字。
   * @param min 最小值。
   * @param max 最大值。
   * @returns 限制在范围内的数字。
   * @example
   * clamp(150, 0, 100); // => 100
   * clamp(-10, 0, 100); // => 0
   */
  export declare function clamp(
    value: number,
    min: number,
    max: number
  ): number;
  ```

  当其他用户安装并 `import` 你的包时，VS Code 和 TypeScript 正是通过读取这个 `.d.ts` 文件，来提供精准的**代码自动补全**和**类型检查**的。你会发现，我们写的 JSDoc 注释也原封不动地出现在了这里，这就是为什么用户的代码提示中会显示我们写的文档。

---

现在，你的项目已经可以成功地将 TypeScript 源码编译为标准、可发布的 JavaScript 代码了。

---

> **上一篇：[第一步：创建 NPM 项目](./createNPMProject.md)**
>
> **下一篇：[第三步：发布与使用](./publish-and-use.md)**
