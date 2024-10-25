# 模块热替换（HMR）编译

HMR（Hot Module Replacement）是webpack提供的一个强大的功能，可以做到在编辑代码过程中，自动编译，并上传到Arena脚本编辑器，这对于调试和测试来说非常有用。

![](https://static.codemao.cn/pickduck/HJBNk__g1x.gif?hash=Fq9hwMXyh-2yGkZY1t42TXPsw57i)

## 注意事件

### 监听范围与方式

- 仅针对已修改的文件进行编译，极大缩短编译时间，但会根据代码量与电脑性能影响编译时间。

- 自动监听server与client目录下的入口文件，一旦相关文件变动，立即触发编译流程。

- **非监听的文件**：如：`node_modules`、`dist`、 `webpack.config.js`等文件修改，不会触发编译。

### 配置文件

- 在启动HMR服务器之前，必须确保所有相关的配置文件（如`webpack.config.js`、`dao3.config.json`、`tsconfig.json`）已经正确配置。这是因为HMR服务器在启动时会读取这些配置，并在整个开发过程中使用这些配置。

- **后果**：如果在HMR服务器运行后修改这些配置文件，新的配置将不会被自动读取和应用。这意味着你需要重启HMR服务器才能使更改生效。

### 别名的不同

- **完整编译流程**：在完整的编译流程中，项目通常会被编译成多个小模块的`JavaScript`文件，这些文件会被放置在`dist`文件夹中。它会从`dist`文件夹路径中读取文件，而这个路径的具体位置则取决于`tsconfig.js`配置文件中的`rootDir`属性，它会影响打包后的实际文件存放位置。

```javascript
// webpack.config.js
const path = require('path');
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'dist/server/src'),// [!code focus]
            'component': path.resolve(__dirname, 'dist/server/src/Component/Definition'),// [!code focus]
            '@shares': path.resolve(__dirname, 'dist/shares'),// [!code focus]
        }
    }
};
```

- **HMR编译流程**：与完整编译流程不同，HMR编译主要是为了支持实时更新模块。它会从当前所在的文件夹（`server`，`client`）作为基本路径来读取文件，而不是从`dist`文件夹中读取，因为`dist`文件夹仅用于生成捆绑后的文件（如`_xxxx_bundle.js`）。
```javascript
// webpack.config.js
const path = require('path');
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),// [!code focus]
            'component': path.resolve(__dirname, 'src/Component/Definition'),// [!code focus]
            '@shares': path.resolve(__dirname, '../shares'),// [!code focus]
        }
    }
};
```
### 神岛账户有效性

- 在开启HMR服务器之前，确保已经登录了神岛账号并配置了地图。这是因为某些功能（如数据上传）可能依赖于这些配置。

- **后果**：如果未登录或未配置，可能会影响到数据的上传和同步。

### 多工作区使用HMR服务器

- 在各自工作区开启HMR服务器即可，会自动判断当前工作区，自动切换到对应工作区的配置文件。



## 如何开启HMR服务器

在VSCode中，按下`Shift+Ctrl+P`（Windows/Linux）或 `Shift+Cmd+P`（Mac）调出`命令面板（Command Palette）`。  
  
![命令面板](/commd.webp)  
  
输入`arenapro`，找到 `启动模块热替换服务器[startHMR]`选项并点击。  

![命令面板](/01734c7b-4e5f-4756-920f-2becd8133bf4.png)  

开启后就可以监听到文件修改了，会自动编译，并上传到神岛。

![命令面板](/QQ20241024-163837.png)  


## 关于重启HMR服务器说明
当前，由于技术问题，导致无法彻底关闭HMR服务器，所以需要重启vsc编辑器，然后再次开启服务器即可。（`ctrl+shift+p`输入`reload window`）
