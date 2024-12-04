# S-📈游戏数据存储

- **GameDataStorage** 代表数据存储空间的类，能控制单地图或组地图数据库，能够以键值对的形式存储数据，提供方法处理空间内键值对相关的操作。
- 可以通过全局对象 `storage` 来使用它。

## 类

```typescript
declare const storage: GameStorage;
declare class GameStorage {
    //...
}
```

## 属性
- [`key`](./getSpace#key) : 获取数据存储空间名称

## 方法
- [`getDataStorage`](./getSpace#getDataStorage) : 【单地图】连接指定数据存储空间，如果不存在则创建一个新的空间。
- [`getGroupStorage`](./getSpace#getGroupStorage) :【主副图】连接指定数据存储空间，如果不存在则创建一个新的空间。
- [`increment`](./setSpace#increment) : 原子方式递增给定键的值，当对应键不存在时视作设置值，对应值不为数字时报错。
- [`set`](./setSpace#set) : 传入指定键与值，无论该键是否存在，均将值设置到此键上
- [`get`](./setSpace#get) : 获取指定键对应的值
- [`update`](./setSpace#update) : 更新指定键对应的值
- [`remove`](./setSpace#remove) : 删除指定键值对
- [`list`](./setSpace#list) : 批量获取键值对
- [`destroy`](./setSpace#destroy) : 删除该数据空间

## 接口
- [`JSONValue`](./setSpace#JSONValue) : 允许存储的值
- [`ReturnValue`](./setSpace#ReturnValue) : 表示一个键值对的内容。它可以是一个对象或者 `undefined`
- [`ListPageOptions`](./setSpace#ListPageOptions) : 批量获取键值对的配置项 
- [`QueryList`](./setSpace#QueryList) : 键值对查询列表，用于批量获取键值对，通过 {GameDataStorage.list} 方法返回