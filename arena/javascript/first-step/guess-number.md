# 猜数字游戏

学到这里，相信你已经掌握了js的基本功了，让我们用一个简单的小游戏练练手吧！

在这节，也是本章的最后一节中，你将自己动手写出一个简单的猜数字小游戏。

你可以在下面这个简化版的在线示例中玩上几局游戏，然后开始我们的制作。

<div :class="$style.demo">
  <p :class="$style.demo_title">猜数字游戏</p>
  <p :class="$style.demo_intro">在下方的输入框中输入0-100之间的一个数字。程序会告诉你是猜得大了还是小了。剩余 {{ retTime }} 次机会。</p>
  <div :class="$style.demo_input_box">
    我猜是：<input type="number" min="0" max="100" v-model="guessNum" @keyup.enter="ok" />
  </div>
  <div :class="$style.demo_btns">
    <button :class="$style.demo_ok" @click="ok">确定</button>
    <button :class="$style.demo_restart" @click="init">重开</button>
  </div>
</div>

游戏开始时，程序会随机选取一个0-100之间的数字。然后，玩家将有10次猜数字的机会，如果玩家猜的数字不对，就告诉玩家是大了还是小了；如果正确，就告诉玩家猜对了。

![效果展示](/js-fs-gn-1.gif)


## 像程序员一样思考
> 学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行。
>
> 为达成这一点，我们需要努力编程，获取语法经验，注重实践，再加一点创造力，几项缺一不可。代码写的越多，就会完成得越优秀。虽然我们不能保证你在 5 分钟内拥有“程序员大脑”，但是整个课程中你将得到大量机会来训练程序员思维。
>
> 请牢记这一点，然后开始观察本文的示例，体会一下将其分解为可操作任务的大体过程。
>
> （引用自[MDN Docs: Javascript初体验](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/A_first_splash)）

首先，我们需要将整个游戏流程拆分成尽量简单的任务，然后将这些任务组合成一个完整的游戏。

当游戏开始：
1. 随机选择一个数作为答案。
2. 重置玩家剩余的机会次数，在这里是10次。

当玩家输入数字：
1. 检查玩家的输入和答案
    - 如果输入的数字比答案小，则提示玩家猜小了。
    - 如果输入的数字比答案大，则提示玩家猜大了。
    - 如果输入的数字和答案相同，则提示玩家猜对了，并结束游戏。
2. 检查玩家剩余的次数
    - 如果玩家剩余的次数为0，则提示玩家游戏结束，并显示答案，然后结束游戏。
    - 如果玩家剩余的次数不为0，则继续游戏。

接下来，我们会根据这个流程，实现游戏逻辑。

打开你的arena编辑器，一起来写代码吧！

## 开始游戏
我们假定玩家一旦进入地图就开始游戏：

```javascript
world.onPlayerJoin((event) => {
  // 游戏代码写在这里
})
```

::: tip API
API是代码岛提供的一系列函数，允许我们的代码与游戏世界进行互动。

这里，`world.onPlayerJoin`是一个API，你需要往里面传入一个函数（又被称为「回调函数」），一旦有玩家加入游戏，代码岛会帮你执行这个函数。

这个回调函数可以有一个参数，代码岛会把玩家加入游戏时的信息作为参数传入。

例如，你可以试试这样：
```javascript
world.onPlayerJoin((event) => {
  console.log(event.entity.player.name);
})
```
现在运行游戏，你会看到玩家的名字被输出在控制台中。
:::
::: tip 解构赋值
有些时候，你可能会看到这样的写法：
```javascript
world.onPlayerJoin(({entity}) => {
  // ...
})
```
为什么在回调函数中，出现了一个像对象一样的东西呢？

其实这个是JavaScript的**解构赋值**语法。它允许你选择性地将对象中的值取出，赋值给另一个变量，例如：

```javascript
const person = {
  name: 'Alice',
  age: 18
  gender: 'female'
}
const {name, age} = person;
console.log(name); // Alice
console.log(age); // 18
```

值得注意的是，对于列表也有相似的语法。
```javascript
const list = [1, 1, 4, 5, 1, 4];
const [a, b, c] = list;
console.log(a); // 1
console.log(b); // 1
console.log(c); // 4
```

