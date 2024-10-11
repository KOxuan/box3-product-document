import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "ArenaEdit 用户手册",
  head: [['link', { rel: 'icon', href: '/arena.svg' }]],
  description: "为创作者所有✨ 由创作者共建⚖️ 因创作者而生🎉",
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
  base: '/arena/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/arena.svg',
    nav: [
      { text: 'API手册', link: 'https://docs.box3lab.com/api/' }
    ],
    search: {
      provider: 'local',
    },
    sidebar: [{
      text: '基础知识',
      collapsed: false,
      items: [
        {
          text: '新手上路', link: '/index',
          collapsed: true,
          items: [
            { text: '创建第一个地图', link: '/getting-started/create' },
            { text: '地形搭建', link: '/getting-started/helloWorld-models' },
            { text: '代码编写', link: '/getting-started/helloWorld-code' },
            { text: '邀请协助', link: '/getting-started/helloWorld-assist' },
            { text: '发布第一个地图', link: '/getting-started/publish' },
          ]
        },
        {
          text: '编辑器界面', link: '/editor/index',
          collapsed: true,
          items: [
            { text: '场景编辑器', link: '/editor/scene' },
            { text: 'UI编辑器', link: '/editor/ui' },
            { text: '层级管理器', link: '/editor/hierarchy' },
            { text: '资源管理器', link: '/editor/assets' },
            { text: '代码编辑器', link: '/editor/code' },
          ]
        }
      ]
    }, {
      text: '功能模块',
      collapsed: false,
      items: [
        {
          text: '地形系统', link: '/features/terrain',
          collapsed: true,
          items: [
            { text: '方块', link: '/features/terrain/box' },
            {
              text: '模型系统',
              collapsed: true,
              items: [
                { text: '模型', link: '/features/terrain/model/' },
                { text: '资源树', link: '/features/terrain/model/tree' },
                { text: '属性', link: '/features/terrain/model/attribute' },
              ]
            },
            { text: '场景', link: '/features/terrain/scene' },
          ]
        }, {
          text: '玩家系统', link: '/features/player',
          collapsed: true,
          items: [
            { text: '皮肤', link: '/features/player/skin' },
            { text: '虚拟按键', link: '/features/player/key' },
          ]
        }, {
          text: '2DUI系统', link: '/features/ui',
          collapsed: true,
          items: [
            { text: '屏幕', link: '/features/ui/screen' },
            { text: '资源树', link: '/features/ui/tree' },
            {
              text: '元素',
              link: '/features/ui/element',
              collapsed: true,
              items: [
                { text: 'UiNode 参考', link: '/features/ui/element/UiNode' },
                { text: 'UiRenderable 参考', link: '/features/ui/element/UiRenderable' },
                { text: 'UiBox 参考', link: '/features/ui/element/UiBox' },
                { text: 'UiText 参考', link: '/features/ui/element/UiText' },
                { text: 'UiInput 参考', link: '/features/ui/element/UiInput' },
                { text: 'UiImage 参考', link: '/features/ui/element/UiImage' },
                { text: 'UiScrollBox 参考', link: '/features/ui/element/UiScrollBox' },
                { text: 'UiScreen 参考', link: '/features/ui/screen' },
              ]
            },

          ]
        }
      ]
    }, {
      text: 'JavaScript语言入门',
      collapsed: false,
      items: [
        { text: '认识JS语言', link: '/javascriptEntry/first-step/hi' },
        { text: '你好，世界！', link: '/javascriptEntry/first-step/helloWorld' },
        {
          text: '第一章：变量与判断',
          collapsed: true,
          items: [
            { text: '变量与数据类型', link: '/javascriptEntry/first-step/variablesAndTypes' },
            { text: '操作符与表达式', link: '/javascriptEntry/first-step/operator' },
            { text: '条件判断', link: '/javascriptEntry/first-step/if' },
            { text: '实践：抽奖游戏', link: '/javascriptEntry/first-step/lottery' },
          ] 
        },{
          text: '第二章：循环与函数',
          collapsed: true,
          items: [
            { text: '循环', link: '/javascriptEntry/second-step/for' },
            { text: '函数', link: '/javascriptEntry/second-step/function' },
            { text: '数组', link: '/javascriptEntry/second-step/array' },
            { text: '实践：多人抽奖游戏', link: '/javascriptEntry/second-step/comprehensiveTest' },
          ] 
        },{
          text: '第三章：对象与类',
          collapsed: true,
          items: [
            { text: 'JSON与对象', link: '/javascriptEntry/third-step/jsonObj' },
            { text: '常量与作用域', link: '/javascriptEntry/third-step/variablesScope' },
            { text: '类', link: '/javascriptEntry/third-step/class' },
          ] 
        },   
        { text: '异步与同步', link: '/javascriptEntry/promise' },
        { text: '章末总结', link: '/javascriptEntry/summary' },
      ]
    },{
      text: 'JS×神岛API',
      collapsed: false,
      items: [
        { text: '如何阅读API', link: '/javascriptDaoAPI/apiUsage' },
      ] 
    },  {
      text: '进阶主题',
      collapsed: false,
      items: [
        {
          text: 'TypeScript语言入门',
          link:'https://typescript.p6p.net/typescript-tutorial/intro.html'
        },  {
          text: '使用VSCode开发',
          link:'https://docs.box3lab.com/arenapro'
        }, 
      ] 
    }, 
    ],
    editLink: {
      pattern: 'https://gitee.com/box3lab/box3-product-document/blob/master/arena/:path',
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
