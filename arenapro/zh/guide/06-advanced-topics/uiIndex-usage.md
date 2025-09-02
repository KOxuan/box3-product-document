# ArenaPro UI 索引使用指南

## 还在为“路径地狱”抓狂？

> 你在 UI 树里找节点，路径层级深、命名不统一、改了结构就全崩。每次都是：
>
> - “这个 `UiText` 的完整路径到底是啥？”
> - “UI 改了层级，我的 UI 节点全失效了！”
> - “我只想拿到元素，不想在层级里钻来钻去……”

从 V1.4.0 开始，ArenaPro 提供了“UI 索引”能力——像看“地图索引”一样，通过“屏幕名 + 节点名”直达目标元素，不再被路径困住。

## UI 索引能带来什么？

UI 索引是对 UI 树的“强类型投影”。它会为每个屏幕生成一个索引类，并提供统一入口来查找索引实例：

| 你将获得…               | 它意味着…                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------- |
| **🔎 强类型直达元素**   | 通过属性访问 UI 元素，IDE 自动补全、类型可见。                                     |
| **🧭 脱离路径依赖**     | 不再手写字符串路径，结构调整也不必批量改路径字符串。                               |
| **⚡ 首次预热，后续快** | 构造时按路径表一次性预热缓存，后续访问无需再查找。                                 |
| **🧩 命名冲突消解**     | 自动采用末级名/回退全路径/再追加序号，最大化获得“好用的属性名”。                   |
| **✅ 类型即规范**       | 不存在的屏幕在类型上直接是 `never`，问题在编译期暴露；运行时缺失返回 `undefined`。 |

:::tip
💡 核心优势：UI 索引是由插件自动生成和维护的“强类型镜像”。你只需按“屏幕名”获取索引实例，剩下的交给类型系统与缓存机制。
:::

## 如何获取并使用

### 生成索引文件

- 触发“同步地图资源”（例如按下 `Alt+Y`）或相关命令后，插件会扫描 UI 树并自动生成索引文件。
- 生成目录结构如下（自动生成，勿手动修改）：

```
client/UiIndex/
  ├─ index.ts                // 入口，默认导出 find()
  ├─ ClientUIWindow.ts       // 基类（缓存、按路径查找、预热逻辑）
  └─ screens/
      ├─ UiIndex_home.ts     // 示例：home 屏幕索引类
      └─ UiIndex_xxx.ts      // 其它屏幕索引类
```

> 若你看到导入路径为 `@client/UiIndex`，说明已在项目中配置了该别名，通常可直接使用该导入方式。

### 快速上手

```ts
import find from "@client/UiIndex";

// 1) 通过屏幕名获取索引实例（强类型）
const idx = find("blackground");
if (idx) {
  // 2) 直接通过强类型属性访问 UI 元素
  idx.uiText_content1;
  idx.uiImage_logo;
}
```

要点：

- `find(name)` 的返回类型由 `name` 决定：
  - 在类型上存在的屏幕名 -> 返回该屏幕对应的 `UiIndex_xxx` 实例类型。
  - 不存在的屏幕名 -> 返回类型为 `never`（编译期立即暴露问题）。
- 运行时如果确实未找到该屏幕，会返回 `undefined`，因此示例里有判空。

### 常用操作清单

- **获取索引实例**：`const idx = find("home")`，并判空处理。
- **访问元素**：`idx.uiText_title`、`idx.uiImage_logo` 等属性即为元素引用。
- **查看真实路径**：打开对应 `UiIndex_<Screen>.ts`，查阅 `static PATHS` 或 getter 注释。
- **结构改动后**：重新同步资源以更新索引，避免手写路径带来的维护成本。

## 功能概览

- 通过屏幕名获取“屏幕索引实例”，以强类型属性直接访问 UI 元素。
- 自动为每个屏幕生成 `UiIndex_屏幕名` 类，以及统一入口 `index.ts` 与基类 `ClientUIWindow.ts`。
- 命名冲突自动消重：优先用末级名称；冲突时回退为全路径；仍冲突则追加序号。
- 预热缓存：首次构造时即按 PATHS 路径表缓存节点，后续访问零额外查找。
- 类型增强：传入不存在的屏幕名在类型上返回 `never`；运行时找不到屏幕返回 `undefined`。

## API 参考

### 1) 默认导出：find(screenName)

- 作用：通过屏幕名获取该屏幕对应的 UI 索引实例。
- 类型：
  ```ts
  export default function find<Name extends string>(
    screenName: Name
  ): Name extends keyof typeof __UiIndexCtorMap
    ? InstanceType<(typeof __UiIndexCtorMap)[Name]>
    : never;
  ```
- 运行时返回：`UiIndex_xxx` 实例或 `undefined`（屏幕不存在）。
- 典型用法：
  ```ts
  const idx = find("home");
  if (idx) {
    idx.uiText_title;
  }
  ```

### 2) 屏幕索引类：`UiIndex_<Screen>`

- 每个屏幕对应一个类，继承自 `ClientUIWindow`。
- 主要成员：
  - `static readonly PATHS: readonly string[]`：该屏幕下需缓存的完整路径表。
  - 强类型 getters：例如 `get uiText_title(): UiText`，内部会从缓存中按 `PATHS[i]` 读取并强转类型。

### 3) 基类：ClientUIWindow

- 职责：
  - 维护以完整路径为键的缓存表 `__cache`。
  - 提供 `getByPath(path)` 根据完整路径查找元素。
  - 在构造时按 `PATHS` 进行预热，将所有路径映射到缓存。
- 关键方法：
  - `protected getByPath(path: string): UiScreen | UiElement | undefined`
  - `private __warmup(): void`

## 命名规则

- 属性名前缀与类型绑定：
  - `UiText` -> `uiText_...`
  - `UiImage` -> `uiImage_...`
  - `UiBox` -> `uiBox_...`
  - `UiScrollBox` -> `uiScrollBox_...`
  - `UiInput` -> `uiInput_...`
- 基础命名使用“路径最后一段名”；若冲突，则回退为“完整路径”；若仍冲突，自动追加序号 `_2/_3/...`。
- 支持中文/Unicode，非法字符将被替换为下划线，并确保首字符合法。

## 最佳实践

- 使用常量保存屏幕名，减少拼写错误：
  ```ts
  const SCREEN_HOME = "home" as const;
  const home = find(SCREEN_HOME);
  ```
- 对 `find()` 的返回值做判空保护，便于在运行时屏幕未挂载时优雅降级。

## 常见问题

- Q: 我传入了一个屏幕名，编辑器报类型是 never？

  - A: 该屏幕名不在类型映射表中，通常是生成缓存未更新或屏幕名写错。请确认屏幕名与生成是否最新。

- Q: 运行时返回 undefined？

  - A: 实例化时未找到该屏幕。请确认屏幕是否存在或已挂载；可在调用处添加判空逻辑。

- Q: 我想知道某个 getter 对应的真实路径？
  - A: 打开对应的 `UiIndex_<Screen>.ts` 文件，查看 `static PATHS` 或 getter 注释中的 `@description`。