更多有关内容，请参阅[MDN Docs: 解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。
:::

### 选取随机数
我们可以这样获取一个0-100之间的随机数。这个数值在整个游戏过程中不需要改变，所以我们选择使用`const`。
```javascript
const number = Math.floor(Math.random()*100);
```
在这里，`Math.random` 是JavaScript为我们提供的一个函数，用于生成一个0-1之间的随机小数。

我们将这个数字乘上一百，然后用`Math.floor`函数取向下取整，得到一个0-99之间的整数。

### 重置游戏次数
我们可以定义一个变量，用来保存玩家剩余的次数。
```javascript
let retTime = 10;
```

## 输入数字
我们需要一个输入框，让玩家输入数字。

我们可以使用代码岛的`entity.player.dialog`函数来创建一个输入框。这个函数接受一个对象作为参数，用来配置输入框的样式。
```javascript
world.onPlayerJoin(({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  entity.player.dialog({             // [!code focus]
    type: GameDialogType.TEXT,       // [!code focus]
    title: "猜数字",                  // [!code focus]
    content: "欢迎来到猜数字游戏！"      // [!code focus]
  });                                // [!code focus]
})
```
运行代码，你应该会看到一个文字框。

::: tip 你可能需要知道……
请注意，`entity.player.dialog`的行为非常特殊。它并不会等待玩家关闭输入框才继续执行后续代码。因此，我们需要一些特殊的东西来等待玩家输入。

在这里，我们使用`async/await`。这部分内容对于初学者理解起来可能比较困难，因此简单掠过。在后续的中、高级教程中，我们会详细介绍它们。现在，你只需要知道，用`await`可以等待输入框关闭，同时这个函数应该加上`async`修饰符。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  await entity.player.dialog({       // [!code focus]
    type: GameDialogType.TEXT,       // [!code focus]
    title: "猜数字",                  // [!code focus]
    content: "我在等你关闭输入框"       // [!code focus]
  });                                // [!code focus]
  console.log("玩家关闭了弹窗");       // [!code focus]
})
```
:::

在传入这个函数的对象中，你可以用`type`来指定输入框的类型。`GameDialogType.TEXT`是一个常量，表示文字框；`GameDialogType.INPUT`表示输入框等等。具体的内容请参阅API文档（页面右上角链接）。

在这里，我们需要使用一个输入框，因此，我们需要设置`type`为`GameDialogType.INPUT`。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  let input = await entity.player.dialog({      // [!code focus]
    type: GameDialogType.INPUT,                 // [!code focus]
    title: "猜数字",                             // [!code focus]
    content: "请输入一个0-100间的数字"             // [!code focus]
  });                                           // [!code focus]
  console.log(input);
})
```
运行游戏，你应该会看到一个输入框。输入数字后，你会在控制台看到你输入的值。

