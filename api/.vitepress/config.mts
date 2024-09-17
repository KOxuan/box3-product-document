import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "Arena编辑器 API手册",
  description: "为创作者所有✨ 由创作者共建⚖️ 因创作者而生🎉",
  base: '/api/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local',
    },
    sidebar: [{
      text: '服务端脚本',
      collapsed: false,
      items: [
        {
          text: '🌏游戏世界',
          link: '/GameWorld/index',
          collapsed: true,
          items: [
            { text: '地图信息', link: '/GameWorld/mapInfo' },
            { text: '地图区域', link: '/GameWorld/mapZone' },
            { text: '玩家进入/离开地图', link: '/GameWorld/playerJL' },
            {
              text: '🏕环境与视觉',
              collapsed: true,
              items: [
                { text: '物理', link: '/GameWorld/physics' },
                { text: '音乐音效', link: '/GameWorld/music' },
                { text: '动画', link: '/GameWorld/animate' },
                {
                  text: '天气',
                  collapsed: true,
                  items: [
                    { text: '雾', link: '/GameWorld/weather/fog' },
                    { text: '雨', link: '/GameWorld/weather/rain' },
                    { text: '雪', link: '/GameWorld/weather/snow' },
                    { text: '光照', link: '/GameWorld/weather/illumination' },
                  ]
                },
              ]
            },
            {
              text: '🙋聊天频道',
              collapsed: true,
              items: [
                { text: '常驻', link: '/GameWorld/chat/resident' },
                { text: '临时', link: '/GameWorld/chat/temporary' },
              ]
            },
            {
              text: '🛋实体',
              collapsed: true,
              items: [
                { text: '实体创建与销毁', link: '/GameWorld/entityCD' },
                { text: '搜索实体', link: '/GameWorld/querySelectorEntity' },
              ]
            },
            { text: '点击与互动', link: '/GameWorld/input' },
            { text: '战斗与生命值', link: '/GameWorld/fight' },
            { text: '副本传送', link: '/GameWorld/teleport' },
            { text: '小鱼干商城', link: '/GameWorld/shopping' },
          ]
        },
      ]
    },
    ],
    editLink: {
      pattern: 'https://gitee.com/box3lab/box3-product-document/blob/master/api/:path',
      text: '在 Gitee 上编辑此界面'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
  }
})
