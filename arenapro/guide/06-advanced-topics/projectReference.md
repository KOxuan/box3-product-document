# 进阶功能(六)：创建本地共享包

当你开发的 ArenaPro 项目越来越多时，你一定会遇到这个问题：

> “我在 A 项目里写了一套超级好用的工具函数 (`utils.ts`)，现在 B 项目和 C 项目也想用，难道我只能复制粘贴三遍吗？”

复制粘贴是万恶之源。一旦原始代码有任何更新，你就得手动同步到所有项目中，这非常痛苦且容易出错。

旧的方法是是靠修改 `tsconfig.json` 和使用混乱的相对路径 (`../../...`) 来实现跨项目引用，这非常脆弱且难以维护。

**正确、现代且强大的解决方案是：将你的共享代码做成一个本地 NPM 包。**

## 什么是本地 NPM 包？

简单来说，就是把你的共享代码（如 `my-game-utils`）组织成一个独立的、像 `lodash` 一样的包。然后，你的其他项目（`Project-A`, `Project-B`）可以像安装任何第三方库一样“安装”这个本地包。

**这样做的好处是巨大的**：

- **清晰的依赖关系**：你的项目不再通过混乱的相对路径引用文件，而是通过包名 (`import { something } from 'my-game-utils'`)，一目了然。
- **强大的封装**：项目 A 不需要知道 `my-game-utils` 内部的文件结构，它只关心能 `import` 什么。
- **版本控制**：你的共享包可以在 `package.json` 中拥有自己的版本号。
- **可发布**：如果未来需要，这个本地包可以被轻松地发布到 NPM 官方或私有仓库，供更多人使用。

## 实战演练：创建并使用一个本地共享包

### 第 1 步：创建共享包的项目结构

首先，在你的所有 ArenaPro 项目之外，创建一个新的文件夹作为共享包的根目录，例如 `my-shared-lib`。

`my-shared-lib` 的内部结构应该如下：

```
my-shared-lib/
├── src/
│   └── index.ts       # 你的共享代码写在这里
├── package.json       # 包的清单文件
└── tsconfig.json      # TypeScript 配置文件
```

**`my-shared-lib/package.json`**:
这是包的核心。`name` 是你的包名，`main` 指向编译后的入口文件，`types` 指向类型定义文件。

```json
{
  "name": "my-shared-lib",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^4.5.4"
  }
}
```

**`my-shared-lib/tsconfig.json`**:
一个精简的 `tsconfig`，注意 `declaration: true`，它会自动生成 `.d.ts` 类型文件。

```jsonc
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "declaration": true, // 非常重要！
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

### 第 2 步：编写并编译共享代码

在 `my-shared-lib/src/index.ts` 中写入你想共享的函数，并 `export` 它们。

```ts
// my-shared-lib/src/index.ts

/**
 * 计算两个数的和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 将一个数字限制在最小和最大值之间
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
```

写完后，在 `my-shared-lib` 目录下打开终端，运行 `npm install` 安装开发依赖 (typescript)，然后运行 `npm run build`。这会生成一个 `dist` 文件夹，里面包含了编译好的 `index.js` 和 `index.d.ts`。

### 第 3 步：在你的游戏项目中“安装”本地包

现在，回到你的 ArenaPro 项目（例如 `Project-A`）。

1.  打开这个项目的 `package.json` 文件。
2.  在 `dependencies` 中，手动添加一行，key 是你的本地包名，value 是 `file:` 加上你的本地包的**相对路径**。
3.  **路径分隔符请使用正斜杠 `/`，即使在 Windows 上也是如此。**

```jsonc
// Project-A/package.json
{
  "name": "project-a",
  // ...
  "dependencies": {
    // ... 其他依赖
    // "file:../my-shared-lib" 指向相对于当前项目的路径
    "my-shared-lib": "file:../my-shared-lib"
  }
}
```

3.  保存 `package.json` 后，在 `Project-A` 的根目录运行 `npm install`。

NPM 会识别出 `file:` 协议，并 在`Project-A/node_modules/` 下创建一个指向 `my-shared-lib` 的**符号链接 (Symbolic Link)**。

### 第 4 步：在游戏项目中无缝使用！

现在，你可以像使用 `lodash` 一样，在你的游戏代码中直接通过包名引用共享代码了！

```ts
// Project-A/src/server/App.ts

// 引用变得非常干净！
import { add, clamp } from "my-shared-lib";

export default {
  onLoad() {
    const sum = add(10, 20); // 30
    console.log(`10 + 20 = ${sum}`);

    const clampedValue = clamp(150, 0, 100); // 100
    console.log(`Clamped value is: ${clampedValue}`);
  },
};
```

当你更新了 `my-shared-lib` 中的代码后，只需要在该目录运行 `npm run build`，所有安装了这个包的项目都会**立刻**获得更新，无需重新 `npm install`。这就是符号链接的魔力。

它允许你将一个大型代码库拆分成多个独立的、可独立构建的子项目，同时又能保持它们之间的类型安全和智能感知。对于管理大型游戏项目或开发可复用的游戏模块（例如寻路库、UI 框架、战斗系统）来说，这是一种非常专业和高效的组织方式。

整个结构可以用下图来概括：

![](/QQ20250709-210634.png)

## 何时使用项目引用？

- 你有一个非常复杂的系统（例如一个完整的战斗框架），你希望把它从主游戏逻辑中分离出来，以便复用或单独维护。

---

> **上一篇：[安全地使用外部 NPM 包](./npmPackage.md)**
>
> **下一篇：[投稿社区：发布 NPM 包](./contributing-to-dao3fun.md)**
