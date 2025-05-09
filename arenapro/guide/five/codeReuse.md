# 🔄 代码复用与统一函数定义

在软件开发中，代码复用是提高开发效率和减少错误的关键策略。通过定义统一的函数并将其放置在共享脚本中，可以实现高效的代码复用。

## 📋 应用场景

| 场景                   | 说明                           |
| ---------------------- | ------------------------------ |
| **客户端与服务端交互** | 当两者需要共享某些功能或逻辑时 |
| **通用工具函数**       | 日期格式化、数据验证等常用功能 |
| **业务逻辑复用**       | 游戏规则、计分系统等核心逻辑   |

## ⚠️ 注意事项

:::warning
**⚠️ 跨环境兼容性警告**：由于客户端与服务端在架构设计上存在差异，API 支持可能不同，JavaScript 原生功能的支持也可能不同。因此，在部署脚本前，请务必验证其能否在客户端与服务端环境中顺利运行。
:::

## 🛠️ 实现方案

### 1️⃣ 创建共享脚本

为了确保客户端和服务端都能访问到相同的函数，我们可以在项目的`shares`文件夹中创建一个共享脚本文件，比如`utils.ts`。

<div style="text-align: center;">
  <img src="https://static.codemao.cn/coco/player/unstable/c4lz_gRVPa.png" alt="共享脚本文件结构" width="300" />
</div>

### 2️⃣ 函数定义规范

<table>
  <tr>
    <th width="150">规范要点</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>适用性检查</b></td>
    <td>确保函数在客户端和服务端都能正常运行</td>
  </tr>
  <tr>
    <td><b>类型定义</b></td>
    <td>使用TypeScript类型来增强代码的可靠性</td>
  </tr>
  <tr>
    <td><b>命名规范</b></td>
    <td>使用清晰、描述性的函数名称</td>
  </tr>
  <tr>
    <td><b>导出声明</b></td>
    <td>明确导出需要共享的函数</td>
  </tr>
</table>

### 3️⃣ 示例代码

以下是一个在`utils.ts`中定义共享函数的示例：

```javascript
// utils.ts

// 定义一个用于格式化用户姓名的函数，并导出函数
export function formatUserName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

// 定义一个用于检查电子邮件格式是否有效的函数，并导出函数
export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

## 📘 使用指南

### 🖥️ 服务端使用

在服务端的代码中，我们可以这样使用`utils.ts`中定义的函数：

```javascript
// server/App.ts
import { formatUserName, isValidEmail } from "../../shares/utils";

export default {
  async onPlayerJoin(player) {
    const userData = await player.getStorageAsync("userData");
    if (userData) {
      const formattedName = formatUserName(
        userData.firstName,
        userData.lastName
      );
      player.sendChat(`欢迎回来, ${formattedName}!`);

      if (!isValidEmail(userData.email)) {
        player.sendChat("请更新你的电子邮件地址");
      }
    }
  },
};
```

### 📱 客户端使用

在客户端的代码中，我们可以这样使用`utils.ts`中定义的函数：

```javascript
// client/App.ts
import { formatUserName, isValidEmail } from "../../shares/utils";

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
};

const formattedName = formatUserName(user.firstName, user.lastName);
console.log(`User Name: ${formattedName}`);

const emailValid = isValidEmail(user.email);
console.log(`Email Valid: ${emailValid}`);
```

## 🌟 优势与效益

| 优势           | 说明                                     |
| -------------- | ---------------------------------------- |
| **代码一致性** | 确保客户端和服务端使用相同的函数实现     |
| **维护效率**   | 只需在一处修改，更改即可反映在所有使用处 |
| **可读性提升** | 代码结构更清晰，功能职责更明确           |
| **错误减少**   | 减少因重复实现而导致的逻辑不一致问题     |

:::tip
**💡 最佳实践**：在开发过程中，将所有共享逻辑放入`shares`文件夹，并在早期就考虑哪些功能需要在客户端和服务端之间共享。
:::

通过这种方法，我们实现了代码的高效复用，同时确保了客户端和服务端在处理相同逻辑时的一致性和准确性。这有助于提高软件的可维护性和可扩展性，并减少因重复代码而引入的错误。
