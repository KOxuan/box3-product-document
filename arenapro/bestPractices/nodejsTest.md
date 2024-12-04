# Node.js 部署 Arena-Ts 问题指南

## 解决 Windows 禁止运行脚本的问题

在 Windows 系统上，你可能会遇到以下错误消息：

```bash
npm : 无法加载文件 C:\ProgramFiles\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https://go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm i
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

### 解决方案步骤

1. **以管理员身份运行 PowerShell**

   ![PowerShell 以管理员身份运行](/QQ20241204-212524.png)

2. **更改执行策略**

   在 PowerShell 中输入以下命令，将执行策略更改为 `RemoteSigned`：

   ```bash
   set-ExecutionPolicy RemoteSigned
   ```

   系统会提示你确认更改，输入 `Y` 并按回车。

   ![更改执行策略](/QQ20241204-212656.png)

3. **重启 VSCode 编辑器**

   重启你的 VSCode 编辑器后，再次执行命令，将不会再弹出禁止运行脚本的提示。

## 检查 Node.js 是否已安装

在开始部署之前，确保你的系统上已经安装了 Node.js。你可以通过以下步骤进行检查：

1. 打开命令行或终端。
2. 输入以下命令：

   ```bash
   node -v
   ```

   如果系统返回了 Node.js 的版本号，则表明你已经安装了 Node.js。如果没有返回任何内容或提示找不到 `node` 命令，则需要安装 Node.js。

## 安装或更新 Node.js

- **如果未安装 Node.js**：

  请参考 [部署 Node.js 环境](./nodejs) 指南进行安装。

- **如果已安装但版本过低**：

  你可以使用 Node.js 的版本管理器 [nvm](https://github.com/nvm-sh/nvm)（Node Version Manager）来管理多个版本的 Node.js，或者直接卸载当前版本并重新安装更高版本的 Node.js。

## 手动使用 npm 初始化项目

在确认已经安装了 Node.js v20 或更高版本的 LTS 版本后，你可以继续执行 npm 命令。

- **在 macOS 系统上**：

  你可以在每行命令前面加上 `sudo` 以管理员权限执行该命令。

- **清除 npx 缓存**（如果之前安装过程中遇到问题）：

  ```bash
  npx --registry=https://mirrors.cloud.tencent.com/npm/ clear-npx-cache
  ```

- **全局安装 `create-arena-project`**：

  ```bash
  npm --registry=https://mirrors.cloud.tencent.com/npm/ i create-arena-project@latest -g
  ```

  请注意，`create-arena-project` 是一个可以在 npm 上找到的包。

- **初始化项目**：

  ```bash
  npm --registry=https://mirrors.cloud.tencent.com/npm/ init arena-project .
  ```

  最后，使用正确的命令来初始化你的项目。

通过遵循上述步骤，你应该能够解决在部署 Arena-Ts 时遇到的 Node.js 相关问题。