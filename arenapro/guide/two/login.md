# 插件登录神岛账号指南

由于最终需要将本地的代码打包编译后上传至神岛地图中，因此，你需要先登录你的神岛账户，并将你的地图项目与之关联起来。

## 登录流程

### 1. 启动登录

1. 在 VSCode 的右下角，找到并点击`Arena图标`（未登录状态栏为`橙色`）
2. 从弹出的选项中选择`登陆神岛账号[Login BOX3 Account]`

![Arena图标位置](/QQ_1721718184133.webp)
![选择登录选项界面](/QQ20241128-220338.png)

### 2. 配置登录信息

#### 2.1 获取 User-Agent

1. 访问[https://passer-by.com/browser/](https://passer-by.com/browser/)
2. 在页面中查找并复制你的浏览器`用户代理`

![获取User-Agent的演示](https://static.codemao.cn/pickduck/r1MiBddxkg.gif?hash=FnDE12EtzYOF85UdIFU2tGZrPr-B)

#### 2.2 获取 Token

1. 访问[https://code-api-pc.dao3.fun/auth/user](https://code-api-pc.dao3.fun/auth/user)
2. 在登录状态下，复制整个 JSON 文本，或仅复制`token`字段

![获取Token的演示](https://static.codemao.cn/pickduck/Hkyxvu_ekg.gif?hash=FmIsFcjEF_1YO2HVd4xDNFZDT3pl)

### 3. 完成登录

成功登录后，状态栏将变为`绿色`，并显示你的账号信息。

![登录成功](/QQ20241128-220642.png)
![登录成功](/QQ20241128-220736.png)

## 注意事项

- 请严格按照步骤操作，确保每个步骤都正确无误
- `User-Agent`配置与`账号Token`必须在同一个浏览器环境中获取
- 如遇问题，请检查：
  - 网络连接状态
  - 输入的`User-Agent`和`账号Token`信息是否准确
