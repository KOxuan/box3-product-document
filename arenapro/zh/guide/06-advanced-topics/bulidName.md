# 国际化语言

你的的游戏《星际矿工》在平台上意外走红——原本只是面向中国玩家的小众作品，却突然涌入了来自世界各地的玩家。很多人说：

> "游戏很棒，如果适配了英语那就更好了！" —— 英国玩家。
> "太可惜了，我都玩不懂，适配俄语就好了。" —— 俄罗斯玩家。
...

作为唯一的开发者，我慌了——难道要为每种语言都硬编码一套 UI？这时，我发现了 i18next 这个"游戏语言魔法师"...

---

## 第 1 关：配置语言装备

就像游戏角色需要装备一样，我们先给项目装上 i18next：

```typescript
// 安装装备
yarn add i18next i18next-http-backend

// 游戏语言初始化装备
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).init({
  lng: navigator.language || 'en', // 自动检测玩家系统语言
  fallbackLng: 'en',
  ns: ['ui', 'dialogue', 'achievements'], // 游戏的不同文本模块
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // 语言包存放位置
  }
});
```

现在，游戏会根据玩家电脑的语言设置自动选择语言包，就像智能 NPC 能自动切换对话语言一样神奇！

---

## 第 2 关：设计多语言道具箱

在`public/locales`目录下创建语言包，就像准备不同颜色的魔法符文：

```
/locales
  /en
    ui.json       # 英文UI文本
    dialogue.json # 英文对话
  /zh
    ui.json       # 中文UI文本
    dialogue.json # 中文对话
  /ja
    ui.json       # 日文UI文本
    dialogue.json # 日文对话
```

示例中文 UI 文本 (`zh/ui.json`)：

```json
{
  "menu": {
    "startGame": "开始采矿之旅",
    "settings": "矿工设置",
    "exit": "返回地球"
  },
  "hud": {
    "oxygen": "氧气: {{value}}%",
    "minerals": "矿物: {{count}}块"
  }
}
```

英文版 (`en/ui.json`) 保持相同结构但内容不同，就像不同语言的游戏手册。

---

## 第 3 关：在游戏中使用翻译

### 场景 1：主菜单本地化

```typescript
// 创建开始按钮
const startBtn = document.createElement("button");
startBtn.textContent = i18n.t("ui:menu.startGame");
// 显示为"开始采矿之旅"或"Start Mining Journey"

// 氧气显示更新
function updateHUD() {
  oxygenDisplay.textContent = i18n.t("ui:hud.oxygen", {
    value: player.oxygenLevel,
  });
}
```

### 场景 2：剧情对话系统

```typescript
// 加载对话文本
i18n.loadNamespaces("dialogue").then(() => {
  showDialogue(
    i18n.t("dialogue:chapter1.alien", {
      playerName: saveData.name,
      mineral: "氪晶矿",
    })
  );
});
```

对应对话文件 (`zh/dialogue.json`)：

```json
{
  "chapter1": {
    "alien": "{{playerName}}！小心那些{{mineral}}会爆炸！",
    "choices": {
      "mineAnyway": "继续采矿（冒险）",
      "runAway": "赶紧逃跑（明智）"
    }
  }
}
```

---

## 第 4 关：玩家语言切换功能

在游戏设置中添加语言选择器，就像《赛博朋克 2077》的语音切换：

```typescript
// 语言切换按钮事件
languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    i18n.changeLanguage(btn.dataset.lang).then(() => {
      // 重载游戏界面文字
      reloadGameText();
      // 显示提示
      showToast(i18n.t("ui:languageChanged"));
    });
  });
});
```

对应的提示文本在所有语言包中都要存在：

```json
// en/ui.json
{
  "languageChanged": "Language changed!"
}

// zh/ui.json
{
  "languageChanged": "语言已切换！"
}
```

---

## 第 5 关：处理特殊游戏文本

### 复数系统 - 战利品统计

```typescript
// 英文需要复数形式
// en/ui.json
{
  "loot": "You got {{count}} gem",
  "loot_plural": "You got {{count}} gems"
}

// 中文不需要复数
// zh/ui.json
{
  "loot": "获得了{{count}}块宝石"
}

// 使用方式
i18n.t('ui:loot', { count: player.gems });
```

### 性别相关文本 - NPC 对话

```json
// dialogue.json
{
  "npcGreeting": "你好，{{title}}！",
  "npcGreeting_male": "先生您好！",
  "npcGreeting_female": "女士您好！"
}
```

```typescript
i18n.t("dialogue:npcGreeting", {
  title: "冒险者",
  context: player.gender, // 'male' 或 'female'
});
```

---

## 终极 Boss 战：动态内容本地化

当玩家发现随机生成的外星遗迹时，我们需要组合多个翻译片段：

```typescript
// 生成如："你发现了远古[蜥蜴人]的[祭祀神殿]"
const discoveryText = i18n.t('discovery.prefix') +
  i18n.t(`species.${ruin.species}`) +
  i18n.t('discovery.connector') +
  i18n.t(`structure.${ruin.type}`);

// 各语言文件需要保持相同结构但不同连接词
// zh/discovery.json
{
  "prefix": "你发现了远古",
  "connector": "的"
}

// en/discovery.json
{
  "prefix": "You discovered an ancient ",
  "connector": "'s "
}
```

---

## 通关奖励：玩家好评如潮

多语言支持上线后，游戏评价变成了：

> "现在可以愉快玩耍了！谢谢开发者！" —— 中文玩家  
> "Спасибо за русский язык!" —— 俄罗斯玩家  
> "日本語対応最高です！" —— 日本玩家

Steam 全球销量提升了 300%，而所有魔法般的多语言功能，只用了不到 200 行代码实现！

---

## 开发者笔记：i18next 在游戏中的优势

1. **按需加载**：不会一次性加载所有语言包拖慢游戏启动
2. **热切换**：像更换游戏皮肤一样实时切换语言
3. **结构清晰**：不同文本类型(UI/对话/成就)分命名空间管理
4. **社区支持**：大部分翻译平台都支持 i18next 格式

现在，你的游戏也准备好征服全球玩家了！记得在 Steam 语言支持列表里骄傲地写上："支持 20+语言" 🌍🎮
