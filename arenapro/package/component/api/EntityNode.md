<script setup>
import '/style.css'
</script>

# 构造函数

该扩展节点继承至 [EventEmitter](./EventEmitter)。

#### <font id="API" />EntityNode<font id="Type">‹T = any›</font>(<font id="Type">entity:T,isEnable?:boolean</font>)<font id="Type">: EntityNode</font>{#EntityNode}

实例化一个扩展节点类

组件只能挂载在扩展节点上。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_**                                                     |
| ---------- | ---------- | ------------ | ---------- | -------------------------------------------------------------- |
| entity     | 是         |              | T          | 游戏实体，可以是任意实体，例如角色、道具、ui 等                |
| isEnable   |            | true         | boolean    | 扩展节点是否启用，启用时每帧刷新，且会影响节点下的组件启用状态 |

**返回值**

| **类型**   | **说明**   |
| ---------- | ---------- |
| EntityNode | 扩展节点类 |

## 属性

#### <font id="API" /><font id="ReadOnly" >只读</font>uuid<font id="Type">: string</font> {#uuid}

获取该节点的 uuid。

---

#### <font id="API" /><font id="ReadOnly" >只读</font>components<font id="Type">: Map‹string, Component‹T››</font> {#components}

获取该节点下所有组件实例。

---

#### <font id="API" /><font id="ReadOnly" >只读</font>entity<font id="Type">: entity‹T›</font> {#entity}

获取关联的游戏实体。

---

#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

节点启用状态，会影响每帧刷新和节点下的组件启用状态。

## 静态方法

#### <font id="API" />onPerformanceWarning(<font id="Type">event: (event: IonPerformanceData) => void</font>)<font id="Type">: void</font>{#onPerformanceWarning}

设置全局组件的性能警告回调。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_**                          | **_说明_** |
| ---------- | ---------- | ------------ | ----------------------------------- | ---------- |
| event      | 是         |              | (event: IonPerformanceData) => void | 回调方法   |

## 方法

#### <font id="API" />addComponent(<font id="Type">componentName: string, object?: Record‹string, any› , isEnable?: boolean</font>)<font id="Type">: this</font>{#addComponentName}

向该节点增加指定类型的组件。

子组件类须加上@apclass 修饰器。否则无法获取组件实例。

【使用组件名】

**输入参数**

| **_参数_**    | **_必填_** | **_默认值_** | **_类型_**          | **_说明_**                     |
| ------------- | ---------- | ------------ | ------------------- | ------------------------------ |
| componentName | 是         |              | string              | 组件名                         |
| object        |            | {}           | Record<string, any> | 组件初始化属性，默认不修改属性 |
| isEnable      |            | true         | boolean             | 组件是否启用，默认启用         |

---

#### <font id="API" />addComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U, object?: Partial‹Omit‹U, keyof Component‹T››› , isEnable?: boolean</font>)<font id="Type">: this</font>{#addComponent}

向该节点增加指定类型的组件。

【使用组件构造函数】

**输入参数**

| **_参数_**           | **_必填_** | **_默认值_** | **_类型_**                           | **_说明_**                     |
| -------------------- | ---------- | ------------ | ------------------------------------ | ------------------------------ |
| componentConstructor | 是         |              | new (...args: any[]) => U            | 组件构造函数                   |
| object               |            | {}           | Partial‹Omit‹U, keyof Component‹T››› | 组件初始化属性，默认不修改属性 |
| isEnable             |            | true         | boolean                              | 组件是否启用，默认启用         |

---

#### <font id="API" />getComponent(<font id="Type">componentName: string</font>)<font id="Type">: U | undefined</font>{#getComponentName}

获取该节点下指定类型的组件。

【使用组件名】

**输入参数**

| **_参数_**    | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ------------- | ---------- | ------------ | ---------- | ---------- |
| componentName | 是         |              | string     | 组件名     |

---

#### <font id="API" />getComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: U | undefined</font>{#getComponent}

获取该节点下指定类型的组件。

【使用组件构造函数】

**输入参数**

| **_参数_**           | **_必填_** | **_默认值_** | **_类型_**                | **_说明_**   |
| -------------------- | ---------- | ------------ | ------------------------- | ------------ |
| componentConstructor | 是         |              | new (...args: any[]) => U | 组件构造函数 |

---

#### <font id="API" />getComponentPerformance(<font id="Type">componentName: string</font>)<font id="Type">: IBasePerformanceData | null</font>{#getComponentPerformanceName}

获取该节点下指定的组件性能数据。

【使用组件名】

**输入参数**

| **_参数_**    | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ------------- | ---------- | ------------ | ---------- | ---------- |
| componentName | 是         |              | string     | 组件名     |

---

#### <font id="API" />getComponentPerformance<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: IBasePerformanceData | null</font>{#getComponentPerformance}

获取该节点下指定的组件性能数据。

【使用组件构造函数】

**输入参数**

| **_参数_**           | **_必填_** | **_默认值_** | **_类型_**                | **_说明_**   |
| -------------------- | ---------- | ------------ | ------------------------- | ------------ |
| componentConstructor | 是         |              | new (...args: any[]) => U | 组件构造函数 |

---

#### <font id="API" />getComponents()<font id="Type">: Map‹string, Component‹T››</font>{#getComponents}

获取该节点下所有组件。

---

#### <font id="API" />removeComponent(<font id="Type">componentName: string</font>)<font id="Type">: boolean</font>{#removeComponentnName}

移除节点下指定类型的组件。

【使用组件名】

**输入参数**

| **_参数_**    | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ------------- | ---------- | ------------ | ---------- | ---------- |
| componentName | 是         |              | string     | 组件名     |

---

#### <font id="API" />removeComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: boolean</font>{#removeComponent}

移除节点下指定类型的组件。

【使用组件构造函数】

**输入参数**

| **_参数_**           | **_必填_** | **_默认值_** | **_类型_**                | **_说明_**   |
| -------------------- | ---------- | ------------ | ------------------------- | ------------ |
| componentConstructor | 是         |              | new (...args: any[]) => U | 组件构造函数 |

---

#### <font id="API" />removeComponentAll()<font id="Type">: void</font>{#removeComponentAll}

移除节点下所有组件。

---

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

移除节点及其所有组件，并清理相关资源。

## 函数

#### <font id="API" />find<font id="Type">‹U = any›</font>(<font id="Type">entity:U</font>)<font id="Type">: EntityNode‹U› | undefined</font>{#find}

根据 entity 从全局注册表中获取一个已注册的扩展节点实例。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| ---------- | ---------- | ------------ | ---------- | ---------- |
| entity     | 是         |              | U          | 游戏实体   |
