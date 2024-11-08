# 第三方神岛npm包

为了助力创作者高效地构建项目，欢迎各位创作者分享自己的工具包，以便其他创作者能够轻松使用并加速他们的创作进程。

## 参考信息

为了帮助你提交符合要求的npm包，以下是一个详细的步骤指南，包括创建npm包、发布到npm仓库、以及确保包符合神岛Pro版的要求。

示例包：[摄像机高阶贝塞尔](/package/GameHighBessel)

### 1. 创建npm包

#### 初始化npm项目

   ```bash
   npm init -y
   ```

#### 编写代码

3. **创建必要的文件和目录**：
   - `src/` 目录：存放源代码文件。
   - `README.md` 文件：包含包的描述、用法示例、API文档等。
   - `package.json` 文件：包含包的元数据，如依赖项、脚本、版本等。

4. **编写源代码**：
   - 在 `src/` 目录下创建你的源代码文件，例如 `index.js`。
   - 在 `src/` 目录下创建你的类型提示文件，例如 `index.d.ts`。

5. **编写README.md**：
   - 确保README文件详细描述了你的包的功能、用法、API接口等信息。

#### 导出你的代码

1. **导出你的代码**：
  - 为了其他创作者能正常引入，你需要使用以下方式导出代码。
   ```javascript
   export default class GameHighBessel{/*...*/}
   //或
   export class GameHighBessel{/*...*/}
   ```

### 2. 发布npm包

#### 登录npm

   ```bash
   npm login
   ```

#### 更新package.json

9. **确保package.json中的字段完整**：
   - `name`：包的唯一名称。【如果加入了组织dao3fun，可加上组织名，例如：`@dao3fun/yourPackageName`】
   - `version`：包的版本号，遵循语义化版本控制（Semantic Versioning）。
   - `description`：包的简短描述。
   - `main`：入口文件路径。
   - `type`：代码提示类型信息，填写路径。
   - `scripts`：包含构建、测试等脚本。
   - `dependencies` 和 `devDependencies`：包的依赖项。
   - `keywords`：包的关键词，有助于用户搜索。
   - `author`：包的作者信息。
   - `license`：包的许可证类型。

#### 发布包

```bash
npm publish --access=public
```

### 3. 确保包符合神岛Pro版要求

#### 测试包

11. **在神岛Pro版中测试你的包**：
    - 确保包可以在开启ArenaPro环境下中成功安装引入。
    - 确保包的功能在神岛Pro版中正常运行。

#### 更新文档和示例

12. **根据测试结果更新README.md**：
    - 提供在神岛Pro版中使用包的详细步骤。
    - 添加在神岛Pro版中运行成功的示例代码。

### 4. 提交到QQ群

13. **加入QQ群（492953731）**：
    - 在群内提交你的npm包信息，包括包名、功能描述、README链接等，我们会收录在文档中。

### 注意事项

- **保持包的简洁和高效**：确保你的包不包含不必要的依赖项，且性能良好。
- **持续更新和维护**：根据用户反馈和神岛Pro版的更新，及时更新你的包。
