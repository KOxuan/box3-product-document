# 👤游戏玩家

- **GamePlayer** 是整个游戏世界的可由玩家自主控制的实体，玩家指的是进入游戏的用户，此接口可用定义游戏中的玩家属性、操作等等。玩家属于一种特殊的实体。

## 类

```typescript
declare class GamePlayer {
    //...
}
```

## 属性
- [`name`](./info#name) : 玩家的昵称
- [`userId`](./info#userId) : 玩家的用户ID，个人中心昵称下方可见
- [`boxId`](./info#boxId) : 玩家的Box ID(3-15字符)
- [`userKey`](./info#userKey) : 玩家的唯一识别码(16字符)
- [`avatar`](./info#avatar) : 玩家的头像url直链
- [`movementBounds`](./info#movementBounds) : 玩家的活动范围限制，如超出此范围，则传回出生点
- [`url`](./info#url) : 获取该玩家进入地图时所用的URL链接地址
- [`color`](./appearance#color) : 玩家的颜色
- [`emissive`](./appearance#emissive) : 玩家的发光度
- [`invisible`](./appearance#invisible) : 玩家是否隐身
- [`showName`](./appearance#showName) : 玩家名字是否显示
- [`showIndicator`](./appearance#showIndicator) : 玩家标记否显示
- [`scale`](./appearance#scale) : 玩家的缩放比例
- [`metalness`](./appearance#metalness) : 玩家的金属感
- [`shininess`](./appearance#shininess) : 玩家的反光度
- [`skin`](./appearance#skin) : 此玩家的皮肤配置，用于管理当前玩家皮肤的展示
- [`skinInvisible`](./appearance#skinInvisible) : 是否隐藏玩家模型部件
- [`cameraMode`](./camera#cameraMode) : 视角模式
- [`cameraEntity`](./camera#cameraEntity) : 在第一人称视角(FPS)或第三人称跟随视角(FOLLOW)下，玩家视角所跟随的实体
- [`cameraPosition`](./camera#cameraPosition) : 固定视角(FIXED)和相对视角(RELATIVE)下，摄像机本身所处的位置
- [`cameraTarget`](./camera#cameraTarget) : 固定视角(FIXED)和相对视角(RELATIVE)下，摄像机看向的目标点
- [`cameraUp`](./camera#cameraUp) : 固定视角(FIXED)和相对视角(RELATIVE)下，摄像机镜头向上的矢量
- [`cameraFovY`](./camera#cameraFovY) : 垂直方向的视场角
- [`enable3DCursor`](./camera#enable3DCursor) : 启动玩家的3D光标
- [`cameraFreezedAxis`](./camera#cameraFreezedAxis) : 相对视角(RELATIVE)下，下冻结相机轴
- [`freezedForwardDirection`](./camera#freezedForwardDirection) : 如果不为null，眼睛看向指定方向且锁定左右旋转，只可以上下移动。
- [`cameraDistance`](./camera#cameraDistance) : 摄像机离跟随目标的距离，这决定了相机在场景中观察目标时的相对位置。
- [`music`](./music#music) : 为指定的玩家播放背景音乐（循环播放），此声音仅该玩家能听见，其他玩家无法听到。 背景音乐的音量会根据用户在[设置-声音]更改。
- [`action0Sound`](./music#action0Sound) : 当玩家按下 'action0' 按键（鼠标左键 / 虚拟按钮A）时，播放的音效。
- [`action1Sound`](./music#action1Sound) : 当玩家按下 'action1' 按键（鼠标右键 / 虚拟按钮B）时，播放的音效。
- [`crouchSound`](./music#crouchSound) : 当玩家按下 'crouchButton ' 按键进行蹲下时，播放的音效。
- [`jumpSound`](./music#jumpSound) : 当玩家按下 'jumpButton ' 按键进行跳跃时，播放的音效
- [`doubleJumpSound`](./music#doubleJumpSound) : 当玩家触发二段跳时，播放的音效
- [`landSound`](./music#landSound) : 玩家落地时，播放的音效
- [`enterWaterSound`](./music#enterWaterSound) : 当玩家进入液体时，播放的音效
- [`leaveWaterSound`](./music#leaveWaterSound) : 当玩家离开液体时，播放的音效
- [`swimSound`](./music#swimSound) : 当玩家正在游泳时，播放的音效
- [`spawnSound`](./music#spawnSound) : 当玩家重生时，播放的音效。通过`entity.player.onRespawn()`触发
- [`stepSound`](./music#stepSound) : 当玩家行走时，每迈出一步，播放的音效
- [`startFlySound`](./music#startFlySound) : 玩家开始飞行时的音效
- [`stopFlySound`](./music#stopFlySound) : 玩家结束飞行时播放的音效
- [`colorLUT`](./colorLUT#colorLUT) : 用于渲染玩家所见游戏世界的色调
- [`dead`](./fight#dead) : 玩家是否已死亡，生命值hp低于0。若玩家死亡，则会倒在地上。
- [`spawnPoint`](./fight#spawnPoint) : 玩家复活后的出生点
- [`gamepad`](./input#gamepad) : 设置虚拟按键图片
- [`disableInputDirection`](./input#disableInputDirection) : 禁用指定方向的摇杆输入偏移量，当横纵两个方向均被禁用时，将不显示此玩家的触屏虚拟摇杆。
- [`enableAction0`](./input#enableAction0) : 启动鼠标左键/移动端虚拟按钮A键
- [`enableAction1`](./input#enableAction1) : 启动鼠标右键/移动端虚拟按钮B键
- [`action0Button`](./input#action0Button) : 鼠标左键/移动端虚拟按钮A键
- [`action1Button`](./input#action1Button) : 鼠标右键/移动端虚拟按钮B键
- [`jumpButton`](./input#jumpButton) : 跳跃按钮
- [`walkButton`](./input#walkButton) : 步行按钮
- [`swapInputDirection`](./input#swapInputDirection) : 是否交换方向按键
- [`reverseInputDirection`](./input#reverseInputDirection) : 反转指定方向的摇杆
- [`facingDirection`](./input#facingDirection) : 玩家朝向
- [`canFly`](./input#canFly) :  是否允许玩家飞行
- [`spectator`](./input#spectator) : 玩家是否是一个幽灵，可以穿墙
- [`enableJump`](./input#enableJump) : 是否允许玩家跳跃
- [`enableDoubleJump`](./input#enableDoubleJump) :  是否允许玩家二段跳跃
- [`walkSpeed`](./input#walkSpeed) : 最大步行速度天
- [`runSpeed`](./input#runSpeed) : 最大奔跑速度
- [`runAcceleration`](./input#runAcceleration) : 奔跑加速度
- [`jumpPower`](./input#jumpPower) : 跳跃力度
- [`jumpSpeedFactor`](./input#jumpSpeedFactor) : 跳跃速度 
- [`jumpAccelerationFactor`](./input#jumpAccelerationFactor) : 跳跃加速率
- [`doubleJumpPower`](./input#doubleJumpPower) : 二段跳力度
- [`crouchSpeed`](./input#crouchSpeed) : 蹲着走路的速度
- [`crouchAcceleration`](./input#crouchAcceleration) : 蹲着走路的加速度
- [`flySpeed`](./input#flySpeed) : 最大飞行速度
- [`flyAcceleration`](./input#flyAcceleration) : 飞行加速度
- [`swimAcceleration`](./input#swimAcceleration) : 游泳加速度
- [`swimSpeed`](./input#swimSpeed) : 最大游泳速度
- [`walkAcceleration`](./input#walkAcceleration) : 步行加速度
- [`moveState`](./input#moveState) : 玩家的运动状态
- [`walkState`](./input#walkState) : 玩家的步行状态
- [`cameraPitch`](./input#cameraPitch) : 玩家视角准心绕水平方向的旋转弧度
- [`cameraYaw`](./input#cameraYaw) : 玩家视角准心绕垂直方向的旋转弧度


## 方法
- [`querySocial`](./info#querySocial) : 查询当前玩家的社交关系
- [`openUserProfileDialog`](./info#openUserProfileDialog) : 对当前玩家，调起指定ID玩家的个人主页
- [`setSkinByName`](./appearance#setSkinByName) : 将指定皮肤套装应用到此玩家上。此方法不会影响皮肤的隐藏状态，设置前是隐藏的，设置后也还是隐藏着。
- [`resetToDefaultSkin`](./appearance#resetToDefaultSkin) : 重置此玩家的皮肤配置为默认皮肤配置，效果同 `setSkinByName()` 传入了默认皮肤套装名称。
- [`clearSkin`](./appearance#clearSkin) : 清除地图对此玩家应用的皮肤配置，将此玩家的皮肤配置为仅展示玩家自己的皮肤。
- [`addWearable`](./appearance#addWearable) : 在玩家某身体部位附上穿戴配件物体
- [`removeWearable`](./appearance#removeWearable) : 把玩家身体部位已附上的穿戴配件物体删除
- [`wearables`](./appearance#wearables) : 列举在玩家上所有的穿戴配件物体
- [`animate`](./animate#animate) : 创建一个关键帧动画
- [`getAnimations`](./animate#getAnimations) : 获取玩家的所有已创建的动画
- [`setCameraPitch`](./camera#setCameraPitch) : 设置玩家视角准心绕水平方向的旋转弧度
- [`setCameraYaw`](./camera#setCameraYaw) : 设置玩家视角准心绕垂直方向的旋转弧度
- [`sound`](./music#sound) : 为指定的玩家播放声音，此声音仅该玩家能听见，其他玩家无法听到。
- [`forceRespawn`](./fight#forceRespawn) : 让玩家强制重生，立即返回出生点
- [`kick`](./input#kick) : 把玩家"踢出"当前地图
- [`directMessage`](./chat#directMessage) : 向玩家直接发送私信
- [`dialog`](./chat#dialog) : 在游戏中显示一个对话框
- [`cancelDialogs`](./chat#cancelDialogs) : 关闭该玩家的所有打开的对话框
- [`link`](./link#link) : 在玩家弹出一个“传送门”窗口，可以跳转到其他地图或任意链接。
- [`openMarketplace`](./shopping#openMarketplace) : 打开游戏商店对话框，根据传入的“商品ID”显示相应的产品。
- [`getMiaoShells`](./shopping#getMiaoShells) : 获取此用户在当前地图下累计打赏的喵贝壳

### 监听方法
- [`onRespawn`](./fight#onRespawn) : 玩家复活时调用的事件
- [`onPress`](./input#onPress) : 当玩家按下按钮时调用
- [`onRelease`](./input#onRelease) : 当玩家松开按钮时调用
- [`onKeyDown`](./input#onKeyDown) : 当玩家按下键盘时调用
- [`onKeyUp`](./input#onKeyUp) : 当玩家松开键盘时调用
- [`onChat`](./chat#onRelease) : 当前玩家发起聊天时调用

## 接口
- [`GameSkin`](./appearance#GameSkin) : 玩家身体部位
- [`GameSkinInvisible`](./appearance#GameSkinInvisible) : 玩家身体部位
- [`GameWearable`](./appearance#GameWearable) : 用于在玩家身体部位可穿戴配件物体的参数与函数
- [`GamePlayerKeyframe`](./animate#GamePlayerKeyframe) : Player玩家动画关键帧参数，可对Player的大部分属性做动画效果，例如尺寸、颜色、隐身等等
- [`GameKeyBoardEvent`](./input#GameKeyBoardEvent) : 输入事件，在玩家按下或松开按键时触发。
- [`Gamepad`](./input#Gamepad) : 虚拟按键背景图片配置
- [`GamePlayerMoveState`](./input#GamePlayerMoveState) : 玩家的运动状态
- [`GamePlayerWalkState`](./input#GamePlayerWalkState) : 玩家的行走状态
- [`GameInputDirection`](./input#GameInputDirection) : 玩家通过输入设备控制移动时的方向
- [`GameDialogCall`](./chat#GameDialogCall) : 在游戏中显示一个对话框
- [`GameDialogResponse`](./chat#GameDialogResponse) : 对话框回应
- [`GameDialogSelectResponse`](./chat#GameDialogSelectResponse) : 选项对话框回应


## 枚举
- [`SocialType`](./info#SocialType) : 玩家的社交关系类型
- [`GameBodyPart`](./info#GameBodyPart) : 玩家身体部位的类型
- [`GameCameraMode`](./camera#GameCameraMode) : 玩家的相机视角模式
- [`GameCameraFreezedAxis`](./camera#GameCameraFreezedAxis) : 玩家的轴模式
- [`GameDialogType`](./chat#GameDialogType) : 对话框样式类型