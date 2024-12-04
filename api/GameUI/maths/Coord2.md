<script setup>
import '/style.css'
</script>
# C-图像映射中区域的坐标
```typescript
declare class Coord2 {
    //...
}
```

## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>offset<font id="Type">: [Vec2](/GameUI/maths/Vec2)</font>{#offset}
> 默认值：{}

Coord2 的偏移量。


---


#### <font id="API" /><font id="ReadOnly">只读</font>scale<font id="Type">: [Vec2](/GameUI/maths/Vec2)</font>{#scale}
> 默认值：{}

Coord2 的相对缩放量。




## 静态方法

#### <font id="API" />create(<font id="Type">val?:Coord2</font>)<font id="Type">: Coord2</font>{#create}

按创建并返回一个新的Coord2，该Coord2初始offset和scale为{}。


**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| val |  | | Coord2 | 规定图像映射中区域的坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| Coord2 | 规定图像映射中区域的坐标 |


