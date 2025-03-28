# 🎉 欢迎来到 神奇代码岛 API 文档！

在使用这些功能之前，你需要熟悉一些 JavaScript 的基础知识。我们期待你能在神奇代码岛中创作出令人赞叹的作品。

## 🎯 快速开始

在开始使用 API 之前，请了解以下重要概念：

### 📚 脚本端口约定

神奇代码岛的脚本分为两种类型：

- **服务端脚本**：以 `S-` 为前缀，运行在服务器端，负责游戏核心逻辑
- **客户端脚本**：以 `C-` 为前缀，运行在玩家设备上，负责界面交互

### 🔊 跨端通讯

- 服务端与客户端之间的通讯通过 [RemoteChannel](/RemoteChannel/Server/) 实现
- 使用全局对象 `remoteChannel` 进行跨端数据传输和事件监听
- [查看跨端通讯详细说明](/RemoteChannel/Client/)

## 🖥️ 服务端 API

### S-🌍 [世界](/GameWorld/)

- **GameWorld** 控制游戏世界的全局属性（天气、重力、滤镜等）
- 管理实体的创建、搜索和事件监听（碰撞、伤害、互动）
- 通过全局对象 `world` 访问

### S-🧱 [方块](/GameVoxels/)

- **GameVoxels** 提供地形和方块的完整控制
- 支持批量操作和属性查询（类型、名称、旋转等）
- 通过全局对象 `voxels` 访问

### S-🏠 [实体](/GameEntity/)

- **GameEntity** 是游戏中各类对象的基础
- 提供物体和玩家的通用控制接口

### S-🕺 [模型动作](/GameMotionController/)

- **GameMotionController** 控制 Voxa 模型的动画
- 支持动作加载、暂停、重播和默认动作设置

### S-👤 [玩家](/GamePlayer/)

- **GamePlayer** 是特殊的实体类型，代表在线玩家
- 提供玩家属性和操作的完整控制

### S-💾 [数据管理](/GameDataStorage/)

- **GameDataStorage** 提供键值对形式的数据存储
- 支持单地图或组地图的数据持久化
- 通过全局对象 `storage` 访问

### S-🔗 [网络请求](/GameHttpAPI/)

- **GameHttpAPI** 用于对接外部平台和服务
- 通过全局对象 `http` 访问

### S-🗣️ [语音通讯](/GameRTC/)

- **GameRTC** 提供实时语音交流功能
- 通过全局对象 `rtc` 访问

### S-🟰 数学工具

- [三维向量](/GameVector3/) - 空间计算
- [三维空间](/GameBounds3/) - 碰撞检测
- [四元数](/GameQuaternion/) - 旋转变换
- [RGB](/GameRGBColor/) 与 [RGBA](/GameRGBAColor/) 颜色

## 📱 客户端 API

### C-🖼️ [界面](/ClientUI/)

- **ClientUI** 提供完整的 UI 系统
- 支持各类界面元素和交互事件
- 通过全局对象 `ui` 访问

### C-🌍 [世界](/ClientWorld/)

- **ClientWorld** 处理客户端的游戏世界
- 通过全局对象 `world` 访问

### C-🎵 [音频](/ClientAudio/)

- **ClientAudio** 控制游戏音效和音乐
- 通过 `Audio` 类访问

### C-🎙 [录音](/ClientMedia/)

- **ClientMedia** 提供设备录音功能
- 通过全局对象 `media` 访问

### C-🧭 [导航](/ClientNavigator/)

- **ClientNavigator** 提供屏幕导航功能
- 通过全局对象 `navigator` 访问

### C-🔗 [网络](/ClientHttp/)

- **ClientHttp** 处理客户端网络请求
- 通过全局对象 `http` 访问

### C-📺 [屏幕](/ClientScreen/)

- **ClientScreen** 控制客户端显示
- 通过全局对象 `screen` 访问

### C-🟰 数学工具

- [二维坐标](/ClientUI/maths/Coord2)
- [UI 缩放](/ClientUI/maths/UiScale)
- [二维向量](/ClientUI/maths/Vec2)
- [三维向量](/ClientUI/maths/Vec3)

## 🤝 参与贡献

如果发现文档问题或有改进建议，欢迎在 Gitee 提交 [Issue](https://gitee.com/box3lab/box3-product-document/issues)。
