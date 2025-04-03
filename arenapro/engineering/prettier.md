# Prettier 实用指南

![](/QQ20250115-160857.png)

在 ArenaPro 项目中，`.prettierrc`文件是代码风格的统一指挥中心。通过精心编辑这个配置文件，你可以根据团队需求定制专属的`代码格式化`规则，确保 Prettier 能够按照既定标准自动美化和统一所有代码。

## VSCode 插件无缝集成

为了打造流畅高效的开发体验，我们强烈推荐在 VSCode 编辑器中安装`Prettier`插件。安装后，VSCode 将根据你在`.prettierrc`中定义的规则，自动对代码进行实时格式化，大幅提升开发效率。

![](/QQ20250115-161406.png)

如果发现 VSCode 没有按预期自动格式化代码，你可能需要进行一些必要的设置。按下快捷键`ctrl+,`打开设置界面，然后按照以下步骤进行精确配置：

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

（以下效果结合了`Error Lens`插件的强化视觉反馈）

![](https://static.codemao.cn/pickduck/SyeZkeSw1g.gif?hash=FoYfsUc3U1Np-vx6G8pKjpYCvfMz)

根据自定义规则，Prettier 会在文件保存时智能地对代码进行自动格式化，并确保每个代码语句以分号结尾，从而保持代码的一致性和卓越可读性。

## 命令行工具高级应用

除了编辑器内的实时格式化功能，Prettier 还提供了功能强大的命令行工具，让你能在项目管理和持续集成流程中灵活应用格式化标准：

- 执行`npx prettier . --write`命令，Prettier 将智能遍历整个项目目录，并自动格式化所有符合条件的文件，一步到位实现代码美化。

- 执行`npx prettier . --check`命令，Prettier 将全面检查项目中所有文件的格式是否符合`.prettierrc`中定义的规则，而不会对文件进行实际修改，适合在提交前进行审查。

通过这些功能强大的命令行工具，你可以在项目开发的各个阶段轻松应用 Prettier 的格式化规则，确保代码质量的一致性、可维护性和专业性。

![](/QQ20250115-162137.png)
