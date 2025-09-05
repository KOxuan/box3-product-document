<script setup>
import '/style.css'
</script>

# Constructor

This extended node inherits from [EventEmitter](./EventEmitter).

#### <font id="API" />EntityNode<font id="Type">‹T = any›</font>(<font id="Type">entity:T</font>)<font id="Type">: EntityNode</font>{#EntityNode}

Instantiates an extended node class.

Components can only be attached to extended nodes.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**                                                                  |
| --------------- | -------------- | ------------- | ---------- | ---------------------------------------------------------------------------------- |
| entity          | Yes            |               | T          | A game entity, which can be any entity such as a character, item, UI element, etc. |

**Return Value**

| **Type**   | **Description**         |
| ---------- | ----------------------- |
| EntityNode | The extended node class |

## Static Properties

#### <font id="API" />isMonitoringEnabled<font id="Type">: boolean</font> {#isMonitoringEnabled}

Sets whether to enable global performance monitoring.
Defaults to `true`.

When enabled, the `Component.update` method of all components will be tracked by the performance monitor to record and analyze their execution performance. Disabling this option can reduce performance overhead and is suitable for production environments or scenarios where performance monitoring is not required.

## Properties

#### <font id="API" /><font id="ReadOnly" >Read-only</font>uuid<font id="Type">: string</font> {#uuid}

Gets the UUID of this node.

#### <font id="API" /><font id="ReadOnly" >Read-only</font>components<font id="Type">: Map‹string, Component‹T››</font> {#components}

Gets all component instances on this node.

#### <font id="API" /><font id="ReadOnly" >Read-only</font>entity<font id="Type">: entity‹T›</font> {#entity}

Gets the associated game entity.

#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

The enabled state of the node, which affects the per-frame update and the enabled state of components on the node.

## Static Methods

#### <font id="API" />onPerformanceWarning(<font id="Type">event: (event: IonPerformanceData) => void</font>)<font id="Type">: void</font>{#onPerformanceWarning}

Sets the global performance warning callback for components.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_**                          | **_Description_**   |
| --------------- | -------------- | ------------- | ----------------------------------- | ------------------- |
| event           | Yes            |               | (event: IonPerformanceData) => void | The callback method |

## Methods

#### <font id="API" />addComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U, object?: Partial‹Omit‹U, keyof Component‹T››› </font>)<font id="Type">: this</font>{#addComponent}

Adds a component of the specified type to this node.

[Using component constructor]

**Input Parameters**

| **_Parameter_**      | **_Required_** | **_Default_** | **_Type_**                           | **_Description_**                                                           |
| -------------------- | -------------- | ------------- | ------------------------------------ | --------------------------------------------------------------------------- |
| componentConstructor | Yes            |               | new (...args: any[]) => U            | The component constructor                                                   |
| object               | No             | {}            | Partial‹Omit‹U, keyof Component‹T››› | Initial properties for the component, does not modify properties by default |

#### <font id="API" />addComponent(<font id="Type">componentName: string, object?: Record‹string, any›</font>)<font id="Type">: this</font>{#addComponentName}

Adds a component of the specified type to this node.

The child component class must have the `@apclass` decorator. Otherwise, the component instance cannot be obtained.

[Using component name]

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_**          | **_Description_**                                                           |
| --------------- | -------------- | ------------- | ------------------- | --------------------------------------------------------------------------- |
| componentName   | Yes            |               | string              | The component name                                                          |
| object          | No             | {}            | Record<string, any> | Initial properties for the component, does not modify properties by default |

#### <font id="API" />getComponent(<font id="Type">componentName: string</font>)<font id="Type">: U | undefined</font>{#getComponentName}

Gets a component of the specified type on this node.

[Using component name]

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**  |
| --------------- | -------------- | ------------- | ---------- | ------------------ |
| componentName   | Yes            |               | string     | The component name |

#### <font id="API" />getComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: U | undefined</font>{#getComponent}

Gets a component of the specified type on this node.

[Using component constructor]

**Input Parameters**

| **_Parameter_**      | **_Required_** | **_Default_** | **_Type_**                | **_Description_**         |
| -------------------- | -------------- | ------------- | ------------------------- | ------------------------- |
| componentConstructor | Yes            |               | new (...args: any[]) => U | The component constructor |

#### <font id="API" />getComponentPerformance(<font id="Type">componentName: string</font>)<font id="Type">: IBasePerformanceData | null</font>{#getComponentPerformanceName}

Gets the performance data for a specified component on this node.

[Using component name]

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**  |
| --------------- | -------------- | ------------- | ---------- | ------------------ |
| componentName   | Yes            |               | string     | The component name |

#### <font id="API" />getComponentPerformance<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: IBasePerformanceData | null</font>{#getComponentPerformance}

Gets the performance data for a specified component on this node.

[Using component constructor]

**Input Parameters**

| **_Parameter_**      | **_Required_** | **_Default_** | **_Type_**                | **_Description_**         |
| -------------------- | -------------- | ------------- | ------------------------- | ------------------------- |
| componentConstructor | Yes            |               | new (...args: any[]) => U | The component constructor |

#### <font id="API" />getComponents()<font id="Type">: Map‹string, Component‹T››</font>{#getComponents}

Gets all components on this node.

#### <font id="API" />removeComponent(<font id="Type">componentName: string</font>)<font id="Type">: boolean</font>{#removeComponentnName}

Removes a component of the specified type from the node.

[Using component name]

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**  |
| --------------- | -------------- | ------------- | ---------- | ------------------ |
| componentName   | Yes            |               | string     | The component name |

#### <font id="API" />removeComponent<font id="Type">‹U extends Component‹T››</font>(<font id="Type">componentConstructor: new (...args: any[]) => U</font>)<font id="Type">: boolean</font>{#removeComponent}

Removes a component of the specified type from the node.

[Using component constructor]

**Input Parameters**

| **_Parameter_**      | **_Required_** | **_Default_** | **_Type_**                | **_Description_**         |
| -------------------- | -------------- | ------------- | ------------------------- | ------------------------- |
| componentConstructor | Yes            |               | new (...args: any[]) => U | The component constructor |

#### <font id="API" />removeComponentAll()<font id="Type">: void</font>{#removeComponentAll}

Removes all components from the node.

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

Removes the node and all its components, and cleans up related resources.

## Functions

#### <font id="API" />find<font id="Type">‹U = any›</font>(<font id="Type">entityOrUUID:U</font>)<font id="Type">: EntityNode‹U› | undefined</font>{#find}

Gets a registered node instance from the global registry by entity or UUID.

- Priority: entity > uuid

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_**            |
| --------------- | -------------- | ------------- | ---------- | ---------------------------- |
| entityOrUUID    | Yes            |               | U          | The game entity or node UUID |
