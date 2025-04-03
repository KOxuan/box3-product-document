# React 事件处理

React 提供了一套一致的事件处理系统，能够处理用户交互并响应各种操作。本文将介绍在 React 中如何有效处理事件。

## 基本事件处理

### 事件绑定

在 React 中，事件采用驼峰命名法（如 `onClick` 而非 `onclick`）：

```tsx
import React from "@dao3fun/react";

function Button() {
  const handleClick = () => {
    console.log("按钮被点击");
  };

  return (
    <box
      style={{
        backgroundColor: Vec3.create({ r: 0, g: 122, b: 255 }),
        size: { offset: Vec2.create({ x: 100, y: 40 }) },
      }}
      onClick={handleClick}
    >
      <text style={{ textColor: Vec3.create({ r: 255, g: 255, b: 255 }) }}>
        点击我
      </text>
    </box>
  );
}

React.render(<Button />, ui);
```

### 内联事件处理器

可以直接在 JSX 中定义事件处理器：

```tsx
function InlineButton() {
  return (
    <box
      onClick={() => {
        console.log("按钮被点击");
        // 执行更多操作...
      }}
      style={{
        backgroundColor: Vec3.create({ r: 244, g: 67, b: 54 }),
        size: { offset: Vec2.create({ x: 100, y: 40 }) },
      }}
    >
      <text>内联处理器</text>
    </box>
  );
}
```

## 事件对象

React 事件处理器会收到一个合成事件对象，类似于原生 DOM 事件：

```tsx
import { useState } from "@dao3fun/react/lib/hooks";

function InputExample() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // 访问事件对象的 target 属性
    setValue(event.target.value);
  };

  return (
    <box>
      <input
        value={value}
        onChange={handleChange}
        style={{
          position: { offset: Vec2.create({ x: 0, y: 0 }) },
          size: { offset: Vec2.create({ x: 200, y: 30 }) },
        }}
      />
      <text style={{ position: { offset: Vec2.create({ x: 0, y: 40 }) } }}>
        输入值: {value}
      </text>
    </box>
  );
}
```

### 事件类型

常见的事件类型包括：

```tsx
function EventsDemo() {
  return (
    <box>
      {/* 鼠标事件 */}
      <box
        onClick={() => console.log("点击")}
        onDoubleClick={() => console.log("双击")}
        onMouseEnter={() => console.log("鼠标进入")}
        onMouseLeave={() => console.log("鼠标离开")}
        style={{
          backgroundColor: Vec3.create({ r: 33, g: 150, b: 243 }),
          size: { offset: Vec2.create({ x: 100, y: 40 }) },
        }}
      >
        <text>鼠标事件</text>
      </box>

      {/* 键盘事件 */}
      <input
        onKeyDown={(e) => console.log("按键按下:", e.key)}
        onKeyUp={(e) => console.log("按键释放:", e.key)}
        style={{
          position: { offset: Vec2.create({ x: 0, y: 50 }) },
          size: { offset: Vec2.create({ x: 200, y: 30 }) },
        }}
      />

      {/* 表单事件 */}
      <input
        onChange={(e) => console.log("值变化:", e.target.value)}
        onFocus={() => console.log("获得焦点")}
        onBlur={() => console.log("失去焦点")}
        style={{
          position: { offset: Vec2.create({ x: 0, y: 90 }) },
          size: { offset: Vec2.create({ x: 200, y: 30 }) },
        }}
      />
    </box>
  );
}
```

## 事件处理的最佳实践

### 1. 绑定 `this` 上下文

在类组件中，需要确保事件处理器正确绑定 `this`：

```tsx
// 类组件示例
class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // 绑定方法到实例
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <box onClick={this.handleClick}>
        <text>点击次数: {this.state.count}</text>
      </box>
    );
  }
}

// 使用箭头函数自动绑定
class ModernButtonCounter extends React.Component {
  state = { count: 0 };

  // 箭头函数自动绑定 this
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <box onClick={this.handleClick}>
        <text>点击次数: {this.state.count}</text>
      </box>
    );
  }
}

// 函数组件不需要担心 this 绑定问题
function FunctionalButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <box onClick={() => setCount(count + 1)}>
      <text>点击次数: {count}</text>
    </box>
  );
}
```

### 2. 传递参数

向事件处理器传递参数的方法：

```tsx
function ItemList() {
  const items = [
    { id: 1, name: "项目 1" },
    { id: 2, name: "项目 2" },
    { id: 3, name: "项目 3" },
  ];

  const handleItemClick = (item) => {
    console.log("点击项目:", item.name);
  };

  return (
    <box>
      {items.map((item) => (
        <box
          key={item.id}
          style={{
            position: { offset: Vec2.create({ x: 0, y: item.id * 40 }) },
            backgroundColor: Vec3.create({ r: 236, g: 239, b: 241 }),
          }}
          onClick={() => handleItemClick(item)} // 使用箭头函数传递参数
        >
          <text>{item.name}</text>
        </box>
      ))}
    </box>
  );
}
```

### 3. 避免创建新函数

