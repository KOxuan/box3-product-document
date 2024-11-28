# dao3Cfg属性

在配置文件**dao3.config.json**中，你可以配置编译和上传行为。
```json
{
  "ArenaPro": {
    "npmPackage": undefined,
    "file": {
      "typescript": {
        "server": {
          "entry": "src/App.ts",
          "development": true,
        },
        "client": {
          "entry": "src/clientApp.ts",
          "development": true,
        },
        "developmentAll": null,
        "jsUpdate": true
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
| file.typescript.server.entry |  | string | App.ts | Arena**服务端**项目入口文件 |
| file.typescript.server.development |  | boolean | true | Arena**服务端**项目编译模式，默认为开发模式，优先级比 file.typescript.developmentAll 低 |
| file.typescript.client | √ | object |  | Arena**客户端**项目配置 |
| file.typescript.client.entry |  | string | clientApp.ts | Arena**客户端**项目入口文件 |
| file.typescript.client.development |  | boolean | true | Arena**客户端**项目编译模式，默认为开发模式，优先级比 file.typescript.developmentAll 低 |
| file.typescript.developmentAll |  | boolean &#124; null | null | 是否开启webpack打包开发者模式？开启后**客户端**和**服务端**将不压缩不混淆代码。如是null将忽略本属性 |
| file.typescript.jsUpdate |  | boolean | true | 是否编译脚本后自动上传至地图？关闭后只编译不上传。|
| outputAndUpdate |  | object |  | 当前编译文件配置，默认选择第一位数据信息 |
| outputAndUpdate.name | √ | string | bundle.js | 上传到神岛脚本编辑器的文件名称，必须带有`.js`后缀 |
| outputAndUpdate.serverEntry | √ | string |  | 上传到神岛脚本编辑器的服务端入口文件 |
| outputAndUpdate.clientEntry | √ | string |  | 上传到神岛脚本编辑器的客户端入口文件 |
| outputAndUpdate.description |  | string |  | 当前配置的备注，可以用于区分配置 |
| map.id | √ | string | "" | 当前Arena项目对应的**扩展地图ID** |
| map.editHash | √ | string | "" | 当前Arena项目对应的扩展地图**创作端Hash** |
| map.playHash |  | string | "" | 当前Arena项目对应的扩展地图**游玩端Hash** |
| npmPackage |  | "server" &#124; "client" |  | 当前项目是否为神岛组件库（npm包）？如是需写指定端名，会停止构建另一端以加快速度。|