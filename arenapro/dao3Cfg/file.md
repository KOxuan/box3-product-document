# dao3Cfg脚手架架构
```plain
myArenaProject
├── dao3.config.json       			--岛项目配置文件
├── package.json				   	--node项目配置文件
├── package-lock.json			 	--node项目包信息文件
├── .gitignore			       		--Git忽略特定信息文件
├── /node_modules/				 	--node项目包文件夹
├── /server/						--服务端脚本
|   ├── tsconfig.json      			--ts配置文件
|   ├── webpack.config.js   		--webpack配置文件
|   ├── /.log/             			--打包构建日志
|   ├── /dist/             			--打包构建文件夹
|   ├── /src/              			--源代码文件夹
|   |   └── App.ts			   	    --程序入口
|   │   └── /Component/    			--组件类文件夹
│   │       ├── Definition.ts       --组件父类
│   │       └── Implement.ts		--组件实现
│   └── /types/					   	--类型提示文件夹
│       ├── GameEntity.d.ts
│       ├── GamePlayer.d.ts
│       └── GameAPI.d.ts            --类型提示
└── /client/						--客户端脚本
    ├── tsconfig.json      			--ts配置文件
    ├── webpack.config.js   		--webpack配置文件
    ├── /.log/             			--打包构建日志
    ├── /dist/             			--打包构建文件夹
    ├── /src/              			--源代码文件夹
    |   └── clientApp.ts   			--程序入口
    └── /types/            			--类型提示文件夹
        └── ClientAPI.d.ts          --类型提示
```



:::danger
⚠️以下文件**禁止移动/改名**，否则可能会出现不可预知的错误：

1. GameAPI.d.ts
2. ClientAPI.d.ts
3. tsconfig.json
4. package.json
5. package-lock.json
6. dao3.config.json
7. .gitignore

:::

::: tip
⚠️以下文件**禁止修改**，因为有自动检测更新机制，导致自定义更改丢失。

1. GameAPI.d.ts
2. ClientAPI.d.ts

:::