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
    search: {
      provider: "local",
    },
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
          {
            text: "核心技术概览",
            link: "/guide/01-introduction/index",
            collapsed: false,
            items: [
              {
                text: "什么是 ArenaPro 插件？",
                link: "/guide/01-introduction/WhatIsArenaPro",
              },
              {
                text: "什么是 VSCode？",
                link: "/guide/01-introduction/WhatVSCode",
              },
              {
                text: "什么是 Node.js？",
                link: "/guide/01-introduction/WhatNodeJs",
              },
              {
                text: "什么是 TypeScript？",
                link: "/guide/01-introduction/WhatTypeScript",
              },
              {
                text: "什么是 Webpack？",
                link: "/guide/01-introduction/WhatWebpack",
              },
              {
                text: "什么是 Git？",
                link: "/guide/01-introduction/WhatGit",
              },
            ],
          },
          {
            text: "第一步：安装与配置",
            link: "/guide/02-getting-started/01-install",
          },
          {
            text: "第二步：创建你的第一个项目",
            link: "/guide/02-getting-started/02-create-project",
          },
          {
            text: "第三步：连接到云端进行调试",
            link: "/guide/02-getting-started/03-connect-to-cloud",
          },
        ],
      },

      {
        text: "基础教程",
        collapsed: false,
        items: [
          {
            text: "Hello World 实战",
            link: "/guide/03-basic-tutorial/01-hello-world-tutorial",
          },
          {
            text: "ArenaPro 与 Arena 有何不同？",
            link: "/guide/03-basic-tutorial/02-whats-different",
          },
          {
            text: "TypeScript vs JavaScript",
            link: "/guide/03-basic-tutorial/typescript-vs-javascript",
          },
          {
            text: "🐞 代码调试工作流",
            link: "/guide/04-development-workflow/debug",
            items: [
              {
                text: "认识 Debug 与 Release 模式",
                link: "/guide/04-development-workflow/debug",
              },
              {
                text: "使用 HMR 实现代码热更新",
                link: "/guide/04-development-workflow/hmr",
              },
              {
                text: "使用 VS Code 进行断点调试",
                link: "/guide/04-development-workflow/debugger",
              },
              {
                text: "深入理解：两种构建模式的区别",
                link: "/guide/04-development-workflow/compilationPrinciple",
              },
            ],
          },
          {
            text: "🔃 客户端与服务端开发",
            link: "/guide/05-best-practices/codeReuse",
            items: [
              {
                text: "共享代码 (Single Source of Truth)",
                link: "/guide/05-best-practices/codeReuse",
              },
              {
                text: "共享数据结构 (Type-Safe Events)",
                link: "/guide/05-best-practices/communicationAgreement",
              },
            ],
          },
          {
            text: "Git 上手指南",
            link: "https://liaoxuefeng.com/books/git/introduction/index.html",
          },
        ],
      },

      {
        text: "🚀 进阶指南",
        collapsed: false,
        items: [
          {
            text: "代码质量与工作流",
            collapsed: false,
            items: [
              {
                text: "前端工程化",
                link: "/engineering/describes",
                items: [
                  { text: "ESLint", link: "/engineering/eslint" },
                  { text: "Prettier", link: "/engineering/prettier" },
                  { text: "Husky", link: "/engineering/husky" },
                ],
              },
              {
                text: "专业地管理游戏数据 (JSON)",
                link: "/guide/06-advanced-topics/json",
              },
              {
                text: "你的代码健康吗？引入自动化测试",
                link: "/guide/06-advanced-topics/automated-testing",
              },
              {
                text: "可视化你的代码结构",
                link: "/guide/06-advanced-topics/nodeGraph",
              },
            ],
          },
          {
            text: "项目架构与构建",
            collapsed: false,
            items: [
              {
                text: "管理多套代码入口 (分包)",
                link: "/guide/06-advanced-topics/bulidName",
              },
              {
                text: "创建本地共享包 (Monorepo)",
                link: "/guide/06-advanced-topics/projectReference",
              },
              { text: "管理环境变量", link: "/guide/06-advanced-topics/env" },
              {
                text: "自定义构建流程 (Webpack)",
                link: "/guide/06-advanced-topics/webpackPlugins",
              },
            ],
          },
          {
            text: "资源与生态系统",
            collapsed: false,
            items: [
              {
                text: "资源管理器",
                link: "/guide/06-advanced-topics/resources",
              },
              {
                text: "类型安全：同步游戏资源",
                link: "/guide/06-advanced-topics/asset-synchronization",
              },
              {
                text: "安全地使用外部 NPM 包",
                link: "/guide/06-advanced-topics/npmPackage",
              },
              {
                text: "📦 创建与发布 NPM 包",
                link: "/guide/07-publishing/createNPMProject",
                items: [
                  {
                    text: "第一步：创建项目",
                    link: "/guide/07-publishing/createNPMProject",
                  },
                  {
                    text: "第二步：编写与构建",
                    link: "/guide/07-publishing/code",
                  },
                  {
                    text: "第三步：发布与使用",
                    link: "/guide/07-publishing/publish-and-use",
                  },
                  {
                    text: "投稿社区：发布NPM包",
                    link: "/guide/06-advanced-topics/contributing-to-dao3fun",
                  },
                ],
              },
              {
                text: "导出代码到 Arena",
                link: "/guide/06-advanced-topics/toArena",
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
      {
        text: "社区与贡献",
        collapsed: false,
        items: [
          { text: "社区贡献激励", link: "/community/community-rewards" },
          { text: "🌟 创作者荣誉榜", link: "/community/creators-honor-roll" },
          { text: "⚠️ 行为准则", link: "/community/CODE_OF_CONDUCT" },
          { text: "🎉 AP 活动历史", link: "/community/events" },
          { text: "🙏 特别鸣谢", link: "/community/special-thanks" },
          { text: "更新日志", link: "/community/release-notes" },
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
