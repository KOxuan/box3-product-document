
# 认识类
在JavaScript中，类（Class）就像是一个“蓝图”或“模板”，它告诉计算机如何创建具有特定结构和功能的对象。想象一下，你有一个玩具工厂的蓝图，这个蓝图描述了如何制作一个机器人玩具，包括它的颜色、形状和它能做什么动作。这个蓝图就像是JavaScript中的一个类。

当我们用JavaScript编写一个类时，我们定义了这个类可以有哪些属性（比如机器人的颜色、名字）和它可以做什么（比如走路、说话的方法）。然后，我们可以使用这个类来制造（创建）很多相同的机器人玩具，但是每个都可以有自己的颜色和名字，这就是对象。

## 定义类

在JavaScript中，你可以使用`class`关键字来定义一个类。类名通常以大写字母开头，以符合常见的命名习惯。

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `你好，我的名字叫${this.name} ，我 ${this.age} 岁了。`;
  }
}
```

- `constructor`是一个特殊的方法，用于创建和初始化对象。当使用`new`关键字创建类的实例时，`constructor`方法会被自动调用。
- 类中的其他方法（如`greet`）通过`this`关键字访问类的实例属性和其他方法。

## 创建类的实例

使用`new`关键字和类名来创建类的实例。

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `你好，我的名字叫${this.name} ，我 ${this.age} 岁了。`;
  }
}

const person1 = new Person('吉吉喵', 10);
console.log(person1.greet()); // 输出: 你好，我的名字叫吉吉喵 ，我 10 岁了。
```

## 类的继承

使用`extends`关键字可以实现类的继承。子类可以继承父类的属性和方法，并可以添加或覆盖自己的属性和方法。

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `你好，我的名字叫${this.name} ，我 ${this.age} 岁了。`;
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // 调用父类的constructor
    this.position = position;
  }

  introduce() {
    return `${this.greet()}, 我是${this.position}.`;
  }
}

const employee1 = new Employee('吉吉喵', 10, '开发者');
console.log(employee1.introduce()); // 输出: 你好，我的名字叫吉吉喵 ，我 10 岁了，我是开发者。
```

- `super`关键字用于调用父类的构造函数和方法。
- 在子类的构造函数中，必须先调用`super`，然后才能使用`this`关键字。

## 方法

方法是定义在类实例上的方法。你需要方法中使用`this`关键字，因为它指向类的实例。

```javascript
class Utility {
  constructor() {}
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

console.log(new Utility().calculateArea(5)); // 输出: 圆的面积
```


### 静态方法

静态方法是定义在类上而不是类的实例上的方法。你不能在静态方法中使用`this`关键字，因为它不指向类的实例。

```javascript
class Utility {
  static calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

console.log(Utility.calculateArea(5)); // 输出: 圆的面积
```

## 属性

属性可以是任何数据类型，包括数字、字符串、布尔值、数组、对象（包括函数对象），甚至是另一个对象。

```javascript
class Person {
  constructor() {
    this.name = "吉吉喵";
    this.age = 10;
  }
}

console.log(new Person().name); // 输出: 吉吉喵
```

### 静态属性

静态属性是定义在类上而不是类的实例上的属性。你不能在静态属性中使用`this`关键字，因为它不指向类的实例。

```javascript
class Utility {
  static PI = 3.14;
}

console.log(Utility.PI); // 输出: 3.14
```

### 访问器属性

访问器属性提供了一种读取或设置对象属性值的特殊方法。这有助于在读取或设置属性时执行额外的逻辑。

```javascript
class User {
  constructor() { }

  get username() {
    return this._username;
  }

  set username(value) {
    // 当设置的值小于6个字符，抛出一个错误
    if (value.length >= 6) {
      this._username = value;
    } else {
      throw new Error('Username must be at least 6 characters long.');
    }
  }
}

const user = new User(); 
user.username = 'hello'; // 输出: Error: Username must be at least 6 characters long.
user.username = 'longerUsername'; // 正确设置
console.log(user.username); // 输出: longerUsername
```
