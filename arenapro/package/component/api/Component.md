<script setup>
import '/style.css'
</script>

# 构造函数

#### <font id="API" />Component<font id="Type">‹T = any›</font>()<font id="Type">: Component</font>{#Component}

实例化一个组件类

**返回值**

| **类型**  | **说明** |
| --------- | -------- |
| Component | 组件类   |

## 属性

#### <font id="API" />weight<font id="Type">: number</font> {#weight}

组件权重，值越小权重越大，刷新时会根据权重进行排序。

默认值：0

---

#### <font id="API" /><font id="ReadOnly" >只读</font>node<font id="Type">: node‹T›</font>{#node}

获取该组件关联的扩展节点。

---


#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

该组件启用状态

## 方法

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

从当前节点上移除当前组件实例。

会执行组件的`onDisable`和`onDestroy`方法

---

#### <font id="API" />onLoad(<font id="Type">event: () => void </font>)<font id="Type">: void</font>{#onLoad}

生命周期，用于在对象初始化时执行逻辑。

---

#### <font id="API" />start(<font id="Type">event: () => void </font>)<font id="Type">: void</font>{#start}

生命周期，用于在对象初次运行时执行逻辑。

---

#### <font id="API" />update(<font id="Type">event: (deltaTime: number) => void </font>)<font id="Type">: void</font>{#update}

生命周期，用于在每一帧（30 FPS）更新时执行逻辑。

**返回值**

| **类型**  | **说明**                           |
| --------- | ---------------------------------- |
| deltaTime | 自上次更新以来的时间差，单位为毫秒 |

---

#### <font id="API" />onEnable(<font id="Type">event: () => void </font>)<font id="Type">: void</font>{#onEnable}

生命周期，当组件被启用时调用。

---

#### <font id="API" />onDisable(<font id="Type">event: () => void </font>)<font id="Type">: void</font>{#onDisable}

生命周期， 当组件被禁用时调用。

---

#### <font id="API" />onDestroy(<font id="Type">event: () => void </font>)<font id="Type">: void</font>{#onDestroy}

生命周期， 当组件被销毁时调用。
