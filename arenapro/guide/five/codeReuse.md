# 代码复用与统一函数定义

在软件开发中，代码复用是提高开发效率和减少错误的关键策略。通过定义统一的函数并将其放置在共享脚本中，可以实现高效的代码复用。

## 应用场景

在客户端与服务端交互的场景中，当两者需要共享某些功能或逻辑时，使用共享脚本可以确保代码的一致性。

## 注意事项

::: warning
⚠️ 由于客户端与服务端在架构设计上存在差异，API 支持可能不同，JavaScript 原生功能的支持也可能不同。因此，在部署脚本前，请务必验证其能否在客户端与服务端环境中顺利运行。
:::

## 实现方案

### 创建共享脚本

为了确保客户端和服务端都能访问到相同的函数，我们可以在项目的`shares`文件夹中创建一个共享脚本文件，比如`utils.ts`。

### 函数定义规范

在共享脚本中，我们定义那些需要在两端共享的函数，并遵循以下规范：

### 示例代码

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

## 使用指南

### 服务端使用

在服务端的代码中，我们可以这样使用`utils.ts`中定义的函数：

### 客户端使用

在客户端的代码中，我们可以这样使用`utils.ts`中定义的函数：

```javascript
// App.ts
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

### 在客户端使用共享函数

```javascript
// clientApp.ts
import { formatUserName, isValidEmail } from "../../shares/utils";

const user = {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
};

const formattedName = formatUserName(user.firstName, user.lastName);
console.log(`User Name: ${formattedName}`);

const emailValid = isValidEmail(user.email);
console.log(`Email Valid: ${emailValid}`);
```

通过这种方法，我们实现了代码的高效复用，同时确保了客户端和服务端在处理相同逻辑时的一致性和准确性。这有助于提高软件的可维护性和可扩展性，并减少因重复代码而引入的错误。
