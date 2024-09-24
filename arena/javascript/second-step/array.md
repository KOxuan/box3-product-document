
在上一节中，我们学习了`函数`语句，可以应对遇到多个不同等级抽奖机情况，代码依旧不会变得很多。

问题来了，每次中奖情况对应不同人，需要同时输出这个中奖结果（`中奖的数字`，`不同等级的抽奖机`）是属于哪个人的？那该怎么办呢？

这里就可以运用到`数组`啦！

---

# 认识数组

在JavaScript中，数组是一种特殊的对象，用于在单个变量中存储多个值。这些值可以是任何数据类型，包括数字、字符串、对象等，并且它们是有序的。数组提供了丰富的方法来操作集合数据。


## 创建数组

- **使用数组字面量**：这是创建数组最常用和最直观的方式。
```javascript
// 这个数组里面 有苹果，香蕉和樱桃
let fruits = ['Apple', 'Banana', 'Cherry'];
```

- **使用`Array`构造函数**：也可以使用`Array`构造函数来创建数组。
::: tip
这里运用到了`类`的知识点，这里先介绍一下。

你可以学完`类`章节后，再回来看这里。会有不同的收获。 
:::
  ```javascript
  // 指定内容
  let numbers = new Array(1, 2, 3); // [1, 2, 3]

  // 或者指定数组长度，但内容不指定
  let empty = new Array(3); // [undefined, undefined, undefined]
  ```


## 访问数组元素

通过索引（即位置编号，从`0`开始）访问数组中的元素。

读取方式：`数组[索引]`，注意索引要写在`[]`里面。

```javascript
// 这个数组里面 有苹果，香蕉和樱桃
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // 输出: Apple
console.log(fruits[1]); // 输出: Banana
console.log(fruits[2]); // 输出: Cherry

//访问不存在的值
console.log(fruits[3]); // 输出: undefined
```

![](/QQ20240924-150438.png)

## 插入和删除元素

- **添加元素**：可以使用`push()`方法在数组`末尾`添加元素，`unshift()`在数组`开头`添加。
  ```javascript
  let fruits = ['Apple', 'Banana', 'Cherry'];
  fruits.push('Grapes'); 
  console.log(fruits); //  ['Apple', 'Banana', 'Cherry', 'Grapes']

  fruits.unshift('Pomegranate'); 
  console.log(fruits); // ['Pomegranate', 'Apple', 'Banana', 'Cherry', 'Grapes']
  ```

![](/QQ20240924-151015.png)


- **删除元素**：`pop()`方法从数组`末尾`移除一个元素，`shift()`从数组`开头`移除。
  ```javascript
  let fruits = ['Apple', 'Banana', 'Cherry'];
  fruits.pop();
  console.log(fruits); // ['Apple', 'Banana']

  fruits.shift(); 
  console.log(fruits); // ['Banana']
  ```

- **删除指定的元素**：`indexOf()`方法从数组找到第一次出现指定文本的索引，`splice()`方法接受两个参数，第一个参数指定要删除的元素的位置，第二个参数指定要删除的元素个数。
  ```javascript
   let fruits = ['Apple', 'Banana', 'Cherry'];
   let index = fruits.indexOf("Banana");
   if (index !== -1) {
      fruits.splice(index, 1); // ['Apple', 'Cherry']
   }
  ```

![](/QQ20240924-151504.png)

## 遍历数组

- **使用`for`循环**：
  ```javascript
  let fruits = ['Apple', 'Banana', 'Cherry'];
  for (let i = 0; i < fruits.length; i++) { 
    console.log(fruits[i]);
  }
  ```

  这里的`数组.length`是获取数组的长度。在本示例中，`fruits`的数组长度为3

  ![](/QQ20240924-153002.png)

- **使用`forEach`方法**：更现代的遍历方式，直接对数组的每个元素执行函数。

  ```javascript
  let fruits = ['Apple', 'Banana', 'Cherry'];
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });

  // 箭头函数
  fruits.forEach(fruit => console.log(fruit));
  ```
  


