# dao3Cfg 脚手架架构

```plain
myArenaProject
├─ .prettierignore
├─ .prettierrc
├─ dao3.config.json
├─ eslint.config.mjs
├─ package-lock.json
├─ package.json
├─ shares
│  └─ sharesApp.ts
├─ server
│  ├─ tsconfig.json
│  ├─ webpack.config.js
│  ├─ types
│  │  ├─ GameAPI.d.ts
│  │  ├─ GameEntity.d.ts
│  │  └─ GamePlayer.d.ts
│  └─ src
│     └─ App.ts
├─ client
│  ├─ tsconfig.json
│  ├─ webpack.config.js
│  ├─ types
│  │  └─ ClientAPI.d.ts
│  └─ src
│     └─ clientApp.ts
├─ .vscode
│  ├─ dao3-ap.code-snippets
│  └─ launch.json
└─ .husky
   ├─ pre-commit
   └─ _
      ├─ applypatch-msg
      ├─ commit-msg
      ├─ h
      ├─ husky.sh
      ├─ post-applypatch
      ├─ post-checkout
      ├─ post-commit
      ├─ post-merge
      ├─ post-rewrite
      ├─ pre-applypatch
      ├─ pre-auto-gc
      ├─ pre-commit
      ├─ pre-merge-commit
      ├─ pre-push
      ├─ pre-rebase
      └─ prepare-commit-msg

```

:::danger
⚠️ 以下文件**禁止移动/改名**，否则可能会出现不可预知的错误：

1. **GameAPI.d.ts**
2. **ClientAPI.d.ts**
3. **tsconfig.json**
4. **package.json**
5. **package-lock.json**
6. **dao3.config.json**
7. **.gitignore**
8. **dao3-ap.code-snippets**
9. **webpack.config.js**
10. **.prettierrc**
11. **.prettierignore**
12. **eslint.config.mjs**

:::

::: tip
⚠️**重要提示**：以下文件**严禁修改/移动**，因为内置了自动检测更新机制，任何自定义更改都可能导致数据丢失。

请注意，这些文件与 Arena 脚本编辑器内置的`.d.ts`文件存在差异。AP 插件专为 TypeScript 语言定制了一份`.d.ts`文件，提供了更佳的适配性和代码提示功能。

1. **GameAPI.d.ts**
2. **ClientAPI.d.ts**

:::
