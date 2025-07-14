<script setup>
import '/style.css'
</script>

# 构造函数

#### <font id="API" />NodeSystem<font id="Type">‹T = any›</font>()<font id="Type">: NodeSystem</font>{#NodeSystem}

实例化一个节点系统类

**返回值**

| **类型**   | **说明**   |
| ---------- | ---------- |
| NodeSystem | 节点系统类 |

## 属性

#### <font id="API" />uuid<font id="Type">: string</font>{#uuid}

获得系统的 uuid。

---

#### <font id="API" /><font id="ReadOnly" >只读</font>entities<font id="Type">: node‹T›[]</font>{#entities}

获取该系统的扩展节点列表。

---

#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

该系统启用状态。

## 方法

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

移除当前系统实例。

会执行系统的`onDisable`和`onDestroy`方法

---

#### <font id="API" />onEntityNodeAdded(<font id="Type">entityNode: EntityNode</font>)<font id="Type">: void</font>{#onEntityNodeAdded}

当实体节点成功被添加到系统时调用。

你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onEntityNodeRemoved(<font id="Type">entityNode: EntityNode</font>)<font id="Type">: void</font>{#onEntityNodeRemoved}

当实体节点成功被移除到系统时调用。

你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onLoad()<font id="Type">: void</font>{#onLoad}

系统初始化函数，在系统被注册到注册表之前调用

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />update(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#update}

如果该系统启用，在每一帧中在所有组件的 update 之后被调用

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

**返回值**

| **类型**  | **说明**                           |
| --------- | ---------------------------------- |
| deltaTime | 自上次更新以来的时间差，单位为毫秒 |

---

#### <font id="API" />postUpdate(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#postUpdate}

如果该系统启用，在每一帧中在所有组件的 lateUpdate 之后被调用

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

**返回值**

| **类型**  | **说明**                           |
| --------- | ---------------------------------- |
| deltaTime | 自上次更新以来的时间差，单位为毫秒 |

---

#### <font id="API" />onEnable()<font id="Type">: void</font>{#onEnable}

系统启用时调用，当系统的 enable 属性从 false 变为 true 时触发。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onDisable()<font id="Type">: void</font>{#onDisable}

系统禁用时调用，当系统的 enable 属性从 true 变为 false 时触发。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onDestroy()<font id="Type">: void</font>{#onDestroy}

系统销毁时调用，在系统被完全清理之前的最后一个生命周期方法。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
