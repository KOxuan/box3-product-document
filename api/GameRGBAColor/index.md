<script setup>
import '/style.css'
</script>
# RGBA颜色

RGBA颜色基于RGB颜色新增alpha通道，用来表示颜色的透明度。

## 构造函数

#### <font id="API" />GameRGBAColor(<font id="Type">r: number, g: number, b: number, a: number</font>)<font id="Type">: GameRGBAColor</font>
实例化一个透明颜色对象

**输入参数**r

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| r | 是 | | number(0-1) | red颜色值 |
| g | 是 | | number(0-1) | green颜色值 |
| b | 是 | | number(0-1) | blue颜色值 |
| a | 是 | | number(0-1) | alpha透明值 |

> 定义于 [#L13342](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L13342)


```javascript
//如果需要使用 RGB 255，可以将颜色值除于255，即可得到0-1的数值。
function rgba(r, g, b, a = 255) {
    return new GameRGBAColor(r / 255, g / 255, b / 255, a / 255);
}

let red = rgba(255, 0, 0, 1)  // return GameRGBAColor(1, 0, 0, 1)
```

## 属性

#### <font id="API" />r<font id="Type">: number</font> 
red颜色值

---


#### <font id="API" />g<font id="Type">: number</font>     
green颜色值

---


#### <font id="API" />b<font id="Type">: number</font>
blue颜色值

---


#### <font id="API" />a<font id="Type">: number</font>
alpha透明值


## 方法

#### <font id="API" />add(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: GameRGBAColor</font>
颜色加法

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />mul(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: GameRGBAColor</font>
颜色相乘

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />clone()<font id="Type">: GameRGBAColor</font>
克隆当前透明颜色

---


#### <font id="API" />copy(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: void</font>
复制透明颜色到新的颜色上

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />div(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: GameRGBAColor</font>
颜色相除

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />equals(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: boolean</font>
两颜色的值在容差内是否近似相等

容差值：0.000001

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />lerp(<font id="Type">v:GameRGBAColor,n: number</font>)<font id="Type">: GameRGBAColor</font>
颜色插值

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 目标透明颜色 |
| n | 是 | | number(0-1) | 插值百分比 |


---


#### <font id="API" />set(<font id="Type">r: number, g: number, b: number, a: number</font>)<font id="Type">: GameRGBAColor</font>
设置颜色值

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| r | 是 | | number(0-1) | red颜色值 |
| g | 是 | | number(0-1) | green颜色值 |
| b | 是 | | number(0-1) | blue颜色值 |
| a | 是 | | number(0-1) | alpha透明值 |


---


#### <font id="API" />sub(<font id="Type">v:GameRGBAColor</font>)<font id="Type">: GameRGBAColor</font>
颜色相减

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| v | 是 | | GameRGBAColor | 透明颜色 |


---


#### <font id="API" />toString()<font id="Type">: string</font>
颜色格式化的字符串

