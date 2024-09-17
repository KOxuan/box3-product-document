<script setup>
import '/style.css'
</script>
# 方块的操作

> 如果你想要地图**在非运行状态**，通过脚本在场景中**快速建造**，可以尝试以下操作：
> 1. 开启编辑器右上角的调试模式(小虫子图标)
> 2. 使用窗口底部的控制台，输入对应的代码。
> 
>即使游戏没有运行，也能使部分代码直接生效。
> 使用控制台执行脚本前，请务必要小心，提前做好项目备份工作。一旦代码生效后，有可能造成无法恢复的情况。
>要操作方块时，建议先使用空白地图对代码进行充分测试，效果满意后，再操作正式的地图。


## 属性

#### <font id="API" /><font id="ReadOnly">只读</font> shape <font id="Type">: GameVector3     </font>{#shape}
> 默认值：当前地图尺寸

当前世界地形最大尺寸。

> 定义于 [#L10385](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10385)

---


#### <font id="API" /><font id="ReadOnly">只读</font> VoxelTypes  <font id="Type">: string[] </font>{#VoxelTypes}
> 默认值：方块数组

返回包含所有方块名称的数组。

> 定义于 [#L10390](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10390)
## 方法

### 方块ID<互转>方块名称

#### <font id="API" />id(<font id="Type">name: string</font>)  <font id="Type">: number</font>{#id}
将方块id转换为方块名称

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| name | _是_ | | string | 方块名称 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 方块ID |

> 定义于 [#L10396](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10396)
---


#### <font id="API" />name(<font id="Type">id:number</font>)  <font id="Type">: string</font>{#name}
将方块名称转换为方块id

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| id | _是_ | | number | 方块ID |

**返回值**

| **类型** | **说明** |
| --- | --- |
| string | 方块名称 |

> 定义于 [#L10402](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10402)
---


### 放置方块

#### <font id="API" />setVoxel(<font id="Type">x:number,y:number,z:number,voxel:number | string,rotation?:number | string</font>)  <font id="Type">: number</font>{#setVoxel}
在指定的坐标位置放置一个方块。

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| x | _是_ | | number | 放置位置的x坐标 |
| y | _是_ | | number | 放置位置的y坐标 |
| z | _是_ | | number | 放置位置的z坐标 |
| voxel | _是_ | | number &#124; string | 方块名称或id |
| rotation | | | number &#124; string | 方块的旋转码(0,1,2,3) |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 新的方块id |

> 定义于 [#L10409](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10409)

::: warning 
若方块名称为'**air**' 或者方块id为**0**，则会打破
:::

::: details 点击查看示例代码
```javascript
// 利用循环批量设置方块
for(let x=0; x<127; x++){
  for(let z=0; z<127; z++){
    for(let y=9; y<127; y++){
      setVoxel(x, y, z, 'air')
    }}}
```
---
```javascript
// 利用循环批量设置方块
for(let x=0; x<127; x++){
  for(let z=0; z<127; z++){
    setVoxel(x, 8, z, 'snow')
  }}
```
---
```javascript
// 利用循环批量设置方块
for(let x=0; x<127; x++){
  for(let z=0; z<127; z++){
    for(let y=9; y<127; y++){
      setVoxel(x, y, z, 'air')
    }}}
```
---
```javascript
// 根据地面的方块铺设，将方块往上增长5格高度的墙。
for(let x=0; x<127; x++){ 
  for(let z=0; z<127; z++){ 
    let vox = getVoxelId(x,9,z);
    if (!vox) continue // 如果没有方块则跳过
    for(let y = 10; y < 10+5; y++){ // 从y=10的位置开始增长5格
      setVoxel(x, y, z, vox);
    }
  }}
```
---
```javascript
// 在指定位置放置字母方块
function voxelAlhpabet(str, x, y, z) {
  str = str.toUpperCase()  // 将字母转换为大写
  for(var i = 0; i < str.length; i++){
    var char = str[i]
    setVoxel(x+i, y, z, char);
  }
}

// 调用方法
voxelAlhpabet('hello world', 63, 20, 63)
```
---
```javascript
// 将字符串与方块名称对应
const char_table = {
  0:'zero',
  1:'one',
  2:'two',
  3:'three',
  4:'four',
  5:'five',
  6:'six',
  7:'seven',
  8:'eight',
  9:'nine',
  '+':'add',
  '-':'subtract',
  '?':'question_mark',
  '!':'exclamation_mark',
  '=':'equal',
  ' ':'black',
  '&':'ampersand',
  '*':'asterisk',
  '@':'at',
  '\\':'backslash',
  ']':'bracket_close',
  '[':'bracket_open',
  '^':'caret',
  ':':'colon',
  ',':'comma',
  '$':'dollar',
  '>':'greater_than',
  '<':'less_than',
  '(':'paren_open',
  ')':'paren_close',
  '%':'percent',
  '.':'period',
  '#':'pound',
  '"':'quotation_mark',
  ';':'semicolon',
  '/':'slash',
  '~':'tilde',
}

// 如果符号在列表内，则放置列表对应名称的方块。否则直接放置字母方块。
function voxelText(str, x, y, z) {
  for (var i=0; i<str.length; i++) {
    var char = str[i].toUpperCase()
    var name = char_table[char]
    if (name) {
      setVoxel(x+i, y, z, name)
    } else {
      setVoxel(x+i, y, z, char)
    }
  }
}

// 在指定的位置，依次生成字符串方块
function voxelTextWall(words, x, y, z) {
  for (var i=0; i<words.length; i++) {
    voxelText(words[i], x, y-i, z)
  }
}

// 调用方法
voxelTextWall(['HELLO BOX3.0','2333'], 64, 13, 64)
```
---
```javascript
// 棋盘方块
const B = {
  '+': id('board1'),
  'T': id('board4'),
  'L': id('board3'),
  '.': id('board2'),
}

// 方块旋转码
const R = {
  N: 0x8000,
  S: 0,
  E: 0xc000,
  W: 0x4000,
};

// 创建棋盘
function createBoard(originX, originY, originZ, size) {
  // 创建size * size的棋盘
  for (let x = 0; x < size; ++x) {
    for (let z = 0; z < size; ++z) {
      // 通常来讲是交点
      let p = B['+'];
      // 以下四个判断用于判断是否是边角
      if (x === 0 && z === 0) { 
        p = B['L'] | R['S'];
      } else if (x === 0 && z === size - 1) {
        p = B['L'] | R['E'];
      } else if (x === size -1 && z === 0) {
        p = B['L'] | R['W'];
      } else if (x === size -1 && z === size - 1) {
        p = B['L'] | R['N'];
        // 以下四个判断用于判断是否是边缘
      } else if (x === 0) {
        p = B['T'] | R['E'];
      } else if (x === size -1) {
        p = B['T'] | R['W'];
      } else if (z === 0) {
        p = B['T'] | R['S'];
      } else if (z === size -1) {
        p = B['T'] | R['N'];
      }
      // 放置方块
      setVoxelId(x + originX, originY, z + originZ, p);
    }
  }
}


// 调用方法: 在{x:32, y:9, z:32} 位置，创建19*19的棋盘
createBoard(32, 9, 32, 19)
```
:::
---


#### <font id="API" />setVoxelId(<font id="Type">x:number,y:number,z:number,voxel:number</font>)  <font id="Type">: number</font>{#setVoxelId}
使用方块ID，直接在指定的坐标位置放置方块。

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| x | _是_ | | number | 放置位置的x坐标 |
| y | _是_ | | number | 放置位置的y坐标 |
| z | _是_ | | number | 放置位置的z坐标 |
| voxel | _是_ | | number | 方块id |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 新的方块id |

> 定义于 [#L10424](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10424)
---


### 获取方块

#### <font id="API" />getVoxelId(<font id="Type">x:number,y:number,z:number</font>)  <font id="Type">: number</font>{#getVoxelId}
直接获取指定位置的方块ID。

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| x | _是_ | | number | 获取位置的x坐标 |
| y | _是_ | | number | 获取位置的y坐标 |
| z | _是_ | | number | 获取位置的z坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 返回指定位置的方块id |

> 定义于 [#L10429](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10429)
---


#### <font id="API" />getVoxelRotation(<font id="Type">x:number,y:number,z:number</font>)  <font id="Type">: number</font>{#getVoxelRotation}
获取某个坐标位置的方块旋转码

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| x | _是_ | | number | 获取位置的x坐标 |
| y | _是_ | | number | 获取位置的y坐标 |
| z | _是_ | | number | 获取位置的z坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 返回指定位置的方块旋转码(0,1,2,3) |

> 定义于 [#L10471](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10471)