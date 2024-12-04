# 代码编写规范指南

💻 **在Arena环境中**：

服务端与客户端作为两种独立的**架构体系**，遵循着**不同的编写规范**。请创作者们在编写代码时，**明确区分**这两种架构，确保代码的正确性和可维护性。
- 服务端脚本采用`CommonJS`规范
- 客户端脚本采用`ES6`规范

---

🚀 **在ArenaPro环境中**：

服务端与客户端实现了**统一架构**，为创作者们带来了更加简洁和高效的开发体验。在此架构下，我们**强烈推荐**采用`ESNext`规范进行代码编写。`ESNext`不仅提升了代码的简洁性和可读性，还引入了众多实用的新特性，助力创作者们编写出更加优质、高效的代码。


## 服务端

在Arena中，服务端脚本使用`CommonJS`规范。导入和导出模块使用`CommonJS`语法，客户端脚本 ES6 风格的`import`无法在服务端脚本中使用。

`module.exports` 是 CommonJS 规范中用于导出模块内容的一种方式。当你使用 `module.exports` 时，你可以将对象、函数、类或其他任何类型的值赋给它，然后这些值就可以被其他通过 `require()` 函数导入该模块的JavaScript文件所访问。

### 导出
```javascript
// 定义一个加法函数
function add(a, b) {
  return a + b;
}

// 定义一个减法函数
function subtract(a, b) {
  return a - b;
}

//定义一个变量
var a = 1;

// 使用 module.exports 导出这两个函数和变量
// 注意：我们通常导出一个对象，该对象包含我们想要导出的所有内容
module.exports = {add,subtract,a};

// 或者，如果你只想导出一个函数或值，可以直接这样做：
module.exports = add; // 这样只会导出 add 函数
```
注意几点：

- `module.exports`实际上是一个对象，它默认是一个空对象`{}`。当你向`module.exports`赋值时，你实际上是在替换这个默认对象。
- 如果你使用`module.exports = someValue;`的形式，那么整个模块就只会导出`someValue`。如果你想要导出多个内容，你需要将它们作为属性添加到`module.exports`对象上，如上面的例子所示。
- 还有一个`exports`对象，它是`module.exports`的一个引用（即`exports === module.exports`在初始时是成立的）。但是，如果你重新给`exports`赋值，它就不会再是`module.exports`的引用了，这会导致你导出的内容不是你期望的。因此，推荐直接使用`module.exports`来避免混淆。

### 导入
```javascript
// 导入 moduleA 模块
const moduleA = require('./moduleA.js');

// 现在你可以使用 moduleA 对象来调用 add 和 subtract 函数和变量了
console.log(moduleA.add(5, 3)); // 输出: 8
console.log(moduleA.subtract(5, 3)); // 输出: 2
console.log(moduleA.a); // 输出: 1
```



## 客户端

在Arena中，客户端脚本使用`ES6`模块化规范。导入和导出模块使用`ES6`语法，服务端脚本 Node.js/CommonJS 风格的`require`无法在客户端脚本中使用。

- export default：每个模块只能有一个`export default`导出。它用于导出单个值（如函数、类、对象等），并且这个值在导入时可以使用任意名称。
- export：每个模块可以有多个命名导出。每个导出都可以有自己的名称，并且在导入时需要使用花括号 {} 并指定相同的名称（或者使用 as 关键字进行别名处理）来接收。

### 导出
```javascript
// 定义一个加法函数
function add(a, b) {
    return a + b;
}

// 定义一个减法函数
function subtract(a, b) {
    return a - b;
}

//定义一个变量
var a = 1;

export {add,subtract,a}

// 或者  
  
class MyClass {  
  // 类定义...  
}  
  
export default MyClass;
```

### 导入
```javascript
// 导入 add 函数和a变量，add函数给它指定一个别名sum  
import {add as sum,a} from './moduleA';  

console.log(sum(2, 3)); // 输出: 5  
console.log(a); // 输出: 5  

// 或者导入 MyClass 类
import './moduleA';  

const instance = new MyClass();  
// 假设 MyClass 有一个方法 doSomething()  
instance.doSomething(); // 调用 MyClass 实例的方法
```
