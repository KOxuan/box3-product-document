# 🔌 MCP Plugin Usage Guide

A quick story: you keep hopping between VS Code logs, pasting API keys, and authorizing in a browser—your flow breaks. After enabling MCP, the IDE agent “knows how to use tools”: it can read/write your project and talk to external services. Common steps (auth, build, upload, analytics) chain together as a single instruction and development feels smooth again.

What is MCP? In one sentence: a standard plug between LLMs and the outside world.

- 🧠 Context management: feed task-critical context to AI precisely and safely.
- 🔄 Capability expansion: attach new tools via a unified protocol anytime.
- 🔒 Consistency: stable formats, error handling, and state management.
- 🛠️ Tool integration: seamless with IDEs, analytics services, and open APIs.

## ⚙️ Configuration and Usage

### 🔧 Supported Development Tools

Tools that support MCP include:
- VS Code
- Trae / Claude / Cursor
- Windsurf / Cline / Cherry Studio, etc.

### 📝 VS Code Configuration Steps

1.  Create an `mcp.json` configuration file in the `.vscode` directory of your project.
2.  Add the following configuration content:

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
<p><strong>📋 Configuration Description:</strong></p>
<ul>
  <li><code>servers</code>: A collection of MCP server configurations</li>
  <li><code>ArenaPro-MCP</code>: The server identifier name (can be customized)</li>
  <li><code>type</code>: The service type, using the SSE (Server-Sent Events) protocol</li>
  <li><code>url</code>: The MCP server address</li>
</ul>
</div>

### 🚀 Starting the Service

After configuration, open the MCP panel and you should see a screen like this. Click the Run button above the configuration item and wait until it shows Running:

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20250412-221652.png" alt="MCP Configuration Interface" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">Figure 1: MCP Configuration Interface</p>
</div>

Once the service is ready, you can invoke MCP tools directly inside the IDE.

## 💬 Feature Usage

### 🤖 AI Agent Interaction

<ol>
  <li>Start the built-in GitHub Copilot in VS Code</li>
  <li>Switch to Agent mode</li>
</ol>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20250412-222246.png" alt="Agent Mode Settings" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">Figure 2: Agent Mode Settings Interface</p>
</div>

### 🧩 Extended Tool Integration

<div style="border-left: 4px solid #f39c12; padding-left: 15px; margin: 15px 0;">
<p><strong>🔌 Integrated Tools:</strong> The core MCP functions provided by the plugin can work in conjunction with other MCP tools to access more Box3-related features:</p>
<ul>
  <li><a href="https://smithery.ai/server/@box3lab/engine-openapi-mcp">Box3 Engine OpenAPI</a></li>
  <li><a href="https://smithery.ai/server/@box3lab/statistics-mcp">Box3 Map Data Analysis</a></li>
</ul>
</div>

## 📊 Application Examples

### 📝 Code Inspection and Deployment

The AI can assist in checking code issues and automatically deploying to Box3 via MCP:

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="https://static.codemao.cn/pickduck/SJQxilOA1x.gif?hash=Fo5PI5QZP3YKMoUZo-CXFI30XHkP" alt="Code Inspection Example" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">Figure 3: Code Inspection and Deployment Example</p>
</div>

### 📈 Map Data Analysis

Combined with the Box3 map data analysis tool, the following automated tasks can be achieved:

<table>
  <tr>
    <th width="180">Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><b>🔑 User Authorization Acquisition</b></td>
    <td>Automatically obtains user authorization and map information</td>
  </tr>
  <tr>
    <td><b>📊 Data Analysis</b></td>
    <td>Analyzes gameplay data and generates various statistical results</td>
  </tr>
  <tr>
    <td><b>📝 Report Generation</b></td>
    <td>Generates structured analysis reports</td>
  </tr>
  <tr>
    <td><b>🔄 Document Updates</b></td>
    <td>Automatically updates relevant documents</td>
  </tr>
