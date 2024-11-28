# 插件登录神岛账号指南

由于最终需要将本地的代码打包编译后上传至神岛地图中，因此，你需要先登录你的神岛账户，并将你的地图项目与之关联起来。

## 登录步骤详解

在VSCode的右下角，你可以轻松找到并点击`Arena图标`，未登录状态栏为`橙色`。

![Arena图标位置](/QQ_1721718184133.webp)

接下来，从弹出的选项中选择`登陆神岛账号[Login BOX3 Account]`。

![选择登录选项界面](/QQ20241128-220338.png)


### 步骤1：配置浏览器用户代理（User-Agent）

在正式登录之前，你需要先配置一个与你神岛账号来源相匹配的**User-Agent**。

- **获取User-Agent的方法**：访问[https://passer-by.com/browser/](https://passer-by.com/browser/)，在页面中查找并复制你的浏览器`用户代理`。

![获取User-Agent的演示](https://static.codemao.cn/pickduck/r1MiBddxkg.gif?hash=FnDE12EtzYOF85UdIFU2tGZrPr-B)

### 步骤2：输入神岛账户Token

- **获取Token的方法**：访问[https://code-api-pc.dao3.fun/auth/user](https://code-api-pc.dao3.fun/auth/user)，在登录状态下，你可以复制整个JSON文本，或者仅复制其中的`token`字段。

![获取Token的演示](https://static.codemao.cn/pickduck/Hkyxvu_ekg.gif?hash=FmIsFcjEF_1YO2HVd4xDNFZDT3pl)


登录成功后，状态栏为`绿色`，会显示你的账号信息。

![登录成功](/QQ20241128-220642.png)

![登录成功](/QQ20241128-220736.png)

### 注意事项

- 请严格按照步骤操作，确保每个步骤都正确无误。
- `User-Agent`配置与`账号Token`必须在同一个浏览器环境中获取，否则可能会导致登录失败。
- 如遇问题，请检查网络连接状态，以及输入的`User-Agent`和`账号Token`信息是否准确无误。