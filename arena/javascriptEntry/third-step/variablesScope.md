# 认识常量与作用域

`const`关键字用于声明一个只读的常量。一旦`const`声明的变量被赋值后，它的值就不能被重新赋值（尽管如果它的值是一个对象或数组，对象的属性或数组的元素仍然可以被修改）。

## 使用`const`声明常量

```javascript
// 声明一个常量并初始化
const PI = 3.14159;

// 尝试重新赋值
PI = 3.14; // TypeError: Assignment to constant variable.（分配给常量变量）

// 声明时必须初始化
const MY_CONSTANT; // SyntaxError: Missing initializer in const declaration. (const 声明中缺少初始化器)

// 常量也可以是对象或数组
const PERSON = { name: '吉吉喵', age: 10 };
PERSON.age = 11; // 有效，因为只是修改了对象的属性
PERSON = { name: '美术喵' }; // TypeError: Assignment to constant variable.

const ARRAY = [1, 2, 3];
ARRAY[1] = 20; // 有效，修改了数组的一个元素
ARRAY = [4, 5, 6]; // TypeError: Assignment to constant variable.
```

### 注意事项

1. **必须初始化**：使用`const`声明的变量必须在使用前被初始化（即赋一个初始值）。
2. **块级作用域**：`const`和`let`一样，拥有块级作用域，这意味着它们的作用域仅限于声明它们的块或表达式中。
3. **不可重新赋值**：一旦给`const`变量赋值后，就不能再给它赋新的值。
4. **对象和数组内部的可变性**：虽然你不能重新给`const`声明的对象或数组变量赋值，但你仍然可以修改它们的属性或元素。

### 为什么使用`const`？

- **增强代码的可读性和可维护性**：明确指出哪些值在代码中是不应该被修改的。
- **减少运行时错误**：如果尝试修改一个`const`变量的值，JavaScript会在运行时抛出错误，这有助于早期发现并修复错误。

## 作用域


### 1. 全局作用域

```javascript
// 在全局作用域中声明变量
var globalVar = '我是文档喵';

function testGlobal() {
    console.log(globalVar); // 输出: 我是文档喵
}

testGlobal();
console.log(globalVar); // 输出: 我是文档喵
```

在这个例子中，`globalVar`是在全局作用域中声明的，因此它可以在任何地方被访问，包括函数内部。

### 2. 函数作用域（使用`var`）

```javascript
function testFunctionScope() {
    var localVar = '我是吉吉喵';
    console.log(localVar); // 输出: 我是吉吉喵
}

testFunctionScope();
// console.log(localVar); // 这里会抛出ReferenceError，因为localVar在函数外部不可见
```

在这个例子中，`localVar`是在函数`testFunctionScope`内部声明的，因此它只能在函数内部被访问。

### 3. 块级作用域（使用`let`）

```javascript
function testBlockScope() {
    if (true) {
        let blockScopedVar = '我是板砖喵';
        console.log(blockScopedVar); // 输出: 我是板砖喵
    }
    console.log(blockScopedVar); // 这里会抛出ReferenceError，因为blockScopedVar在块外部不可见
}

testBlockScope();
```

在ES6之前，JavaScript没有块级作用域的概念，但`let`和`const`的引入改变了这一点。在这个例子中，`blockScopedVar`是在一个`if`语句块中声明的，因此它只能在那个块内部被访问。

### 为什么不推荐使用 `var`？

#### 1. 函数作用域而非块级作用域

```javascript
function testVarScope() {
    for (var i = 0; i < 5; i++) {
        // ...
    }
    console.log(i); // 输出: 5，尽管i是在for循环中声明的
}

testVarScope();
```

在这个例子中，尽管`i`是在`for`循环中声明的，但由于`var`具有函数作用域，因此`i`在循环外部仍然是可访问的。这可能会导致意外的行为，特别是在复杂的函数中。

#### 2. 变量提升

```javascript
function testHoisting() {
    console.log(varVar); // 输出: undefined，而不是报错
    var varVar = '我是美术喵';
}

testHoisting();
```

在这个例子中，尽管`varVar`在打印之后才被声明和初始化，但由于变量提升，`varVar`在声明之前就已经被“提升”到了函数顶部，因此打印时不会报错，但会得到`undefined`。这可能会让代码的阅读者感到困惑。

#### 3. 缺乏清晰性

使用`var`声明的变量可能会因为作用域和变量提升而变得难以追踪和理解。特别是在大型或复杂的项目中，这可能会增加调试和维护的难度。

### 结论

为了编写更清晰、更可维护的JavaScript代码，建议优先使用`let`和`const`来声明变量。

它们提供了更清晰的作用域控制和更严格的错误检查，有助于避免一些常见的陷阱和错误。