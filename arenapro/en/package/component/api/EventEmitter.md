<script setup>
import '/style.css'
</script>

# Event Communication Guide

Currently, four types of event messaging mechanisms are supported: global events, node events, custom events, and server-side game world events. The following is a detailed introduction to the usage of these four types of event messages.

### Global Events

````typescript
/**
 * Global event bus instance, supporting custom events by creators.
 *
 * Emitter is a global event management instance used to uniformly manage event triggering and listening throughout the application.
 * It allows registering or removing event listeners through methods like `on`, `once`, `off`, and supports event triggering and notification.
 *
 * Example usage:
 * ```typescript
 * // Register an event listener to print the event text when a 'say' event is received.
 * Emitter.on('say', (text) => {
 *   console.log(text);
 * });
 *
 * // Trigger the 'say' event and pass the event text.
 * Emitter.emit('say', 'Hello, world!');
 * ```
 */
export const Emitter = new EventEmitter();
````

### Node Events

````typescript
/**
 * Each node is equipped with an independent message event emitter, used for event passing and communication between components under that node, without interfering with other nodes.
 *
 * @example
 * ```typescript
 * const node = new EntityNode(world.querySelector("#entityName")!);
 * node.on('say', (text) => {
 *   console.log(text);
 * });
 * ```
 */
export class EntityNode<T = any> extends EventEmitter;
````

### Custom Events

````typescript
/**
 * Event message management, supporting custom events by creators.
 *
 * EventEmitter is an event management class used to manage event triggering and listening in an application.
 * It allows registering or removing event listeners through methods like `on`, `once`, `off`, and supports event triggering and notification.
 *
 * Example usage:
 * ```typescript
 * // Create an event emitter instance
 * const emitter = new EventEmitter();
 *
 * // Register an event listener to print the event text when a 'say' event is received
 * emitter.on('say', (text) => {
 *   console.log(text);
 * });
 *
 * // Trigger the 'say' event and pass the event text
 * emitter.emit('say', 'Hello, world!');
 * ```
 */
export class EventEmitter extends BaseEventEmitter<string>;
````

### Server-side Game World Events

````typescript
/**
 * Instantiation of server-side world game events.
 *
 * GameWorldEvent is a {@link GameWorld} world management related event instance, used to handle events related to the game world.
 * It allows registering or removing event listeners through methods like `on`, `once`, `off`, and supports event triggering and notification.
 *
 * Example usage:
 * ```typescript
 * // Register an event listener to trigger when a player joins the game
 * GameWorldEvent.on(world.onPlayerJoin, ({ entity }) => {
 *   console.log(entity.player.name);
 * });
 * ```
 */
export const GameWorldEvent = new GameEvent<GameEventChannel<any>>(world);
````

---

# Constructor

#### <font id="API" />EventEmitter()<font id="Type">: EventEmitter</font>{#EventEmitter}

Instantiates an event message class.

**Return Value**

| **Type**     | **Description** |
| ------------ | --------------- |
| EventEmitter | Event class     |

# Methods

#### <font id="API" />on(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#on}

Registers an event listener.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_**               | **_Description_** |
| --------------- | -------------- | ------------- | ------------------------ | ----------------- |
| eventName       | Yes            |               | string                   | Event name        |
| callback        | Yes            |               | (...args: any[]) => void | Callback function |
| target          | No             | this          | any                      | Target object     |

#### <font id="API" />once(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#once}

Registers a one-time event listener, which is automatically removed after being triggered.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_**               | **_Description_** |
| --------------- | -------------- | ------------- | ------------------------ | ----------------- |
| eventName       | Yes            |               | string                   | Event name        |
| callback        | Yes            |               | (...args: any[]) => void | Callback function |
| target          | No             | this          | any                      | Target object     |

#### <font id="API" />off(<font id="Type">eventName: string, callback: (...args: any[]) => void, target?: any</font>)<font id="Type">: this</font>{#off}

Removes an event listener.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_**               | **_Description_** |
| --------------- | -------------- | ------------- | ------------------------ | ----------------- |
| eventName       | Yes            |               | string                   | Event name        |
| callback        | Yes            |               | (...args: any[]) => void | Callback function |
| target          | No             | this          | any                      | Target object     |

#### <font id="API" />emit(<font id="Type">eventName: string, ...args: any[]</font>)<font id="Type">: this</font>{#emit}

Triggers an event.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_** |
| --------------- | -------------- | ------------- | ---------- | ----------------- |
| eventName       | Yes            |               | string     | Event name        |
| ...args         | Yes            |               | any[]      | Argument list     |

#### <font id="API" />dispatchEvent(<font id="Type">event: IEvent</font>)<font id="Type">: this</font>{#dispatchEvent}

Dispatches an event object, and all listeners for that event type will be notified.

This method is not available in the `GameEventClass` class.

**Input Parameters**

| **_Parameter_**  | **_Required_** | **_Default_** | **_Type_** | **_Description_**                                                                          |
| ---------------- | -------------- | ------------- | ---------- | ------------------------------------------------------------------------------------------ |
| IEvent.type      | Yes            |               | string     | Event type, used to identify the kind of event                                             |
| IEvent.target    | No             | this          | any        | Event target, optional property, represents the element or object that triggered the event |
| [x: string]: any | No             |               | object     | Other arbitrary values                                                                     |

#### <font id="API" />hasEventListener(<font id="Type">eventName: string</font>)<font id="Type">: boolean</font>{#hasEventListener}

Checks if there are listeners for a specific event.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_** |
| --------------- | -------------- | ------------- | ---------- | ----------------- |
| eventName       | Yes            |               | string     | Event name        |

**Return Value**

| **Type** | **Description**             |
| -------- | --------------------------- |
| boolean  | Whether there are listeners |

#### <font id="API" />removeAll()<font id="Type">: boolean</font>{#removeAll}

Removes all event listeners.

#### <font id="API" />targetOff(<font id="Type">target: any</font>)<font id="Type">: this</font>{#targetOff}

Removes all event listeners for a specified target.

**Input Parameters**

| **_Parameter_** | **_Required_** | **_Default_** | **_Type_** | **_Description_** |
| --------------- | -------------- | ------------- | ---------- | ----------------- |
| target          | Yes            |               | any        | Target object     |
