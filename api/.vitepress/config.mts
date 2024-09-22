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
      text: '编写须知',
      collapsed: false,
      items: [
        { text: '导读页', link: '/' },
        { text: '脚本规范说明', link: '/notice/exportAndImport' },
        { text: '事件函数与异步处理机制', link: '/notice/eventDiff' },
      ]
    }, {
      text: '服务端脚本',
      collapsed: false,
      items: [
        {
          text: '🌏游戏世界',
          link: '/GameWorld/index',
          collapsed: false,
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
              text: '🛋实体操作',
              collapsed: true,
              items: [
                { text: '实体创建与销毁', link: '/GameWorld/entityCD' },
                { text: '搜索实体', link: '/GameWorld/querySelectorEntity' },
              ]
            },
            { text: '点击与互动', link: '/GameWorld/input' },
            { text: '战斗与生命值', link: '/GameWorld/fight' },
            { text: '副本传送', link: '/GameWorld/teleport' },
            { text: '商城', link: '/GameWorld/shopping' },
          ]
        }, {
          text: '🧱游戏方块',
          link: '/GameVoxels/index',
          collapsed: false,
          items: [
            { text: '操作方块', link: '/GameVoxels/operate' },
          ]
        }, {
          text: '🏠游戏实体',
          link: '/GameEntity/index',
          collapsed: false,
          items: [
            { text: '是否为玩家', link: '/GameEntity/isPlayer' },
            {
              text: '🏕环境与视觉',
              collapsed: true,
              items: [
                { text: '外观', link: '/GameEntity/appearance' },
                { text: '动画与模型动作', link: '/GameEntity/animate' },
                { text: '物理', link: '/GameEntity/physics' },
                { text: '音乐音效', link: '/GameEntity/music' },
                { text: '粒子效果', link: '/GameEntity/particle' },
              ]
            },
            { text: '标签', link: '/GameEntity/label' },
            { text: '点击与互动', link: '/GameEntity/input' },
            { text: '销毁与生命值', link: '/GameEntity/fight' }
          ]
        }, {
          text: '🕺游戏模型动作',
          link: '/GameMotionController/index',
          collapsed: false,
          items: [
            { text: '控制器', link: '/GameMotionController/controller' },
            { text: '处理器', link: '/GameMotionController/handler' },
          ]
        }, {
          text: '👤游戏玩家',
          link: '/GamePlayer/index',
          collapsed: false,
          items: [
            { text: '玩家信息', link: '/GamePlayer/info' },
            {
              text: '🏕环境与视觉',
              collapsed: true,
              items: [
                { text: '外观', link: '/GamePlayer/appearance' },
                { text: '动画', link: '/GamePlayer/animate' },
                { text: '摄像机视角', link: '/GamePlayer/camera' },
                { text: '音乐音效', link: '/GamePlayer/music' },
                { text: '画面滤镜', link: '/GamePlayer/colorLUT' },
              ]
            },
            { text: '战斗与生命值', link: '/GamePlayer/fight' },
            { text: '按键与行动', link: '/GamePlayer/input' },
            { text: '对话与互动', link: '/GamePlayer/chat' },
            { text: '挑转网站', link: '/GamePlayer/link' },
            { text: '商城与投喂', link: '/GamePlayer/shopping' },
          ]
        }, {
          text: '📈游戏数据存储',
          link: '/GameDataStorage/index',
          collapsed: false,
          items: [
            { text: '获取数据空间', link: '/GameDataStorage/getSpace' },
            { text: '操作数据', link: '/GameDataStorage/setSpace' },
          ]
        }, {
          text: '🖼️游戏用户界面',
          link: '/GameUI/server',
          collapsed: false,
          items: [
            { text: '通信', link: '/GameUI/remoteChannel/server' },
          ]
        }, {
          text: '🔗游戏外部数据请求',
          link: '/GameHttpAPI/index',
          collapsed: false,
          items: [
            { text: '请求', link: '/GameHttpAPI/request' },
            { text: '响应', link: '/GameHttpAPI/response' },
          ]
        }, {
          text: '🗣️游戏实时语音通讯',
          link: '/GameRTC/index',
          collapsed: false,
          items: [
            { text: '新建通道', link: '/GameRTC/create' },
            { text: '操作', link: '/GameRTC/operate' },
          ]
        },
        {
          text: '🟰游戏数学',
          collapsed: false,
          items: [
            { text: '三维向量', link: '/GameVector3/index' },
            { text: '三维空间', link: '/GameBounds3/index' },
            { text: '四元数', link: '/GameQuaternion/index' },
            { text: 'RGB颜色', link: '/GameRGBColor/index' },
            { text: 'RGBA颜色', link: '/GameRGBAColor/index' },
          ]
        },
        { text: '音乐对象', link: '/Sound/' },
        { text: '动画对象', link: '/GameAnimation/' },
        { text: '事件监听', link: '/GameEventHandlerToken/' },
      ]
    },   {
      text: '客户端脚本',
      collapsed: false,
      items: [
        {
          text: '🖼️游戏用户界面',
          link: '/GameUI/client',
          collapsed: false,
          items: [
            {
              text: '🔱UI元素',
              collapsed: false,
              items: [
                { text: 'UI父类', link: '/GameUI/UiNode' },
                { text: 'UI屏幕', link: '/GameUI/UiScreen' },
                { text: 'UI可渲染基类', link: '/GameUI/UiRenderable' },
                {
                  text: '🔱界面可见元素',
                  collapsed: false,
                  items: [
                    { text: '框架', link: '/GameUI/node/UiBox' },
                    { text: '图片', link: '/GameUI/node/UiImage' },
                    { text: '文字', link: '/GameUI/node/UiText' },
                    { text: '输入', link: '/GameUI/node/UiInput' },
                  ]
                },
              ]
            },
            { text: '导航器', link: '/GameUI/navigator' },
            { text: '通信', link: '/GameUI/remoteChannel/client' },
            { text: '监听输入事件', link: '/GameUI/input' },
            { text: '事件监听处理', link: '/GameUI/UiEvent' },
            {
              text: '🟰游戏数学',
              collapsed: false,
              items: [
                { text: '图像映射中区域的坐标', link: '/GameUI/maths/Coord2' },
                { text: 'UI缩放', link: '/GameUI/maths/UiScale' },
                { text: '三维向量', link: '/GameUI/maths/Vec3' },
                { text: '二维向量', link: '/GameUI/maths/Vec2' },
              ]
            },
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
