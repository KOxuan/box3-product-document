# 改变构建文件名及入口

在开发神岛地图的过程中，创作者经常会遇到扩展地图下不同副图对应不同代码的情况。尽管部分代码可以复用，但每个副图可能都有其独特的逻辑，因此希望为每个副图配置不同的入口文件。为满足这一需求，我们开发了改变入口文件和构建输出文件名的功能。

这一功能使得创作者能够轻松地为不同副图引入不同的代码文件，从而提高开发效率和代码的可维护性。

## 配置文件数据

在`dao3.config.json`文件中，有一个`outputAndUpdate`属性，它是一个数组，支持填写多个对象或字符串。

### 使用数组的好处

- **灵活性**：数组结构允许我们配置多个输出文件数据，为不同的构建需求提供存储空间。
- **可替换性**：每次构建时，系统只会读取数组的第一项数据。这种设计便于创作者在需要时快速替换构建配置。

### 支持的格式


```json
{
    "ArenaPro": {
        "file": {
            "outputAndUpdate": [
                "bundle.js", // 字符串格式，指定输出文件名称。构建时读取数组第一项作为当前构建的数据。【HMR编译不会读取字符串格式】
                {   // 对象格式，可同时配置输出文件名称、文件入口、服务端入口、客户端入口及描述信息。
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


## 完整编译构建效果

### 配置示例一

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

在此配置下，构建输出的文件名称为`_server_bundle.js`和`_client_bundle.js`，并会上传到神岛编辑器中。

### 配置示例二

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

在此配置下，服务端入口文件变为`src/App2.ts`，客户端入口文件变为`src/clientApp2.ts`，因此构建输出的文件名称为`_server_bundle2.js`和`_client_bundle2.js`，并会上传到神岛编辑器中。

## HMR编译构建效果

请看：[代码分离（多入口文件）](/guide/four/hmr.html#%E4%BB%A3%E7%A0%81%E5%88%86%E7%A6%BB-%E5%A4%9A%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6)

## 使用说明

最后，创作者只需在不同副图下的`index.js`或`clientIndex.js`文件中引入对应的构建输出文件即可。这一功能极大地提高了开发过程中的灵活性和效率，使得代码管理更加清晰和有序。

![](/QQ20241130-103933.png)