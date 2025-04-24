# 🚀 使用 TypeScript 编写游戏服务端代码

在本项目中，服务端的`App.ts`文件作为服务端代码的默认入口，其功能与神岛项目中的`index.js`相似。

:::tip
**💡 学习提示**：若你对 TypeScript 语言不太熟悉，可以查阅[TypeScript 语言入门教程](https://typescript.p6p.net/about/experience.html)以获取更多信息。
:::

## 📂 项目架构

| 目录     | 用途               |
| -------- | ------------------ |
| `server` | 服务端代码存放目录 |
| `client` | 客户端代码存放目录 |
| `src`    | 通用脚本存放目录   |

## 🎯 功能需求

### 1️⃣ 控制台输出

当玩家加入地图后，系统需在控制台输出包含玩家名称的欢迎信息：

```
Hello World！{玩家名称}
```

### 2️⃣ 玩家对话框

同时，系统应向该玩家展示一个独特的对话框，内容同样为：

```
Hello World！{玩家名称}
```

### 3️⃣ 功能封装

将对话框功能封装成函数，放置`b.ts`文件中，并导入到`App.ts`中使用

## 📺 功能效果预览

![功能效果预览图](/QQ20241025-105839.png)

## 📝 实现步骤

### 步骤一：监听玩家加入事件

| 操作         | 说明                                               |
| ------------ | -------------------------------------------------- |
| 使用事件监听 | 通过监听`world.onPlayerJoin`事件获取新加入玩家信息 |

![监听玩家加入游戏事件示意图](/QQ20241101-150107.png)

### 步骤二：控制台欢迎信息

| 操作           | 说明                                        |
| -------------- | ------------------------------------------- |
| 使用控制台输出 | 使用`console.log`输出包含玩家名称的欢迎信息 |

![向控制台打印欢迎信息示意图](/QQ20241101-150138.png)

### 步骤三：玩家对话框

| 操作       | 说明                                         |
| ---------- | -------------------------------------------- |
| 显示对话框 | 调用`entity.player.dialog`方法展示欢迎对话框 |
| 使用泛型   | 使用`<GameTextDialogParams>`进行类型约束     |

![向玩家弹出欢迎对话框示意图](/QQ20241101-150220.png)

### 步骤四：功能封装

| 操作          | 说明                                    |
| ------------- | --------------------------------------- |
| 创建功能文件  | 在`src`目录下创建`b.ts`文件             |
| 封装功能      | 将对话框逻辑封装为独立函数              |
| 使用 ESM 模块 | 使用 ESM 模块语法导出函数，便于导入使用 |

![创建功能文件](/QQ20241129-115545.png)

#### 导出对话框功能

:::info
**📚 注意**：在 ArenaPro 中，我们统一使用`ESM`模块语法，服务端和客户端都可以使用。
:::

**在 b.ts 中导出功能：**

![b.ts 文件内容](/QQ20241129-115944.png)

**在 App.ts 中导入并使用：**

![App.ts 文件内容](/QQ20241129-120043.png)

## 💻 完整代码示例

<details>
<summary><b>点击展开完整代码</b></summary>

```typescript
// -----------------App.ts-----------------

// 导入dialog模块，用于在玩家加入时显示欢迎对话框
import { dialog } from "./b";

// 当玩家加入游戏时触发
world.onPlayerJoin(({ entity }) => {
  // 打印欢迎信息到控制台
  console.log(`Hello World！${entity.player.name}`);

  // 调用dialog函数显示欢迎对话框
  dialog(entity);
});

// -----------------b.ts-----------------

/**
 * 显示欢迎对话框给指定的玩家实体
 * @param entity 游戏实体，包含玩家信息和方法
 */
export function dialog(
  entity: GameEntity & {
    player: GamePlayer;
    isPlayer: true;
  }
) {
  // 创建并显示一个文本类型的对话框
  entity.player.dialog<GameTextDialogParams>({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.0),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.0),
  });
}
```

</details>

---

<div align="center">
  <p>❓ 有问题？加入 <a href="https://qm.qq.com/q/tvrI6iSl56">QQ群：492953731</a> 寻求帮助</p>
</div>
