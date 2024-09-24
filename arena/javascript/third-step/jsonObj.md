


在上一章节中，我们学习了`循环`和`函数`和`数组`的基本知识，我们实现了一个简单的抽奖程序。

但是依靠他们还是不够，因为代码还是有简化的可能。

接下来，我们将会学到`对象`的基础知识，让代码看起来更加舒服。

---

# 认识JSON与对象

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，基于JavaScript对象语法但独立于语言。JavaScript对象是JavaScript中的核心数据结构，用于存储键值对。两者密切相关，但用途略有不同。

JSON 可以在很多编程语言中使用哦，例如 `JavaScript`、`Python`、`Java`、`C++`等。

## JSON基础

- **定义**：JSON是一种文本格式，用于表示结构化数据。
- **结构**：由键值对组成，键用双引号包围，值可以是字符串、数字、布尔值、数组、对象或null。

### 注意事项

- JSON键必须用双引号。
- JSON不支持函数、`undefined`和`Symbol`。
- 日期对象在转换为JSON时会被转换为ISO格式的字符串。

### 示例

```json
{
    "name": "吉吉喵",
    "age": 30,
    "courses": [
        "Math",
        "Science"
    ]
}
```

## JavaScript 对象

- **定义**：JavaScript中的复合数据类型，用于存储属性（键值对）。
- **创建**：使用花括号`{}`和键值对（例如`{name: "吉吉喵", age: 10}`）。

### 注意事项

- 非数字和特殊字符开头情况下，键可以用引号，也可以不带。
- 与JSON不同，JavaScript对象值支持函数，null，Symbol。

### 示例

```javascript
let person = {
    name: "吉吉喵",
    age: 10,
    courses: [
        "Math",
        "Science"
    ],
    greet: function(name) {  
        console.log(`Hello, my name is ${name}.`);  
    }  
};
```


## 转换

- **JSON.stringify()**：将JavaScript对象转换为JSON字符串。
  - 可选参数用于美化输出、替换值或过滤属性。
- **JSON.parse()**：将JSON字符串解析为JavaScript对象。
  - 如果JSON无效，将抛出错误。



```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};
let jsonString = JSON.stringify(person); // 转换为JSON字符串
console.log(jsonString);

let jsonObject = JSON.parse(jsonString); // 解析JSON字符串回对象
console.log(jsonObject); // [object Object]
```

![](/QQ20240924-171406.png)



## 访问对象属性

- **点符号**：`person.name`
- **方括号**：`person["name"]`（常用于动态属性名）



```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};
console.log(person.name); // 吉吉喵
console.log(person.age); // 10
console.log(person.courses[0]); // Math
```

![](/QQ20240924-172610.png)

## 修改对象属性

```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};
person.age = 31;
person["name"] = "美术喵"; // 也可以使用方括号

console.log(person); // {name: "美术喵", age: 31, courses: ["Math", "Science"]}
```

## 删除对象属性

```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};
delete person.courses;

console.log(person); // {name: "美术喵", age: 31}
```

## 检查属性是否存在

```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};

if ("name" in person) {
  console.log("name属性存在");
}
```

## 遍历对象属性

- **for...in 循环**：遍历对象自身的和继承的可枚举属性。

```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

![](/QQ20240924-173120.png)


- **Object.keys()**、**Object.values()**、**Object.entries()**：返回包含对象自身属性的`键`、`值`或`键值对`的数组。

```javascript
let person = {name: "吉吉喵", age: 10, courses: ["Math", "Science"]};

Object.keys(person).forEach(key => console.log(key));  // ['name', 'age', 'courses']

Object.values(person).forEach(value => console.log(value)); // ['吉吉喵', 10, ['Math', 'Science']]

Object.entries(person).forEach(([key, value]) => console.log(`${key}: ${value}`));  // name: 吉吉喵, age: 10, courses: ['Math', 'Science']
```


## 课后练习

小朋友，根据学到的`对象`和之前的知识，完成开头留下的问题吧！

> 抽奖程序：根据上一章的最后的抽奖代码，把`随机读取抽奖机的方式`和`已中奖的提示词`改成对象的形式。

::: details 点击查看参考答案

```javascript
// 需要抽奖的人。
let name = ["吉吉喵", "美术喵", "搬砖喵", "文档喵", "课程喵"];

//抽奖机信息，共3种，每种都有不同的配置。
let prizeType = [
    {
        guessNum: 10,
        type: "普通"
    },
    {
        guessNum: 30,
        type: "上等"
    },
    {
        guessNum: 65,
        type: "极品"
    }
];

//中奖信息配置，每个阶段提示都不一样
let guessMsg = {
    80: () => '运气超级爆棚，',
    40: () => '运气爆棚，',
    10: () => '运气还行，',
    0: () => '厉害！刚刚过线，',
};

// 抽奖函数，传入中奖数值，不同等级的抽奖机名字，人名
function prizeDraw(guessNum, type, name) {
    //重复15次抽奖
    for (let i = 1; i <= 15; i++) {
        // 每次中奖的数字随机（0-100）
        let randomNum = Math.floor(Math.random() * 101);
        if (guessNum >= randomNum) {
            console.log(name + '，[' + type + ']抽奖机里面的东西没有抽到。运气差点，生成的数字是' + randomNum);
        } else {
            let diff = randomNum - guessNum;

            // 读取中奖信息配置，读取键的数组
            Object.keys(guessMsg).forEach(key => {
                //当读取到差异值大于键时
                if (diff > key) {
                    // 输出中奖信息
                    console.log(name + '，[' + type + ']抽奖机里面的东西。' + guessMsg[key]() + '你中奖啦！生成的数字是' + randomNum);
                    // 跳出函数，不用继续循环了。
                    return;
                }
            });
        }
    }
}

// 循环需要抽奖的人数组，共5次
for (let i = 0; i < name.length; i++) {
    // 随机得到（1-3）的数字，方便后续选取不同等级的抽奖机。
    let randomNum = Math.floor(Math.random() * 3);
    // 随机读取抽奖机
    let prizeData = prizeType[randomNum];
    // 读取其中一个抽奖的配置信息
    prizeDraw(prizeData.guessNum, prizeData.type, name[i]);
}
```

![](/QQ20240924-175944.png)

::: 