## 循环起来！
玩家有十次猜数字的机会。因此我们需要循环。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  while(retTime > 0){// [!code focus]
    let input = await entity.player.dialog({      
      type: GameDialogType.INPUT, 
      title: "猜数字", 
      content: "请输入一个0-100间的数字" 
    });
    //在这里做一些判断……
    retTime -= 1;   // [!code focus]
  }                 // [!code focus]
})
```
每次循环就将剩余次数减一。如果剩余次数小于等于0，就结束游戏。

## 猜对了吗？
我们需要判断玩家输入的数字是否正确。相信你注意到了，我们在上面的代码里已经用一个叫`input`的变量保存了玩家的输入结果。

但是，这里的`input`是一个**字符串**。因此，我们需要将其转换成一个数字，才能和答案进行比较。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  while(retTime > 0){
    let input = await entity.player.dialog({      
      type: GameDialogType.INPUT, 
      title: "猜数字", 
      content: "请输入一个0-100间的数字" 
    });
    let input_num = parseInt(input); // [!code focus]
    retTime -= 1;
  }
})
```
接下来的事情就简单了不少：只需要对大于、小于、等于三种情况进行判断，然后反馈给玩家就行了。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let retTime = 10;
  while(retTime > 0){
    let input = await entity.player.dialog({      
      type: GameDialogType.INPUT, 
      title: "猜数字", 
      content: "请输入一个0-100间的数字" 
    });
    let input_num = parseInt(input);
    if(input_num < number){// [!code focus]
      entity.player.dialog({// [!code focus]
        type: GameDialogType.TEXT, // [!code focus]
        title: "猜数字", // [!code focus]
        content: "猜小了" // [!code focus]
      });// [!code focus]
    }else if(input_num > number){// [!code focus]
      entity.player.dialog({// [!code focus]
        type: GameDialogType.TEXT, // [!code focus]
        title: "猜数字", // [!code focus]
        content: "猜大了" // [!code focus]
      });      // [!code focus]
    }else{// [!code focus]
      entity.player.dialog({// [!code focus]
        type: GameDialogType.TEXT, // [!code focus]
        title: "猜数字", // [!code focus]
        content: "恭喜你，猜对了！" // [!code focus]
      });// [!code focus]
      break;// [!code focus]
    }// [!code focus]
    retTime -= 1;
  }
})
```

## 输了吗？
当玩家猜的次数大于10次，应该结束游戏，并且告诉玩家正确答案。

为此，我们需要加入一个`win`变量，初始值是`false`，如果玩家赢了，将其设置为`true`再退出循环。

当循环被退出后，判断`win`是否是`false`，如果是，就弹出一个提示框，告诉玩家正确答案；否则什么也不做。
```javascript
world.onPlayerJoin(async({entity}) => { 
  const number = Math.floor(Math.random()*100);
  let win = false; // [!code focus]
  let retTime = 10;
  while(retTime > 0){
    let input = await entity.player.dialog({      
      type: GameDialogType.INPUT, 
      title: "猜数字", 
      content: "请输入一个0-100间的数字" 
    });
    let input_num = parseInt(input);
    if(input_num < number){
      entity.player.dialog({
        type: GameDialogType.TEXT, 
        title: "猜数字", 
        content: "猜小了" 
      });
    }else if(input_num > number){
      entity.player.dialog({
        type: GameDialogType.TEXT, 
        title: "猜数字", 
        content: "猜大了" 
      });      
    }else{
      entity.player.dialog({
        type: GameDialogType.TEXT, 
        title: "猜数字", 
        content: "恭喜你，猜对了！" 
      });
      win = true; // [!code focus]
      break;
    }
    retTime -= 1;
  }

  if(!win){// [!code focus]
    entity.player.dialog({// [!code focus]
      type: GameDialogType.TEXT, // [!code focus]
      title: "猜数字", // [!code focus]
      content: `你输了！答案是${number}` // [!code focus]
    });// [!code focus]
  }// [!code focus]
})
```

::: tip 模板字符串
模板字符串是一种特殊的字符串字面量，允许多行字符串、字符串差值等。

模板字符串以**反引号**（``` ` ```）分割。要打出这个字符，切换至英文输入法，然后按下键盘左上角，`ESC`下方，`Tab`上方的那个按键。

运行一下下面的例子，尝试理解模板字符串。
```javascript
let name = 'Alice';
let host = 'surfish';
console.log(`hello, ${name}!
I am ${host}`);
```
:::

## 恭喜！🎉
到此，你写出了一个猜数字的小游戏，这或许是你的第一个游戏。

希望在日后的学习中，你能够将这些知识综合起来，写出一个好游戏！


<script setup>
  import { ref } from 'vue';
  const retTime = ref(10);
  let randomNum = 0;
  const guessNum = ref(0);
  function init(){
    guessNum.value = null;
    randomNum = Math.floor(Math.random()*100);
    retTime.value = 10;
  }
  function ok(){
    if(guessNum.value < randomNum){
      alert('猜小了');
    }else if(guessNum.value > randomNum){
      alert('猜大了');
    }else{
      alert('恭喜，猜对了');
      init();
    }
    retTime.value -= 1;
    if(retTime.value <= 0){
      alert(`很遗憾，游戏结束。答案是${randomNum}。`);
      init();
    }
  }
  init();
</script>

<style module>
.demo {
  width: 70%;
  /* height: 200px; */
  background-color: #f0f0f0;
  color: #0e0e0e;
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.demo_title {
  font-size: 25px;
  text-align: center;
}
.demo_intro {
  margin: 0px !important;
  color: #0f0f0f;
  padding: 0px 20px 0px 20px;
}
.demo_btns {
  display: flex;
  justify-content: center;
}
.demo button {
  background-color: #388e3c;
  width: 100px;
  margin: 10px;
}
.demo input {
  border-bottom: 2px solid #336699;
  width: 100px;
}
.demo_input_box{
  align-self: center;
}
</style>