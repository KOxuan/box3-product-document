# 🏗️ 完整构建项目和 HMR 编译原理

前端开发中，完整的构建流程通常包括 TypeScript 编译（tsc）和 Webpack 打包两个主要环节。同时，Webpack 还提供了 HMR（Hot Module Replacement，模块热替换）功能，能够在开发过程中实现模块的热更新。本文将详细介绍这两个环节的工作原理。

## 📦 完整构建项目流程

<table>
  <tr>
    <th width="200">构建阶段</th>
    <th>工作原理</th>
  </tr>
  <tr>
    <td rowspan="4"><b>1️⃣ TypeScript 编译</b></td>
    <td><b>TSC 简介</b>：TSC（TypeScript Compiler）是 TypeScript 语言的核心组件，负责将 TypeScript 代码转换为 JavaScript 代码</td>
  </tr>
  <tr>
    <td><b>编译过程</b>：
      <ul>
        <li>词法分析：将源代码分解为有意义的词法单元</li>
        <li>语法分析：构建抽象语法树（AST）</li>
        <li>语义分析：进行类型检查和语义验证</li>
        <li>代码生成：输出目标 JavaScript 代码</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><b>输出结果</b>：编译后的 JavaScript 文件将作为 Webpack 打包的输入</td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4"><b>2️⃣ Webpack 打包</b></td>
    <td><b>Webpack 简介</b>：现代 JavaScript 应用程序的静态模块打包工具</td>
  </tr>
  <tr>
    <td><b>打包流程</b>：
      <ul>
        <li>构建依赖图：从入口文件开始，递归分析模块依赖关系</li>
        <li>模块处理：使用 Loader 处理不同类型的模块</li>
        <li>代码优化：应用各种优化策略</li>
        <li>输出打包文件：生成一个或多个 bundle 文件</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><b>构建结果</b>：
      <ul>
        <li>包含所有 TypeScript 文件编译后的 JavaScript 文件</li>
        <li>包含 Webpack 打包生成的 bundle 文件</li>
      </ul>
    </td>
  </tr>
</table>

![完整构建流程示意图](/QQ20241202-223842.png)

## 🔥 HMR 热模块替换

### 1️⃣ 功能概述

| 优势     | 说明                                     |
| -------- | ---------------------------------------- |
| 即时更新 | 实现模块的热更新，无需刷新整个页面       |
| 效率提升 | 显著提升开发效率，实现即时反馈           |
| 状态保留 | 保留应用状态，避免刷新页面导致的状态丢失 |

### 2️⃣ 工作原理

<table>
  <tr>
    <th width="150">处理阶段</th>
    <th>工作原理</th>
  </tr>
  <tr>
    <td><b>变更检测</b></td>
    <td>Webpack Dev Server 监控文件变化</td>
  </tr>
  <tr>
    <td rowspan="4"><b>更新处理</b></td>
    <td>1. HMR Runtime 接收更新通知</td>
  </tr>
  <tr>
    <td>2. 异步下载更新模块</td>
  </tr>
  <tr>
    <td>3. 应用更新：
      <ul>
        <li>标记失效模块</li>
        <li>卸载旧模块</li>
        <li>加载新模块</li>
        <li>触发 accept 事件实现局部刷新</li>
      </ul>
    </td>
  </tr>
</table>

:::tip
**💡 提示**：HMR 的核心优势在于只更新变更的模块，而不需要刷新整个页面，这大大提高了开发效率。
:::

### 3️⃣ 构建结果

**HMR 模式构建结果**：仅包含 Webpack 打包后的 bundle 文件

![HMR构建结果示意图](/QQ20241202-224008.png)

## ⚖️ 两种构建模式对比

| 特性         | 完整构建项目                       | HMR 热模块替换       |
| ------------ | ---------------------------------- | -------------------- |
| **构建速度** | 较慢                               | 较快（增量更新）     |
| **生成文件** | 完整 JavaScript 文件 + bundle 文件 | 仅 bundle 文件       |
| **使用场景** | 生产环境部署                       | 开发环境调试         |
| **状态保持** | 不支持（需要刷新页面）             | 支持（保留应用状态） |
| **资源占用** | 较高                               | 较低                 |

:::info
**📚 应用建议**：在日常开发中使用 HMR 模式提高开发效率，在准备部署时使用完整构建模式生成最终产品。
:::
