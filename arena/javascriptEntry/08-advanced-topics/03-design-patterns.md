# JavaScript 设计模式

设计模式是在软件设计中，针对常见问题的、经过验证的可重用解决方案。它们不是具体的代码，而是一种解决问题的思想和模板。在游戏开发中，使用正确的设计模式可以使你的代码更灵活、可维护和可扩展。

## 1. 单例模式 (Singleton Pattern)

**意图**：确保一个类只有一个实例，并提供一个全局访问点来获取该实例。

**游戏开发场景**：管理游戏全局状态、设置、或一个核心系统（如资源管理器、输入处理器）时非常有用，因为你只需要一个这样的管理器。

```javascript
// GameSettings.js
let instance;

class GameSettings {
  constructor() {
    if (instance) {
      throw new Error("你不能创建多个 GameSettings 实例！");
    }
    instance = this;

    // 默认设置
    this.volume = 80;
    this.difficulty = 'Normal';
  }

  static getInstance() {
    if (!instance) {
      instance = new GameSettings();
    }
    return instance;
  }
}

// 确保在任何地方获取的都是同一个实例
const settings1 = GameSettings.getInstance();
const settings2 = GameSettings.getInstance();

console.log(settings1 === settings2); // true

settings1.volume = 100;
console.log(settings2.volume); // 100
```

## 2. 观察者模式 (Observer Pattern)

**意图**：定义对象之间的一对多依赖关系。当一个对象（“主题”或“发布者”）的状态发生改变时，所有依赖于它的对象（“观察者”）都会得到通知并自动更新。

**游戏开发场景**：UI 更新（当玩家生命值变化时，UI 血条自动更新）、成就系统（当玩家完成特定任务时，成就系统得到通知）等。

```javascript
// Subject (发布者)
class HealthSystem {
  constructor() {
    this.observers = [];
    this.health = 100;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.health));
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`玩家受到 ${amount} 点伤害。`);
    this.notifyObservers();
  }
}

// Observer (观察者)
class HealthBarUI {
  update(health) {
    console.log(`[UI] 更新血条显示: ${health}`);
  }
}

class AchievementSystem {
  constructor() {
    this.achievementUnlocked = false;
  }
  update(health) {
    if (health < 20 && !this.achievementUnlocked) {
      console.log("[成就] 解锁成就：命悬一线！");
      this.achievementUnlocked = true;
    }
  }
}

// 使用
const healthSystem = new HealthSystem();
const healthBar = new HealthBarUI();
const achievements = new AchievementSystem();

healthSystem.addObserver(healthBar);
healthSystem.addObserver(achievements);

healthSystem.takeDamage(30); // [UI] 更新血条显示: 70
healthSystem.takeDamage(60); // [UI] 更新血条显示: 10, [成就] 解锁成就：命悬一线！
```

## 3. 工厂模式 (Factory Pattern)

**意图**：定义一个用于创建对象的接口，但让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。

**游戏开发场景**：创建不同类型的敌人、物品或特效，而无需在主代码中指定具体的类。

```javascript
class Enemy {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Goblin extends Enemy {
  constructor() {
    super('哥布林', 50);
  }
}

class Orc extends Enemy {
  constructor() {
    super('兽人', 150);
  }
}

// 敌人创建工厂
class EnemyFactory {
  create(type) {
    switch (type) {
      case 'goblin':
        return new Goblin();
      case 'orc':
        return new Orc();
      default:
        throw new Error('未知的敌人类型');
    }
  }
}

// 使用
const factory = new EnemyFactory();
const enemies = [];

enemies.push(factory.create('goblin'));
enemies.push(factory.create('orc'));

console.log(enemies); // [Goblin, Orc]
```

学习和应用设计模式可以帮助你构建更强大、更易于维护的游戏逻辑。
