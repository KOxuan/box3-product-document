# 🚀 如何向 `@dao3fun` 组织投稿

`@dao3fun` 组织旨在汇集并管理各位创作者精心打造的神岛 npm 包。只需在 npmjs 上搜索 `@dao3fun`，你便能轻松找到所有与神岛相关的 npm 包。

<div style="border-left: 4px solid #3498db; padding-left: 15px; margin: 15px 0;">
<p><strong>💡 提示：</strong> 加入官方组织可以提高你的组件库的可信度和曝光度，让更多神岛地图创作者发现并使用你的作品。</p>
</div>

## 🎯 投稿初衷

<table>
  <tr>
    <th width="150">目标</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>📊 便于管理</b></td>
    <td>集中管理神岛相关的 npm 包，提升管理效率</td>
  </tr>
  <tr>
    <td><b>🔍 便捷搜索</b></td>
    <td>让用户能够快速找到所需的神岛 npm 包</td>
  </tr>
  <tr>
    <td><b>🛡️ 避免命名冲突</b></td>
    <td>通过组织名前缀，有效避免包命名重复的问题</td>
  </tr>
  <tr>
    <td><b>👁️ 直观识别</b></td>
    <td>用户一眼就能识别出这是与神岛相关的 npm 包</td>
  </tr>
</table>

## 📝 投稿流程

### 1️⃣ 登录 npm 账号

```bash
# 在终端中登录 npm 账号
npm login

# 按提示输入用户名、密码和邮箱
Username: your-username
Password: ********
Email: (this IS public) your-email@example.com
```

<ol>
  <li>在终端或命令行工具中运行 <code>npm login</code> 命令</li>
  <li>输入 npm 账号的用户名、密码以及邮箱</li>
  <li>首次登录时，npm 会要求你验证邮箱</li>
</ol>

:::tip
**💡 小贴士**：如果你还没有 npm 账号，可以前往 [npmjs.com](https://www.npmjs.com) 注册一个新账号。注册过程简单快捷，只需提供基本信息即可。
:::

### 2️⃣ 申请加入组织

<div style="border-left: 4px solid #f39c12; padding-left: 15px; margin: 15px 0;">
<p><strong>📢 申请方式：</strong></p>
<ol>
  <li>通过 QQ 群 <code>492953731</code> 联系管理员</li>
  <li>申请加入 <code>@dao3fun</code> 组织</li>
  <li>成功加入后即可发布 npm 包</li>
</ol>
</div>

### 3️⃣ 发布 npm 包

| 步骤            | 详细说明                                                |
| --------------- | ------------------------------------------------------- |
| **📋 包名规范** | 以 `@dao3fun` 为前缀，例如 `@dao3fun/your-package-name` |
| **🚀 发布命令** | 在项目文件夹中运行 `npm publish --access=public`        |
| **✅ 确认发布** | 首次发布可能需要确认额外信息                            |
| **🔍 验证结果** | 在 npm 网站上搜索并查看包详细信息                       |

```bash
# 发布包到 @dao3fun 组织
npm publish --access=public

# 发布成功输出示例
+ @dao3fun/your-package-name@1.0.0
```

:::warning
**⚠️ 注意**：发布前请确保你的 `package.json` 文件中的包名已正确设置为 `@dao3fun/your-package-name` 格式，并且版本号符合语义化版本规范。
:::

### 4️⃣ 验证与更新

<table>
  <tr>
    <th width="150">操作</th>
    <th>详细步骤</th>
  </tr>
  <tr>
    <td><b>🧪 安装验证</b></td>
    <td>
      • 在其他项目中运行 <code>npm install @dao3fun/your-package-name</code><br>
      • 导入并使用你的包<br>
      • 验证功能是否正常工作
    </td>
  </tr>
  <tr>
    <td><b>🔄 包更新</b></td>
    <td>
      • 修改代码和 <code>package.json</code> 中的版本号<br>
      • 遵循语义化版本规范（major.minor.patch）<br>
      • 再次运行 <code>npm publish</code> 发布更新
    </td>
  </tr>
</table>

## 📊 投稿要求

为确保 `@dao3fun` 组织下的包保持高质量，我们有以下要求：

| 要求类别        | 说明                                                            |
| --------------- | --------------------------------------------------------------- |
| **🧩 实用性**   | 包应当提供实用的功能，解决神岛地图开发中的实际问题              |
| **📚 文档完整** | 包应当包含完善的 README 文档，包括安装方法、使用示例和 API 说明 |
| **🧪 测试充分** | 发布前应当在多个场景下测试包的功能，确保稳定性                  |
| **🔄 持续维护** | 承诺对包进行持续更新和维护，及时修复 bug 和安全问题             |

:::tip
**💡 建议**：定期关注 `@dao3fun` 组织下的其他包，了解最新的开发趋势和最佳实践，这将有助于你开发出更好的组件库。
:::