在渲染中频繁创建新函数可能影响性能，使用 `useCallback` 缓存函数：

```tsx
import { useCallback, useState } from "@dao3fun/react/lib/hooks";

function OptimizedList() {
  const [selectedId, setSelectedId] = useState(null);
  const items = [1, 2, 3, 4, 5];

  // 缓存处理函数
  const handleItemClick = useCallback((id) => {
    setSelectedId(id);
    console.log(`选择项目 ${id}`);
  }, []);

  return (
    <box>
      {items.map((id) => (
        <box
          key={id}
          style={{
            position: { offset: Vec2.create({ x: 0, y: id * 40 }) },
            backgroundColor:
              id === selectedId
                ? Vec3.create({ r: 33, g: 150, b: 243 })
                : Vec3.create({ r: 236, g: 239, b: 241 }),
          }}
          onClick={() => handleItemClick(id)}
        >
          <text>项目 {id}</text>
        </box>
      ))}
    </box>
  );
}
```

## 常见事件场景

### 1. 表单提交

处理表单提交事件：

```tsx
import { useState } from "@dao3fun/react/lib/hooks";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认提交行为

    // 表单验证
    if (!username || !password) {
      setError("请填写所有字段");
      return;
    }

    // 处理登录
    console.log("登录提交", { username, password });
    setError("");
  };

  return (
    <box>
      <text style={{ fontSize: 20 }}>登录</text>

      {error && (
        <text
          style={{
            textColor: Vec3.create({ r: 244, g: 67, b: 54 }),
            position: { offset: Vec2.create({ x: 0, y: 30 }) },
          }}
        >
          {error}
        </text>
      )}

      <input
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          position: { offset: Vec2.create({ x: 0, y: 60 }) },
          size: { offset: Vec2.create({ x: 200, y: 30 }) },
        }}
      />

      <input
        placeholder="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          position: { offset: Vec2.create({ x: 0, y: 100 }) },
          size: { offset: Vec2.create({ x: 200, y: 30 }) },
        }}
      />

      <box
        style={{
          backgroundColor: Vec3.create({ r: 33, g: 150, b: 243 }),
          position: { offset: Vec2.create({ x: 0, y: 140 }) },
          size: { offset: Vec2.create({ x: 100, y: 40 }) },
        }}
        onClick={handleSubmit}
      >
        <text>登录</text>
      </box>
    </box>
  );
}
```

### 2. 拖放操作

实现简单的拖放功能：

```tsx
import { useState } from "@dao3fun/react/lib/hooks";

function DragDropDemo() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    // 计算鼠标在元素内的相对位置
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    // 更新位置，考虑偏移量
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <box
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      style={{
        position: { offset: Vec2.create({ x: position.x, y: position.y }) },
        size: { offset: Vec2.create({ x: 100, y: 100 }) },
        backgroundColor: isDragging
          ? Vec3.create({ r: 244, g: 67, b: 54 })
          : Vec3.create({ r: 33, g: 150, b: 243 }),
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <text>拖动我</text>
    </box>
  );
}
```

### 3. 键盘快捷键

监听键盘事件和实现快捷键：

```tsx
import { useEffect, useState } from "@dao3fun/react/lib/hooks";

function KeyboardShortcuts() {
  const [keyPressed, setKeyPressed] = useState("");

  useEffect(() => {
    // 添加全局键盘事件监听
    const handleKeyDown = (e) => {
      setKeyPressed(e.key);

      // 实现快捷键
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // 阻止浏览器默认保存行为
        console.log("保存操作 (Ctrl+S)");
      }

      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        console.log("撤销操作 (Ctrl+Z)");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 清理函数
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <box>
      <text>按下的键: {keyPressed}</text>
      <text style={{ position: { offset: Vec2.create({ x: 0, y: 30 }) } }}>
        尝试按 Ctrl+S 或 Ctrl+Z
      </text>
    </box>
  );
}
```

## 错误处理

在事件处理中捕获错误：

```tsx
function ErrorHandlingButton() {
  const handleClick = () => {
    try {
      // 可能会抛出错误的代码
      const result = someFunctionThatMightFail();
      console.log("操作成功:", result);
    } catch (error) {
      console.error("操作失败:", error);
      // 显示错误信息给用户
    }
  };

  return (
    <box onClick={handleClick}>
      <text>执行操作</text>
    </box>
  );
}
```

## 最佳实践总结

1. **事件命名规范**

   - 使用 `handle` 前缀命名事件处理函数
   - 使用 `on` 前缀命名事件回调属性

2. **性能优化**

   - 使用 `useCallback` 缓存事件处理函数
   - 避免在渲染时内联创建函数
   - 避免不必要的组件重新渲染

3. **事件委托**

   - 将事件处理器放在父元素上
   - 通过事件对象识别实际触发事件的元素

4. **表单处理**

   - 使用受控组件管理表单状态
   - 集中处理表单验证逻辑
   - 清晰的错误状态和反馈

5. **可访问性**
   - 使用键盘事件增强可访问性
   - 确保元素可通过键盘访问
   - 添加适当的 ARIA 属性
