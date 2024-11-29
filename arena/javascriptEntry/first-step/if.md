# 认识条件判断

## 数据类型

1. **Boolean**：表示真值（`true`）或假值（`false`）。

   ```javascript
   let isLoggedIn = false;
   let isFly = true;
   ```

2. **Null**：表示空值或“无对象”值。
   ```javascript
   let nothing = null;
   console.log(nothing); // 输出：null
   ```

## 比较操作符

比较操作符，用于比较两个值的大小。

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

## 逻辑操作符

逻辑操作符用于对关系表达式或布尔值进行逻辑运算。

- **逻辑与 (`&&`)**: 如果两个操作数都为真，则返回 `true`。
- **逻辑或 (`||`)**: 如果任一操作数为真，则返回 `true`。
- **逻辑非 (`!`)**: 反转操作数的布尔值。

### 示例：

```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

### 优先级

> `!` > `&&` > `||`


<!--    答题卡 demo版，以Kimi AI生成  -->
<head>
<title>答题卡</title>
<style>
  body {
    font-family: Arial, sans-serif;
  }
  答题卡 {
    border: 2px solid #000;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    background-color: #f9f9f0;
  }
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .question-container {
    margin-bottom: 30px;
  }
  .question {
    margin-bottom: 10px;
  }
  .options {
    margin-bottom: 20px;
  }
  .option {
    margin-right: 10px;
  }
  .result {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    color: #fff;
    display: none;
  }
  .correct {
    background-color: #4CAF50;
  }
  .incorrect {
    background-color: #f44336;
  }
  .analyze-btn {
    display: none;
    width: 100px;
    margin: 20px auto;
    padding: 10px;
    cursor: pointer;
  }
  .analysis {
    text-align: center;
    display: none;
    margin-top: 10px;
  }
  .disabled-option {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
<div class="答题卡">
  <div class="title">答题卡</div>
  
  <div id="questions"></div>
  
  <script>
    const questions = [
      {
        id: 1,
        question: 'a=2,b=3,逻辑表达式 ` ((a+b/3) == 3 || !(a == b) && (a < b))`的值是？',
        options: ['True', 'Flase'],
        correctAnswer: '`True`',
        analysis: `解析： 小朋友， 在逻辑表达式中，优先级 算术运算>比较运算>逻辑运算。我们按照运算的优先级，一步一步地解析这个逻辑表达式吧！
        > 先计算 算数表达式
> > \`(a+b/3)\`
> > > 先计算\`/\`,再计算\`+\`  
> > > a + b/3 = 2 + 3/3 = 2 + 1 = 3 
> 
> 后 比较 ‌关系表达式 
> > \`(a+b/3) == 3\` 
> > > ~ \`true\` 
> 
> > (a == b)
> > >~ \`true\`
> 
> > (a <> b) 
> > >~ \`true\` 
>
> 最后 分析 逻辑表达式 ,其顺序为 \`!\` > \`&&\` > \`||\`        
> 
|  | | |
|:------:|:----------------------------|:---------|
|1|\`!(a == b)\`|!false = true
|2|\`!(a == b) && (a < b)\`|true && true = true
|3|\`((a + b/3) == 3 丨丨 !(a == b) && (a < b))\`|true丨丨 true = true|

综上所述，逻辑表达式 \` ((a+b/3) == 3 || !(a == b) && (a < b))\` 的值是 \`true\``
      },
      // 更多题目可以在这里添加
    ];

    const questionsContainer = document.getElementById('questions');

    questions.forEach(question => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question-container';

      questionDiv.innerHTML = `
        <div class="question">${marked.parse(question.question)}</div>
        <div class="options">
          ${question.options.map(option => `<input type="radio" class="option" name="q${question.id}" value="${option}">${option}`).join('')}
        </div>
        <div class="result correct">答对了！</div>
        <div class="result incorrect">答错了！</div>
        <button class="analyze-btn">参看答案简析</button>
        <div class="analysis" style="display:none;">${marked.parse(question.analysis)}</div>
      `;

      questionsContainer.appendChild(questionDiv);

      const options = questionDiv.querySelectorAll(`[name="q${question.id}"]`);
      const resultCorrect = questionDiv.querySelector('.result.correct');
      const resultIncorrect = questionDiv.querySelector('.result.incorrect');
      const analyzeBtn = questionDiv.querySelector('.analyze-btn');
      const analysisDiv = questionDiv.querySelector('.analysis');

      let answered = false;

      options.forEach(option => {
        option.addEventListener('change', function() {
          if (answered) return;
          answered = true;
          options.forEach(o => o.disabled = true);
          if (option.value === question.correctAnswer) {
            resultCorrect.style.display = 'block';
            analyzeBtn.style.display = 'block';
          } else {
            resultIncorrect.style.display = 'block';
            analysisDiv.style.display = 'block';
            analyzeBtn.style.display = 'none'; // Hide the button after showing the analysis
          }
        });
      });

      analyzeBtn.addEventListener('click', function() {
        analysisDiv.style.display = 'block';
        analyzeBtn.style.display = 'none'; // Hide the button after showing the analysis
      });
    });
  </script>
