<script setup>
import '/style.css'
</script>

# Methods

#### <font id="API" />start()<font id="Type">: void</font>{#start}

Starts the time system. Once enabled, global nodes begin to participate in the update cycle.

---

#### <font id="API" />isRunning()<font id="Type">: boolean</font>{#isRunning}

Checks if the time system is currently running.

---

#### <font id="API" />setTimeScale(<font id="Type">scale: number</font>)<font id="Type">: void</font>{#setTimeScale}

Sets the `dt` time scale factor. You can use this to speed up or slow down the passage of time.

The default value is 1.0. A value greater than 1 means acceleration, and a value less than 1 means deceleration.

> Note: The time scale factor affects the time updates of all nodes, including global nodes.

> Please use the time scale factor with caution to avoid unexpected behavior.

> Warning: The time scale factor may cause time inconsistencies between nodes, which could lead to game logic errors.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**     |
| --------------- | -------------- | ------------- | ---------- | --------------------- |
| scale           | Yes            |               | number     | The time scale factor |

---

#### <font id="API" />getTimeScale()<font id="Type">: number</font>{#getTimeScale}

Gets the `dt` time scale factor.

---

#### <font id="API" />setTimeout(<font id="Type">callback: () => void, delay: number</font>)<font id="Type">: number</font>{#setTimeout}

Adds a delayed task. The update rate is the same as the node's update frequency.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**              |
| --------------- | -------------- | ------------- | ---------- | ------------------------------ |
| callback        | Yes            |               | ()=>void   | The callback function          |
| delay           | Yes            |               | number     | The delay time in milliseconds |

**Return Value**

| **Type** | **Description** |
| -------- | --------------- |
| number   | The task ID     |

---

#### <font id="API" />clearTimeout(<font id="Type">taskId: number</font>)<font id="Type">: boolean</font>{#clearTimeout}

Clears a delayed task.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_** |
| --------------- | -------------- | ------------- | ---------- | ----------------- |
| taskId          | Yes            |               | number     | The task ID       |

---

#### <font id="API" />stop()<font id="Type">: void</font>{#stop}

Temporarily stops the time system.

---

#### <font id="API" />applyTimeWarp(<font id="Type">intensity: number, duration: number</font>)<font id="Type">: void</font>{#applyTimeWarp}

Applies a time warp effect.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**            |
| --------------- | -------------- | ------------- | ---------- | ---------------------------- |
| intensity       | Yes            |               | number     | The time warp intensity      |
| duration        | Yes            |               | number     | The duration in milliseconds |
