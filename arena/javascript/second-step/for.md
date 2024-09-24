

在上一章节中，我们学习了`变量`和`条件判断`的基本知识，但在实际制作游戏过程中还是远远不够的，会遇到很多复杂情况。

在上一章节的抽奖游戏中，每次运行程序只能输出一次中奖结果。但如果是多个人同时抽奖，就得运行很多次程序，会非常麻烦。

有没有办法只运行一次，在中奖数值不变情况下，输出多个中奖结果呢？当然有！

接下来，我们将会学到`循环`的基础知识，让只运行一次程序就能输出多次中奖结果的情况。

---
# 认识循环

在JavaScript中，循环是一种重复执行代码块直到满足特定条件才停止的结构。

JavaScript提供了几种不同的循环方式，主要包括`for`循环、`while`循环等。以下是每种循环的教程。


## 1. for 循环

`for`循环是最常用的循环结构之一，它包含三个主要部分：初始化表达式、条件表达式和更新表达式（也称为迭代语句），它们用`;`分隔。


```javascript
for (初始化表达式; 条件表达式; 更新表达式) {
    // 循环体
}
```

- **初始化表达式**：在循环开始前执行一次，用于设置循环的初始条件。
- **条件表达式**：在每次循环开始前评估。如果条件为真（true），则执行循环体；如果为假（false），则退出循环。
- **更新表达式**：在每次循环体执行完毕后执行，用于更新循环变量。

**示例**：打印数字1到5

```javascript
// 先定义一个变量i，初始值是 1
// 当循环体执行时，i的值会加1，直到i的值大于等于5，循环结束。
for (let i = 1; i <= 5; i++) {
    console.log("数字：" + i);
}
```
![](/QQ20240924-134657.png)

我们来分析一下他的运作过程吧。
- 初始化表达式：`let i = 1`
- 条件表达式：`i <= 5 `
- 更新表达式：`i++`

也就是说，初始值`i`是1，每次循环时，`i`会加1，当`i`小于等于5时，会执行循环体。

循环过程：
- 开始循环
- 第一次执行时：`i=1`
- 第二次执行时：`i=2`
- 第三次执行时：`i=3`
- 第四次执行时：`i=4`
- 第五次执行时：`i=5`
- 当 `i` 大于等于5，循环结束。



## 2. While 循环

`while`循环在指定的条件为真时重复执行代码块。条件在每次循环开始前评估。

```javascript
while (条件表达式) {
    // 循环体
}
```

- **条件表达式**：在每次循环开始前执行一次。如果条件为真，则执行循环体；如果为假，则退出循环。


**示例**：使用`while`循环打印数字1到5

```javascript
// 先定义一个变量i，初始值是 1
// 当循环体执行时，i的值会加1，直到i的值大于等于5，循环结束。
let i = 1;
while (i <= 5) {
    console.log("数字：" + i);
    i++;
}
```
![](/QQ20240924-141353.png)
::: danger
和`for`语句不一样的是，`while`语句没有`初始化表达式`和`更新表达式`。你需要在循环体中或外部写更新表达式，例如`i++`。
这表示每次循环，变量`i`加1，当`i>=5`，循环结束。

否则会导致死循环，程序会无限的运行下去。 然后js程序可能会报错`Error: Script failed to terminate` 哦
:::


### 总结

- `for` 循环最适合在知道需要执行循环的确切次数时使用。
- `while` 循环在不确定循环次数，但有一个明确的停止条件时使用。

## 课后练习

小朋友，根据学到的循环知识，完成开头留下的问题吧！

> 抽奖程序：有没有办法只运行一次程序，在中奖数值不变情况下，同时输出15个中奖结果呢？


### 使用`for`语句
::: details 点击查看参考答案

```javascript
let guessNum = 10; // 中奖数值

for (let i = 1; i <= 15; i++) { // [!code highlight]
    let randomNum = Math.floor(Math.random() * 101);
    if (guessNum >= randomNum) {
        console.log('运气差点，生成的数字是' + randomNum);
    } else {
        let diff = randomNum - guessNum;
        if (diff > 80) {
            console.log('运气超级爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 40) {
            console.log('运气爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 10) {
            console.log('运气还行，你中奖啦！生成的数字是' + randomNum);
        } else {
            console.log('厉害！刚刚过线，你中奖啦！生成的数字是' + randomNum);
        }
    }
} // [!code highlight]
```

![](/QQ20240924-142739.png)

::: 

### 使用`while`语句

::: details 点击查看参考答案

```javascript
let guessNum = 10; // 中奖数值

let i = 1; // [!code highlight]
while (i <= 15) { // [!code highlight]
    let randomNum = Math.floor(Math.random() * 101);
    if (guessNum >= randomNum) {
        console.log('运气差点，生成的数字是' + randomNum);
    } else {
        let diff = randomNum - guessNum;
        if (diff > 80) {
            console.log('运气超级爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 40) {
            console.log('运气爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 10) {
            console.log('运气还行，你中奖啦！生成的数字是' + randomNum);
        } else {
            console.log('厉害！刚刚过线，你中奖啦！生成的数字是' + randomNum);
        }
    }
    i++; // [!code highlight]
} // [!code highlight]
```

![](/QQ20240924-143428.png)

::: 