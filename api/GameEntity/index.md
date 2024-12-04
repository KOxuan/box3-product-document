# S-🏠游戏实体

- **GameEntity** 是控制游戏中的游戏对象，用于对物体、玩家等的控制。

## 类

```typescript
declare class GameEntity {
    //...
}
```

## 属性
- [`isPlayer`](./isPlayer#isPlayer) : 实体是否为玩家。
- [`player`](./isPlayer#player) : 索引与玩家相关的全部状态和方法
- [`mesh`](./appearance#mesh) : 实体形状数据(mesh)的hash
- [`position`](./appearance#position) : 实体的位置
- [`meshOrientation`](./appearance#meshOrientation) : 实体的旋转角度
- [`meshScale`](./appearance#meshScale) : 实体的缩放比例
- [`meshColor`](./appearance#meshColor) : 实体的颜色
- [`meshInvisible`](./appearance#meshInvisible) : 控制实体隐形
- [`meshEmissive`](./appearance#meshEmissive) : 实体的发光度
- [`meshMetalness`](./appearance#meshMetalness) : 实体的金属感
- [`meshShininess`](./appearance#meshShininess) : 实体的反光度
- [`meshOffset`](./appearance#meshOffset) : 实体的位移
- [`showEntityName`](./appearance#showEntityName) : 是否展示实体的默认名称
- [`customName`](./appearance#customName) : 自定义需要展示的名称
- [`nameRadius`](./appearance#nameRadius) : 名称展示范围，数值越小，则需要靠近实体才会出现名称
- [`nameColor`](./appearance#nameColor) : 进入实体名称展示范围时，实体名称的颜色
- [`motion`](./animate#motion) : 索引与模型动作相关的全部状态和方法
- [`bounds`](./physics#bounds) : 实体边界框的半径
- [`collides`](./physics#collides) : 实体是否碰撞
- [`fixed`](./physics#fixed) : 实体是否移动
- [`meshScale`](./physics#meshScale) : 实体的缩放比例
- [`friction`](./physics#friction) : 控制实体的粘性(0 = 滑，1 = 粘)
- [`gravity`](./physics#gravity) : 实体是否下落
- [`mass`](./physics#mass) : 实体物理质量
- [`restitution`](./physics#restitution) : 控制实体的弹性(0 = 软, 1 = 弹)
- [`velocity`](./physics#velocity) : 实体的速度
- [`contactForce`](./physics#contactForce) : 实体受到的碰撞力
- [`entityContacts`](./physics#entityContacts) : 返回正在和玩家/实体发生碰撞的全部实体列表
- [`voxelContacts`](./physics#voxelContacts) : 返回正在和玩家/实体发生碰撞的全部方块列表
- [`fluidContacts`](./physics#fluidContacts) : 返回正在被玩家/实体触碰的全部液体方块列表
- [`chatSound`](./music#chatSound) : 当实体说话时，播放聊天音效。通过`say()`触发
- [`hurtSound`](./music#hurtSound) : 当实体触发受伤事件时，播放受伤音效。通过`onTakeDamage()`触发
- [`dieSound`](./music#dieSound) : 当实体触发死亡事件时，播放死亡音效。通过`onDie()`触发
- [`interactSound`](./music#interactSound) : 当实体进行互动时，播放互动音效。此音效仅互动的玩家可听见。通过`onInteract()`触发
- [`particleRate`](./particle#particleRate) : 实体平均每秒产生粒子的数量
- [`particleRateSpread`](./particle#particleRateSpread) : 如果设定了该属性的值，实体每一秒产生粒子的数量将不再是个固定值
- [`particleLimit`](./particle#particleLimit) : 实体可产生的粒子总数的上限
- [`particleLifetime`](./particle#particleLifetime) : 粒子的存活时间，以秒为单位
- [`particleLifetimeSpread`](./particle#particleLifetimeSpread) : 如果设定了该属性的值，粒子的存活时间将不再是固定值，
- [`particleSize`](./particle#particleSize) : 该属性的值可以是一个长度为0至5的数组。每个粒子的存活时间被平均分为五个阶段
- [`particleSizeSpread`](./particle#particleSizeSpread) : 如果设定了该属性，但没设定 particleSize 的值，每产生一个粒子，会从区间[0， particleSizeSpread)里选取的一个随机数作为它的大小
- [`particleColor`](./particle#particleColor) : 类似 particleSize，该属性的值可以是一个长度为0至5的数组，数组里的每个值分别指定了粒子在各个阶段的颜色
- [`particleVelocity`](./particle#particleVelocity) : 该实体产生的所有粒子的初始速度
- [`particleVelocitySpread`](./particle#particleVelocitySpread) : 增加该实体产生的所有粒子初始速度的不确定性
- [`particleDamping`](./particle#particleDamping) : 如果该属性的值为正数，会短暂减少该实体所产生粒子的初始速度，数值越大，减少初始速度的效果持续得越久
- [`particleAcceleration`](./particle#particleAcceleration) : 该实体所产生粒子的加速度
- [`particleNoise`](./particle#particleNoise) : 指定粒子相对于之前运动方向的最大偏离值，数值越大，各个粒子的运动相对原有方向的偏离越明显
- [`particleNoiseFrequency`](./particle#particleNoiseFrequency) : 指定粒子改变运动方向的频率，数值越大，各个粒子的运动方向越没有规律
- [`id`](./label#id) : 已在编辑器中添加的实体名称
- [`enableInteract`](./input#enableInteract) : 是否允许实体进行互动
- [`interactRadiu`](./input#interactRadiu) : 实体互动范围。数值越小，则需要靠近实体才会出现互动提示
- [`interactHint`](./input#interactHint) : 进入实体互动范围时，实体身上出现的提示文本
- [`interactColor`](./input#interactColor) : 进入实体互动范围时，提示文本的颜色
- [`destroyed`](./fight#destroyed) : 实体是否销毁
- [`enableDamage`](./fight#enableDamage) : 实体是否显示可以进行伤害
- [`showHealthBar`](./fight#showHealthBar) : 实体是否显示生命值HP
- [`hp`](./fight#hp) : 实体的当前生命值hp
- [`maxHp`](./fight#maxHp) : 实体的最大生命值hp

## 方法
- [`lookAt`](./appearance#lookAt) : 将实体旋转至面向指定位置的方向。
- [`animate`](./animate#animate) : 创建一个关键帧动画
- [`getAnimations`](./animate#getAnimations) : 获取实体的所有已创建的动画
- [`sound`](./music#sound) : 在实体所在的位置播放声音
- [`addTag`](./label#addTag) : 为实体添加一个新标签
- [`hasTag`](./label#hasTag) : 判断实体是否带有某个标签
- [`removeTag`](./label#removeTag) : 从实体移除标签
- [`tags`](./label#tags) : 获取编辑器中给实体添加的全部标签
- [`say`](./input#say) : 让实体说话
- [`destroy`](./fight#destroy) : 销毁实体
- [`hurt`](./fight#hurt) : 对实体的伤害数值


### 监听方法
- [`onClick`](./input#onClick) : 当玩家用鼠标点击实体时触发
- [`onInteract`](./input#onInteract) : 当实体进行互动时触发
- [`onEntityContact`](./input#onEntityContact) : 当实体触碰另一个实体时触发
- [`onEntitySeparate`](./input#onEntitySeparate) : 当实体停止触碰另一个实体时触发
- [`onFluidEnter`](./input#onFluidEnter) : 当实体进入液体时触发
- [`onFluidLeave`](./input#onFluidLeave) : 当实体离开液体时触发
- [`onVoxelContact`](./input#onVoxelContact) : 当实体触碰方块时触发
- [`onVoxelSeparate`](./input#onVoxelSeparate) : 当实体停止触碰方块时触发
- [`onDestroy`](./fight#onDestroy) : 当实体被销毁时触发
- [`onTakeDamage`](./fight#onTakeDamage) : 实体受到伤害时触发的事件
- [`onDie`](./fight#onDie) : 实体死亡时触发的事件

## 接口
- [`GameEntityKeyframe`](./animate#GameEntityKeyframe) : Entity实体动画关键帧参数
- [`GameEntityContactEvent`](./input#GameEntityContactEvent) : 当两个实体碰撞时触发的事件
- [`GameFluidContactEvent`](./input#GameFluidContactEvent) : 当实体进入或离开液体时触发的事件
- [`GameVoxelContactEvent`](./input#GameVoxelContactEvent) : 当实体进入或离开液体时触发的事件当实体触碰方块时触发的事件
- [`GameHurtOptions`](./fight#GameHurtOptions) : 攻击/伤害的相关参数
- [`GameDamageEvent`](./fight#GameDamageEvent) : 当实体收到伤害时触发的事件
- [`GameDieEvent`](./fight#GameDieEvent) : 当实体死亡时触发的事件