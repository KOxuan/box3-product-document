# 🔌 插件 MCP 使用指南

**模型上下文协议** (Model Context Protocol, MCP) 是一种专为大型语言模型设计的通信框架，用于在模型与外部环境之间建立标准化的信息交换机制。它提供以下核心功能：

<table>
  <tr>
    <th width="180">功能</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>🧠 上下文管理</b></td>
    <td>高效管理和传递模型所需的上下文信息</td>
  </tr>
  <tr>
    <td><b>🔄 能力扩展</b></td>
    <td>通过标准化接口实现模型能力的灵活扩展</td>
  </tr>
  <tr>
    <td><b>🔒 一致性保证</b></td>
    <td>确保模型与外部环境之间的通信可靠性和稳定性</td>
  </tr>
  <tr>
    <td><b>🛠️ 工具集成</b></td>
    <td>支持与各类开发工具和服务的无缝对接</td>
  </tr>
</table>

## ⚙️ 配置与使用

### 🔧 支持的开发工具

<div style="border-left: 4px solid #3498db; padding-left: 15px; margin: 15px 0;">
<p><strong>🔍 兼容工具：</strong> 目前已有多个主流开发工具完整支持 MCP 协议：</p>
<ul>
  <li>VS Code</li>
  <li>Claude</li>
  <li>Cursor</li>
  <li>Windsurf</li>
  <li>Cline</li>
  <li>Cherry Studio 等</li>
</ul>
</div>

### 📝 VS Code 配置步骤

1. 在项目的 `.vscode` 目录下创建 `mcp.json` 配置文件
2. 添加以下配置内容：

```json
{
  "servers": {
    "ArenaPro-MCP": {
      "type": "sse",
      "url": "http://localhost:25315/ap-mcp"
    }
  }
}
```

<div style="border-left: 4px solid #42b983; padding-left: 15px; margin: 15px 0;">
<p><strong>📋 配置说明：</strong></p>
<ul>
  <li><code>servers</code>：MCP 服务器配置集合</li>
  <li><code>ArenaPro-MCP</code>：服务器标识名（可自定义）</li>
  <li><code>type</code>：服务类型，使用 SSE (Server-Sent Events) 协议</li>
  <li><code>url</code>：MCP 服务器地址</li>
</ul>
</div>

### 🚀 启动服务

完成配置后，界面将显示如下：

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20250412-221652.png" alt="MCP配置界面" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: MCP 配置界面</p>
</div>

点击配置按钮上方的运行按钮，等待服务启动完成即可开始使用。

## 💬 功能使用

### 🤖 AI Agent 交互

<ol>
  <li>启动 VS Code 内置的 Github Copilot</li>
  <li>切换至代理（Agent）模式</li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20250412-222246.png" alt="Agent模式设置" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图2: Agent 模式设置界面</p>
</div>

### 🧩 扩展工具集成

<div style="border-left: 4px solid #f39c12; padding-left: 15px; margin: 15px 0;">
<p><strong>🔌 集成工具：</strong> 插件提供的 MCP 核心功能可与其他 MCP 工具协同，获取更多神岛相关功能：</p>
<ul>
  <li><a href="https://smithery.ai/server/@box3lab/engine-openapi-mcp">Box3 引擎开放接口</a></li>
  <li><a href="https://smithery.ai/server/@box3lab/statistics-mcp">Box3 地图数据分析</a></li>
</ul>
</div>

## 📊 应用示例

### 📝 代码检查与部署

AI 可通过 MCP 协助检查代码问题并自动部署到神岛：

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="https://static.codemao.cn/pickduck/SJQxilOA1x.gif?hash=Fo5PI5QZP3YKMoUZo-CXFI30XHkP" alt="代码检查示例" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图3: 代码检查与部署示例</p>
</div>

### 📈 地图数据分析

结合 Box3 地图数据分析工具，可实现以下自动化工作：

<table>
  <tr>
    <th width="180">功能</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>🔑 用户授权获取</b></td>
    <td>自动获取用户授权与地图信息</td>
  </tr>
  <tr>
    <td><b>📊 数据分析</b></td>
    <td>分析游玩数据，生成各类统计结果</td>
  </tr>
  <tr>
    <td><b>📝 报告生成</b></td>
    <td>生成结构化的分析报告</td>
  </tr>
  <tr>
    <td><b>🔄 文档更新</b></td>
    <td>自动更新相关文档</td>
  </tr>
