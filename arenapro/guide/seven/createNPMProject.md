# 📦 创建神岛组件库项目

在 ArenaPro 插件中，创作者不仅可以打造独特的地图项目，还能够创建神岛组件库。该平台专为存放和分享可复用的代码组件而设计，这些组件能够被其他创作者轻松导入和应用，极大地提升了开发效率与代码复用性。

## 🚀 创建流程概览

<table>
  <tr>
    <th width="180">阶段</th>
    <th>主要任务</th>
  </tr>
  <tr>
    <td><b>🏗️ 项目初始化</b></td>
    <td>创建项目目录、命名并配置基础结构</td>
  </tr>
  <tr>
    <td><b>⚙️ 环境配置</b></td>
    <td>设置开发环境、导入到代码编辑器</td>
  </tr>
  <tr>
    <td><b>🔧 项目创建</b></td>
    <td>使用 Arena-Ts 脚手架初始化组件库项目</td>
  </tr>
  <tr>
    <td><b>🧪 验证测试</b></td>
    <td>构建项目并确认设置正确</td>
  </tr>
</table>

## 🏗️ 项目初始化

### 1️⃣ 创建项目目录

<ol>
  <li>在文件系统中新建一个空文件夹，作为神岛组件库项目的根目录。</li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/屏幕截图20240715111112.jpg" alt="创建空文件夹" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: 创建新的空文件夹</p>
</div>

<ol start="2">
  <li>为文件夹命名：</li>
</ol>

| 命名类型     | 示例           |
| ------------ | -------------- |
| **项目名称** | Arena 智能输出 |
| **英文名**   | arena-rich     |

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113045.png" alt="项目命名" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图2: 为项目文件夹命名</p>
</div>

:::warning
**⚠️ 命名规范**：为确保项目顺利编译，请务必使用纯英文命名，避免使用非法字符、中文及空格。推荐使用小写字母加连字符的命名方式（kebab-case），如 `arena-rich`。
:::

## ⚙️ 配置开发环境

### 2️⃣ 导入项目到编辑器

<ol>
  <li>打开 VSCode 编辑器</li>
  <li>通过以下路径导入项目：<br>
    <code>文件(File)</code> -> <code>打开文件夹(Open Folder)</code> -> 选择项目文件夹
  </li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/屏幕截图20240715113226.webp" alt="打开文件夹" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图3: 在 VSCode 中打开文件夹</p>
</div>

导入后，项目结构应如下所示：

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113114.png" alt="导入后效果" width="550" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图4: 导入后的初始项目结构</p>
</div>

## 🔧 创建 Arena-Ts 项目

### 3️⃣ 使用脚手架初始化项目

<table>
  <tr>
    <th width="200">操作</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>调出命令面板</b></td>
    <td>
      • Windows/Linux: 按下 <code>F1</code> 或 <code>Shift+Ctrl+P</code><br>
      • Mac: 按下 <code>Shift+Cmd+P</code>
    </td>
  </tr>
  <tr>
    <td><b>选择创建命令</b></td>
    <td>
      • 输入 <code>arena-ts</code><br>
      • 选择 <code>新建Arena-Ts项目(Create new Arena-Ts Project)</code>
    </td>
  </tr>
</table>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241128-21304.gif" alt="新建Arena-Ts项目" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图5: 使用命令面板创建新项目</p>
</div>

### 4️⃣ 项目配置

<ol>
  <li>脚手架将引导完成项目创建</li>
  <li>当被问及项目类型时，请务必选择<strong>神岛组件库</strong></li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113312.png" alt="选择项目类型" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图6: 选择"神岛组件库"作为项目类型</p>
</div>

<ol start="3">
  <li>按 <code>Enter</code> 键确认</li>
  <li>脚手架将自动创建文件并配置 <code>package.json</code></li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113416.png" alt="填写package.json信息" width="600" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图7: 配置 package.json 信息</p>
</div>

<ol start="5">
  <li>安装项目依赖</li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/ast.gif" alt="项目创建中" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图8: 安装项目依赖过程</p>
</div>

### 5️⃣ 完成安装

当终端显示如下信息时，表示项目已成功安装：

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113521.png" alt="项目安装成功" width="650" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图9: 项目依赖安装成功提示</p>
</div>

:::tip
**💡 疑难解决**：若在安装过程中遇到问题，请参考：[NodeJS 部署 Arena-Ts 问题解决方案](/bestPractices/nodejsTest)
:::

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-113642.png" alt="Arena-Ts项目创建成功" width="650" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图10: Arena-Ts 项目创建成功</p>
</div>

## 🧪 项目验证

### 6️⃣ 构建项目

<ol>
  <li>点击编辑器左下角的<code>完整构建项目</code>按钮</li>
  <li>若构建成功，终端将显示如下提示信息：</li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241128-221728.png" alt="构建成功" width="650" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图11: 项目构建成功提示</p>
</div>

## 📋 项目结构说明

### 7️⃣ 与神岛地图项目的区别

<div style="border-left: 4px solid #f39c12; padding-left: 15px; margin: 15px 0;">
<p><strong>🔍 主要差异：</strong> 虽然神岛组件库项目与神岛地图项目在结构上相似，但有以下几个重要区别：</p>
</div>

<table>
  <tr>
    <th width="150">区别点</th>
    <th>详细说明</th>
  </tr>
  <tr>
    <td><b>📄 代码分离</b></td>
    <td>
      • 组件库项目不能同时包含客户端和服务端代码<br>
      • <code>package.json</code> 中的 <code>main</code> 字段将自动配置为指定的脚本入口<br>
      • <code>types</code> 字段指向类型提示文件<br>
      • <code>files</code> 字段仅包含打包后的代码
    </td>
  </tr>
  <tr>
    <td><b>⚡ 构建优化</b></td>
    <td>
      • <code>dao3.config.json</code> 中的 <code>npmPackage</code> 属性用于指定构建端<br>
      • 自动停止构建另一端以优化速度
    </td>
  </tr>
  <tr>
    <td><b>📚 文档支持</b></td>
    <td>
      • 自动生成 npm 包所需的 <code>README.md</code> 模板<br>
      • 更加注重项目描述和使用说明
    </td>
  </tr>
</table>

## 🔄 端类型切换

### 8️⃣ 后期如何更换端

若你需要在后期更换项目的类型（例如从服务端切换到客户端），只需打开 `package.json` 文件，并点击右上角的设置按钮进行快速切换。

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-114602.png" alt="更换项目类型" width="650" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图12: 通过设置按钮切换项目类型</p>
</div>

:::tip
**💡 工作原理**：切换类型时，系统会根据配置的 `dao3.config.json` 文件来判断入口，并自动进行相应调整，无需手动修改复杂配置。
:::

## 📈 发布流程

完成组件库开发后，你可以将其发布到 npm 注册表，使其可被其他神岛地图项目导入使用。

| 步骤            | 说明                                           |
| --------------- | ---------------------------------------------- |
| **1. 准备发布** | 确保 `package.json` 中的版本号、描述等信息正确 |
| **2. 构建项目** | 使用 ArenaPro 插件的构建功能，生成发布包       |
| **3. 发布包**   | 使用 `npm publish` 命令发布到 npm 注册表       |
| **4. 验证发布** | 通过 `npm view <package-name>` 确认发布成功    |
