# 第二章综合测试

小朋友，根据学到的`循环`，`函数`，`数组`和上个章节学到的`判断`知识，完成开头留下的问题吧！

> 抽奖程序：每次中奖情况对应不同人，每个人只能在`当前等级的抽奖机`抽奖15次，需要同时输出这个中奖结果（`中奖的数字`，`不同等级的抽奖机`）是属于哪个人的？那该怎么办呢？

> 并且，已经抽过奖的人，不能再次抽奖哦！

> 现在共有5个人要同时抽奖，他们分别是：`吉吉喵`，`美术喵`，`搬砖喵`，`文档喵`，`课程喵`。

::: details 点击查看参考答案

```javascript
// 需要抽奖的人。
let name = ["吉吉喵", "美术喵", "搬砖喵", "文档喵", "课程喵"];

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
            if (diff > 80) {
                console.log(name + '，抽中了[' + type + ']抽奖机里面的东西。运气超级爆棚，你中奖啦！生成的数字是' + randomNum);
            } else if (diff > 40) {
                console.log(name + '，抽中了[' + type + ']抽奖机里面的东西。运气爆棚，你中奖啦！生成的数字是' + randomNum);
            } else if (diff > 10) {
                console.log(name + '，抽中了[' + type + ']抽奖机里面的东西。运气还行，你中奖啦！生成的数字是' + randomNum);
            } else {
                console.log(name + '，抽中了[' + type + ']抽奖机里面的东西。厉害！刚刚过线，你中奖啦！生成的数字是' + randomNum);
            }
        }
    }
}

// 循环需要抽奖的人数组，共5次
for (let i = 0; i < name.length; i++) {  
    // 随机得到（1-3）的数字，方便后续选取不同等级的抽奖机。
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {  // 当得到的数字是1时，抽普通等级的机子
        prizeDraw(10, "普通", name[i]);
    } else if (randomNum == 2) {     // 当得到的数字是2时，抽上等等级的机子
        prizeDraw(30, "上等", name[i]);
    } else {     // 当得到的数字是3时，抽极品等级的机子
        prizeDraw(65, "极品", name[i]);
    } 
}
```

![](/QQ20240924-163244.png)

::: 


