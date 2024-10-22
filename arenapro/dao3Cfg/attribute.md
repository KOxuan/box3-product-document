# dao3Cfg属性

在配置文件**dao3.config.json**中，你可以配置编译和上传行为。
```json
{
  "ArenaPro": {
    "file": {
      "typescript": {
        "server": {
          "base": "./server",
          "entry": "src/App.ts",
          "development": false,
          "webpack": "./server/webpack.config.js"
        },
        "client": {
          "base": "./client",
          "entry": "src/clientApp.ts",
          "development": false,
          "webpack": "./client/webpack.config.js"
        }
      }
    },        
    "outputAndUpdate": [
      "bundle.js", 
      {
        "name": "bundle2.js",
        "serverEntry": "src/App.ts",
        "clientEntry": "src/clientApp.ts",
        "description": "第二个代码模块示例，可更改。"
      }
    ],
    "map": {
      "id": "",
      "editHash": "",
      "playHash": ""
    }
  }
}
```



| 属性 | 必填 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| file.typescript.server | √ | object |  | Arena**服务端**项目配置 |
| file.typescript.server.base | √ | string | ./server | Arena**服务端**项目文件夹目录 |
| file.typescript.server.entry |  | string | App.ts | Arena**服务端**项目入口文件 |
| file.typescript.server.development |  | boolean | false | Arena**服务端**项目编译模式，默认为生产模式<br/>开发环境下打包后不压缩不混淆，方便在神岛Dubug |
| file.typescript.client | √ | object |  | Arena**客户端**项目配置 |
| file.typescript.client.base | √ | string | ./client | Arena**客户端**项目文件夹目录 |
| file.typescript.client.entry |  | string | clientApp.ts | Arena**客户端**项目入口文件 |
| file.typescript.client.development |  | boolean | false | Arena**客户端**项目编译模式，默认为生产模式 |
| file.typescript.client.webpack |  | string | ./端/webpack.config.js | Arena**端**项目webpack编译配置相对路径 |
| outputAndUpdate |  | object |  | 当前编译文件配置，默认选择第一位数据信息 |
| outputAndUpdate.name | √ | string | bundle.js | 上传到神岛脚本编辑器的文件名称，必须带有`.js`后缀 |
| outputAndUpdate.serverEntry | √ | string |  | 上传到神岛脚本编辑器的服务端入口文件 |
| outputAndUpdate.clientEntry | √ | string |  | 上传到神岛脚本编辑器的客户端入口文件 |
| outputAndUpdate.description |  | string |  | 当前配置的备注，可以用于区分配置 |
| map.id | √ | string | "" | 当前Arena项目对应的**扩展地图ID** |
| map.editHash | √ | string | "" | 当前Arena项目对应的扩展地图**创作端Hash** |
| map.playHash |  | string | "" | 当前Arena项目对应的扩展地图**游玩端Hash** |