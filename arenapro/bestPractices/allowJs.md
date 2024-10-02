# TS与JS混合使用
::: danger
⚠ 不推荐完全依赖JavaScript进行地图开发，尽管这样可以避免TypeScript的类型检测及其复杂的语法结构，但在Visual Studio Code开发工具已经对TypeScript提供全面支持的背景下，继续使用JavaScript就像是拿着大牛刀去砍小蚂蚁——大材小用，且未能充分利用更先进的工具链。



在混合使用JavaScript和TypeScript时，可能会遇到一系列问题：

+ 尽管TypeScript的静态类型检查机制能够显著提升代码质量，但两种语言的混用却可能导致代码风格和质量上的不一致。这不仅会加大代码审查的难度，还会给后续的维护工作带来挑战。
+ JavaScript代码中常见的全局变量和副作用问题，可能会与TypeScript的类型推断和模块封装机制产生冲突。TypeScript鼓励使用模块化和避免全局状态，但在与JavaScript代码交互时，可能需要额外处理这些全局变量和副作用，以确保类型安全和代码清晰。
+ JavaScript的动态类型特性，如允许在运行时改变变量类型、添加或删除对象属性等，与TypeScript的静态类型检查机制存在本质差异。这可能导致在处理JavaScript代码时，TypeScript出现类型错误或需要额外的类型断言，从而降低了开发效率和代码可读性。



对于大型项目或遗留代码库，建议采取逐步迁移的策略。可以将JavaScript代码逐步迁移到TypeScript，而不是一次性将整个代码库转换为TypeScript。这样不仅可以逐步引入类型安全性和其他TypeScript特性，还能有效减少迁移过程中的风险和工作量。

:::



## 第一步：允许js，修改tsconfig.json
开启允许ts编译js文件：`allowJs = true`

![](/allowjs.webp)



## （可选）第二步：修改入口，修改dao3.config.json
根据自己项目情况，修改入口文件为js

当然也可以在ts文件中，导入js文件。

![](/jsentry.webp)



开启后，就能在项目里面直接使用js啦！也可以与ts混用。



当然，目前的js文件只是有语法提示，但不会进行类型检测。（一夜回到Arena自带编辑器）

![](/jslook.webp)



如何开启js的类型检查呢？

## （可选）第三步：开启类型检查，修改tsconfig.json
开启js文件类型检查：`checkJs = true`

![](/checkjs.webp)



此时，js文件有类型提示了，并会报告错误。

![](/jscheck.webp)