</div>
</body>


> `做一做`: a=2,b=3,逻辑表达式 ` ((a+b/3) == 3 || !(a == b) && (a < b))`的值是？
::: details 点击查看参考答案

答案 `true`

解析： 小朋友， 在逻辑表达式中，优先级 算术运算>比较运算>逻辑运算。我们按照运算的优先级，一步一步地解析这个逻辑表达式吧！ 先计算 算数表达式

> > `(a+b/3)`
> >
> > > 先计算`/`,再计算`+`  
> > > a + b/3 = 2 + 3/3 = 2 + 1 = 3
>
> 后 比较 ‌ 关系表达式
>
> > `(a+b/3) == 3`
> >
> > > ~ `true`
>
> > (a == b)
> >
> > > ~ `true`
>
> > (a <> b)
> >
> > > ~ `true`
>
> 最后 分析 逻辑表达式 ,其顺序为 `!` > `&&` > `||`
>
> |     |                                              |                       |
> | :-: | :------------------------------------------- | :-------------------- |
> |  1  | `!(a == b)`                                  | !false = true         |
> |  2  | `!(a == b) && (a < b)`                       | true && true = true   |
> |  3  | `((a + b/3) == 3 丨丨 !(a == b) && (a < b))` | true 丨丨 true = true |

综上所述，逻辑表达式 ` ((a+b/3) == 3 || !(a == b) && (a < b))` 的值是 `true`
:::

## 条件（三元）操作符

条件操作符是 JavaScript 中唯一的三元操作符，它根据条件表达式的结果返回两个值中的一个。

**语法**：`条件 ? 表达式1 : 表达式2`

- 如果条件为真（true），则计算并返回表达式 1 的值。
- 如果条件为假（false），则计算并返回表达式 2 的值。

### 示例：

```javascript
let score = 85;
let grade = score >= 60 ? "Pass" : "Fail";
console.log(grade); // Pass
```

## if 语句

`if` 语句是 JavaScript 中最基本的选择结构。它的工作原理很简单：如果某个条件是真的，就执行一段代码。

```javascript
let hungerLevel = 7;
if (hungerLevel > 5) {
  console.log("我饿了，吃一片饼干吧！");
}

// 或可以简写成
console.log(hungerLevel > 5 ? "我饿了，吃一片饼干吧！" : null);
```

在这个例子中，如果 `hungerLevel` 大于 5，程序就会输出「我饿了，吃一片饼干吧！」

![](/QQ20240918-174943.png)

小朋友，你试试调整 `hungerLevel` 的值，可以是 1 到 10，看看输出会有什么变化。

如果<=5，他就不会输出，这个时候千万不要以为是程序出 BUG 了哦！继续往下看哦！

## if-else 语句

`if-else` 语句在 `if` 语句的基础上增加了一个选择：如果条件是真的，执行 `if` 后面的代码；如果条件是假的，执行 `else` 后面的代码。

```javascript
let hungerLevel = 7;
if (hungerLevel > 5) {
  console.log("我饿了，吃一片饼干吧！");
} else {
  console.log("我不太饿，还不想吃。");
}

// 或简写成
console.log(
  hungerLevel > 5 ? "我饿了，吃一片饼干吧！" : "我不太饿，还不想吃。"
);
```

这里，如果 `hungerLevel` 大于 5，程序会输出「我饿了，吃一片饼干吧！」；否则，输出「我不太饿，还不想吃。」

## else if 语句

有时候，我们面临的选择不止两种。这时候，`else if` 语句就派上用场了。它允许我们检查多个条件，并针对每个条件执行不同的代码块。

```javascript
let hungerLevel = 7;
if (hungerLevel == 10) {
  console.log("我非常非常饿，吃三片饼干吧！");
} else if (hungerLevel > 8) {
  console.log("我非常饿，吃两片饼干吧！");
} else if (hungerLevel > 5) {
  console.log("我有点饿，吃一片饼干吧！");
} else {
  console.log("我不饿，不吃饼干。");
}
```

在这个例子中，程序会根据 `hungerLevel` 的不同值输出不同的结果。

小朋友，你试试调整 `hungerLevel` 的值，可以是 1 到 10，看看输出会有什么变化。

## 课后练习

小朋友，试试模仿上方的代码，编写一个简单的程序吧！

> 当年龄小于 18 岁，控制台输出：你是未成年人。

> 当年龄大于等于 60 岁，控制台输出：你是老年人。

> 以上都不满足，控制台输出：你是成年人。

最后，输入你的年龄，看看效果吧！

::: details 点击查看参考答案

![](/QQ20240918-173445.png)

:::
