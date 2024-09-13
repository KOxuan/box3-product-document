### Hello World 项目
体验如何在控制台打印一个简单的"Hello World"，以及使用神岛API实现一个小案例。

关于编辑器各个面板，具体的内容请参考 [编辑器界面](/editor/index)。


#### 1. 进入代码编辑器

在Arena地图编辑器工具区，找到“代码”按钮，点击进入代码编辑界面。

![](/QQ20240913-152031.png)

#### 2. 编写第一行代码

我们在服务端脚本下的“index.js”中写以下代码。
```js
console.log("Hello World");
```
效果：
![](/QQ20240913-152221.png)

#### 3. 运行地图
点击右上角的“运行”按钮，和“运行”左边的调试模式（小虫子）按钮，即可打开控制台，看到输出。

![](/QQ20240913-152456.png)

![](/QQ20240913-152523.png)

#### 4. 向大家发送信息
掌握JS基础很棒，但了解神岛API也关键。

现在需要有玩家加入游戏后，系统向该玩家发送一条消息。

我们在服务端脚本下的“index.js”中写以下代码。
```js{3-5}
console.log("Hello World");

world.onPlayerJoin(({ entity }) => {
    entity.player.directMessage("Hello World");
})
```
效果：
![](/QQ20240913-153153.png)

> [!NOTE]
> [**world.onPlayerJoin**](https://www.yuque.com/box3lab/api/ok49sqk24sfmx46u#KgCvN)： 当玩家加入游戏时触发。
>
> [**entity.player.directMessage**](https://www.yuque.com/box3lab/api/vyz9axw1n5g8smti#ItFKd)： 向玩家发送一条消息。

#### 5. 恭喜你！

你已经成功编写并运行了第一个JavaScript Hello World项目。

通过不断地实践和探索，你将能够编写更复杂、功能更丰富的JavaScript代码。