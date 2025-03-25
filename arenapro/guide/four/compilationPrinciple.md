# 完整构建项目和 HMR 编译原理

前端开发中，完整的构建流程通常包括 TypeScript 编译（tsc）和 Webpack 打包两个主要环节。同时，Webpack 还提供了 HMR（Hot Module Replacement，模块热替换）功能，能够在开发过程中实现模块的热更新。本文将详细介绍这两个环节的工作原理。

## 完整构建项目流程

### 1. TypeScript 编译

- **TSC 简介**：TSC（TypeScript Compiler）是 TypeScript 语言的核心组件，负责将 TypeScript 代码转换为 JavaScript 代码。
- **编译过程**：
  - 词法分析：将源代码分解为有意义的词法单元
  - 语法分析：构建抽象语法树（AST）
  - 语义分析：进行类型检查和语义验证
  - 代码生成：输出目标 JavaScript 代码
- **输出结果**：编译后的 JavaScript 文件将作为 Webpack 打包的输入。

### 2. Webpack 打包

- **Webpack 简介**：现代 JavaScript 应用程序的静态模块打包工具。
- **打包流程**：
  - 构建依赖图：从入口文件开始，递归分析模块依赖关系
  - 模块处理：使用 Loader 处理不同类型的模块
  - 代码优化：应用各种优化策略
  - 输出打包文件：生成一个或多个 bundle 文件

### 3. 构建结果

- 包含所有 TypeScript 文件编译后的 JavaScript 文件
- 包含 Webpack 打包生成的 bundle 文件

![](/QQ20241202-223842.png)

## HMR 热模块替换

### 1. 功能概述

- 实现模块的热更新，无需刷新整个页面
- 显著提升开发效率，实现即时反馈

### 2. 工作原理

- **变更检测**：Webpack Dev Server 监控文件变化
- **更新处理**：
  - HMR Runtime 接收更新通知
  - 异步下载更新模块
  - 应用更新：
    - 标记失效模块
    - 卸载旧模块
    - 加载新模块
    - 触发 accept 事件实现局部刷新

### 3. 构建结果

- 仅包含 Webpack 打包后的 bundle 文件

![](/QQ20241202-224008.png)
