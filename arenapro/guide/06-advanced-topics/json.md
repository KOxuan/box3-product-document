# 📊 专业指南：管理游戏数据 (Excel → JSON → TypeScript)

在游戏开发中，数值和策划同学经常使用 Excel 来配置数据（如怪物属性、道具信息、关卡配置）。将这些数据安全、高效地集成到 TypeScript 项目中，是一个核心的工程化问题。

本指南将为你呈现一套专业、类型安全的数据工作流，确保从 Excel 到游戏代码的每一步都稳固可靠。

## 核心思想：用代码“契约”约束数据

最脆弱的工作流是：`策划随意修改 Excel -> 随意使用在线工具转换 -> 代码直接使用`。这种方式下，任何微小的格式变动都可能导致游戏在运行时崩溃。

**专业的做法是“代码先行”，用 TypeScript 的 `interface` 创建一份数据“契约”**。这份契约精确定义了数据应有的结构，任何不符合契约的数据都无法通过编译，从而在开发阶段就杜绝了潜在的错误。

## 快速替代方案：使用在线工具转换 (适合快速测试)

如果你只是想快速验证一个想法，或者进行一次性转换，使用在线工具也是一个可行的选择。

| 步骤            | 操作详情                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **1. 数据准备** | 确保你的 Excel 表格数据已整理完毕，第一行为标题行。                                               |
| **2. 在线转换** | 访问 [在线 Excel 转 JSON 工具](https://www.lddgo.net/string/excel-to-json)，上传你的 Excel 文件。 |
| **3. 保存结果** | 转换完成后，将生成的 JSON 数据复制或下载下来，并将其放入你项目的 `src/data` 目录下。              |

:::danger
**⚠️ 专业开发警告**

虽然在线工具很方便，但它绕过了“数据契约”的校验。这意味着：

- **格式极其脆弱**：如果策划在 Excel 中增加或修改了一列，在线工具会生成新的格式，这几乎一定会导致你的游戏代码在运行时崩溃。
- **缺乏可维护性**：依赖手动转换和复制粘贴，是不可靠、不可重复的流程，极易引入人为错误。

**结论：此方法仅可用于快速、临时的原型验证。对于所有正式项目，请务必使用我们推荐的、基于 `interface` 契约的工作流。**
:::

## 最佳实践工作流

### 1️⃣ 第 1 步 (程序员)：定义数据契约 (`interface`)

首先，由程序员定义数据的结构。在 `src/types.ts` 或类似的文件中，为你的数据创建一个 `interface`。

```ts
// src/types.ts
export interface MonsterData {
  readonly id: string; // 使用 readonly 防止数据在代码中被意外修改
  readonly name: string;
  readonly health: number;
  readonly attack: number;
  readonly drops: string[];
}
```

这份 `interface` 是所有后续步骤的“金科玉律”。

### 2️⃣ 第 2 步 (策划/设计师)：填写表格数据

根据定义好的 `interface`，创建一个列名完全对应的 Excel 模板表格，然后交由策划同学填写。

<div style="text-align: center; margin: 20px 0;">
  <img src="/json1.webp" alt="符合契约的 Excel 表格" width="600" />
</div>

### 3️⃣ 第 3 步 (工具/脚本)：将 Excel 安全地转换为 JSON

这是最关键的一步。你需要一个工具或脚本，**严格按照 `MonsterData` 接口的结构**，将 Excel 表格转换为 JSON 文件。

| 转换方式         | 优点                       | 缺点                                     | 推荐度     |
| ---------------- | -------------------------- | ---------------------------------------- | ---------- |
| **自定义脚本**   | 格式可控，最稳定，可自动化 | 需要编写脚本 (Python, Node.js 等)        | ⭐⭐⭐⭐⭐ |
| **在线转换工具** | 快速，适合一次性转换       | 格式易出错，无法保证符合契约，依赖第三方 | ⭐⭐       |

对于需要长期维护的项目，**强烈建议编写一个自定义脚本**来完成转换。这能确保无论 Excel 如何修改，最终生成的 JSON 格式永远是程序所期望的。

<div style="text-align: center; margin: 20px 0;">
  <img src="/json8.webp" alt="使用 Python 脚本批量转换" width="600" />
  <p style="font-style: italic; margin-top: 10px;">(示例：使用 Python 脚本将数据处理为期望的格式)</p>
</div>

最终，你在项目的 `src/data/` 目录下得到 `monsters.json` 文件。

### 4️⃣ 第 4 步 (程序员)：在代码中类型安全地使用数据

现在，你可以直接导入 JSON 文件，并借助我们定义的“契约”来获得完整的类型安全。

```ts
// server/src/monsterManager.ts

// 1. 同时导入 JSON 数据和它的“契约”
import allMonsterData from "../data/monsters.json";
import type { MonsterData } from "../types";

// 2. 创建一个 Map，用于通过 ID 快速查找怪物数据
//    我们告诉 TypeScript，这个 Map 的键是 string，值必须符合 MonsterData 契约
const monsterDatabase = new Map<string, MonsterData>();

// 3. 遍历导入的 JSON 数组，填充我们的数据库
//    通过 as MonsterData[] 进行类型断言，确保数据符合契约
for (const monster of allMonsterData as MonsterData[]) {
  monsterDatabase.set(monster.id, monster);
}

// 4. 现在可以安全地使用这些数据了
export function getMonsterHealth(monsterId: string): number | undefined {
  const monster = monsterDatabase.get(monsterId);
  // 如果你把 `health` 错写成 `hp`，TypeScript 会立刻报错！
  return monster?.health;
}
```

这个流程的好处是巨大的：

- **无与伦比的自动补全**：输入 `monster.` 时，VS Code 会提示 `id`, `name`, `health` 等字段。
- **安全的重构**：在 `MonsterData` 接口中修改字段名，TS 会帮你找出所有需要同步修改的地方。
- **无需 `JSON.parse`**：ArenaPro 的构建工具会自动为你处理好文件解析。

<div style="display: flex; justify-content: space-between; margin: 20px 0;">
  <div style="width: 48%; text-align: center;">
    <img src="/json9.webp" alt="在 TypeScript 中安全导入 JSON" width="100%" />
  </div>
  <div style="width: 48%; text-align: center;">
    <img src="/json10.webp" alt="享受类型安全的自动补全" width="100%" />
  </div>
</div>

通过结合使用 JSON 和 TypeScript `interface`，你可以建立一套强大、可靠且易于维护的游戏数据管理系统。

---

> **上一篇：[返回上一章：最佳实践](../05-best-practices/index.md)**
>
> **下一篇：[可视化你的代码结构](./nodeGraph.md)**
