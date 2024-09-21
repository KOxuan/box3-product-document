<script setup>
import '/style.css'
</script>
# 音乐对象
:::info
**Sound**，作为 `sound()` 方法的统一返回类型，支持后续的音乐操作。 
:::

## 方法

#### <font id="API" />setCurrentTime(<font id="Type">currentTime:number</font>)<font id="Type">:  void</font>
设置该音乐播放的时间点

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| currentTime | 是 | |number|设定特定时间点|

> 定义于 [#L9670](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9670)

---


#### <font id="API" />resume(<font id="Type">currentTime?:number</font>)<font id="Type">:  void</font>
继续该音乐播放

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| currentTime | 否 | | number|从特定时间点继续播放|

> 定义于 [#L9669](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9669)
---


#### <font id="API" />paus()<font id="Type">:  void</font>
暂停该音乐的播放

> 定义于 [#L9671](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9671)
---


#### <font id="API" />stop()<font id="Type">:  void</font>
终止该音乐的播放

> 定义于 [#L9672](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L9672)