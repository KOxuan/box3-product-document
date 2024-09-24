# 第一章实战-抽奖游戏

## 章节总结

经过这章学习，我们正式踏入了JavaScript的奇妙世界。在控制台中输出“Hello World”。

我们还学习了如何为变量赋予意义。在掌握变量赋值的基础上，我们学习了如何读取这些变量的内容，以及如何在需要时修改它们。

此外，我们还学习了如何进行变量运算，让数据在指尖跳跃，展现出数学与逻辑的和谐之美。

最后，本章高潮：if语句。它如一位裁判，根据条件的不同，引导程序走向不同的分支，实现了分类输出的精准控制。


##  抽奖游戏

在这章的最后一节中，你将自己动手写出一个简单的抽奖小游戏。

你可以在下面这个简化版的在线示例中玩上几局游戏，然后开始我们的制作。

<div :class="$style.demo">
  <p :class="$style.demo_title">抽奖游戏</p>
  <p :class="$style.demo_intro">系统随机生成数字。当大于等于中奖数值会中奖。</p>
  <div :class="$style.demo_input_box">
    中奖数值（0-100）：<input type="number" min="0" max="100" v-model="guessNum" @keyup.enter="ok" />
  </div>
  <div :class="$style.demo_btns">
    <button :class="$style.demo_ok" @click="ok">抽奖</button>
  </div>
</div>

##  API参考
你可以通过以下代码来生成随机数。
```javascript
let randomNum = Math.floor(Math.random() * 101); // 生成 1 到 100 的随机整数
```

##  代码流程图
![](/QQ20240918-200535.png)

##  游戏参考代码

::: details 点击查看参考答案
```javascript
let randomNum = Math.floor(Math.random() * 101); 
let guessNum = 10; // 中奖数值

if (guessNum >= randomNum) {  
    // 当中奖数值大于等于随机数，则没中奖。
    console.log('运气差点，生成的数字是' + randomNum);
} else {
    // 中奖了，再细分判断。
    let diff = randomNum - guessNum; // 计算随机数与中奖数值差多大。
    if (diff > 80) {  
      // 当差异值大于80的时候
      console.log('运气超级爆棚，你中奖啦！生成的数字是' + randomNum);
    } else if (diff > 40) {  
      // 不满足大于80，再判断当差异值大于40的时候
      console.log('运气爆棚，你中奖啦！生成的数字是' + randomNum);
    } else if (diff > 10) {  
      // 不满足大于40，再判断当差异值大于10的时候
      console.log('运气还行，你中奖啦！生成的数字是' + randomNum);
    } else {  
      //以上情况都不满足
      console.log('厉害！刚刚过线，你中奖啦！生成的数字是' + randomNum);
    }
}
```
---
![](/QQ20240918-201428.png)

::: 








<script setup>
  import { ref } from 'vue';
  let randomNum = 0;
  const guessNum = ref(0);
  guessNum.value = null;
  function ok(){
    if(!guessNum.value){
      return alert('请先输入中奖数值，范围：0-100');
    }
    randomNum = Math.floor(Math.random()*101);

    if (guessNum.value >= randomNum) {
        alert('运气差点，生成的数字是' + randomNum);
    } else {
        // 计算差异值。
        let diff = randomNum - guessNum.value;
        if (diff > 80) {
            alert('运气超级爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 40) {
            alert('运气爆棚，你中奖啦！生成的数字是' + randomNum);
        } else if (diff > 10) {
            alert('运气还行，你中奖啦！生成的数字是' + randomNum);
        } else {
            alert('厉害！刚刚过线，你中奖啦！生成的数字是' + randomNum);
        }
    }
  }
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