</table>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/419F2BE1F44CDB9812CB971DAC5CDFDF.png" alt="Data Analysis Example" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">Figure 4: Map Data Analysis Example</p>
</div>

### ⚡ Automation Advantages

<div style="display: flex; justify-content: space-between; margin: 20px 0;">
  <div style="width: 48%; padding: 15px; border: 1px solid #e1e4e8; border-radius: 6px;">
    <h3>🔑 Seamless Authorization</h3>
    <ul>
      <li>Eliminates manual account entry</li>
      <li>AI directly accesses account data</li>
    </ul>
  </div>
  <div style="width: 48%; padding: 15px; border: 1px solid #e1e4e8; border-radius: 6px;">
    <h3>🔄 Tool Collaboration</h3>
    <ul>
      <li>Supports multi-tool collaborative analysis</li>
      <li>Enables automated operation flows</li>
    </ul>
  </div>
</div>

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/7df41d84744463e77966d199a0276aff.png" alt="Automated Operation" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">Figure 5: Automated Operation Flow</p>
</div>

## ❓ Frequently Asked Questions

<table>
  <tr>
    <th width="180">Issue</th>
    <th>Solution</th>
  </tr>
  <tr>
    <td><b>🚫 Service Fails to Start</b></td>
    <td>
      • Check if port 25315 is occupied<br>
      • Confirm the plugin's enabled status<br>
      • Try restarting VS Code
    </td>
  </tr>
  <tr>
    <td><b>🔌 Tool Connection Abnormal</b></td>
    <td>
      • Verify the network connection status<br>
      • Check the tool's service address configuration<br>
      • Confirm firewall settings
    </td>
  </tr>
</table>

:::warning
**⚠️ Note**: Service startup depends on the ArenaPro plugin. Please ensure it is correctly installed and enabled. If you encounter network issues, it is recommended to check your network connection and try using a proxy or switching to a different network environment.
:::

## 📚 Appendix: MCP Tool Commands

### 👤 User Center Tools

| Command                         | Description                  |
| ------------------------------- | ---------------------------- |
| `userCenterTool_userTokenAndUA` | Get user Token and UserAgent |
| `userCenterTool_userInfo`       | Get basic user information   |
| `userCenterTool_accountsLogin`  | Account login                |
| `userCenterTool_accountsLogout` | Account logout               |

### 📁 File Operation Tools

| Command                 | Description                  |
| ----------------------- | ---------------------------- |
| `file_npm_package_get`  | Search for Box3 NPM packages |
| `file_outputName`       | Output and update file       |
| `file_mapTool`          | Map selection                |
| `file_buildNUpload`     | Build and upload             |
| `file_createProject`    | Create project               |
| `file_checkDts`         | Check Dts files              |
| `file_nodeJs_setting`   | Node.js configuration        |
| `file_openArena`        | Open resource manager        |
| `file_reHMR`            | Restart HMR                  |
| `file_stopHMR`          | Stop HMR                     |
| `file_upLoad`           | Upload JS file               |
| `file_debugger`         | Quick debug                  |
| `file_openOutputLog`    | Open output log              |
| `file_dao3config_open`  | Open project configuration   |
| `file_npm_package_path` | Set NPM package path         |

### 🗺️ Map Tools

| Command        | Description          |
| -------------- | -------------------- |
| `map_showMap`  | Show map creator end |
| `map_playData` | View gameplay data   |
| `map_resource` | Sync map resources   |

### 🧩 Component Tools

| Command                        | Description          |
| ------------------------------ | -------------------- |
| `component_showComponentStats` | Show component stats |

### 💬 Chat Ji PT Tools

| Command                      | Description                            |
| ---------------------------- | -------------------------------------- |
| `chatjpt_onlyKnowledgeBase` | Query the Box3 API knowledge base only |

For a dedicated UI and usage guide, see: [Only Knowledge Base Mode (onlyKnowledgeBase)](./chat-only-knowledgebase.md).
