<script setup>
import '/style.css'
</script>
# 摄像机视角
## 属性

#### <font id="API" />cameraMode<font id="Type">: [GameCameraMode](./camera#GameCameraMode)</font>{#cameraMode}
> 默认值：GameCameraMode.FIXED

视角模式

> 定义于 [#L11828](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11828)
---


#### <font id="API" />cameraEntity<font id="Type">: [GameEntity](/GameEntity/) | null  </font>{#cameraEntity}
> 默认值：玩家本身

在第一人称视角(FPS)或第三人称跟随视角(FOLLOW)下，玩家视角所跟随的实体

> 定义于 [#L11833](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11833)
---


#### <font id="API" />cameraPosition<font id="Type">: [GameVector3](/GameVector3/)</font>{#cameraPosition}
> 默认值：GameVector3(0, 0, 0)

固定视角(FIXED)和相对视角(RELATIVE)下，摄像机本身所处的位置

> 定义于 [#L11848](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11848)
---

#### <font id="API" />cameraTarget<font id="Type">: [GameVector3](/GameVector3/)</font>{#cameraTarget}
> 默认值：GameVector3(0, 0, 0)

固定视角(FIXED)和相对视角(RELATIVE)下，摄像机看向的目标点

> 定义于 [#L11838](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11838)
---
#### <font id="API" />cameraUp<font id="Type">: [GameVector3](/GameVector3/)</font>{#cameraUp}
> 默认值：GameVector3(0, 1, 0)

固定视角(FIXED)和相对视角(RELATIVE)下，摄像机镜头向上的矢量

> 定义于 [#L11843](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11843)
---


#### <font id="API" />cameraFovY<font id="Type">: number </font>{#cameraFovY}
> 默认值：0.25

垂直方向的视场角

> 定义于 [#L11858](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11858)
---


#### <font id="API" />enable3DCursor<font id="Type">: boolean </font>{#enable3DCursor}
> 默认值：false

启动玩家的3D光标

> 定义于 [#L12013](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L12013)
---


#### <font id="API" />cameraFreezedAxis<font id="Type">: [GameCameraFreezedAxis](./camera#GameCameraFreezedAxis) </font>{#cameraFreezedAxis}
> 默认值：GameCameraFreezedAxis.NONE

相对视角(RELATIVE)下，下冻结相机轴

> 定义于 [#L11853](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11853)
---


#### <font id="API" />freezedForwardDirection<font id="Type">: [GameVector3](/GameVector3/) | null</font>{#freezedForwardDirection}
> 默认值：null

如果不为null，眼睛看向指定方向且锁定左右旋转，只可以上下移动。

> 定义于 [#L11947](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11947)
---


#### <font id="API" />cameraDistance<font id="Type">: number</font>{#cameraDistance}
> 默认值：8.5

摄像机离跟随目标的距离，这决定了相机在场景中观察目标时的相对位置。

> 定义于 [#L11863](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11863)

## 方法

#### <font id="API" />setCameraPitch(<font id="Type">v:number</font>)<font id="Type">:  void</font>{#setCameraPitch}
设置玩家视角准心绕水平方向的旋转弧度

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| v | 是 | | number | 设置弧度 |

> 定义于 [#L11721](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11721)

---


#### <font id="API" />setCameraYaw(<font id="Type">v:number</font>)<font id="Type">:  void</font>{#setCameraYaw}
设置玩家视角准心绕垂直方向的旋转弧度

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| v | 是 | | number | 设置弧度 |


> 定义于 [#L11725](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11725)



## 枚举

#### <font id="API" />GameCameraMode{#GameCameraMode}
玩家的相机视角模式

| **属性** | **说明** |
| --- | --- |
| FIXED | 第三人称固定视角 |
| FOLLOW | 第三人称跟随视角(默认) |
| FPS | 第一人称视角 |
| RELATIVE | 相对于玩家位置的第三人称视角 |

> 定义于 [#L11555](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11555)

---


#### <font id="API" />GameCameraFreezedAxis{#GameCameraFreezedAxis}
玩家的轴模式

| **属性** | **说明** |
| --- | --- |
| NONE | 不设置 |
| X | X轴 |
| Y | Y轴 |
| Z | Z轴 |
| XY | XY轴 |
| XZ | XZ轴 |
| YZ | YZ轴 |
| XYZ | XYZ轴 |


> 定义于 [#L11561](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L11561)