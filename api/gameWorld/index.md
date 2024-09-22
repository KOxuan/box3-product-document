# 🌏游戏世界

- **GameWorld** 是整个游戏世界的主要接口，它对应涵盖了控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。
- 可以通过全局对象 `world` 来使用它。

## 类

```typescript
declare const world: GameWorld;
declare class GameWorld {
    //...
}
```

## 属性
- [`projectName`](./mapInfo#projectName) : 本张地图名称，对应项目设置中的名称
- [`currentTick`](./mapInfo#currentTick) : 世界当前的Tick计数
- [`useOBB`](./mapInfo#useOBB) : 是否切换为OBB包围盒计算方式
- [`gravity`](./physics#gravity) : 世界重力
- [`airFriction`](./physics#airFriction) : 空气阻力
- [`maxFog`](./weather/fog#maxFog ) : 最大雾量
- [`fogColor`](./weather/fog#fogColor) : 雾的颜色
- [`fogStartDistance`](./weather/fog#fogStartDistance) : 雾起始距离
- [`fogHeightOffset`](./weather/fog#fogHeightOffset) : 雾高度
- [`fogUniformDensity`](./weather/fog#fogUniformDensity) : 均匀雾量
- [`fogHeightFalloff`](./weather/fog#fogHeightFalloff) : 高度衰减系数
- [`rainSpeed`](./weather/rain#rainSpeed) : 雨的速度
- [`rainColor`](./weather/rain#rainColor) : 雨的颜色
- [`rainDirection`](./weather/rain#rainDirection) : 雨的方向
- [`rainDensity`](./weather/rain#rainDensity) : 雨的密度
- [`rainInterference`](./weather/rain#rainInterference) : 雨的不规则性
- [`rainSizeLo`](./weather/rain#rainSizeLo) : 雨滴的最小直径
- [`rainSizeHi`](./weather/rain#rainSizeHi) : 雨滴的最大直径
- [`snowColor`](./weather/snow#snowColor) : 雪花颜色
- [`snowTexture`](./weather/snow#snowTexture) : 雪花纹理
- [`snowDensity`](./weather/snow#snowDensity) : 雪的密度
- [`snowFallSpeed`](./weather/snow#snowFallSpeed) : 雪花下落速度
- [`snowSpinSpeed`](./weather/snow#snowSpinSpeed) : 雪花自旋速度
- [`snowSizeLo`](./weather/snow#snowSizeLo) : 雪花的最小直径
- [`snowSizeHi`](./weather/snow#snowSizeHi) : 雪花的最大直径
- [`lightMode`](./weather/illumination#lightMode) : 作用于天空和环境光的照明类型
- [`sunFrequency`](./weather/illumination#sunFrequency) : 太阳运动的频率
- [`sunPhase`](./weather/illumination#sunPhase) : 太阳的初始位置
- [`sunDirection`](./weather/illumination#sunDirection) : 太阳光照明方向
- [`sunLight`](./weather/illumination#sunLight) : 太阳光颜色亮度
- [`skyLeftLight`](./weather/illumination#skyLeftLight) : 环境光在-X轴方向的亮度
- [`skyRightLight`](./weather/illumination#skyRightLight) : 环境光在+X轴方向的亮度
- [`skyBottomLight`](./weather/illumination#skyBottomLight) : 环境光在-Y轴方向的亮度
- [`skyTopLight`](./weather/illumination#skyTopLight) : 环境光在+X轴方向的亮度
- [`skyFrontLight`](./weather/illumination#skyFrontLight) : 环境光在-Z轴方向的亮度
- [`skyBackLight`](./weather/illumination#skyBackLight) : 环境光在+Z轴方向的亮度
- [`ambientSound`](./music#ambientSound) : 设置背景音乐，从地图运行开始循环播放
- [`playerJoinSound`](./music#playerJoinSound) : 当玩家进入地图时，播放的音效
- [`playerLeaveSound`](./music#playerLeaveSound) : 当玩家离开地图时，播放的音效
- [`placeVoxelSound`](./music#placeVoxelSound) : 方块被放置时，播放的音效
- [`breakVoxelSound`](./music#breakVoxelSound) : 方块被销毁时，播放的音效

## 方法
- [`say`](./chat/resident#say) : 向所有玩家广播一条消息发
- [`createTempChat`](./chat/temporary#createTempChat) : 创建临时聊天频道
- [`destroyTempChat`](./chat/temporary#destroyTempChat) : 批量销毁临时聊天频道
- [`addTempChatPlayer`](./chat/temporary#addTempChatPlayer) : 向临时聊天频道添加玩家
- [`removeTempChatPlayer`](./chat/temporary#removeTempChatPlayer) : 向临时聊天频道移除玩家
- [`getTempChats`](./chat/temporary#getTempChats) : 获取当前地图存在的临时聊天频道
- [`getTempChatUsers`](./chat/temporary#getTempChatUsers) : 获取临时聊天频道中的玩家
- [`createEntity`](./entityCD#createEntity) : 创建一个新实体 GameEntity 或复制一个现有的实体
- [`entityQuota`](./entityCD#entityQuota) : 返回脚本当前仍可创建的实体数量
- [`querySelector`](./querySelectorEntity#querySelector) : 搜索满足条件的第一个实体
- [`querySelectorAll`](./querySelectorEntity#querySelectorAll) : 搜索满足条件的所有实体，返回一个列表
- [`searchBox`](./querySelectorEntity#searchBox) : 搜索指定范围中的全部实体
- [`raycast`](./querySelectorEntity#raycast) : 射线检测，返回碰到的实体或方块
- [`addZone`](./mapZone#addZone) : 创建一个区域
- [`removeZone`](./mapZone#removeZone) : 删除指定区域
- [`zones`](./mapZone#zones) : 返回所有的区域列表
- [`addCollisionFilter`](./physics#addCollisionFilter) : 添加碰撞过滤器，关闭两个实体组之间的碰撞
- [`removeCollisionFilter`](./physics#removeCollisionFilter) : 移除碰撞过滤器
- [`clearCollisionFilters`](./physics#clearCollisionFilters) : 清除全部碰撞过滤器
- [`collisionFilters`](./physics#collisionFilters) : 返回当前有效的全部碰撞过滤器
- [`testSelector`](./physics#testSelector) : 测试实体是否符合某个选择器的条件
- [`sound`](./music#sound) : 播放一段声音，所有玩家都能听到
- [`animate`](./animate#animate) : 创建一个关键帧动画
- [`getAnimations`](./animate#getAnimations) : 获取当前世界所有已创建的动画
- [`getEntityAnimations`](./animate#getEntityAnimations) : 获取实体所有已创建的动画
- [`getPlayerAnimations`](./animate#getPlayerAnimations) : 获取玩家所有已创建的动画
- [`teleport`](./teleport#teleport) : 地图组内传送能力，能够让玩家被传送到指定地图中

### 监听方法
- [`onTick`](./mapInfo#onTick) : 这是世界的计时事件，每64毫秒触发一次，Tick计数加1
- [`onEnter`](./mapZone#GameZone) : 当玩家进入该区域时触发
- [`onLeave`](./mapZone#GameZone) : 当玩离开该区域时触发
- [`onPlayerJoin`](./playerJL#onPlayerJoin) : 当玩家加入地图时触发
- [`onPlayerLeave`](./playerJL#onPlayerLeave) : 当玩家离开地图时触发
- [`onChat`](./chat/resident#onChat) : 当玩家在聊天窗口说话时触发
- [`onEntityCreate`](./entityCD#onEntityCreate) : 当实体被创建时触发
- [`onEntityDestroy`](./entityCD#onEntityDestroy) : 当实体被销毁时触发
- [`onInteract`](./input#onInteract) : 玩家与实体进行互动时触发
- [`onClick`](./input#onClick) : 当玩家用鼠标点击实体时触发
- [`onPress`](./input#onPress) : 当玩家按下按钮时触发
- [`onRelease`](./input#onRelease) : 当玩家松开按钮时触发
- [`onTakeDamage`](./fight#onTakeDamage) : 当实体受到伤害时触发
- [`onDie`](./fight#onDie) : 当实体死亡时触发
- [`onRespawn`](./fight#onRespawn) : 当实体复活时触发
- [`onEntityContact`](./physics#onEntityContact) : 当实体与实体发生碰撞时触发
- [`onEntitySeparate`](./physics#onEntitySeparate) : 当实体与实体结束碰撞时触发
- [`onVoxelContact`](./physics#onVoxelContact) : 当实体与方块发生碰撞时触发
- [`onFluidEnter`](./physics#airFriction) : 当实体进入水里/液体时触发
- [`onFluidLeave`](./physics#airFriction) : 当实体离开水里/液体时触发
- [`onFluidLeave`](./physics#airFriction) : 当实体离开水里/液体时触发
- [`onPlayerPurchaseSuccess`](./shopping#onPlayerPurchaseSuccess) : 当玩家成功购买物品时触发

## 接口
- [`GameTickEvent`](./mapInfo#GameTickEvent) : 每一刻(tick)触发一次的事件
- [`GameEntityEvent`](./playerJL#GameEntityEvent) : 当创建或销毁实体时触发的事件
- [`GameChatEvent`](./chat/resident#GameChatEvent) : 由聊天触发的事件
- [`GameEntityEvent`](./entityCD#GameEntityEvent) : 实体创建与销毁事件
- [`GameEntityConfig`](./entityCD#GameEntityConfig) : 用于控制实体的参数组
- [`GameSelectorString`](./querySelectorEntity#GameSelectorString) : 选择器可以方便搜索游戏内的全部对象
- [`GameRaycastOptions`](./querySelectorEntity#GameRaycastOptions) : 进行射线检测的参数配置
- [`GameRaycastResult`](./querySelectorEntity#GameRaycastResult) : 射线检测的结果，包含射线和所击中目标的信息。
- [`GameInteractEvent`](./input#GameInteractEvent) : 当实体互动时触发的事件
- [`GameInputEvent`](./input#GameInputEvent) : 输入事件，在玩家按下或松开按钮时触发
- [`GameClickEvent`](./input#GameClickEvent) : 游戏检查事件
- [`GameDamageEvent`](./fight#GameDamageEvent) : 当实体收到伤害时触发的事件
- [`GameDieEvent`](./fight#GameDieEvent) : 当实体死亡时触发的事件
- [`GameRespawnEvent`](./fight#GameRespawnEvent) : 当实体复活时触发的事件
- [`GameZoneConfig`](./mapZone#GameZoneConfig) : 用于区域的参数
- [`GameZone`](./mapZone#GameZone) : 用于区域的配置
- [`GameTriggerEvent`](./mapZone#GameTriggerEvent) : 当实体/玩家触发区域的事件
- [`GameEntityContactEvent`](./physics#GameEntityContactEvent) : 当两个实体碰撞时触发的事件
- [`GameVoxelContactEvent`](./physics#GameVoxelContactEvent) : 当实体触碰方块时触发的事件
- [`GameFluidContactEvent`](./physics#GameFluidContactEvent) : 当实体进入或离开液体时触发的事件
- [`GameSoundEffect`](./music#GameSoundEffect) : 使用 Sound()方法播放声音时，传入的参数
- [`GameWorldKeyframe`](./animate#GameWorldKeyframe) : World世界动画关键帧参数
- [`GameAnimationPlaybackConfig`](./animate#GameAnimationPlaybackConfig) : 用于动画播放配置的参数组
- [`GamePurchaseSuccessEvent`](./shopping#GamePurchaseSuccessEvent) : 当玩家成功购买物品时触发的事件

## 枚举
- [`GameButtonType`](./input#GameButtonType) : 玩家按下的按钮类型
- [`GameEasing`](./animate#GameEasing) : 动画的缓动效果