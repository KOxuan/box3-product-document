<script setup>
import '/style.css'
</script>

# Constructor

#### <font id="API" />NodeSystem<font id="Type">‹T = any›</font>()<font id="Type">: NodeSystem</font>{#NodeSystem}

Instantiates a node system class.

**Return Value**

| **Type**   | **Description**       |
| ---------- | --------------------- |
| NodeSystem | The node system class |

## Properties

#### <font id="API" />uuid<font id="Type">: string</font>{#uuid}

Gets the UUID of the system.

---

#### <font id="API" /><font id="ReadOnly" >Read-only</font>entities<font id="Type">: node‹T›[]</font>{#entities}

Gets the list of extended nodes for this system.

---

#### <font id="API" />enable<font id="Type">: boolean</font>{#enable}

The enabled state of this system.

## Methods

#### <font id="API" />destroy()<font id="Type">: void</font>{#destroy}

Removes the current system instance.

This will execute the system's `onDisable` and `onDestroy` methods.

---

#### <font id="API" />onEntityNodeAdded(<font id="Type">entityNode: EntityNode</font>)<font id="Type">: void</font>{#onEntityNodeAdded}

Called when an entity node is successfully added to the system.

You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

---

#### <font id="API" />onEntityNodeRemoved(<font id="Type">entityNode: EntityNode</font>)<font id="Type">: void</font>{#onEntityNodeRemoved}

Called when an entity node is successfully removed from the system.

You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

---

#### <font id="API" />onLoad()<font id="Type">: void</font>{#onLoad}

The system initialization function, called before the system is registered in the registry.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

---

#### <font id="API" />update(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#update}

If the system is enabled, this is called every frame after all components' `update`.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

**Parameters**

| **Type**  | **Description**                                            |
| --------- | ---------------------------------------------------------- |
| deltaTime | The time difference since the last update, in milliseconds |

---

#### <font id="API" />postUpdate(<font id="Type">deltaTime: number</font>)<font id="Type">: void</font>{#postUpdate}

If the system is enabled, this is called every frame after all components' `lateUpdate`.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

**Parameters**

| **Type**  | **Description**                                            |
| --------- | ---------------------------------------------------------- |
| deltaTime | The time difference since the last update, in milliseconds |

---

#### <font id="API" />onEnable()<font id="Type">: void</font>{#onEnable}

Called when the system is enabled, triggered when the system's `enable` property changes from `false` to `true`.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

---

#### <font id="API" />onDisable()<font id="Type">: void</font>{#onDisable}

Called when the system is disabled, triggered when the system's `enable` property changes from `true` to `false`.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.

---

#### <font id="API" />onDestroy()<font id="Type">: void</font>{#onDestroy}

Called when the system is destroyed, this is the last lifecycle method before the system is completely cleaned up.

This is a lifecycle method; the parent class may not have an implementation. You can only call the parent class's implementation within this method; you cannot call this method directly elsewhere.
