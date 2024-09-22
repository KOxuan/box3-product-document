<script setup>
import '/style.css'
</script>
# 操作

## 方法
#### <font id="API" />getMicrophonePermission(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹boolean›</font>{#getMicrophonePermission}
向该通道申请获取一个玩家的录音权限

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |


**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹boolean› | 异步返回是否成功获取到录音权限 |

> 定义于 [#L13410](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13410)

---
#### <font id="API" />add(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹void›</font>{#add}
向该通道加入一个玩家

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |


> 定义于 [#L13402](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13402)

---
#### <font id="API" />remove(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹void›</font>{#remove}
向该通道删除一个玩家

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |


> 定义于 [#L13403](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13403)

---
#### <font id="API" />unpublish(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹void›</font>{#unpublish}
向该通道一个玩家关闭麦克风

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |


> 定义于 [#L13404](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13404)

---
#### <font id="API" />publishMicrophone(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹void›</font>{#publishMicrophone}
向该通道一个玩家开启麦克风

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |


> 定义于 [#L13405](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13405)

---
#### <font id="API" />getPlayers()<font id="Type">: Promise‹[GamePlayerEntity](/GameEntity/isPlayer)[]›</font>{#getPlayers}
获取该通道目前所有的玩家

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹GamePlayerEntity[]› | 异步返回玩家对象列表 |


> 定义于 [#L13406](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13406)

---
#### <font id="API" />destroy()<font id="Type">: Promise‹void›</font>{#destroy}
删除该通道

> 定义于 [#L13407](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13407)

---
#### <font id="API" />getVolume(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer)</font>)<font id="Type">: Promise‹number›</font>{#getVolume}
获取该通道一个玩家音量

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Promise‹number› | 异步返回音量大小 |

> 定义于 [#L13408](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13408)

---
#### <font id="API" />setVolume(<font id="Type">entity:[GamePlayerEntity](/GameEntity/isPlayer),volume:number</font>)<font id="Type">: Promise‹void›</font>{#setVolume}
向该通道设置一个玩家音量

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | 是 |  | string | 玩家对象 |
| volume | 是 |  | number | 音量大小 |

> 定义于 [#L13409](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13409)