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

该组件启用状态。

## 方法

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

从当前节点上移除当前组件实例。

会执行组件的`onDisable`和`onDestroy`方法

---

#### <font id="API" />onLoad()<font id="Type">: void</font>{#onLoad}

当附加到一个节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />start()<font id="Type">: void</font>{#start}

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />update(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#update}

如果该组件启用，则每帧（60 FPS）调用 update。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

**返回值**

| **类型**  | **说明**                           |
| --------- | ---------------------------------- |
| deltaTime | 自上次更新以来的时间差，单位为毫秒 |

---

#### <font id="API" />lateUpdate(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#lateUpdate}

如果该组件启用，则等节点下所有组件 update 执行完后调用 lateUpdate。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

**返回值**

| **类型**  | **说明**                           |
| --------- | ---------------------------------- |
| deltaTime | 自上次更新以来的时间差，单位为毫秒 |

---

#### <font id="API" />onEnable()<font id="Type">: void</font>{#onEnable}

当该组件被启用，并且它的节点也激活时。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onDisable()<font id="Type">: void</font>{#onDisable}

当该组件被禁用或节点变为无效时调用。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

---

#### <font id="API" />onDestroy()<font id="Type">: void</font>{#onDestroy}

当该组件被销毁时调用。

该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

## 修饰器函数

#### <font id="API" />apclass<font id="Type">‹T extends { new (...args: any[]): Component }›</font>(<font id="Type">constructor:T</font>)<font id="Type">: void</font>{#apclass}

该装饰器函数的目的在于确保传入的构造函数是 Component 类的子类，并将自动注册到 registryComponent 中，从而们可以直接使用类名来注册组件。
