<script setup>
import '/style.css'
</script>

# Properties

#### <font id="API" />weight<font id="Type">: number</font> {#weight}

The weight of the component. The smaller the value, the greater the weight. Components are sorted by weight during updates.

Default: 0

#### <font id="API" /><font id="ReadOnly" >Read-only</font>node<font id="Type">: node‹T›</font>{#node}

Gets the extended node associated with this component.

#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

The enabled state of this component.

## Methods

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

Removes the current component instance from the current node.

This will execute the component's `onDisable` and `onDestroy` methods.

#### <font id="API" />onLoad()<font id="Type">: void</font>{#onLoad}

Called when attached to a node or when its node is activated for the first time. `onLoad` is always called before any `start` methods, which can be used to schedule the initialization order of scripts.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

#### <font id="API" />start()<font id="Type">: void</font>{#start}

If the component is enabled for the first time, this is called before all components' `update`. It is typically used for logic that needs to be executed after all components' `onLoad` initializations are complete.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

#### <font id="API" />update(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#update}

If the component is enabled, `update` is called every frame (60 FPS).

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

**Parameters**

| **Type**  | **Description**                                            |
| --------- | ---------------------------------------------------------- |
| deltaTime | The time difference since the last update, in milliseconds |

#### <font id="API" />lateUpdate(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#lateUpdate}

If the component is enabled, `lateUpdate` is called after all components on the node have finished their `update`.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

**Parameters**

| **Type**  | **Description**                                            |
| --------- | ---------------------------------------------------------- |
| deltaTime | The time difference since the last update, in milliseconds |

#### <font id="API" />onEnable()<font id="Type">: void</font>{#onEnable}

Called when this component is enabled and its node is also active.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

#### <font id="API" />onDisable()<font id="Type">: void</font>{#onDisable}

Called when this component is disabled or its node becomes inactive.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

#### <font id="API" />onDestroy()<font id="Type">: void</font>{#onDestroy}

Called when this component is destroyed.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

## Decorator Function

#### <font id="API" />apclass<font id="Type">‹T extends { new (...args: any[]): Component }›</font>(<font id="Type">constructor:T</font>)<font id="Type">: void</font>{#apclass}

The purpose of this decorator function is to ensure that the passed constructor is a subclass of the `Component` class and to automatically register it in `registryComponent`, so we can register components directly using the class name.
