# 编写代码

在本项目中，`App.ts`是默认的服务端入口文件，类似于神岛的`index.js`。

我们直接用项目生成的默认代码即可，默认代码是组件式编程架构，与cocos，unity，ue等引擎有着异曲同工之妙。

当然，鉴于神岛的包容度，你完全可以直接全部删除默认代码，使用你喜欢的方式编程。

## 默认的代码界面
![](/code1.webp)


## 功能需求
1.当玩家加入地图后，向控制台输出：`Hello World！{玩家名称}。`

2.每0.5s向控制台输出：`App组件固定0.5秒定时消息。`

3.5s后销毁该控件，向控制台输出：`App组件已被销毁。`

## 功能效果
![](/code2.webp)

### 第一步：监听玩家加入游戏
![](/code3.webp)

### 第二步：每0.5秒发送消息
实例用到了timeCount属性。关于组件接口，你可以查看

![](/code4.webp)

### 第三步：App组件销毁
![](/code5.webp)



## 完整代码
```typescript
import Component, { componentObjByUuid } from "component";

// 定义一个App类，继承自Component
export class App extends Component {
  // 定义一个私有变量，用于记录时间，初始值为0
  private recordTime: number = 0;

  // 定义onStart方法，当App组件开始运行时，会调用此方法
  // 在此方法中，我们监听玩家加入事件，当有新玩家加入时，会调用onPlayerJoin方法
  protected onStart(): void {
    world.onPlayerJoin(this.onPlayerJoin);
  }

  // 定义onUpdate方法，当App组件更新时，会调用此方法
  // deltaTime参数表示上一次更新到这次更新所经过的时间
  // 在此方法中，我们更新recordTime的值，并检查是否达到5000（5秒）
  // 如果达到5秒，则销毁App组件
  protected onUpdate(deltaTime: number): void {
    this.recordTime += deltaTime;

    // 检查recordTime是否达到500（0.5秒）
    if (this.recordTime >= 500) {
      this.recordTime = 0;
      console.log(`App组件固定0.5秒定时消息。`);
    }

    // 检查recordTime是否达到5000（5秒），如果达到则销毁App组件
    if (this.recordTime >= 5000) {
      this.destroy();
    }
  }

  // 定义onDestroy方法，当App组件销毁时，会调用此方法
  // 在此方法中，我们打印一条消息，表示App组件已被销毁
  protected onDestroy(): void {
    console.log(`App组件已被销毁。`);
  }

  // 定义onPlayerJoin方法，当有新玩家加入时，会调用此方法
  // 此方法接收一个参数，表示新加入的玩家实体
  // 在此方法中，我们打印一条消息，表示欢迎新加入的玩家
  private onPlayerJoin({ entity }: GamePlayerEntityEvent) {
    console.log(`Hello World！${entity.player.name}。`);
  }
}
```
