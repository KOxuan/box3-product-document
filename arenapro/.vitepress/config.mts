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
      { text: "API手册", link: "https://docs.box3lab.com/api/" },
      {
        text: "创作者QQ群",
        link: "https://qm.qq.com/cgi-bin/qm/qr?authKey=LteV6YzMX0xKmrQSp8%2BaNi6YUdonwyVMc44npCKlNymwnoWVZBmG5Y4S4N9RwxEP&k=JeZQYLLnherYW6pGlbODkErutSmbkzr-&noverify=0",
      },
    ],
    sidebar: [
      {
        text: "插件入门",
        collapsed: false,
        items: [
          { text: "插件简介", link: "/index" },
          { text: "插件运作原理", link: "/guide/one/APdemand" },
          {
            text: "Ⅰ、前置知识",
            collapsed: true,
            items: [
              {
                text: "1.什么是TypeScript？",
                link: "/guide/one/WhatTypeScript",
              },
              { text: "2.什么是VSCode？", link: "/guide/one/WhatVSCode" },
              { text: "3.什么是NodeJs？", link: "/guide/one/WhatNodeJs" },
              { text: "4.什么是Webpack？", link: "/guide/one/WhatWebpack" },
            ],
          },
          {
            text: "Ⅱ、创建代码项目",
            collapsed: true,
            items: [
              { text: "1.安装插件", link: "/guide/two/start" },
              {
                text: "2.创建地图代码项目",
                link: "/guide/two/createCodeProject",
              },
              { text: "3.项目架构解惑", link: "/guide/two/qa" },
              { text: "4.登录神岛账号", link: "/guide/two/login" },
              { text: "5.链接扩展地图到项目", link: "/guide/two/linkMap" },
            ],
          },
          {
            text: "Ⅲ、HelloWorld 项目",
            collapsed: true,
            items: [
              {
                text: "1.编写代码",
                collapsed: true,
                items: [
                  { text: "TypeScript编写", link: "/guide/three/one" },
                  { text: "JavaScript编写", link: "/guide/three/one-js" },
                ],
              },
              { text: "2.Arena资源管理", link: "/guide/three/resources" },
              { text: "3.打包上传", link: "/guide/three/two" },
              { text: "4.运行测试", link: "/guide/three/three" },
              { text: "5.导出至Arena", link: "/guide/three/toArena" },
              {
                text: "6.Arena资源同步",
                link: "/guide/three/resourcesSynchronous",
              },
            ],
          },
          {
            text: "Ⅳ、调试你的代码",
            collapsed: true,
            items: [
              { text: "1.代码开发模式", link: "/guide/four/debug" },
              { text: "2.HMR服务器", link: "/guide/four/hmr" },
              { text: "3.编译原理", link: "/guide/four/compilationPrinciple" },
              { text: "4.debugger", link: "/guide/four/debugger" },
            ],
          },
          {
            text: "Ⅴ、双端共享代码",
            collapsed: true,
            items: [
              {
                text: "1.通讯约定",
                link: "/guide/five/communicationAgreement",
              },
              { text: "2.代码复用", link: "/guide/five/codeReuse" },
            ],
          },
          {
            text: "Ⅵ、进阶用法",
            collapsed: true,
            items: [
              { text: "1.安装npm包", link: "/guide/six/npmPackage" },
              { text: "2.导入JSON", link: "/guide/six/json" },
              { text: "3.改变构建文件名及入口", link: "/guide/six/bulidName" },
              { text: "4.跨项目引用", link: "/guide/six/projectReference" },
            ],
          },
          {
            text: "Ⅶ、神岛NPM包开发",
            collapsed: true,
            items: [
              {
                text: "1.部署组件库项目",
                link: "/guide/seven/createNPMProject",
              },
              { text: "2.编写代码", link: "/guide/seven/code" },
              { text: "3.投稿至dao3fun组织", link: "/guide/seven/dao3fun" },
            ],
          },
        ],
      },
      {
        text: "dao3Cfg配置",
        collapsed: false,
        items: [
          { text: "脚手架架构", link: "/dao3Cfg/file" },
          { text: "属性", link: "/dao3Cfg/attribute" },
        ],
      },
      {
        text: "API差异",
        collapsed: false,
        items: [
          { text: "地图资源路径", link: "/difference/resourcePath" },
          { text: "自定义enity与player", link: "/difference/customizeEntity" },
          { text: "dialog", link: "/difference/dialog" },
          { text: "findChildByName", link: "/difference/findChildByName" },
          { text: "GameDataStorage", link: "/difference/storage" },
          { text: "RemoteChannel", link: "/difference/remoteChannel" },
          { text: "GameVoxels", link: "/difference/voxel" },
        ],
      },
      {
        text: "ECS架构",
        collapsed: false,
        items: [
          { text: "组件介绍", link: "/package/component/index" },
          {
            text: "脚本指南",
            collapsed: true,
            items: [
              {
                text: "创建组件脚本",
                link: "/package/component/componentGuide/setup",
              },
              {
                text: "组件和组件执行顺序",
                link: "/package/component/componentGuide/component",
              },
              {
                text: "装饰器使用",
                link: "/package/component/componentGuide/decorator",
              },
              {
                text: "生命周期",
                link: "/package/component/componentGuide/lifecycle",
              },
              {
                text: "创建和销毁节点",
                link: "/package/component/componentGuide/create-destroy",
              },
              {
                text: "访问节点和组件",
                link: "/package/component/componentGuide/access-node-component",
              },
              {
                text: "常用节点和组件接口",
                link: "/package/component/componentGuide/basic-node-api",
              },
              {
                text: "节点事件系统",
                link: "/package/component/componentGuide/event-node",
              },
              {
                text: "服务端-游戏世界事件系统",
                link: "/package/component/componentGuide/event-world",
              },
              {
                text: "性能优化",
                link: "/package/component/componentGuide/performance",
              },
            ],
          },

          { text: "代码示例", link: "/package/component/example" },
          {
            text: "API",
            collapsed: false,
            items: [
              {
                text: "EventEmitter",
                link: "/package/component/api/EventEmitter",
              },
              { text: "EntityNode", link: "/package/component/api/EntityNode" },
              { text: "Component", link: "/package/component/api/Component" },
            ],
          },
        ],
      },

      {
        text: "前端工程化",
        collapsed: false,
        items: [
          { text: "四大剑客介绍", link: "/engineering/describes" },
          { text: "eslint用法", link: "/engineering/eslint" },
          { text: "prettier用法", link: "/engineering/prettier" },
          { text: "husky用法", link: "/engineering/husky" },
        ],
      },
      {
        text: "特殊权限",
        collapsed: false,
        items: [
          { text: "扩展地图", link: "/authority/expandMap" },
          { text: "数据空间", link: "/authority/storage" },
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
