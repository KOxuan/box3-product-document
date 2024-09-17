# 做决定：流程控制（一）

「生存还是毁灭，这是一个问题。」

在代码中，我们常常需要做出决定。

> 人类（以及其他的动物）无时无刻不在做决定，这些决定都影响着他们的生活，从小事（“我应该吃一片还是两片饼干”）到重要的大事（“我应该留在我的祖国，在我父亲的农场工作；还是应该去美国学习天体物理学”）。
>
> 条件语句结构允许我们来描述在 JavaScript 中这样的选择，从不得不作出的选择（例如：“一片还是两片”）到产生的结果或这些选择（也许是“吃一片饼干”可能会“仍然感觉饿”，或者是“吃两片饼干”可能会“感觉饱了，但妈妈会因为我吃掉了所有的饼干而骂我”。）
>
> ![](/js-fs-if-1.png)
> 
> （引用自MDN Web Docs上的[这篇文章](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals)）

## if 语句
`if` 语句是 JavaScript 中最基本的选择结构。它的工作原理很简单：如果某个条件为真，就执行一段代码。
```javascript
let hungerLevel = 7;
if (hungerLevel > 5) {
    console.log('我饿了，吃一片饼干吧！');
}
```
在这个例子中，如果 `hungerLevel` 大于 5，程序就会输出「我饿了，吃一片饼干吧！」

调整 `hungerLevel` 的值，看看输出会有什么变化。

::: tip 条件与布尔值
在if语句中的条件其实是一个布尔值。布尔值要么是`true`（真），要么是`false`（假）。
所以，`hungerLevel > 5` 其实和 `false` 无异。
:::

## if-else 语句
`if-else` 语句在 `if` 语句的基础上增加了一个选择：如果条件为真，执行 `if` 后面的代码；如果条件为假，执行 `else` 后面的代码。
```javascript
if (hungerLevel > 8) {
    console.log('我非常饿，吃两片饼干吧！');
} else {
    console.log('我不太饿，吃一片就好了。');
}
```
这里，如果 `hungerLevel` 大于 8，程序会输出「我非常饿，吃两片饼干吧！」；否则，输出「我不太饿，吃一片就好了。」

## else if 语句
有时候，我们面临的选择不止两种。这时候，`else if` 语句就派上用场了。它允许我们检查多个条件，并针对每个条件执行不同的代码块。
```javascript
if (hungerLevel > 8) {
    console.log('我非常饿，吃两片饼干吧！');
} else if (hungerLevel > 5) {
    console.log('我有点饿，吃一片饼干吧！');
} else {
    console.log('我不饿，不吃饼干。');
}
```
在这个例子中，程序会根据 `hungerLevel` 的不同值输出不同的结果。

## 一个简单的示例
让我们通过一个简单的例子来总结一下：
```javascript
let age = 20;
if (age < 18) {
    console.log('你是未成年人。');
} else if (age < 60) {
    console.log('你是成年人。');
} else {
    console.log('你是老年人。');
}
```

这个例子中，我们根据年龄的不同，输出不同的信息。
通过这些基础的条件语句，我们可以在 JavaScript 中做出决策，让程序根据不同的情况执行不同的操作。就像在生活中一样，选择不同，结果也会不同。

<p style="opacity:0.5; text-align: right;">声明：使用AI辅助创作</p>
