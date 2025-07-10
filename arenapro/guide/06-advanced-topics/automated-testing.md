# 你的代码健康吗？为项目引入自动化测试

在软件工程领域，有一句话经久不衰：“任何没有经过测试的代码，都是有问题的代码。” 对于逻辑复杂的项目——尤其是游戏——更是如此。自动化测试，是保证代码质量、提升重构信心、减少手动重复测试的基石。

> **重要提示：本教程的适用范围**
>
> 本文介绍的单元测试方法，是用于验证你项目中**独立于游戏引擎的、纯粹的业务逻辑**。
>
> - **可以测什么？**：算法（如伤害计算、寻路逻辑）、数据处理、工具函数等不直接调用神岛 API 的代码。
> - **不能测什么？**：本方法在一个独立的 Node.js 环境中运行，**无法直接测试或调试任何需要游戏在线才能运行的神岛 API**（例如 `world.onPlayerJoin`、`player.hp` 等）。

在本教程中，我们将使用业界最流行的测试框架 [Jest](https://jestjs.io/)，一步步为你的 ArenaPro 项目中的“纯逻辑”部分构建起一张质量“安全网”。

---

### 第一步：配置测试环境

首先，我们需要为项目安装必要的开发依赖。

```bash
npm install --save-dev jest ts-jest @types/jest
```

- `jest`: Jest 测试框架的核心。
- `ts-jest`: 一个 TypeScript 的预处理器，让 Jest 能够直接运行 `.ts` 文件。
- `@types/jest`: 为 Jest 的 API 提供 TypeScript 类型定义。

接下来，在你的项目根目录下创建一个 `jest.config.js` 文件，这是 Jest 的配置文件。

```javascript
// jest.config.js
module.exports = {
  // 指定预设，ts-jest 会处理 TypeScript 文件
  preset: "ts-jest",
  // 指定测试环境，对于 ArenaPro 项目，我们使用默认的 node 环境
  testEnvironment: "node",
  // Jest 应该在哪些目录中搜索测试文件
  roots: ["<rootDir>/server/src", "<rootDir>/client/src"，"<rootDir>/shares"],
  // 匹配测试文件的正则表达式
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // Jest 在运行测试前需要加载的模块扩展名
  moduleFileExtensions: ["ts", "tsx", "js", "cjs", "mjs", "jsx", "json"],
};
```

最后，在 `package.json` 中添加一个用于运行测试的脚本：

```json
// package.json
{
  // ... 其他配置
  "scripts": {
    "jest:test": "jest" // <-- 新增这一行
  }
  // ... 其他配置
}
```

至此，我们的测试环境就准备就绪了。

---

### 第二步：编写你的第一个测试

我们从最简单的情况开始：测试一个不依赖任何游戏 API 的纯函数。

#### A. 准备待测代码

假设在 `server/src/` 目录下，我们有一个 `damage.ts` 模块，用于计算伤害。

```typescript
// server/src/damage.ts

// 使用 'export' 关键字导出一个 TypeScript 接口。
// 接口（Interface）用于定义对象的“形状”或“契约”，即一个对象应该包含哪些属性以及这些属性的类型。
// 这里定义了计算伤害时所需要的所有参数。
export interface DamageOptions {
  // 攻击方的攻击力，必须是数字类型。
  attack: number;
  // 防御方的防御力，必须是数字类型。
  defense: number;
  // '?' 表示这是一个可选属性。
  // 暴击率，一个 0 到 1 之间的数字，例如 0.1 代表 10% 的暴击率。
  criticalChance?: number;
  // 暴击伤害倍率，也是一个可选属性。
  criticalMultiplier?: number;
}

/**
 * 计算最终对目标造成的伤害。
 * 这是一个 JSDoc 风格的注释，用于为函数提供详细的描述、参数说明和返回值说明。
 * 当你在其他地方调用这个函数时，IDE（如 VS Code）会显示这些信息。
 * @param options - 包含伤害计算所需参数的对象，遵循 DamageOptions 接口。
 * @returns 返回计算后的最终伤害数值。
 */
export function calculateDamage(options: DamageOptions): number {
  // 使用对象解构赋值从 'options' 参数中提取属性。
  // 这种语法可以让我们方便地为可选参数设置默认值。
  const {
    attack,
    defense,
    criticalChance = 0,
    criticalMultiplier = 1.5,
  } = options;

  // 输入验证：进行一些基本的检查，确保输入值在合理范围内。
  if (attack <= 0 || defense < 0) {
    return 0;
  }

  // 计算基础伤害，使用 Math.max(1, ...) 确保伤害至少为 1。
  const baseDamage = Math.max(1, attack - defense);

  // 判断是否触发暴击。Math.random() 会生成一个 0 到 1 之间的随机数。
  const isCritical = Math.random() < criticalChance;

  // 根据是否暴击，返回最终伤害。
  // 使用三元运算符，如果暴击，则返回基础伤害乘以暴击倍率的结果（向下取整）。
  return isCritical ? Math.floor(baseDamage * criticalMultiplier) : baseDamage;
}
```

#### B. 编写测试用例

现在，我们为它编写一个测试。按照约定，测试文件通常与源文件放在一起，并以 `.test.ts` 结尾。

创建 `server/src/damage.test.ts` 文件：

```typescript
// server/src/damage.test.ts
// 这是一个使用 Jest 测试框架编写的单元测试文件。

// 从 './damage' 文件中导入待测试的 calculateDamage 函数。
import { calculateDamage } from "./damage";
// 从 '@jest/globals' 导入 Jest 提供的全局测试函数
import { describe, it, expect, jest } from "@jest/globals";

// 'describe' 用于将一组相关的测试打包成一个测试套件。
describe("calculateDamage", () => {
  // 'it' 定义一个具体的测试用例，描述它在测试什么场景。
  it("基础场景：当攻击力大于防御力，但差值小于1时，伤害应为1", () => {
    // 'expect()'包裹实际的函数调用结果，'.toBe()'是“匹配器”，用于检查结果是否与期望值相等。
    expect(calculateDamage({ attack: 10, defense: 9.5 })).toBe(1);
  });

  // 为了让测试结果可预测，我们需要控制随机性。
  it("随机性控制：当不发生暴击时，应返回基础伤害", () => {
    // 'jest.spyOn' 用于“监视”一个对象的某个方法，并可以修改它的行为。
    // 这里我们让 Math.random() 在本次测试中总是返回 0.5，确保不会触发暴击。
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.5);

    expect(
      calculateDamage({ attack: 100, defense: 20, criticalChance: 0.1 })
    ).toBe(80);

    // 测试完成后，恢复 Math.random 的原始实现，避免影响其他测试。
    spy.mockRestore();
  });

  it("随机性控制：当发生暴击时，应返回暴击伤害", () => {
    // 同样，我们模拟 Math.random() 返回一个必定触发暴击的值。
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.05);

    expect(
      calculateDamage({
        attack: 100,
        defense: 20,
        criticalChance: 0.1,
        criticalMultiplier: 2,
      })
    ).toBe(160);

    spy.mockRestore();
  });

  it("边界场景：当输入无效（如负数）时，应返回0", () => {
    expect(calculateDamage({ attack: -10, defense: 20 })).toBe(0);
    expect(calculateDamage({ attack: 100, defense: -20 })).toBe(0);
  });
});
```

> **核心思想**：一个可靠的单元测试必须是**可预测、可重复的**。通过 `jest.spyOn` 控制 `Math.random` 的输出，我们移除了代码中的不确定性，这是编写测试的关键技巧。

---

### 第三步：运行并解读测试报告

打开你的终端，运行我们在 `package.json` 中定义好的脚本：

```bash
npm jest:test
```

如果一切顺利，你将看到 Jest 运行并输出成功的结果：

```bash
PASS  server/src/damage.test.ts
 ✓ 基础场景：当攻击力大于防御力，但差值小于1时，伤害应为1 (2ms)
 ✓ 随机性控制：当不发生暴击时，应返回基础伤害
 ✓ 随机性控制：当发生暴击时，应返回暴击伤害 (1ms)
 ✓ 边界场景：当输入无效（如负数）时，应返回0

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.246 s
```

这份报告中的每一项都告诉你：

- **Test Suites**: 共运行了多少个测试文件（套件），通过了几个。
- **Tests**: 共运行了多少个测试用例（`it`块），通过了几个。
- **Time**: 本次测试总耗时。

这个绿色的 "PASS" 标志，就是你代码健康的有力证明。

## 结论

虽然初次配置会有些繁琐，但为你的核心业务逻辑（算法、数据转换等）编写单元测试，是一项回报率极高的投资。它能让你在未来的开发中，充满信心地进行迭代和重构。

现在，你已经掌握了为 ArenaPro 项目中的纯逻辑模块引入自动化测试的核心技能。尝试为你项目中最重要的那部分算法编写一些测试吧，迈出代码健康的第一步！
