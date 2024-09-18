# 认识条件判断与数据类型（二）

## 数据类型（二）

1. **Boolean**：表示真值（`true`）或假值（`false`）。
   ```javascript
   let isLoggedIn = false;
   let isFly = true;
   ```

比较操作符用于比较两个值，并返回布尔值（`true` 或 `false`）。

- **等于 (`==`)**: 检查值是否相等，不检查类型。
- **严格等于 (`===`)**: 检查值和类型是否都相等。
- **不等于 (`!=`)**: 检查值是否不相等，不检查类型。
- **严格不等于 (`!==`)**: 检查值和类型是否都不相等。
- **大于 (`>`)**, **小于 (`<`)**, **大于等于 (`>=`)**, **小于等于 (`<=`)**: 用于数值比较。

```javascript
// 饥饿值：7
let hungerLevel = 7;

// 如果饥饿值等于7
console.log(hungerLevel == 7); // true

// 如果饥饿值等于10
console.log(hungerLevel == 10); // false  

// 如果饥饿值不等于10
console.log(hungerLevel != 10); // true   

// 如果饥饿值大于等于8
console.log(hungerLevel >= 8); // false   

// 如果饥饿值小于8
console.log(hungerLevel < 8); // true
```


## if 语句
`if` 语句是 JavaScript 中最基本的选择结构。它的工作原理很简单：如果某个条件是真的，就执行一段代码。
```javascript
let hungerLevel = 7;
if (hungerLevel > 5) {
    console.log('我饿了，吃一片饼干吧！');
}
```
在这个例子中，如果 `hungerLevel` 大于 5，程序就会输出「我饿了，吃一片饼干吧！」

![](/QQ20240918-174943.png)

小朋友，你试试调整 `hungerLevel` 的值，可以是 1 到 10，看看输出会有什么变化。

如果<=5，他就不会输出，这个时候千万不要以为是程序出BUG了哦！继续往下看哦！

## if-else 语句
`if-else` 语句在 `if` 语句的基础上增加了一个选择：如果条件是真的，执行 `if` 后面的代码；如果条件是假的，执行 `else` 后面的代码。
```javascript
let hungerLevel = 7;
if (hungerLevel > 5) {
    console.log('我饿了，吃一片饼干吧！');
} else {
    console.log('我不太饿，还不想吃。');
}
```
这里，如果 `hungerLevel` 大于 5，程序会输出「我饿了，吃一片饼干吧！」；否则，输出「我不太饿，还不想吃。」


## else if 语句
有时候，我们面临的选择不止两种。这时候，`else if` 语句就派上用场了。它允许我们检查多个条件，并针对每个条件执行不同的代码块。
```javascript
let hungerLevel = 7;
if (hungerLevel == 10) {
    console.log('我非常非常饿，吃三片饼干吧！');
} else if (hungerLevel > 8) {
    console.log('我非常饿，吃两片饼干吧！');
} else if (hungerLevel > 5) {
    console.log('我有点饿，吃一片饼干吧！');
} else {
    console.log('我不饿，不吃饼干。');
}
```
在这个例子中，程序会根据 `hungerLevel` 的不同值输出不同的结果。

小朋友，你试试调整 `hungerLevel` 的值，可以是 1 到 10，看看输出会有什么变化。



## 课后练习
小朋友，试试模仿上方的代码，编写一个简单的程序吧！
> 当年龄小于18岁，控制台输出：你是未成年人。
>
> 当年龄大于等于60岁，控制台输出：你是老年人。
>
> 以上都不满足，控制台输出：你是成年人。
>
最后，输入你的年龄，看看效果吧！

参考答案：

![](/QQ20240918-173445.png)
