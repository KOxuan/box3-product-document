# 插件 MCP 使用指南

**模型上下文协议** (Model Context Protocol, MCP) 是一种专为大型语言模型设计的通信框架，用于在模型与外部环境之间建立标准化的信息交换机制。它提供以下核心功能：

- **上下文管理**：高效管理和传递模型所需的上下文信息
- **能力扩展**：通过标准化接口实现模型能力的灵活扩展
- **一致性保证**：确保模型与外部环境之间的通信可靠性和稳定性
- **工具集成**：支持与各类开发工具和服务的无缝对接

## 配置与使用

### 支持的开发工具

目前已有多个主流开发工具完整支持 MCP 协议：

- VS Code
- Claude
- Cursor
- Windsurf
- Cline
- Cherry Studio
  等

### VS Code 配置步骤

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

配置说明：

- `servers`：MCP 服务器配置集合
- `ArenaPro-MCP`：服务器标识名（可自定义）
- `type`：服务类型，使用 SSE (Server-Sent Events) 协议
- `url`：MCP 服务器地址

### 启动服务

完成配置后，界面将显示如下：

![MCP配置界面](/QQ20250412-221652.png)

点击配置按钮上方的运行按钮，等待服务启动完成即可开始使用。

## 功能使用

### AI Agent 交互

1. 启动 VS Code 内置的 Github Copilot
2. 切换至代理（Agent）模式

![Agent模式设置](/QQ20250412-222246.png)

### 扩展工具集成

插件提供的 MCP 核心功能可与其他 MCP 工具协同，获取更多神岛相关功能：

- [Box3 引擎开放接口](https://smithery.ai/server/@box3lab/engine-openapi-mcp)
- [Box3 地图数据分析](https://smithery.ai/server/@box3lab/statistics-mcp)

## 应用示例

### 代码检查与部署

AI 可通过 MCP 协助检查代码问题并自动部署到神岛：

![代码检查示例](https://static.codemao.cn/pickduck/SJQxilOA1x.gif?hash=Fo5PI5QZP3YKMoUZo-CXFI30XHkP)

### 地图数据分析

结合 Box3 地图数据分析工具，可实现以下自动化工作：

- 获取用户授权与地图信息
- 分析游玩数据
- 生成分析报告
- 自动更新文档

![数据分析示例](/419F2BE1F44CDB9812CB971DAC5CDFDF.png)

### 自动化优势

MCP 工具链提供以下便利：

- 免除手动账号输入
- AI 直接获取账户数据
- 支持多工具协同分析
- 实现自动化操作流程

![自动化操作](/7df41d84744463e77966d199a0276aff.png)

## 常见问题

1. **服务启动失败**

   - 检查 25315 端口占用情况
   - 确认插件安装状态

2. **工具连接异常**

   - 验证网络连接状态
   - 检查工具服务地址配置

3. **数据分析失败**
   - 检查账号权限设置
   - 确认数据源可用性

## 附录：MCP 工具命令

### 用户中心工具

- `userCenterTool_userTokenAndUA`：获取用户 Token 和 UserAgent
- `userCenterTool_userInfo`：获取用户基本信息
- `userCenterTool_accountsLogin`：账户登录
- `userCenterTool_accountsLogout`：账户登出

### 文件操作工具

- `file_npm_package_get`：搜索神岛 NPM 包
- `file_outputName`：输出和更新文件
- `file_mapTool`：地图选择
- `file_buildNUpload`：构建和上传
- `file_createProject`：创建项目
- `file_checkDts`：检查 Dts 文件
- `file_nodeJs_setting`：Node.js 配置
- `file_openArena`：打开资源管理器
- `file_reHMR`：重启 HMR
- `file_stopHMR`：停止 HMR
- `file_upLoad`：上传 JS 文件
- `file_debugger`：快速调试
- `file_openOutputLog`：打开输出日志
- `file_dao3config_open`：打开项目配置
- `file_npm_package_path`：设置 NPM 包路径

### 地图工具

- `map_showMap`：显示地图创作端
- `map_playData`：查看游玩数据
- `map_resource`：同步地图资源

### 组件工具

- `component_showComponentStats`：显示组件统计

### Chat 吉 PT 工具

- `chatjpt_onlyKnowledgeBase`： 仅查询神岛 API 知识库

更多 MCP 协议详情，请参考 [MCP 协议文档](https://modelcontextprotocol.io)。
