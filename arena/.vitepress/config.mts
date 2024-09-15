import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "Arena编辑器用户手册",
  description: "为创作者所有✨ 由创作者共建⚖️ 因创作者而生🎉",
  markdown: {
    lineNumbers: true
  },
  base: '/arena/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: '基础知识',
        collapsed: false,
        items: [
          {
            text: '新手上路', link: '/index',
            collapsed: false,
            items: [
              { text: '创建第一个地图', link: '/getting-started/create' },
              { text: 'Hello World 项目', link: '/getting-started/helloWorld' },
              { text: '发布第一个地图', link: '/getting-started/publish' },
            ]
          },
          {
            text: '编辑器界面', link: '/editor/index',
            collapsed: false,
            items: [
              { text: '场景编辑器', link: '/editor/scene' },
              { text: 'UI编辑器', link: '/editor/ui' },
              { text: '层级管理器', link: '/editor/hierarchy' },
              { text: '资源管理器', link: '/editor/assets' },
              { text: '代码编辑器', link: '/editor/code' },
            ]
          },
          {
            text: '代码编写第一步', link: '/javascript/first-step/first-step',
            collapsed: false,
            items: [
              { text: 'Hello World!', link: '/javascript/first-step/hello-world' },
            ]
          }
        ]
      }
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
