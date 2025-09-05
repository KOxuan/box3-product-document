<script setup>
import '/style.css'
</script>

# 方法

#### <font id="API" />start()<font id="Type">: void</font>{#start}

启动时间系统，启用后全局节点开始参与刷新。

#### <font id="API" />isRunning()<font id="Type">: boolean</font>{#isRunning}

检查时间系统是否正在运行。

#### <font id="API" />setTimeScale(<font id="Type">scale: number</font>)<font id="Type">: void</font>{#setTimeScale}

设置 dt 时间缩放因子，你可以使用它来加速或减速时间的流逝。

默认值为 1.0，值大于 1 表示加速，值小于 1 表示降速。

> 注意：时间缩放因子会影响所有节点的时间更新，包括全局节点。

> 请谨慎使用时间缩放因子，以避免出现意外的行为。

> 警告：时间缩放因子可能会导致节点之间的时间不一致，这可能会导致游戏逻辑错误。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_**   |
| ---------- | ---------- | ------------ | ---------- | ------------ |
| scale      | 是         |              | number     | 时间缩放因子 |

#### <font id="API" />getTimeScale()<font id="Type">: number</font>{#getTimeScale}

获取 dt 时间缩放因子

#### <font id="API" />setTimeout(<font id="Type">callback: () => void, delay: number</font>)<font id="Type">: number</font>{#setTimeout}

添加延时任务，刷新率和节点刷新频率相同。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_**       |
| ---------- | ---------- | ------------ | ---------- | ---------------- |
| callback   | 是         |              | ()=>void   | 回调函数         |
| delay      | 是         |              | number     | 延迟时间（毫秒） |

**返回值**

| **类型** | **说明** |
| -------- | -------- |
| number   | 任务 ID  |

#### <font id="API" />clearTimeout(<font id="Type">taskId: number</font>)<font id="Type">: boolean</font>{#clearTimeout}

清除延时任务

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ---------- | ---------- | ------------ | ---------- | ---------- |
| taskId     | 是         |              | number     | 任务 ID    |

#### <font id="API" />stop()<font id="Type">: void</font>{#stop}

暂时停止时间系统

#### <font id="API" />applyTimeWarp(<font id="Type">intensity: number, duration: number</font>)<font id="Type">: void</font>{#applyTimeWarp}

应用时间扭曲效果

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_**       |
| ---------- | ---------- | ------------ | ---------- | ---------------- |
| intensity  | 是         |              | number     | 时间扭曲强度     |
| duration   | 是         |              | number     | 持续时间（毫秒） |
