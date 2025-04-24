# 🧩 组件代码编写指南

在成功创建 npm 项目后，我们需要着手开发可供其他创作者使用的代码库（即"代码轮子"）。这份指南将帮助你理解如何编写高质量、可复用的神岛组件库代码。

## 🛠️ 开发环境准备

<div style="border-left: 4px solid #3498db; padding-left: 15px; margin: 15px 0;">
<p><strong>🔍 开发环境：</strong> 在上一节中，我们选择了服务端作为开发环境。代码编写将在服务端的入口文件中进行。</p>
</div>

## 📊 核心开发原则

<table>
  <tr>
    <th width="150">原则</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>📤 代码导出</b></td>
    <td>
      • 使用 <code>export class Rich</code> 或 <code>export default class Rich</code> 导出类<br>
      • 确保其他创作者能够通过 import 语句引入并使用你的代码<br>
      • 为核心功能提供清晰的导出接口
    </td>
  </tr>
  <tr>
    <td><b>📝 代码注释</b></td>
    <td>
      • 推荐使用 <code>/***/</code> 格式的文档注释<br>
      • 注释信息在生成 TypeScript 声明文件（.d.ts）时会被保留<br>
      • 包含功能描述、参数说明、返回值信息和可能的异常
    </td>
  </tr>
  <tr>
    <td><b>🔄 代码扩展性</b></td>
    <td>
      • 采用模块化设计<br>
      • 定义清晰的接口<br>
      • 使用依赖注入技术<br>
      • 确保代码易于添加新功能、修改现有功能和进行性能优化
    </td>
  </tr>
  <tr>
    <td><b>⚡ 性能优化</b></td>
    <td>
      • 避免不必要的计算<br>
      • 减少内存分配<br>
      • 优化 IO 操作<br>
      • 采用缓存机制、异步编程和并发处理等技术
    </td>
  </tr>
</table>

## 📝 代码编写最佳实践

### 🔍 类型定义

```typescript
/**
 * 富文本格式化选项接口
 */
export interface RichOptions {
  /** 是否启用颜色支持 */
  enableColors?: boolean;
  /** 文本对齐方式 */
  alignment?: "left" | "center" | "right";
  /** 字体大小 */
  fontSize?: number;
}

/**
 * 富文本处理类，用于创建格式化的游戏内文本
 * @example
 * const rich = new Rich();
 * const formattedText = rich.format('Hello World', { enableColors: true });
 */
export class Rich {
  // 类实现...
}
```

### 📋 注释规范

```typescript
/**
 * 格式化文本为富文本格式
 * @param text - 要格式化的原始文本
 * @param options - 格式化选项
 * @returns 格式化后的富文本字符串
 * @throws {Error} 如果输入文本为空或无效
 */
public format(text: string, options?: RichOptions): string {
  // 实现代码...
}
```

:::tip
**💡 提示**：良好的注释不仅帮助其他开发者理解你的代码，还能通过 TypeScript 的类型系统提供智能提示，极大提升使用体验。
:::

## 🧪 示例代码

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-115752.png" alt="示例代码截图" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: 神岛组件库示例代码</p>
</div>

### 🔄 常用设计模式

| 设计模式       | 应用场景                 | 优势                             |
| -------------- | ------------------------ | -------------------------------- |
| **单例模式**   | 全局配置管理、资源共享   | 确保全局唯一实例，避免资源浪费   |
| **工厂模式**   | 对象创建、实例化逻辑封装 | 将创建对象的过程抽象化，便于扩展 |
| **观察者模式** | 事件处理、状态变更通知   | 实现松耦合的组件间通信           |
| **策略模式**   | 算法切换、行为变更       | 将算法与使用分离，提高代码复用性 |

## 🛠️ 调试与发布

### 🔍 调试工具

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-121356.png" alt="调试工具截图" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图2: 组件库调试工具界面</p>
</div>

### 📋 调试与发布流程

<table>
  <tr>
    <th width="150">阶段</th>
    <th>操作步骤</th>
  </tr>
  <tr>
    <td><b>🧪 构建与测试</b></td>
    <td>
      1. 完成代码编写后，点击左下角的"完整构建项目"按钮<br>
      2. 在神岛环境中导入并测试组件库<br>
      3. 根据测试结果进行代码调整
    </td>
  </tr>
  <tr>
    <td><b>📝 发布准备</b></td>
    <td>
      1. 确认所有代码已正确导出<br>
      2. 检查 <code>package.json</code> 中的版本号、描述等信息<br>
      3. 确保所有依赖项配置正确
    </td>
  </tr>
  <tr>
    <td><b>🚀 发布流程</b></td>
    <td>
      1. 登录 npm 账号 (<code>npm login</code>)<br>
      2. 执行发布命令 (<code>npm publish</code>)<br>
      3. 验证发布结果 (<code>npm view your-package-name</code>)
    </td>
  </tr>
</table>

:::warning
**⚠️ 注意**：发布前请确保你的 npm 账号已登录，且包名在 npm 注册表中尚未被占用。若包名已被使用，可考虑使用 scoped package（如 `@your-username/package-name`）避免命名冲突。
:::

## 📈 版本管理

版本号管理是维护组件库的重要环节。神岛组件库推荐使用语义化版本（Semantic Versioning）规范：

| 版本位置  | 名称     | 更新情况           |
| --------- | -------- | ------------------ |
| **X**.y.z | 主版本号 | 不兼容的 API 变更  |
| x.**Y**.z | 次版本号 | 向下兼容的功能新增 |
| x.y.**Z** | 修订号   | 向下兼容的问题修复 |

:::tip
**💡 建议**：初次发布组件库时，可从 `1.0.0` 版本开始。对于开发中的不稳定版本，可使用 `0.x.y` 表示开发阶段。
:::
