# Node.js 部署 Arena-Ts 常见问题解决指南

> 本指南帮助你解决在使用 Node.js 部署 Arena-Ts 项目时可能遇到的常见问题，适用于 Windows、macOS 和 Linux 系统。

## 🔍 快速诊断

**首先检查你的环境是否符合基本要求：**

✅ 打开命令行并输入以下命令检查版本：

```bash
node -v  # 应显示 v20.0.0 或更高版本
npm -v   # 应显示 v10.0.0 或更高版本
```

❓ **没有安装 Node.js？** → [点击查看安装指南](./nodejs)

## 🪟 Windows 系统问题解决

### 1️⃣ 禁止运行脚本错误

**你可能看到这样的错误：**

```
npm : 无法加载文件...因为在此系统上禁止运行脚本。
```

**简单解决方法：**

1. 右键点击开始菜单，选择"Windows PowerShell (管理员)"

   ![PowerShell 以管理员身份运行](/QQ20241204-212524.png)

2. 复制粘贴下面这行命令，然后按回车：

   ```bash
   Set-ExecutionPolicy RemoteSigned
   ```

3. 当看到提示时，输入 `Y` 并按回车

   ![更改执行策略](/QQ20241204-212656.png)

4. 关闭并重新打开 VS Code 即可

### 2️⃣ 权限不足问题

**错误提示：** `EPERM: operation not permitted`

**解决方法（任选一种）：**

**方法 A：以管理员身份运行软件**

1. 右键点击 VS Code 图标
2. 选择"以管理员身份运行"

**方法 B：修改文件夹权限（推荐）**

1. 复制下面的命令（替换为你的实际项目路径和用户名）

   ```bash
   # 在管理员命令提示符(cmd)中运行
   icacls "C:\你的项目路径" /grant 用户名:(OI)(CI)F /T
   ```

   **具体例子：**

   ```bash
   # 如果你的项目在 C:\Projects\arena-game 目录下，%USERNAME% 变量自动填入当前用户名
   icacls "C:\Projects\arena-game" /grant %USERNAME%:(OI)(CI)F /T
   ```

2. 按 Win+R，输入 cmd，按 Ctrl+Shift+Enter 以管理员身份运行
3. 粘贴修改后的命令并按回车

## 🍎 macOS/Linux 系统问题解决

### 1️⃣ 权限不足问题

**错误提示：** `Error: EACCES: permission denied`

**最简单的解决方法：**

打开终端，复制粘贴以下命令（替换为你的实际项目路径）：

```bash
# 一键修复项目文件夹权限
sudo chown -R $(whoami) 你的项目路径
sudo chmod -R 755 你的项目路径
```

**小贴士：**

- 如果不确定项目路径，可以先打开终端，输入 `sudo chown -R $(whoami) `，然后从 Finder 将文件夹拖入终端窗口以自动填写路径

### 2️⃣ 全局安装权限问题

**错误提示：** `Missing write access to /usr/local/lib/node_modules`

**一键修复命令：**

```bash
# 复制粘贴这三行命令到终端
sudo chown -R $(whoami) /usr/local/lib/node_modules
sudo chown -R $(whoami) /usr/local/bin
sudo chown -R $(whoami) ~/.npm
```

### 3️⃣ 找不到 Node.js 命令

**错误提示：** `command not found: node`

**快速解决方法：**

1. 打开终端，输入以下命令查找 Node.js 位置：

   ```bash
   which node
   ```

2. 如果没有结果，但你确定已安装，尝试：

   ```bash
   # 复制这一行到终端(根据你的Shell类型选择)
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
   # 或
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
   ```

3. 重新加载配置：
   ```bash
   source ~/.zshrc  # 或 source ~/.bash_profile
   ```

## 🔄 Node.js 版本管理

### Windows 简易版本切换

1. 下载并安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. 打开命令提示符，运行：
   ```bash
   nvm install 20.10.0
   nvm use 20.10.0
   ```

### macOS/Linux 简易版本切换

1. 安装 nvm:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. 安装并使用指定版本:
   ```bash
   nvm install 20.10.0
   nvm use 20.10.0
   ```

## 🛠️ 其他常见问题

### 磁盘空间不足

**错误提示：** `ENOSPC: no space left on device`

**快速解决：**

```bash
# 清理 npm 缓存释放空间
npm cache clean --force
```

### npm 安装卡住不动

**问题：** 安装过程卡在某一步很长时间不动

**解决方法：**

1. 按 Ctrl+C 终止当前过程
2. 运行：
   ```bash
   # 清理缓存并使用镜像源重试
   npm cache clean --force
   ```

## 🆘 获取更多帮助

如果以上方法仍未解决你的问题：

1. 在命令行运行 `npm doctor` 获取诊断报告
2. 加入 [QQ 交流群：492953731](https://qm.qq.com/q/tvrI6iSl56) 寻求帮助
3. 提供以下信息以便他人更好地帮助你：
   - 操作系统版本
   - Node.js 版本 (`node -v`)
   - npm 版本 (`npm -v`)
   - 完整的错误信息
   - 你尝试运行的命令
