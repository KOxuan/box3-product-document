# 登录插件
## 方法一：通过命令面板  
  
在VSCode中，按下`Shift+Ctrl+P`（Windows/Linux）或 `Shift+Cmd+P`（Mac）调出`命令面板（Command Palette）`。  
  
![命令面板](/commd.webp)  
  
输入`arenapro`，找到 `登陆神岛账号[Login BOX3 Account]`选项并点击。  
  
![选择登陆选项](/QQ_1721718064820.webp)  
  
## 方法二：通过Arena图标  
  
在VSCode右下角点击`Arena图标`。  
  
![Arena图标](/QQ_1721718184133.webp)  
  
找到`登陆神岛账号[Login BOX3 Account]`选项并点击。  
  
![选择登陆选项](/QQ_1721718190834.webp)  
  
**步骤1：配置浏览器用户代理**
  
登录前，请配置成自己神岛账号来源的**userAgent**。  
  
> 获取当前浏览器**userAgent**方式：[https://passer-by.com/browser/](https://passer-by.com/browser/) ，找到用户代理。  
  
![获取userAgent](/ua.webp)  
  
接下来，复制所有文本并粘贴到插件中。  
  
![粘贴userAgent](/login.webp)  
  
**步骤2：输入神岛账户Token**
  
> 获取**账户Token**方式：[https://code-api-pc.dao3.fun/auth/user](https://code-api-pc.dao3.fun/auth/user) ，直接复制所有JSON文本或仅复制token一项。  
  
已登录状态下，界面如下：  
  
![获取Token](/token.webp)  
  
接下来，复制所有文本或仅token项并粘贴到插件中。  

![登陆成功](/login2.webp)  
  
输入完毕并按下回车【Enter】，登陆成功。  
  
  
---  
  
### 注意事项  
  
- 确保按照步骤操作，避免遗漏。  
- `UA配置`与`账号Token`需要在同一个浏览器获取，否则会导致登录失败。
- 如果遇到问题，请检查网络连接和输入信息是否正确。