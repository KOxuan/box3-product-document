# TS与JS混合使用
::: danger
⚠️ 不建议纯用JavaScript开发地图，因为虽能避开TypeScript的复杂性和类型检查，但在VS Code全面支持TypeScript的今天，这样做显得不够高效且未充分利用先进工具链。

混用JavaScript和TypeScript时，会遇到以下问题：
- 代码风格和质量不一，增加审查和维护难度。
- JavaScript的全局变量和副作用可能与TypeScript的模块化和类型推断冲突，需额外处理。
- JavaScript的动态类型特性与TypeScript的静态类型检查不兼容，可能导致类型错误或需额外断言，降低开发效率和代码可读性。

对于大型项目或遗留代码库，建议逐步迁移JavaScript到TypeScript，以逐步引入类型安全和其他特性，同时减少迁移风险和工作量。

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