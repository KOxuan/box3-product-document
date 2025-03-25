# 导入 JSON 文件至 TypeScript 项目

在 TypeScript 项目中，导入 JSON 文件是一项非常实用的功能，特别是在处理配置数据或游戏关卡数据时。本文将详细介绍从 Excel 表格开始，最终将 JSON 文件导入到 TypeScript 文件中的完整流程。

## 数据准备与转换

### Excel 转 JSON

当数据最初以 Excel 表格形式存在时，需要先将其转换为 JSON 格式。具体步骤如下：

1. **数据准备**

   - 确保 Excel 表格数据已整理完毕
   - 每列对应一个数据字段

2. **在线转换**

   - 访问[在线 Excel 转 JSON 工具](https://www.lddgo.net/string/excel-to-json)
   - 上传 Excel 文件并选择转换选项

3. **保存结果**
   - 转换完成后保存生成的 JSON 文件

![Excel转JSON步骤图示](/json1.webp)

## TypeScript 集成

### JSON 文件导入

1. **文件验证**

   - 打开保存的 JSON 文件
   - 验证内容正确性

2. **文件导入**

   - 在 TypeScript 文件（如`App.ts`）中使用 import 语句
   - 确保路径正确

   ```typescript
   import jsonData from "./path/to/your/jsonfile.json";
   ```

3. **数据处理**
   - 在代码中使用 JSON 数据
   - 支持数组遍历、对象属性访问等操作

![在TypeScript中导入JSON文件图示](/json4.webp)

4. **编译并查看效果**：编译你的 TypeScript 代码，并在你的项目（如神岛地图）中查看效果。

![编译后查看效果图示](/json5.webp)

## 高级应用

### 自定义 JSON 格式

1. **结构设计**

   - 根据需求设计 JSON 数据结构
   - 例如为游戏关卡配置设计特定格式

2. **数据准备**

   - 根据设计准备新的 Excel 表格
   - 填入相应数据

3. **格式转换**

   - 使用[在线 Excel 转 JSON 工具](https://www.lddgo.net/string/excel-to-json)
   - 保存转换后的 JSON 文件

4. **脚本处理**
   - 编写 Python 脚本处理 JSON 文件
   - 使用内置 JSON 库进行格式转换

![Python脚本批量转换图示](/json8.webp)

5. **运行 Python 脚本**：运行你的 Python 脚本，生成最终的 JSON 文件。

![在TypeScript中调用单词数据图示](/json9.webp)

6. **在 TypeScript 中使用**：现在，你可以在你的 TypeScript 代码中导入并使用这个自定义格式的 JSON 数据了。

![在TypeScript中调用单词数据图示](/json10.webp)

7. **打包并运行**：将你的 TypeScript 代码打包成 JavaScript 文件，并在神岛地图中运行，以查看最终效果。

![打包成JavaScript文件并在神岛地图中运行图示](/json11.webp)

通过以上步骤，你可以轻松地将 Excel 表格数据转换为 JSON 文件，并在 TypeScript 项目中导入和使用这些数据。这对于处理复杂的配置数据或游戏关卡数据来说非常有用。
