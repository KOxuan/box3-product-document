# 更多 ES6+ 特性

ES6 (ECMAScript 2015) 及后续版本为 JavaScript 带来了许多强大的新特性。以下是一些在游戏开发中特别有用的功能。

## 模板字面量

模板字面量允许你创建包含嵌入式表达式的字符串。它们使用反引号 (`` ` ``) 而不是单引号或双引号。

```javascript
let playerName = "Elara";
let score = 1500;

// 旧方法
let messageOld = "玩家 " + playerName + " 的分数是 " + score + "。";

// 使用模板字面量
let messageNew = `玩家 ${playerName} 的分数是 ${score}。`;

console.log(messageNew); // 输出: 玩家 Elara 的分数是 1500。
```

## 解构赋值

解构赋值语法是一种可以从数组或对象中提取数据的 JavaScript 表达式。

### 对象解构

```javascript
const player = {
  name: "Kael",
  health: 100,
  mana: 80
};

const { name, health } = player;

console.log(name);     // Kael
console.log(health);   // 100
```

### 数组解构

```javascript
const coordinates = [10, 20, 30];

const [x, y, z] = coordinates;

console.log(x); // 10
console.log(y); // 20
```

## 展开/剩余运算符 (`...`)

这个运算符根据其使用场景，可以有不同的功能。

### 展开语法

展开语法可以将一个可迭代对象（如数组或对象）“展开”到需要多个参数或元素的地方。

```javascript
// 合并数组
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 复制对象
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100
```

掌握这些现代 JavaScript 特性可以让你编写出更简洁、更具表现力的代码。
