<script setup>
import '/style.css'
</script>
# 三维向量
```typescript
declare class Vec3 {
    //...
}
```
## 属性

#### <font id="API" />x<font id="Type">: number</font>
> 默认值：0

Vec3的x坐标。

> 定义于 [#L91](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L91)
---


#### <font id="API" />y<font id="Type">: number</font>
> 默认值：0

Vec3的y坐标。

> 定义于 [#L92](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L92)
---


#### <font id="API" />z<font id="Type">: number</font>
> 默认值：0

Vec3的z坐标。

> 定义于 [#L93](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L93)
---


#### <font id="API" />r<font id="Type">: number</font>
> 默认值：0

等同于x，是red红色通道，方便设置颜色时使用。

> 定义于 [#L94](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L94)
---


#### <font id="API" />g<font id="Type">: number</font>
> 默认值：0

等同于y，是green绿色通道，方便设置颜色时使用。

> 定义于 [#L95](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L95)
---


#### <font id="API" />b<font id="Type">: number</font>
> 默认值：0

等同于z，是blue蓝色通道，方便设置颜色时使用。

> 定义于 [#L96](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L96)

## 静态方法

#### <font id="API" />create(<font id="Type">val?:{x:number;y:number;z:number;} | Vec3</font>)<font id="Type">: Vec3</font>

创建并返回一个新的Vec3。如果提供了一个Vec3作为参数，新的Vec3的x、y和z将被设置为给定Vec3的x、y和z。如果没有提供参数，新的Vec3的x、y和z将被设置为0。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| val |  | | {x:number;y:number;z:number;} &#124; Vec3 | xyz坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Vec3 | 三维向量对象 |

> 定义于 [#L98](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L98)

## 方法

#### <font id="API" />copy(<font id="Type">val: Vec3</font>)<font id="Type">: Vec3</font>

复制给定的Vec3的x和y到当前Vec3。

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| val | 是 | | Vec3| 三维坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Vec3 | 三维向量对象 |

> 定义于 [#L97](https://github.com/box3lab/arena_dts/blob/main/ClientAPI.d.ts#L97)

```javascript
let vec1 = Vec3.create({x: 1, y: 2, z: 3});
let vec2 = Vec3.create();
vec2.copy(vec1); // vec2的x、y、z现在都被设置为vec1的x、y、z
```
