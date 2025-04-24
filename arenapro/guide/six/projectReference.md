# 🔗 跨项目引用

在神岛地图开发过程中，为了提高代码复用率和开发效率，不同扩展地图之间可能会共享一些代码，特别是工具类代码。跨项目引用功能允许项目 A 直接使用项目 B 中的代码，实现功能复用。

## 🎯 功能概述

<table>
  <tr>
    <th width="150">优势</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>♻️ 代码复用</b></td>
    <td>避免重复编写相同功能的代码，提高开发效率</td>
  </tr>
  <tr>
    <td><b>🔄 统一维护</b></td>
    <td>共享代码仅需在一处修改，所有引用项目自动获取更新</td>
  </tr>
  <tr>
    <td><b>📦 模块化</b></td>
    <td>促进代码模块化设计，提高项目可维护性</td>
  </tr>
</table>

## 📝 实现步骤

### 1️⃣ 配置工作区

#### 添加项目文件夹

AP 插件支持多项目开发模式，能够自动识别当前打开的项目文件，决定构建和资源管理的目标。通过以下步骤将项目 B 的文件夹引入工作区：

| 步骤   | 操作说明                                                     |
| ------ | ------------------------------------------------------------ |
| **1.** | 在资源管理器中，右键点击空白处                               |
| **2.** | 选择 `增加文件夹到工作区（Add Folder to Workspace...）` 选项 |
| **3.** | 选择项目 B 的文件夹并点击确定                                |

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-105649.png" alt="增加文件夹到工作区" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: 在 VS Code 中添加文件夹到工作区</p>
</div>

接着，选择项目 B 的文件夹并点击确定。

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-105935.png" alt="选择项目B文件夹" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图2: 选择要引用的项目文件夹</p>
</div>

:::tip
**💡 提示**：完成上述步骤后，工作区将包含两个根文件夹，分别代表两个神岛代码项目。建议使用有意义的文件夹名称，以便于在工作区中区分不同项目。
:::

### 2️⃣ 配置项目引用

假设我们现在想在 `bottleMan` 项目中引用 `Backroom` 项目中的 `sum` 函数。

#### 修改 tsconfig 配置

<div style="border-left: 4px solid #3498db; padding-left: 15px; margin: 15px 0;">
<p><strong>🔧 关键配置：</strong></p>
<p>在 <code>bottleMan</code> 项目下的服务端或客户端的 <code>tsconfig.json</code> 文件中，将 <code>rootDir</code> 属性设置为 <code>../../</code>，以便能够引用到 <code>Backroom</code> 项目下的文件。</p>
</div>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-110625.png" alt="配置tsconfig.json" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图3: 修改 tsconfig.json 配置文件</p>
</div>

#### 引用目标文件

在 `bottleMan` 项目下的服务端 `App.ts` 文件中，直接引用 `Backroom` 项目下的 `utils.ts` 文件。

<div style="background-color: #f6f8fa; padding: 15px; border-radius: 5px; margin: 15px 0;">

```typescript
// bottleMan/server/App.ts
import { sum } from "../../Backroom/shares/utils";

export default {
  onPlayerJoin(player) {
    const result = sum(5, 3);
    player.sendChat(`5 + 3 = ${result}`);
  },
};
```

</div>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-110733.png" alt="引用文件" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图4: 在代码中引用另一个项目的文件</p>
</div>

### 3️⃣ 验证引用

通过构建项目，在神岛编辑器中验证是否能够正常使用引用的代码。

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-111024.png" alt="验证引用效果" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图5: 在神岛编辑器中验证跨项目引用效果</p>
</div>

## ⚠️ 注意事项

<table>
  <tr>
    <th width="150">注意点</th>
    <th>详细说明</th>
  </tr>
  <tr>
    <td><b>🔍 路径正确性</b></td>
    <td>确保被引用项目的文件路径正确，相对路径基于配置的 <code>rootDir</code></td>
  </tr>
  <tr>
    <td><b>⚙️ 配置检查</b></td>
    <td>检查 tsconfig 配置是否生效，特别是 <code>rootDir</code> 和 <code>baseUrl</code> 等属性</td>
  </tr>
  <tr>
    <td><b>🔄 依赖关系</b></td>
    <td>构建时注意项目依赖关系，被引用项目的代码变更可能影响引用项目</td>
  </tr>
  <tr>
    <td><b>🧩 类型定义</b></td>
    <td>确保跨项目引用的类型定义正确，避免类型不匹配问题</td>
  </tr>
</table>

:::warning
**⚠️ 警告**：修改被引用项目中的代码后，请确保重新构建引用该项目的所有项目，以确保更改生效。
:::

## 📈 最佳实践

| 实践                    | 说明                                                       |
| ----------------------- | ---------------------------------------------------------- |
| **📁 统一共享代码位置** | 将可能被多个项目引用的代码放在统一的 `shares` 文件夹中     |
| **📝 完善文档注释**     | 为共享代码添加详细的文档注释，便于其他项目开发者理解和使用 |
| **🧪 编写单元测试**     | 为共享代码编写单元测试，确保跨项目引用的稳定性             |
| **🔖 版本管理**         | 对共享代码进行版本管理，记录重要变更，便于追踪问题         |

通过以上步骤，我们成功实现了在神岛地图开发中的跨项目代码引用，提高了开发效率和代码复用率。这种方法特别适用于团队开发多个相关联的神岛地图项目，可以显著减少重复代码并提高代码质量。
