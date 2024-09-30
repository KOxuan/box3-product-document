# dao3Cfg属性

在配置文件**dao3.config.json**中，你可以配置编译和上传行为。
```json
{
  "ArenaPro": {
    "file": {
      "typescript": {
        "server": {
          "base": "./server",
          "entry": "App.ts",
          "development": false,
          "webpack": "./server/webpack.config.js"
        },
        "client": {
          "base": "./client",
          "entry": "clientApp.ts",
          "development": false,
          "webpack": "./client/webpack.config.js"
        }
      }
    },        
    "outputAndUpdate": [
      "bundle.js"
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
| outputAndUpdate |  | array | [] | 当前编译和上传的文件名列表，默认选择第一位文件名 |
| map.id | √ | string | "" | 当前Arena项目对应的**扩展地图ID** |
| map.editHash | √ | string | "" | 当前Arena项目对应的扩展地图**创作端Hash** |
| map.playHash |  | string | "" | 当前Arena项目对应的扩展地图**游玩端Hash** |