# 摄像机高阶贝塞尔

## 安装包
```bash
npm --registry=https://mirrors.cloud.tencent.com/npm/ i gamehighbessel_dao3
```

## 引入包

```typescript
import GameHighBessel from "gamehighbessel_dao3"; 
```

## 使用方式示例
```typescript
world.onPlayerJoin(({ entity }) => {
    // 创建一个新的实体作为摄像机实体，位置为(0, 0, 0)，使用'flower.vb'模型，缩放比例为(1, 1, 1)
    const cameraEntity: GameEntity | null = world.createEntity({
        position: new GameVector3(0, 0, 0),
        mesh: 'flower.vb',
        meshScale: new GameVector3(1, 1, 1),
    });

    // 如果创建实体失败，则直接返回
    if (!cameraEntity) {
        return;
    }

    // 创建一个新的GameHighBessel对象，传入实体、摄像机实体和固定点名称'a'
    const output = new GameHighBessel({
        entity,
        cameraEntity,
        fixedPointName: 'a',
    });

    // 设置GameHighBessel的播放速度为0.001
    output.play(0.001);

    // 隐藏摄像机实体
    output.hideMesh(true);

    // 将GameHighBessel所有玩家对象绑定到摄像机实体
    output.toCameraEntity();

    // 设置当GameHighBessel播放完成后，暂停播放并所有玩家绑定到玩家实体
    output.onFinish(() => {
        output.pause(true);
        output.toPlayerEntity();
    });

});
```

## 包介绍

# 高阶贝塞尔曲线移动-神岛Pro版

>来自box3游戏《新春·欢乐游乐园》中的火车运行路径，运用了贝塞尔3阶内连续移动。[https://dao3.fun/exp/experience/detail/100012435](https://dao3.fun/exp/experience/detail/100012435)


![](https://static.codemao.cn/pickduck/Hkh0XuvWkx.gif?hash=lm78J0LS8CUIYMHZDEuyLx-7CMLQ)


>来自box3游戏《瓶盖人大乱斗》中的胜利场面，运用了贝塞尔3阶内连续移动。锁定视角。[https://dao3.fun/exp/experience/detail/100108748](https://dao3.fun/exp/experience/detail/100108748)


![](https://static.codemao.cn/pickduck/HyMx4dvbyx.gif?hash=lg9KArMwdfxvjKmGEpH1akLVqtTN)

![](https://static.codemao.cn/pickduck/SyWfEdwbke.gif?hash=ljTs4HwUvh9Efg8bS8IYd-SrQlLJ)

![](https://static.codemao.cn/pickduck/HJ974uPWkl.gif?hash=ltaGwWNW1HTCAem8VEW55gOcqc3U)
