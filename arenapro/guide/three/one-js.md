# 🚀 使用 JavaScript 编写游戏服务端代码

::: warning
**⚠️ 重要说明**

当你在 VSCode 编辑器中工作时，我们强烈推荐主要使用`TypeScript`进行代码编写。尽管我们提供了使用`JavaScript`的选项，但这是为了照顾编程初学者，旨在通过降低语言的学习难度，并利用更强大的编辑器功能来促进编程技能的提升。

请注意，JavaScript 并不是我们插件主要推荐的语言，选择它主要是为了减少学习成本。

如果你需要配置代码检查，请参考：[JS 相关配置指南](/bestPractices/allowJs)。
:::

## 📂 项目结构

| 组成部分     | 说明                                                                |
| ------------ | ------------------------------------------------------------------- |
| **入口文件** | `App.js` 是服务端代码的默认入口，其功能类似于神岛项目中的`index.js` |
| `server`     | 服务端代码存放目录                                                  |
| `client`     | 客户端代码存放目录                                                  |
| `src`        | 通用脚本文件存放目录                                                |

## 🎯 功能实现

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

将对话框功能封装成函数，放置`b.js`文件中，并导入到`App.js`中使用

## 📺 功能效果预览

![功能效果展示](/QQ20241025-105839.png)

## 📝 实现步骤

### 步骤一：监听玩家加入事件

| 操作         | 说明                                               |
| ------------ | -------------------------------------------------- |
| 使用事件监听 | 通过监听`world.onPlayerJoin`事件获取新加入玩家信息 |

![监听玩家加入事件界面](/QQ20241025-105932.png)

### 步骤二：控制台欢迎信息

| 操作           | 说明                                        |
| -------------- | ------------------------------------------- |
| 使用控制台输出 | 使用`console.log`输出包含玩家名称的欢迎信息 |

![控制台打印信息界面](/QQ20241025-110039.png)

### 步骤三：玩家对话框

| 操作       | 说明                                         |
| ---------- | -------------------------------------------- |
| 显示对话框 | 调用`entity.player.dialog`方法展示欢迎对话框 |

![弹出对话框界面](/QQ20241025-110125.png)

### 步骤四：功能封装

| 操作          | 说明                                    |
| ------------- | --------------------------------------- |
| 创建功能文件  | 在`src`目录下创建`b.js`文件             |
| 封装功能      | 将对话框逻辑封装为独立函数              |
| 使用 ESM 模块 | 使用 ESM 模块语法导出函数，便于导入使用 |

![新建b.js文件](/QQ20241129-120537.png)

## 💻 代码实现

<details>
<summary><b>App.js 代码</b></summary>

```javascript
// 导入dialog模块
import { dialog } from "./b";

// 玩家加入事件处理
world.onPlayerJoin(({ entity }) => {
  // 控制台输出欢迎信息
  console.log(`Hello World！${entity.player.name}`);

  // 显示欢迎对话框
  dialog(entity);
});
```

![App.js代码示例](/QQ20241129-120601.png)

</details>

<details>
<summary><b>b.js 代码</b></summary>

```javascript
/**
 * 显示欢迎对话框
 * @param {Object} entity - 游戏实体，包含玩家信息和方法
 */
export function dialog(entity) {
  entity.player.dialog({
    type: GameDialogType.TEXT,
    title: "欢迎新玩家",
    content: `Hello World！${entity.player.name}`,
    titleBackgroundColor: new GameRGBAColor(0.93, 0.95, 0.54, 1.0),
    contentBackgroundColor: new GameRGBAColor(0.54, 0.68, 0.95, 1.0),
  });
}
```

![b.js代码示例](/QQ20241129-120550.png)

</details>

:::tip
**💡 提示**：与 TypeScript 版本相比，JavaScript 版本不需要指定类型参数，代码更简洁，但缺少类型安全保障。
:::

---

<div align="center">
  <p>❓ 有问题？加入 <a href="https://qm.qq.com/q/tvrI6iSl56">QQ群：492953731</a> 寻求帮助</p>
</div>
