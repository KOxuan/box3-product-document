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

::: info 方块旋转码
  方块名称和方块id都是描述某位置方块的方法  
  方块名称只包含方块的类型  
  id包含方块的旋转码，在[setVoxel](#setVoxel)方法不填`rotation`参数的情况下修改方块旋转码  
  方块正面面朝北方（`-z`方向）的旋转码数值上和将方块名称使用[id](#id)方法转换后（即方块为初始旋转状态的id，也可说为不带旋转码）相同  
  方块正面面朝北方（`-z`方向）的旋转码为基准，取此时的旋转码为`voxel`，每顺时针转90°，方块`voxel`加`16384`（`0x4000`）  
  我们以泥土（方块名称为`'dirt'`，id为`125`）为例：

  - 面向北方（`-z`方向）的旋转码为`125 + 0` = `125`
  - 面向东方（`+x`方向）的旋转码为`125 + 16384 * 1` = `16509`
  - 面向南方（`+z`方向）的旋转码为`125 + 16384 * 2` = `32893`
  - 面向西方（`-x`方向）的旋转码为`125 + 16384 * 3` = `49277`

  若只是想判断方块的类型，应使用[name](#name)将方块id转换成方块名称或者将方块id取模`16384`（`0x4000`）后再判断  
  这不只是为了规范和便于维护，因为方块的id会包含旋转码，旋转码会使直接判断方块id相等的方法无效（除非你把四个方向都考虑到）！
:::


## 属性

#### <font id="API" /><font id="ReadOnly">只读</font>shape<font id="Type">: GameVector3     </font>{#shape}
> 默认值：当前地图尺寸

当前世界地形最大尺寸。

> 定义于 [#L10385](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10385)

---


#### <font id="API" /><font id="ReadOnly">只读</font>VoxelTypes<font id="Type">: string[] </font>{#VoxelTypes}
> 默认值：方块数组

返回包含所有方块名称的数组。

> 定义于 [#L10390](https://github.com/box3lab/arena_dts/blob/main/GameAPI.d.ts#L10390)
## 方法

### 方块ID<互转>方块名称

#### <font id="API" />id(<font id="Type">name: string</font>)<font id="Type">: number</font>{#id}
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


#### <font id="API" />name(<font id="Type">id:number</font>)<font id="Type">: string</font>{#name}
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

#### <font id="API" />setVoxel(<font id="Type">x:number,y:number,z:number,voxel:number | string,rotation?:number | string</font>)<font id="Type">: number</font>{#setVoxel}
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

::: warning
`voxel`参数中包含的方块旋转码无效，实际旋转只和`rotation`参数有关
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


#### <font id="API" />setVoxelId(<font id="Type">x:number,y:number,z:number,voxel:number</font>)<font id="Type">: number</font>{#setVoxelId}
使用方块ID，直接在指定的坐标位置放置方块。
::: info
`voxel`参数包含的方块旋转码有效
:::

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

#### <font id="API" />getVoxel(<font id="Type">x:number,y:number,z:number</font>)<font id="Type">: number</font>{#getVoxel}
获取指定位置的方块ID
::: warning
  用此方法获取的id不带旋转码
:::
::: tip
  由于其不带旋转码的特性，可以直接用此方法判断方块的id来判断的种类，而不是用[name](#name)方法转换成方块名称后再比较
:::

**输入参数**

| _**参数**_ | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| x | _是_ | | number | 获取位置的x坐标 |
| y | _是_ | | number | 获取位置的y坐标 |
| z | _是_ | | number | 获取位置的z坐标 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 返回指定位置的方块id，**不包含方块的旋转码** |

> 定义于 [[待补充]](#)
---

#### <font id="API" />getVoxelId(<font id="Type">x:number,y:number,z:number</font>)<font id="Type">: number</font>{#getVoxelId}
直接获取指定位置的方块ID。
::: info
用此方法获取的id带旋转码
:::

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


#### <font id="API" />getVoxelRotation(<font id="Type">x:number,y:number,z:number</font>)<font id="Type">: number</font>{#getVoxelRotation}
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


## 方块id和名称对照表
| **方块id** | **名称** |
| --- | --- |
| 0 | air |
| 3 | add |
| 5 | subtract |
| 7 | multiply |
| 9 | divide |
| 11 | equal |
| 13 | exclamation_mark |
| 15 | question_mark |
| 17 | zero |
| 19 | one |
| 21 | two |
| 23 | three |
| 25 | four |
| 27 | five |
| 29 | six |
| 31 | seven |
| 33 | eight |
| 35 | nine |
| 37 | A |
| 39 | B |
| 41 | C |
| 43 | D |
| 45 | E |
| 47 | F |
| 49 | G |
| 51 | H |
| 53 | I |
| 55 | J |
| 57 | K |
| 59 | L |
| 61 | M |
| 63 | N |
| 65 | O |
| 67 | P |
| 69 | Q |
| 71 | R |
| 73 | S |
| 75 | T |
| 77 | U |
| 79 | V |
| 81 | W |
| 83 | X |
| 85 | Y |
| 87 | Z |
| 89 | cadet_blue |
| 91 | sky_blue |
| 93 | powder_blue |
| 95 | dark_gray |
| 97 | light_gray |
| 99 | olive_green |
| 101 | yellow_green |
| 103 | pale_green |
| 105 | red |
| 107 | dark_red |
| 109 | brick_red |
| 111 | medium_gray |
| 113 | dark_slate_blue |
| 115 | pink |
| 117 | sakura_pink |
| 119 | orange |
| 121 | lemon |
| 123 | stained_glass |
| 125 | dirt |
| 127 | grass |
| 129 | stone |
| 131 | green_leaf |
| 133 | acacia |
| 135 | sand |
| 137 | plank_01 |
| 139 | plank_02 |
| 141 | plank_03 |
| 143 | plank_04 |
| 145 | ice_brick |
| 147 | light_grey_stone_brick |
| 149 | grey_stone_brick |
| 151 | gold_trim_brick |
| 153 | red_brick |
| 155 | quartz_brick |
| 157 | lantern_01 |
| 159 | lantern_02 |
| 160 | window |
| 162 | cross_window |
| 164 | geometric_window_01 |
| 166 | geometric_window_02 |
| 169 | snow |
| 170 | glass |
| 172 | color_glass |
| 175 | black |
| 177 | white |
| 179 | wooden_box |
| 181 | board_01 |
| 183 | board_02 |
| 185 | stripe_01 |
| 187 | stripe_02 |
| 189 | stripe_03 |
| 191 | stripe_04 |
| 193 | stripe_05 |
| 195 | carpet_01 |
| 197 | carpet_02 |
| 199 | carpet_03 |
| 201 | carpet_04 |
| 203 | carpet_05 |
| 205 | carpet_06 |
| 207 | carpet_07 |
| 209 | palace_eaves_01 |
| 211 | palace_eaves_02 |
| 213 | palace_eaves_03 |
| 215 | palace_eaves_04 |
| 217 | palace_eaves_05 |
| 219 | palace_eaves_06 |
| 221 | palace_eaves_07 |
| 223 | palace_eaves_08 |
| 225 | roof_red |
| 227 | roof_purple |
| 229 | roof_green |
| 231 | roof_blue_04 |
| 233 | roof_yellow |
| 235 | carpet_08 |
| 237 | carpet_09 |
| 239 | carpet_10 |
| 241 | carpet_11 |
| 243 | carpet_12 |
| 245 | carpet_13 |
| 247 | stainless_steel |
| 249 | ice_wall |
| 251 | leaf_01 |
| 253 | leaf_02 |
| 255 | palace_roof |
| 257 | wood |
| 259 | red_brick_floor |
| 261 | red_brick_wall |
| 263 | palace_floor |
| 264 | palace_carving |
| 267 | stone_pillar_03 |
| 269 | stone_pillar_04 |
| 271 | stone_pillar_05 |
| 273 | stone_pillar_06 |
| 275 | stone_wall |
| 276 | blue_glass |
| 278 | green_glass |
| 281 | red_light |
| 283 | orange_light |
| 285 | yellow_light |
| 287 | green_light |
| 289 | indigo_light |
| 291 | blue_light |
| 293 | purple |
| 295 | pink_light |
| 297 | mint_green_light |
| 299 | white_light |
| 301 | warm_yellow_light |
| 302 | black_glass |
| 304 | red_glass |
| 307 | palace_lamp |
| 309 | board_03 |
| 311 | board_04 |
| 313 | board_05 |
| 315 | board_06 |
| 317 | dark_grass |
| 319 | greenbelt_L |
| 321 | greenbelt_L1 |
| 323 | stone_brick_01 |
| 325 | stone_brick_02 |
| 327 | dark_stone |
| 329 | dark_brick_00 |
| 331 | dark_brick_01 |
| 333 | dark_brick_02 |
| 335 | stone_wall_01 |
| 337 | pink_cake |
| 339 | macaroon |
| 341 | biscuit |
| 343 | snowland |
| 345 | polar_region |
| 347 | polar_ice |
| 349 | blue_surface_01 |
| 351 | blue_surface_02 |
| 353 | purple_surface_01 |
| 355 | purple_surface_02 |
| 357 | dark_surface |
| 359 | rock |
| 361 | palace_cloud |
| 363 | blue |
| 364 | water |
| 367 | turquoise |
| 369 | dark_orchid |
| 371 | medium_orchid |
| 373 | medium_purple |
| 375 | medium_violet_red |
| 377 | maroon |
| 379 | coffee_gray |
| 381 | peru |
| 383 | dark_salmon |
| 385 | navajo_white |
| 387 | orange_red |
| 389 | medium_yellow |
| 391 | medium_green |
| 393 | sienna |
| 395 | mint_green |
| 397 | medium_spring_green |
| 398 | ice |
| 401 | crane_roof_01 |
| 403 | crane_roof_02 |
| 405 | crane_lantern |
| 407 | roof_grey |
| 408 | palace_window |
| 411 | woodstone_12 |
| 412 | strawberry_juice |
| 414 | lime_juice |
| 416 | blueberry_juice |
| 418 | lemon_juice |
| 420 | grape_juice |
| 422 | orange_juice |
| 424 | milk |
| 426 | soy_sauce |
| 428 | coffee |
| 430 | peach_juice |
| 433 | board0 |
| 435 | board1 |
| 437 | board2 |
| 439 | board3 |
| 441 | board4 |
| 443 | board5 |
| 445 | board6 |
| 447 | board7 |
| 449 | board8 |
| 451 | board9 |
| 453 | board10 |
| 455 | board11 |
| 457 | board12 |
| 459 | board13 |
| 461 | board14 |
| 463 | board15 |
| 465 | lava01 |
| 467 | lava02 |
| 469 | windygrass |
| 471 | conveyor |
| 473 | ledfloor01 |
| 475 | ledfloor02 |
| 477 | yellow_grass |
| 479 | express_box |
| 481 | television |
| 483 | bookshelf |
| 485 | ampersand |
| 487 | asterisk |
| 489 | at |
| 491 | backslash |
| 493 | bracket_close |
| 495 | bracket_open |
| 497 | caret |
| 499 | colon |
| 501 | comma |
| 503 | dollar |
| 505 | greater_than |
| 507 | less_than |
| 509 | paren_open |
| 511 | paren_close |
| 513 | percent |
| 515 | period |
| 517 | pound |
| 519 | quotation_mark |
| 521 | semicolon |
| 523 | slash |
| 525 | tilde |
| 527 | winter_leaf |
| 529 | leaf_03 |
| 531 | leaf_04 |
| 533 | leaf_05 |
| 535 | honeycomb_01 |
| 537 | honeycomb_02 |
| 539 | white_grass |
| 541 | palm |



## 快速建造代码示例
```javascript
/* 在指定位置快速建造一个实心的矩形 */
function cubefill(vox, sx, sy, sz, xsize, ysize, zsize){
  var xend = sx+xsize
  var yend = sy+ysize
  var zend = sz+zsize
  for(var x=sx;x<xend;x++){
    for(var y=sy;y<yend;y++){
      for(var z=sz;z<zend;z++){
        voxels.setVoxel(x,y,z,vox)
      }}}
}

cubefill('stone',64,9,64,10,5,10)   // 调用方法。在{x:64, y:9, z:64} 位置，建造一个长10格，宽5格，高10格的实心矩形
```
---
```javascript
/* 在指定位置快速建造一个空心的矩形 */
function cube(vox, sx, sy, sz, xsize, ysize, zsize){
  var xend = sx+xsize
  var yend = sy+ysize
  var zend = sz+zsize
  for(var x=sx;x<xend;x++){
    for(var y=sy;y<yend;y++){
      for(var z=sz;z<zend;z++){
        if(x===sx || z===sz || x===xend-1 || z===zend-1 ){ //如果方块的位置在边缘
          voxels.setVoxel(x,y,z,vox)
        }
      }}}
}

cube('stone',64,9,64,10,5,10)  // 调用方法。在{x:64, y:9, z:64} 位置，建造一个长10格，宽5格，高10格的空心矩形
```
---
```javascript
/* 在指定位置快速建造一个实心的球体 */
function sphere(vox, cx, cy, cz, radius){
  let xend = cx+radius
  let yend = cy+radius
  let zend = cz+radius
  for(let x=cx-radius;x<=xend;x++){
    for(let y=cy-radius;y<=yend;y++){
      for(let z=cz-radius;z<=zend;z++){
        let dx = x-cx;
        let dy = y-cy;
        let dz = z-cz;
        if(Math.round(Math.sqrt(dx*dx+dy*dy+dz*dz)) <= radius){
          voxels.setVoxel(x,y,z,vox)
        }
      }}}
}

sphere('stone',63,24,63,12) // 调用方法。在{x:63, y:24, z:63} 位置，建造一个半径为12格的实心球体
```
---
```javascript
/* 在指定位置快速建造一个圆柱体 */
function cylinder(vox, cx, cy, cz, radius, height){
  let xend = cx+radius
  let yend = cy+height
  let zend = cz+radius
  for(let x=cx-radius; x<=xend; x++){
    for(let z=cz-radius; z<=zend; z++){
      let dx = x-cx;
      let dz = z-cz;
      if(Math.round(Math.sqrt(dx*dx+dz*dz)) <= radius){
        for(let y=cy; y<yend; y++){
          voxels.setVoxel(x,y,z,vox)
        }
      }
    }}
}

cylinder('stone',63,12,63,10,4)  // 调用方法。在{x:63, y:12, z:63} 位置，建造一个半径10格，高度4格的圆柱体
```
---
```javascript
/* 在指定位置快速建造一个生成楼梯(+x轴方向) */
function stairs(sx, sy, sz, length, thickness){
  let xend = sx + length;
  let zend = sz + thickness;
  let i = 0;
  for(let x=sx; x < xend; x++){
    let yend = sy+i;
    i++;
    for(let y=sy; y<=yend; y++){
      for(let z=sz; z<zend; z++){
        voxels.setVoxel(x,y,z,'stone');
      }}
  }
}

stairs(63,9,63,6,4)  // 调用方法。在{x:63, y:9, z:63} 位置，建造一个高度6格，宽度4格的楼梯
```
---
```javascript
/* 在指定位置快速建造一个生成楼梯(-x轴方向) */
function stairs(sx, sy, sz, length, thickness){
  let xend = sx + length;
  let zend = sz + thickness;
  let i = 0;
  for(let x=xend; x > sx; x--){ // 和前面+x轴方向的范例相比，此处正好相反
    let yend = sy+i;
    i++;
    for(let y=sy; y<=yend; y++){
      for(let z=sz; z<zend; z++){
        voxels.setVoxel(x,y,z,'stone');
      }}
  }
}

stairs(63,9,63,6,4)  // 调用方法。在{x:63, y:9, z:63} 位置，建造一个高度6格，宽度4格的楼梯
```
