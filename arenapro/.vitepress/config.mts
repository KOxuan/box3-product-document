import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArenaPro Creator",
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  description: "支持VSCode与TypeScript的神岛游戏制作插件，是Arena编辑器专业版",
  base: '/arenapro/',
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
      noteLabel: '信息',
      importantLabel: '重要',
      cautionLabel: '注意'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: 'API手册', link: 'https://docs.box3lab.com/api/' },
      { text: '创作者QQ群', link: 'https://qm.qq.com/cgi-bin/qm/qr?authKey=LteV6YzMX0xKmrQSp8%2BaNi6YUdonwyVMc44npCKlNymwnoWVZBmG5Y4S4N9RwxEP&k=JeZQYLLnherYW6pGlbODkErutSmbkzr-&noverify=0' }
    ],

    sidebar: [
      {
        text: '用户手册',
        collapsed: false,
        items: [
          { text: '导读', link: '/' },
          { text: '快速开始', link: '/guide/start' },
          { text: '登录账号', link: '/guide/login' },
          { text: '链接扩展地图', link: '/guide/linkMap' },
          {
            text: 'HelloWorld 项目',
            collapsed: true,
            items: [
              {
                text: '编写代码',
                collapsed: true,
                items: [
                  { text: 'TypeScript编写【推荐】', link: '/guide/HelloWorld/one' },
                  { text: 'JavaScript编写', link: '/guide/HelloWorld/one-js' },
                ]
              },
              { text: '打包上传', link: '/guide/HelloWorld/two' },
              { text: '运行测试', link: '/guide/HelloWorld/three' },
            ]
          },
          { text: 'debug模式', link: '/guide/debug' },
          { text: '模块热替换编译方式', link: '/guide/hmr' },
        ]
      }, {
        text: '使用进阶',
        collapsed: false,
        items: [
          { text: 'VSCode调试脚本', link: '/advanced/debugger' },
          { text: '跨端共享脚本', link: '/guide/shares' },
          { text: '导入JSON', link: '/advanced/json' },
          { text: '改变构建文件名', link: '/advanced/buildFile' },
          { text: '路径别名设置', link: '/advanced/pathAliases' },
          { text: '跨项目引用', link: '/advanced/crossProject' },
        ]
      }, {
        text: 'dao3Cfg配置',
        collapsed: false,
        items: [
          { text: '脚手架架构', link: '/dao3Cfg/file' },
          { text: '属性', link: '/dao3Cfg/attribute' },
        ]
      }, {
        text: 'API差异',
        collapsed: false,
        items: [
          { text: '自定义entity属性与方法', link: '/codeDiff/customizeEntity' },
          { text: 'dialog', link: '/codeDiff/dialog' },
          { text: 'findChildByName', link: '/codeDiff/findChildByName' },
          { text: 'GameDataStorage', link: '/codeDiff/storage' },
          { text: 'RemoteChannel', link: '/codeDiff/remoteChannel' },
        ]
      }, {
        text: '神岛npm包',
        collapsed: false,
        items: [
          { text: '公开npm包列表', link: '/package/list' },
          { text: '什么是npm包', link: '/package/help' },
          { text: '如何投稿npm包', link: '/package/publish' },
        ]
      },
      {
        text: '组件模式',
        collapsed: false,
        items: [
          { text: '简介', link: '/package/component/index' },
          { text: '组件使用', link: '/package/component/parent' },
          { text: '生命周期', link: '/package/component/lifecycle' },
        ]
      },
      {
        text: '学习资源',
        collapsed: false,
        items: [{
          text: 'TypeScript语言',
          collapsed: false,
          items: [
            { text: '系统学习', link: 'https://typescript.p6p.net/about/experience.html' },
            { text: '20分钟速成', link: 'https://www.bilibili.com/video/BV1gX4y177Kf/' },
            { text: '代码演练场', link: 'https://www.typescriptlang.org/zh/play/' },
          ]
        },
        {
          text: 'Git协同',
          collapsed: false,
          items: [
            { text: '文字教学', link: 'https://liaoxuefeng.com/books/git/what-is-git/index.html' },
            { text: '视频教学', link: 'https://www.bilibili.com/video/BV1HM411377j' },
            { text: 'Git×VSCode综合', link: 'https://www.bilibili.com/video/BV1w14y1C7oi' },
            { text: 'Git小乌龟可视化', link: 'https://blog.csdn.net/qq_43543789/article/details/105186322' },
          ]
        },
        ]
      }, {
        text: '最佳实践',
        collapsed: false,
        items: [
          {
            text: '安装相关',
            collapsed: false,
            items: [
              { text: 'VSCode安装', link: '/bestPractices/vscode' },
              { text: '中文版VSCode', link: '/bestPractices/chineseVSCode' },
              { text: 'NodeJS安装', link: '/bestPractices/nodejs' },
              { text: 'NodeJS部署Ts问题', link: '/bestPractices/nodejsTest' },
            ]
          }, {
            text: '便利相关',
            collapsed: false,
            items: [
              { text: '单个上传js文件', link: '/bestPractices/upLoad-js' },
              { text: '多桌面开发', link: '/bestPractices/multipleDesktops' },
              { text: 'ts与js混搭', link: '/bestPractices/allowJs' },
            ]
          },
        ]
      },
    ],

    editLink: {
      pattern: 'https://gitee.com/box3lab/box3-product-document/blob/master/arenapro/:path',
      text: '在 Gitee 上编辑此界面'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true,
    socialLinks: [
      { link: 'https://gitee.com/box3lab/box3-product-document', icon: { svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1726049913751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1462" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 992C246.895625 992 32 777.104375 32 512S246.895625 32 512 32s480 214.895625 480 480-214.895625 480-480 480z m242.9521875-533.3278125h-272.56875a23.7121875 23.7121875 0 0 0-23.71125 23.7121875l-0.024375 59.255625c0 13.08 10.6078125 23.7121875 23.6878125 23.7121875h165.96c13.104375 0 23.7121875 10.6078125 23.7121875 23.6878125v11.855625a71.1121875 71.1121875 0 0 1-71.1121875 71.1121875h-225.215625a23.7121875 23.7121875 0 0 1-23.6878125-23.7121875V423.1278125a71.1121875 71.1121875 0 0 1 71.0878125-71.1121875h331.824375a23.7121875 23.7121875 0 0 0 23.6878125-23.71125l0.0721875-59.2565625a23.7121875 23.7121875 0 0 0-23.68875-23.7121875H423.08a177.76875 177.76875 0 0 0-177.76875 177.7921875V754.953125c0 13.1034375 10.60875 23.7121875 23.713125 23.7121875h349.63125a159.984375 159.984375 0 0 0 159.984375-159.984375V482.36a23.7121875 23.7121875 0 0 0-23.7121875-23.6878125z" fill="#C71D23" p-id="1463"></path></svg>' } }
    ]
  }
})
