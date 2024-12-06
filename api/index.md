


# 🎉欢迎来到 神奇代码岛 API 文档！

在使用这些功能之前，你需要熟悉一些JavaScript的基础知识。我们期待你能在神奇代码岛中创作出令人赞叹的作品。

📚 **在导读页中**，遵循以下脚本端口约定：

- **服务端脚本**：以 `S-` 为前缀。
- **客户端脚本**：以 `C-` 为前缀。

💡 若希望在**服务端脚本**与**客户端脚本**间实现信息传递，请使用[**游戏跨端通讯**](/index#🔊游戏跨端通讯)API。

如果文档有误或者描述不准确，欢迎在 Gitee 向我们提交 [Issue](https://gitee.com/box3lab/box3-product-document/issues) 。


## S-🌍[世界](/GameWorld/)

- **GameWorld** 是整个游戏世界的主要接口，它对应涵盖了控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。
- 可以通过**全局对象** `world` 来使用它。

## S-🧱[方块](/GameVoxels/)

- **GameVoxels** 是控制游戏方块的接口，你可以控制地形变化，利用循环语法批量生成/销毁方块，获取某个方块的类型、名称、旋转角度等。
- 可以通过**全局对象** `voxels` 来使用它。

## S-🏠[实体](/GameEntity/)

- **GameEntity** 是控制游戏中的游戏对象，用于对物体、玩家等的控制。

## S-🕺[模型动作](/GameMotionController/)

- **GameMotionController** 动作作为实体的一部分，动作模块负责控制由 Voxa 导入的模型所带有的动作。包括加载特定动作，暂停动作，重播动作和设置默认动作等。

## S-👤[玩家](/GamePlayer/)

- **GamePlayer** 是整个游戏世界的可由玩家自主控制的实体，玩家指的是进入游戏的用户，此接口可用定义游戏中的玩家属性、操作等等。玩家属于一种特殊的实体。

## S-💾[资产管理](/GameAssetListEntry/)
- **GameAssetListEntry** 是控制游戏中的资产对象，用于获取游戏内模型、图片、音频等资产。
- 可以通过**全局对象** `resources` 来使用它。

## S-📈[数据存储](/GameDataStorage/)

- **GameDataStorage** 代表数据存储空间的类，能控制单地图或组地图数据库，能够以键值对的形式存储数据，提供方法处理空间内键值对相关的操作。
- 可以通过全局对象 `storage` 来使用它。

## S-🔗[数据请求](/GameHttpAPI/)

- **GameHttpAPI** 是可以链接外部网站数据的对象，用于对接第三方平台接口的操作。
- 可以通过全局对象 `http` 来使用它。

## S-🗣️[实时语音通讯](/GameRTC/)

- **GameRTC** 是实时通讯技术，用于与其他游戏玩家语音交流的操作。
- 可以通过全局对象 `rtc` 来使用它。

## S-🟰数学

- [**三维向量**](/GameVector3/)
- [**三维空间**](/GameBounds3/)
- [**四元数**](/GameQuaternion/)
- [**RGB颜色**](/GameRGBColor/)
- [**RGBA颜色**](/GameRGBAColor/)




## C-🖼️[用户界面](/GameUI/)
- **GameUI** 是`客户端`管理游戏界面的对象，用于对玩家界面UI的操作。
- 在`客户端脚本`中，可以通过全局对象 `ui`，`input` ，`screenWidth` ，`screenHeight` 来使用它。

## C-🌍[世界](/ClientWorld/)
- **ClientWorld** 是`客户端`管理游戏世界的对象，用于对客户端游戏的操作。
- 在`客户端脚本`中，可以通过全局对象 `world` 来使用它。

## C-🎵[音频](/ClientAudio/)
- **ClientAudio** 是`客户端`管理游戏音频的对象，用于对客户端音频播放的操作。
- 在`客户端脚本`中，可以通过类 `Audio` 来使用它。

## C-🎙[录音](/ClientMedia/)
- **ClientMedia** 是`客户端`管理游戏录音的对象，用于对客户端设备外部录音的操作。
- 在`客户端脚本`中，可以通过全局对象 `media` 来使用它。

## C-🧭[导航器](/ClientNavigator/)
- **ClientNavigator** 是`客户端`管理导航的对象，用于对玩家界面屏幕数据的操作。
- 在`客户端脚本`中，可以通过全局对象 `navigator` 来使用它。

## C-🔗[数据请求](/ClientHttp/)
- **ClientHttp** 是`客户端`管理游戏外部请求的对象，用于对客户端向互联网进行请求的操作。
- 在`客户端脚本`中，可以通过全局对象 `http` 来使用它。

## C-📺[屏幕](/ClientScreen/)
- **ClientScreen** 是`客户端`管理屏幕的对象，用于对客户端屏幕的操作。
- 在`客户端脚本`中，可以通过全局对象 `screen` 来使用它。

## C-🟰数学

- [**图像映射中区域的坐标**](/GameUI/maths/Coord2)
- [**UI缩放**](/GameUI/maths/UiScale)
- [**三维向量**](/GameUI/maths/Vec3)
- [**二维向量**](/GameUI/maths/Vec2)


## 🔊游戏跨端通讯

- [【服务端】](/RemoteChannel/Server/) | [【客户端】](/RemoteChannel/Client/) 
- **RemoteChannel** 是管理`客户端`与`服务端`通讯的对象，用于对跨端传递信息的操作。
- 可以通过全局对象 `remoteChannel` 来使用它。
