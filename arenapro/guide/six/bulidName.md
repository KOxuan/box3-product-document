# 🔧 构建配置优化指南

在神岛地图开发中，创作者经常需要为扩展地图的不同副图配置不同的代码文件。虽然部分代码可以复用，但每个副图可能有其独特的逻辑需求，因此需要为每个副图配置不同的入口文件。

为了解决这一问题，我们开发了构建配置优化功能，允许创作者灵活地配置不同的入口文件和输出文件名。

## ✨ 功能优势

<table>
  <tr>
    <th width="150">优势</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><b>🔄 灵活性</b></td>
    <td>支持为不同副图配置独立的入口文件</td>
  </tr>
  <tr>
    <td><b>📋 可维护性</b></td>
    <td>清晰的构建配置结构，便于后期维护</td>
  </tr>
  <tr>
    <td><b>⚡ 高效性</b></td>
    <td>简化构建流程，提高开发效率</td>
  </tr>
</table>

## 📝 配置文件数据

在 `dao3.config.json` 文件中，有一个 `outputAndUpdate` 属性，它是一个数组，支持填写多个对象或字符串。

### 🔍 使用数组的好处

| 优势            | 说明                                                                         |
| --------------- | ---------------------------------------------------------------------------- |
| **📊 灵活性**   | 数组结构允许我们配置多个输出文件数据，为不同的构建需求提供存储空间           |
| **🔄 可替换性** | 每次构建时，系统只会读取数组的第一项数据，便于创作者在需要时快速替换构建配置 |

:::tip
**💡 提示**：对数组顺序进行调整是切换不同构建配置的最简单方法。将需要使用的配置放在数组的第一位即可。
:::

### 📋 支持的格式

```json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        "bundle.js", // 字符串格式，指定输出文件名称。构建时读取数组第一项作为当前构建的数据。【HMR编译不会读取字符串格式】
        {
          // 对象格式，可同时配置输出文件名称、文件入口、服务端入口、客户端入口及描述信息。
          "name": "bundle2.js", // 输出文件名称
          "serverEntry": "src/App2.ts", // 服务端入口文件
          "clientEntry": "src/clientApp2.ts", // 客户端入口文件
          "description": "第二个代码模块示例，可根据实际需求更改。" // 描述信息
        }
      ]
      // 其他配置...
    }
  }
}
```

## 🚀 完整编译构建效果

### 📘 配置示例一

```json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        "bundle.js",
        {
          "name": "bundle2.js",
          "serverEntry": "src/App2.ts",
          "clientEntry": "src/clientApp2.ts",
          "description": "第二个代码模块示例，可根据实际需求更改。"
        }
      ]
      // 其他配置...
    }
  }
}
```

<div style="border-left: 4px solid #42b983; padding-left: 15px; margin: 15px 0;">
<p><strong>📤 构建输出：</strong></p>
<p>在此配置下，构建输出的文件名称为 <code>_server_bundle.js</code> 和 <code>_client_bundle.js</code>，并会上传到神岛编辑器中。</p>
</div>

### 📙 配置示例二

```json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        {
          "name": "bundle2.js",
          "serverEntry": "src/App2.ts",
          "clientEntry": "src/clientApp2.ts",
          "description": "第二个代码模块示例，可根据实际需求更改。"
        },
        "bundle.js"
      ]
      // 其他配置...
    }
  }
}
```

<div style="border-left: 4px solid #42b983; padding-left: 15px; margin: 15px 0;">
<p><strong>📤 构建输出：</strong></p>
<p>在此配置下，服务端入口文件变为 <code>src/App2.ts</code>，客户端入口文件变为 <code>src/clientApp2.ts</code>，因此构建输出的文件名称为 <code>_server_bundle2.js</code> 和 <code>_client_bundle2.js</code>，并会上传到神岛编辑器中。</p>
</div>

## 🔥 HMR 编译构建效果

<div style="padding: 15px;border-radius: 5px; margin: 15px 0;">
<p><strong>📚 详细说明：</strong>请参考 <a href="/guide/four/hmr.html#%E4%BB%A3%E7%A0%81%E5%88%86%E7%A6%BB-%E5%A4%9A%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6">代码分离（多入口文件）</a> 章节了解更多关于热模块替换(HMR)编译构建的信息。</p>
</div>

:::warning
**⚠️ 注意**：HMR 编译不会读取字符串格式的配置，只会处理对象格式的配置项。确保在使用 HMR 功能时，你的配置采用对象格式。
:::

## 📋 使用说明

最后，创作者只需在不同副图下的 `index.js` 或 `clientIndex.js` 文件中引入对应的构建输出文件即可。这一功能极大地提高了开发过程中的灵活性和效率，使得代码管理更加清晰和有序。

<div style="text-align: center; margin: 20px 0; padding: 10px; border-radius: 5px;">
  <img src="/QQ20241130-103933.png" alt="构建配置使用示例" width="700" />
  <p style="text-align: center; font-style: italic; margin-top: 10px;">图1: 在编辑器中使用构建输出文件</p>
</div>

## 📌 最佳实践

| 场景              | 推荐做法                                                   |
| ----------------- | ---------------------------------------------------------- |
| **🗺️ 多副图开发** | 为每个副图创建独立的入口文件，并在配置中定义清晰的文件名称 |
| **🔄 频繁切换**   | 通过调整数组顺序来切换活跃配置，而不是修改配置内容         |
| **📝 团队协作**   | 为每个配置项添加详细的描述信息，便于团队成员理解           |
| **🔍 调试优化**   | 在开发阶段使用 HMR 功能，提高调试效率                      |

:::tip
**💡 技巧**：创建一个配置模板文件作为参考，可以帮助团队成员快速理解和应用正确的构建配置格式。
:::
