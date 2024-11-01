
# 编写js代码

::: warning
当你决定使用VSCode编辑器时，强烈建议主要利用`TypeScript`来进行代码编辑。

使用`JavaScript`是因为考虑了语言初学者的需求，旨在通过降低学习门槛，使用更完善的编辑器来促进编程技能的提升。

⚠️JavaScript并不是插件主推的语言，只是为了减少学习成本。

关于提供代码检查的配置，可以参考：[JS相关配置](/bestPractices/allowJs)。
:::
## 前置准备
因为脚手架默认入口文件是指向`App.ts`的，所以，我们需要进行一些小改动。

1. **打开项目文件**：  
   - 在项目中，点击**dao3.config.json**文件并打开。  
    ![示例图片](/QQ_1721718378414.webp)  
2. **修改入口文件**：  
   - 修改服务端的入口文件为`App.js`。
   - 因本次示例不涉及客户端脚本，所以不做改动，依然保留`App.ts`。
    ![示例图片](/QQ20241025-103757.png)  
3. **修改后缀名**：
   - 把服务端下的`App.ts`修给成`App.js`。
    ![示例图片](/QQ20241025-104457.png)    

在本项目中，`App.js`是默认的服务端入口文件，类似于神岛的`index.js`。


## 功能需求
1.当玩家加入地图后，向控制台输出：`Hello World！{玩家名称}。`

2.当玩家加入地图后，给该玩家一个独特的对话框，内容为：`Hello World！{玩家名称}`

## 功能效果
![](/QQ20241025-105839.png)

### 第一步：监听玩家加入游戏
![](/QQ20241025-105932.png)


### 第二步：向控制台打印消息

![](/QQ20241025-110039.png)


### 第三步：向玩家弹出对话框
![](/QQ20241025-110125.png)



## 完整代码
```javascript
/** 当有新玩家加入游戏时，触发此回调函数
*   回调函数参数 entity 包含了玩家的信息
*/
world.onPlayerJoin(({ entity }) => {
  // 在控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  /** 创建一个对话框，向玩家展示欢迎信息
  *   对话框类型为 TEXT，即文本对话框
  *   设置对话框标题为 "欢迎新玩家"
  *   设置对话框内容为 "Hello World！${entity.player.name}"
  *   设置标题背景颜色为 (0.93, 0.95, 0.54, 1.00)
  *   设置内容背景颜色为 (0.54, 0.68, 0.95, 1.00)
  */
  entity.player.dialog({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.00),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.00),
  });
})
```
