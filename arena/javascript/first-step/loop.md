# 循环：流程控制（二）

「年年岁岁花相似，岁岁年年人不同。」

寒来暑往，秋收冬藏。一年又一年过去，事物似乎总是按照预定的轨道一遍又一遍地循环。

在编写代码的过程中，循环也是一个非常重要能力。

假设你想输出1000次`Hello world`，写一千行的代码显然不大现实。

这个时候，就需要循环出手了。

## 什么是循环？
循环就像一个重复的命令，让计算机一遍又一遍地做同一件事情，直到达到某个条件才停下来。这样，我们就可以用很少的代码，完成很多重复的工作。

## while和do-while循环
`while`循环就像一个好奇的小孩子，它会一直问：“这个条件还是真的吗？”如果是，它就继续做事情；如果不是，它就停下来。
```javascript
let i = 0; // i是一个计数器，开始时为0
while (i < 5) { // 当i小于5时，执行下面的代码
  console.log(i); // 打印出i的值
  i++; // i加1，这样i就会慢慢变大
}
```
`do-while`循环有点像`while`循环的固执版本。它说：“不管怎样，我先做一次，然后再看看条件是不是真的。”
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## for循环
`for`循环是JavaScript中最常用的循环方式。它把初始化计数器、检查条件和更新计数器这些都放在了一起。
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
这里的意思是：先设置`i`为0，然后每次循环结束时`i`加1，直到`i`不小于5为止。

## for-in和for-of循环
`for-in`循环是用来遍历对象的属性的，就像你有一个盒子，你想看看里面都有什么。
```javascript
const person = { firstName: "John", lastName: "Doe" };
for (let key in person) {
  console.log(key, person[key]);
}
```
`for-of`循环用来遍历数组的值，就像你有一串珠子，你想一个一个地看它们。
```javascript
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
```

## break和continue语句
在JavaScript的循环中，我们有时需要更精细地控制循环的流程。这时，`break`和`continue`这两个语句就非常有用。

### break语句
想象一下，你在参加一个马拉松比赛，突然遇到了一个紧急情况，你需要立即停下来。在JavaScript中，`break`语句就是这样一种“紧急停止”的机制。当程序执行到`break`时，它会立即退出当前所在的循环。
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // 当i等于5时，退出循环
  }
  console.log(i); // 只会打印0到4
}
```

### continue语句
继续上面的马拉松比喻，`continue`语句就像是你决定跳过某个补给站，继续跑向下一个。在JavaScript中，当程序执行到`continue`时，它会跳过当前循环的剩余部分，直接进入下一次循环。
```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 如果i是偶数，跳过本次循环
  }
  console.log(i); // 只会打印奇数1, 3, 5, 7, 9
}
```

### 使用场景
`break`和`continue`语句通常用于以下情况：
- **break**：当你需要在满足某个条件时立即退出循环，或者从多层嵌套循环中退出到外层循环时。
- **continue**：当你需要跳过某些特定的迭代，继续进行下一次迭代时。

### 注意事项
虽然`break`和`continue`非常有用，但它们也会使代码的流程控制变得复杂。因此，在使用时应该谨慎，并确保代码的可读性和维护性。

总结一下，`break`和`continue`是JavaScript中控制循环流程的重要工具。`break`用于立即退出循环，而`continue`用于跳过当前循环的剩余部分，进入下一次循环。合理使用这两个语句，可以使你的代码更加灵活和高效。但也要注意，过度使用可能会导致代码难以理解和维护。

---

现在，你已经了解了JavaScript中不同的循环方式，多试几次，你就会发现循环其实很简单，而且非常有用！

记住，多练习，多尝试，你会越来越熟练的！

<p style="opacity:0.5; text-align: right;">声明：使用AI辅助创作</p>
