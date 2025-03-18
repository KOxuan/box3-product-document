<script setup>
import '/style.css'
</script>

# 构造函数

#### <font id="API" />EventEmitter()<font id="Type">: EventEmitter</font>{#EventEmitter}

实例化一个事件消息类

**返回值**

| **类型**     | **说明** |
| ------------ | -------- |
| EventEmitter | 事件类   |

# 方法

#### <font id="API" />on(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#on}

注册事件监听

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_**               | **_说明_** |
| ---------- | ---------- | ------------ | ------------------------ | ---------- |
| eventName  | 是         |              | string                   | 事件名称   |
| callback   | 是         |              | (...args: any[]) => void | 回调函数   |
| target     |            | this         | any                      | 目标对象   |

---

#### <font id="API" />once(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#once}

注册单次事件监听，触发后自动移除

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_**               | **_说明_** |
| ---------- | ---------- | ------------ | ------------------------ | ---------- |
| eventName  | 是         |              | string                   | 事件名称   |
| callback   | 是         |              | (...args: any[]) => void | 回调函数   |
| target     |            | this         | any                      | 目标对象   |

---

#### <font id="API" />off(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#off}

移除事件监听

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_**               | **_说明_** |
| ---------- | ---------- | ------------ | ------------------------ | ---------- |
| eventName  | 是         |              | string                   | 事件名称   |
| callback   | 是         |              | (...args: any[]) => void | 回调函数   |
| target     |            | this         | any                      | 目标对象   |

---

#### <font id="API" />emit(<font id="Type">eventName: string, ...args: any[]</font>)<font id="Type">: this</font>{#emit}

触发事件

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ---------- | ---------- | ------------ | ---------- | ---------- |
| eventName  | 是         |              | string     | 事件名称   |
| ...args    | 是         |              | any[]      | 参数列表   |

---

#### <font id="API" />hasEventListener(<font id="Type">eventName: string</font>)<font id="Type">: boolean</font>{#hasEventListener}

检查是否有特定事件的监听者

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ---------- | ---------- | ------------ | ---------- | ---------- |
| eventName  | 是         |              | string     | 事件名称   |

**返回值**

| **类型** | **说明**     |
| -------- | ------------ |
| boolean  | 是否有监听者 |

---

#### <font id="API" />removeAll()<font id="Type">: boolean</font>{#removeAll}

移除所有事件监听

---

#### <font id="API" />targetOff(<font id="Type">target: any</font>)<font id="Type">: this</font>{#targetOff}

移除指定目标的所有事件监听

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ---------- | ---------- | ------------ | ---------- | ---------- |
| target     | 是         |              | any        | 目标对象   |
