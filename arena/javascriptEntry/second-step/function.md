
在上一节中，我们学习了`循环`语句，可以只运行一次程序，就能同时输出多种不同的中奖结果的情况。

问题来了，我这里现在有3台抽奖机，每个抽奖机处理逻辑是一样的，但是中奖数值不一样，该怎么办呢？

欸，聪明的你一定想到了，我重复写三次代码，然后改变中奖概率不就好了吗？ 嗯，确实如此。

::: details 点击聪明的你实现过程
```javascript
let guessNum = 10; // 中奖数值

for (let i = 1; i <= 15; i++) { 
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
} 

guessNum = 30; // 中奖数值

for (let i = 1; i <= 15; i++) { 
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
} 


guessNum = 65; // 中奖数值

for (let i = 1; i <= 15; i++) { 
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
} 
```
::: 

哇塞，这代码好长！但是重复代码非常多，能不能减少重复代码呢？

这里就可以运用到`函数`啦！

---

# 认识函数

在JavaScript中，函数是一段可以重复使用的代码块，用于执行特定任务。函数可以接受输入（称为参数），并返回输出（称为返回值）。

## 数据类型

1. **Object**：js语言中更复杂的数据结构，如数组、函数、日期等都属于对象类型。
   ```javascript
   let func = function functionName() {} 
   ```

2. **Undefined**：当一个变量被声明了但没有被赋值时，它的值是`undefined`。
   ```javascript
   let something;
   console.log(something); // 输出：undefined
   ```
   
## 函数的基本语法

JavaScript函数使用`function`关键字声明，后跟函数名和圆括号（可能包含参数），以及花括号内的函数体。

```javascript
function functionName(parameters) {
  // 函数体
  return result; // 可选返回值
}
```
## 调用函数

一旦函数被定义，你就可以通过函数名和圆括号（可包含参数）来调用它。


```javascript
function sayHello(name) {
  return "你好, " + name + "!";
}

console.log(sayHello("吉吉喵")); // 输出: 你好, 吉吉喵!
console.log(sayHello("美术喵")); // 输出: 你好, 美术喵!
console.log(sayHello("搬砖喵")); // 输出: 你好, 搬砖喵!
```

![](/QQ20240924-153825.png)


## 函数的参数

函数可以定义任意数量的参数，调用时也可以传递任意数量的实际参数。

JavaScript中的参数是可选的。

```javascript
function sum(a, b) {
  return a + b;
}

function sayHello() {
  console.log("Hello!");
  // 如果没有return语句，函数将返回 undefined。
}

console.log(sum(1, 2)); // 输出: 3
console.log(sum(1, 2, 3)); // 输出: 3，忽略多余的参数

sayHello() // 输出: Hello!
console.log(sayHello()); // 函数内部输出: Hello!，但这里输出 undefined
```

![](/QQ20240924-154740.png)





## 匿名函数

没有名称的函数称为匿名函数。它们经常作为参数传递给其他函数（如回调函数）或直接赋值给变量。

```javascript
let greet = function(name) {
  return "你好, " + name + "!";
};

console.log(greet("文档喵")); // 输出: 你好, 文档喵!
console.log(greet("课程喵")); // 输出: 你好, 课程喵!
console.log(greet("鱼鱼喵")); // 输出: 你好, 鱼鱼喵!
```

![](/QQ20240924-153950.png)


## 箭头函数

箭头函数提供了一种更简洁的函数书写方式，特别适用于非方法函数。

```javascript
let sayHelloArrow = (name) => {
   return `你好, ${name}!`;
};

//或更简洁写法
let sayHelloArrow2 = name => `你好, ${name}!`;

console.log(sayHelloArrow("吉吉喵")); // 输出: 你好, 吉吉喵!
console.log(sayHelloArrow2("美术喵")); // 输出: 你好, 美术喵!
```



## 课后练习

小朋友，根据学到的`函数`知识，完成开头留下的问题吧！

> 抽奖程序：我这里现在有3台抽奖机，每个抽奖机处理逻辑是一样的，但是中奖数值不一样，该怎么办呢？

::: details 点击查看参考答案

```javascript{22-24}
// 定义一个抽奖函数，执行逻辑都一样的，只不过中奖数值不一样。
function prizeDraw(guessNum) { // [!code highlight]
    for (let i = 1; i <= 15; i++) {
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
    }
} // [!code highlight]

prizeDraw(10) // 普通抽奖机 抽到的数大于10即中奖  
prizeDraw(30) // 上等抽奖机 抽到的数大于30即中奖  
prizeDraw(65) // 极品抽奖机 抽到的数大于65即中奖  
```

它实现的效果和开头给的那串长长的代码一样的哦！ 代码是不是减少了很多？
::: 


