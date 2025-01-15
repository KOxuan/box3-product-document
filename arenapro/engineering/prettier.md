# Prettier 用法

![](/QQ20250115-160857.png)

在项目中，找到`.prettierrc`文件通过编辑这个文件，你可以灵活地自定义`代码格式化`的规则，从而确保 Prettier 能够根据你的需求自动格式化代码。

## VSCode 插件集成

为了获得更加流畅的编码体验，我们强烈建议你在 VSCode 编辑器中安装`Prettier`插件。这样，VSCode 将能够实时根据你在`.prettierrc`中定义的规则，自动对代码进行格式化。

![](/QQ20250115-161406.png)

如果 VSCode 没有自动格式化代码，你可能需要进行一些设置。按下快捷键`ctrl+,`打开设置界面，然后按照以下步骤进行配置：

![](/QQ20250115-163405.png)

```json
{
  // 启用保存文件时自动格式化代码的功能
  "editor.formatOnSave": true,

  // 将Prettier设置为默认的代码格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // 在保存文件时执行特定的代码操作，例如使用eslint修复代码问题
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

#### 插件效果精彩展示：

（以下效果还结合了`Error Lens`插件的强化视觉反馈）

![](https://static.codemao.cn/pickduck/SyeZkeSw1g.gif?hash=FoYfsUc3U1Np-vx6G8pKjpYCvfMz)

根据我的自定义规则，Prettier 会在文件保存时自动对代码进行格式化，并确保每个代码语句以分号结尾，从而保持代码的一致性和可读性。

## 命令行工具使用

除了编辑器内的实时格式化功能外，Prettier 还提供了强大的命令行工具，方便你在项目管理和持续集成中使用。

- 执行`npx prettier . --write`命令，Prettier 将遍历项目目录，并自动格式化所有符合条件的文件。

- 执行`npx prettier . --check`命令，Prettier 将检查项目中所有文件的格式是否符合`.prettierrc`中定义的规则，而不会对文件进行实际修改。

通过命令行工具，你可以轻松地在项目的不同阶段应用 Prettier 的格式化规则，确保代码质量的一致性和可维护性。

![](/QQ20250115-162137.png)