</table>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/419F2BE1F44CDB9812CB971DAC5CDFDF.png" alt="数据分析示例" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图4: 地图数据分析示例</p>
</div>

### ⚡ 自动化优势

<div style="display: flex; justify-content: space-between; margin: 20px 0;">
  <div style="width: 48%; padding: 15px; border: 1px solid #e1e4e8; border-radius: 6px;">
    <h3>🔑 无感授权</h3>
    <ul>
      <li>免除手动账号输入</li>
      <li>AI 直接获取账户数据</li>
    </ul>
  </div>
  <div style="width: 48%; padding: 15px; border: 1px solid #e1e4e8; border-radius: 6px;">
    <h3>🔄 工具协同</h3>
    <ul>
      <li>支持多工具协同分析</li>
      <li>实现自动化操作流程</li>
    </ul>
  </div>
</div>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/7df41d84744463e77966d199a0276aff.png" alt="自动化操作" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图5: 自动化操作流程</p>
</div>

## ❓ 常见问题

<table>
  <tr>
    <th width="180">问题</th>
    <th>解决方案</th>
  </tr>
  <tr>
    <td><b>🚫 服务启动失败</b></td>
    <td>
      • 检查 25315 端口占用情况<br>
      • 确认插件启用状态<br>
      • 尝试重启 VS Code
    </td>
  </tr>
  <tr>
    <td><b>🔌 工具连接异常</b></td>
    <td>
      • 验证网络连接状态<br>
      • 检查工具服务地址配置<br>
      • 确认防火墙设置
    </td>
  </tr>
  
</table>

:::warning
**⚠️ 注意**：服务启动依赖 ArenaPro 插件，请确保已正确安装并启用插件。如遇网络问题，建议检查网络连接并尝试使用代理或更换网络环境。
:::

## 📚 附录：MCP 工具命令

### 👤 用户中心工具

| 命令                            | 功能说明                    |
| ------------------------------- | --------------------------- |
| `userCenterTool_userTokenAndUA` | 获取用户 Token 和 UserAgent |
| `userCenterTool_userInfo`       | 获取用户基本信息            |
| `userCenterTool_accountsLogin`  | 账户登录                    |
| `userCenterTool_accountsLogout` | 账户登出                    |

### 📁 文件操作工具

| 命令                    | 功能说明        |
| ----------------------- | --------------- |
| `file_npm_package_get`  | 搜索神岛 NPM 包 |
| `file_outputName`       | 输出和更新文件  |
| `file_mapTool`          | 地图选择        |
| `file_buildNUpload`     | 构建和上传      |
| `file_createProject`    | 创建项目        |
| `file_checkDts`         | 检查 Dts 文件   |
| `file_nodeJs_setting`   | Node.js 配置    |
| `file_openArena`        | 打开资源管理器  |
| `file_reHMR`            | 重启 HMR        |
| `file_stopHMR`          | 停止 HMR        |
| `file_upLoad`           | 上传 JS 文件    |
| `file_debugger`         | 快速调试        |
| `file_openOutputLog`    | 打开输出日志    |
| `file_dao3config_open`  | 打开项目配置    |
| `file_npm_package_path` | 设置 NPM 包路径 |

### 🗺️ 地图工具

| 命令           | 功能说明       |
| -------------- | -------------- |
| `map_showMap`  | 显示地图创作端 |
| `map_playData` | 查看游玩数据   |
| `map_resource` | 同步地图资源   |

### 🧩 组件工具

| 命令                           | 功能说明     |
| ------------------------------ | ------------ |
| `component_showComponentStats` | 显示组件统计 |

### 💬 Chat 吉 PT 工具

| 命令                        | 功能说明              |
| --------------------------- | --------------------- |
| `chatjpt_onlyKnowledgeBase` | 仅查询神岛 API 知识库 |

:::tip
**💡 提示**：更多 MCP 协议详情，请参考 [MCP 协议文档](https://modelcontextprotocol.io)。使用这些命令时无需记忆具体语法，AI 助手会自动帮助你正确调用。
:::
