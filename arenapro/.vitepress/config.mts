import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArenaPro Creator",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  description: "支持VSCode与TypeScript的神岛游戏制作插件",
  base: "/arenapro/",
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
      noteLabel: "信息",
      importantLabel: "重要",
      cautionLabel: "注意",
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    nav: [
      { text: "API手册", link: "https://docs.box3lab.com/apapi/" },
      {
        text: "创作者QQ群",
        link: "https://qm.qq.com/cgi-bin/qm/qr?authKey=LteV6YzMX0xKmrQSp8%2BaNi6YUdonwyVMc44npCKlNymwnoWVZBmG5Y4S4N9RwxEP&k=JeZQYLLnherYW6pGlbODkErutSmbkzr-&noverify=0",
      },
    ],
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    sidebar: [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          { text: "插件简介", link: "/index" },
          { text: "安装插件", link: "/guide/two/start" },
          { text: "创建项目", link: "/guide/two/createCodeProject" },
          { text: "登录账号", link: "/guide/two/login" },
          { text: "链接地图", link: "/guide/two/linkMap" },
        ],
      },
      {
        text: "基础教程",
        collapsed: false,
        items: [
          {
            text: "HelloWorld 项目",
            collapsed: true,
            items: [
              {
                text: "编写代码",
                collapsed: true,
                items: [
                  { text: "TypeScript 版本", link: "/guide/three/one" },
                  { text: "JavaScript 版本", link: "/guide/three/one-js" },
                ],
              },
              { text: "资源管理", link: "/guide/three/resources" },
              { text: "打包上传", link: "/guide/three/two" },
              { text: "运行测试", link: "/guide/three/three" },
              { text: "导出至Arena", link: "/guide/three/toArena" },
              { text: "资源同步", link: "/guide/three/resourcesSynchronous" },
            ],
          },
          {
            text: "代码调试",
            collapsed: true,
            items: [
              { text: "开发模式", link: "/guide/four/debug" },
              { text: "热重载服务", link: "/guide/four/hmr" },
              { text: "编译原理", link: "/guide/four/compilationPrinciple" },
              { text: "断点调试", link: "/guide/four/debugger" },
            ],
          },
          {
            text: "双端开发",
            collapsed: true,
            items: [
              { text: "通讯约定", link: "/guide/five/communicationAgreement" },
              { text: "代码复用", link: "/guide/five/codeReuse" },
            ],
          },
        ],
      },
      {
        text: "进阶功能",
        collapsed: false,
        items: [
          { text: "安装 npm 包", link: "/guide/six/npmPackage" },
          { text: "导入 JSON", link: "/guide/six/json" },
          { text: "自定义构建", link: "/guide/six/bulidName" },
          { text: "跨项目引用", link: "/guide/six/projectReference" },
          { text: "webpack 插件", link: "/guide/six/webpackPlugins" },
          { text: "文件依赖图", link: "/guide/six/nodeGraph" },
          { text: "环境变量", link: "/guide/six/env" },
          {
            text: "NPM 包开发",
            collapsed: true,
            items: [
              { text: "创建组件库", link: "/guide/seven/createNPMProject" },
              { text: "编写代码", link: "/guide/seven/code" },
              { text: "发布到社区", link: "/guide/seven/dao3fun" },
            ],
          },
        ],
      },
      {
        text: "开发框架",
        collapsed: false,
        items: [
          {
            text: "ECS 组件系统",
            collapsed: true,
            items: [
              {
                text: "组件介绍",
                link: "/package/component/componentGuide/index",
              },
              {
                text: "开发指南",
                collapsed: true,
                items: [
                  {
                    text: "创建组件",
                    link: "/package/component/componentGuide/setup",
                  },
                  {
                    text: "组件执行",
                    link: "/package/component/componentGuide/component",
                  },
                  {
                    text: "装饰器",
                    link: "/package/component/componentGuide/decorator",
                  },
                  {
                    text: "生命周期",
                    link: "/package/component/componentGuide/lifecycle",
                  },
                  {
                    text: "节点管理",
                    link: "/package/component/componentGuide/create-destroy",
                  },
                  {
                    text: "访问组件",
                    link: "/package/component/componentGuide/access-node-component",
                  },
                  {
                    text: "基础接口",
                    link: "/package/component/componentGuide/basic-node-api",
                  },
                  {
                    text: "事件系统",
                    link: "/package/component/componentGuide/event-node",
                  },
                  {
                    text: "世界事件",
                    link: "/package/component/componentGuide/event-world",
                  },
                  {
                    text: "节点系统",
                    link: "/package/component/componentGuide/system",
                  },
                  {
                    text: "时间管理",
                    link: "/package/component/componentGuide/time",
                  },
                  {
                    text: "性能优化",
                    link: "/package/component/componentGuide/performance",
                  },
                ],
              },
              {
                text: "实战案例",
                collapsed: true,
                items: [
                  {
                    text: "时间回溯 - 入门",
                    link: "/package/component/timeRewindSystem/timeRewindComponent",
                  },
                  {
                    text: "时间回溯 - 进阶",
                    link: "/package/component/timeRewindSystem/intermediateTopics",
                  },
                  {
                    text: "时间回溯 - 高级",
                    link: "/package/component/timeRewindSystem/advancedTopics",
                  },
                  { text: "更多示例", link: "/package/component/example" },
                ],
              },
              {
                text: "API 文档",
                collapsed: true,
                items: [
                  {
                    text: "EventEmitter",
                    link: "/package/component/api/EventEmitter",
                  },
                  {
                    text: "EntityNode",
                    link: "/package/component/api/EntityNode",
                  },
                  {
                    text: "Component",
                    link: "/package/component/api/Component",
                  },
                  {
                    text: "NodeSystem",
                    link: "/package/component/api/NodeSystem",
                  },
                  { text: "NodeTime", link: "/package/component/api/NodeTime" },
                ],
              },
            ],
          },
          {
            text: "React UI 框架",
            collapsed: true,
            items: [
              { text: "框架简介", link: "/package/react" },
              {
                text: "开发指南",
                collapsed: true,
                items: [
                  { text: "创建脚本", link: "/package/react/reactGuide/setup" },
                  { text: "XML 基础", link: "/package/react/reactGuide/xml" },
                  { text: "DOM 树", link: "/package/react/reactGuide/domTree" },
                  { text: "元素引用", link: "/package/react/reactGuide/refs" },
                  {
                    text: "类型定义",
                    link: "/package/react/reactGuide/tsType",
                  },
                  {
                    text: "多组件",
                    link: "/package/react/reactGuide/multiComponent",
                  },
                  {
                    text: "事件处理",
                    link: "/package/react/reactGuide/eventHandlers",
                  },
                  { text: "钩子函数", link: "/package/react/reactGuide/hooks" },
                  { text: "API 参考", link: "/package/react/reactGuide/api" },
                ],
              },
              { text: "实战示例", link: "/package/react/selectCode" },
              {
                text: "React 官方教程",
                link: "https://zh-hans.react.dev/learn/describing-the-ui",
              },
            ],
          },
        ],
      },
      {
        text: "工具与配置",
        collapsed: false,
        items: [
          {
            text: "项目配置",
            collapsed: true,
            items: [
              { text: "脚手架架构", link: "/dao3Cfg/file" },
              { text: "配置属性", link: "/dao3Cfg/attribute" },
            ],
          },
          {
            text: "前端工程化",
            collapsed: true,
            items: [
              { text: "工具介绍", link: "/engineering/describes" },
              { text: "ESLint", link: "/engineering/eslint" },
              { text: "Prettier", link: "/engineering/prettier" },
              { text: "Husky", link: "/engineering/husky" },
            ],
          },
          {
            text: "MCP 工具",
            collapsed: true,
            items: [
              { text: "插件 MCP", link: "/mcp/" },
              {
                text: "神岛引擎 API",
                link: "https://smithery.ai/server/@box3lab/engine-openapi-mcp",
              },
              {
                text: "数据分析",
                link: "https://smithery.ai/server/@box3lab/statistics-mcp",
              },
            ],
          },
        ],
      },
      {
        text: "API 参考",
        collapsed: false,
        items: [
          {
            text: "API 差异说明",
            collapsed: true,
            items: [
              { text: "资源路径", link: "/difference/resourcePath" },
              { text: "自定义实体", link: "/difference/customizeEntity" },
              { text: "对话框", link: "/difference/dialog" },
              { text: "节点查找", link: "/difference/findChildByName" },
              { text: "数据存储", link: "/difference/storage" },
              { text: "远程通道", link: "/difference/remoteChannel" },
              { text: "体素操作", link: "/difference/voxel" },
            ],
          },
          {
            text: "特殊权限",
            collapsed: true,
            items: [{ text: "数据空间", link: "/authority/storage" }],
          },
        ],
      },
    ],
    editLink: {
      pattern:
        "https://gitee.com/box3lab/box3-product-document/blob/master/arenapro/:path",
      text: "在 Gitee 上编辑此界面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    externalLinkIcon: false,
    socialLinks: [
      {
        link: "https://gitee.com/box3lab/box3-product-document",
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1726049913751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1462" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 992C246.895625 992 32 777.104375 32 512S246.895625 32 512 32s480 214.895625 480 480-214.895625 480-480 480z m242.9521875-533.3278125h-272.56875a23.7121875 23.7121875 0 0 0-23.71125 23.7121875l-0.024375 59.255625c0 13.08 10.6078125 23.7121875 23.6878125 23.7121875h165.96c13.104375 0 23.7121875 10.6078125 23.7121875 23.6878125v11.855625a71.1121875 71.1121875 0 0 1-71.1121875 71.1121875h-225.215625a23.7121875 23.7121875 0 0 1-23.6878125-23.7121875V423.1278125a71.1121875 71.1121875 0 0 1 71.0878125-71.1121875h331.824375a23.7121875 23.7121875 0 0 0 23.6878125-23.71125l0.0721875-59.2565625a23.7121875 23.7121875 0 0 0-23.68875-23.7121875H423.08a177.76875 177.76875 0 0 0-177.76875 177.7921875V754.953125c0 13.1034375 10.60875 23.7121875 23.713125 23.7121875h349.63125a159.984375 159.984375 0 0 0 159.984375-159.984375V482.36a23.7121875 23.7121875 0 0 0-23.7121875-23.6878125z" fill="#C71D23" p-id="1463"></path></svg>',
        },
      },
    ],
  },
});
