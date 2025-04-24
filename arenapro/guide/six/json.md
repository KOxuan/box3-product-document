# 📊 导入 JSON 文件至 TypeScript 项目

在 TypeScript 项目中，导入 JSON 文件是一项非常实用的功能，特别是在处理配置数据或游戏关卡数据时。本文将详细介绍从 Excel 表格开始，最终将 JSON 文件导入到 TypeScript 文件中的完整流程。

## 📋 数据准备与转换

### 📈 Excel 转 JSON

<table>
  <tr>
    <th width="150">步骤</th>
    <th>操作详情</th>
  </tr>
  <tr>
    <td><b>1️⃣ 数据准备</b></td>
    <td>
      • 确保 Excel 表格数据已整理完毕<br>
      • 每列对应一个数据字段
    </td>
  </tr>
  <tr>
    <td><b>2️⃣ 在线转换</b></td>
    <td>
      • 访问<a href="https://www.lddgo.net/string/excel-to-json">在线 Excel 转 JSON 工具</a><br>
      • 上传 Excel 文件并选择转换选项
    </td>
  </tr>
  <tr>
    <td><b>3️⃣ 保存结果</b></td>
    <td>
      • 转换完成后保存生成的 JSON 文件
    </td>
  </tr>
</table>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/json1.webp" alt="Excel转JSON步骤图示" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: Excel 数据转换为 JSON 格式的界面</p>
</div>

## 🔄 TypeScript 集成

### 📥 JSON 文件导入

| 步骤            | 操作详情                                                       |
| --------------- | -------------------------------------------------------------- |
| **1️⃣ 文件验证** | • 打开保存的 JSON 文件<br>• 验证内容正确性                     |
| **2️⃣ 文件导入** | • 在 TypeScript 文件中使用 import 语句<br>• 确保路径正确       |
| **3️⃣ 数据处理** | • 在代码中使用 JSON 数据<br>• 支持数组遍历、对象属性访问等操作 |
| **4️⃣ 编译查看** | • 编译 TypeScript 代码<br>• 在神岛地图中查看效果               |

:::tip
**💡 导入技巧**：TypeScript 默认支持直接导入 JSON 文件，无需额外配置。只需确保 `tsconfig.json` 中 `resolveJsonModule` 选项设置为 `true`。
:::

#### 代码示例：

```typescript
// 在 TypeScript 文件中导入 JSON 数据
import jsonData from "./path/to/your/jsonfile.json";

// 使用导入的 JSON 数据
console.log(jsonData.propertyName);
```

<div style="display: flex; justify-content: space-between; margin: 20px 0;">
  <div style="width: 48%; text-align: center; padding: 10px; border-radius: 5px;">
    <img src="/json4.webp" alt="在TypeScript中导入JSON文件图示" width="100%" />
    <p style="text-align: center; font-style: italic; margin-top: 10px;">图2: 在 TypeScript 中导入 JSON 文件</p>
  </div>
  <div style="width: 48%; text-align: center; padding: 10px; border-radius: 5px;">
    <img src="/json5.webp" alt="编译后查看效果图示" width="100%" />
    <p style="text-align: center; font-style: italic; margin-top: 10px;">图3: 编译后的运行效果</p>
  </div>
</div>

## 🚀 高级应用

### 🔧 自定义 JSON 格式

<table>
  <tr>
    <th width="150">阶段</th>
    <th>详细操作</th>
  </tr>
  <tr>
    <td><b>🎨 结构设计</b></td>
    <td>
      • 根据需求设计 JSON 数据结构<br>
      • 为游戏关卡配置设计特定格式
    </td>
  </tr>
  <tr>
    <td><b>📝 数据准备</b></td>
    <td>
      • 根据设计准备新的 Excel 表格<br>
      • 按设计要求填入相应数据
    </td>
  </tr>
  <tr>
    <td><b>🔄 格式转换</b></td>
    <td>
      • 使用在线工具转换 Excel 到 JSON<br>
      • 保存初步转换的 JSON 文件
    </td>
  </tr>
  <tr>
    <td><b>🐍 脚本处理</b></td>
    <td>
      • 编写 Python 脚本进一步处理 JSON<br>
      • 使用内置 JSON 库进行格式转换和优化
    </td>
  </tr>
</table>

#### 处理流程示例：

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/json8.webp" alt="Python脚本批量转换图示" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图4: 使用 Python 脚本处理 JSON 数据</p>
</div>

### 📱 应用与集成

<div style="display: flex; flex-wrap: wrap; justify-content: space-between; margin: 20px 0;">
  <div style="width: 48%; text-align: center; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
    <img src="/json9.webp" alt="在TypeScript中调用单词数据图示" width="100%" />
    <p style="text-align: center; font-style: italic; margin-top: 10px;">图5: TypeScript 中导入自定义 JSON 数据</p>
  </div>
  <div style="width: 48%; text-align: center; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
    <img src="/json10.webp" alt="在TypeScript中调用单词数据图示" width="100%" />
    <p style="text-align: center; font-style: italic; margin-top: 10px;">图6: 使用导入的 JSON 数据</p>
  </div>
  <div style="width: 100%; text-align: center; padding: 10px; border-radius: 5px;">
    <img src="/json11.webp" alt="打包成JavaScript文件并在神岛地图中运行图示" width="600" />
    <p style="text-align: center; font-style: italic; margin-top: 10px;">图7: 最终打包后在神岛地图中的运行效果</p>
  </div>
</div>

## 📝 总结

| 使用场景            | 优势                           |
| ------------------- | ------------------------------ |
| **🎮 游戏关卡数据** | 便于管理大量结构化游戏关卡信息 |
| **⚙️ 配置文件**     | 集中管理应用程序配置，易于更新 |
| **🔤 文本资源**     | 支持多语言内容，便于本地化     |
| **📊 数据可视化**   | 存储图表数据，实现动态展示     |

:::tip
**💡 最佳实践**：针对复杂数据，考虑使用工具链（Excel → 脚本处理 → JSON → TypeScript）来提高数据转换和处理的效率。JSON 数据较大时，可考虑按需导入或懒加载策略。
:::
