# 点鸭MySQL数据表

::: info
本包由创作者 [冷鱼与热猫（83354)](https://dao3.fun/profile/83354)）投稿
:::


::: warning
⚠注：本功能仅供 SQL学习参考及非商业化和流量较低的地图，请勿在商业化游戏中使用，数据丢失概不负责。
:::

支持在Pro岛写SQL语法，类似与旧岛数据库的SQL操作，保持语法一致性。

## 如何创建表

可视化数据库管理：[点鸭数据表后台管理](https://dbs.pgaot.com/)

1.登入网站，创建数据表。

2.生成神岛Key，并填入代码中。

3.支持可视化修改数据表内容。



## 安装包
```bash
npm --registry=https://mirrors.cloud.tencent.com/npm/ i @dao3fun/pg-dbs
```

## 引入包

```typescript
import PGdb, { PGdbFailResult } from "@dao3fun/pg-dbs";
```



## 简单的语法操作：
- 查询`祖籍`是`四川`的同学的`所有`信息。
```typescript

// 创建数据库连接实例
const dbs = new PGdb("9D7194D9D5A4F188200417EA283132F0");

/**
 * 定义数据接口，用于描述数据库查询结果的结构
 * 包含了用户信息相关的字段，如创建时间、更新时间、祖籍、姓名等
 */
interface Data {
    createdAt: number;
    updatedAt: Date;
    祖籍: string;
    姓名: string;
    性别: string;
    小组: string;
    选修课程: string;
    平均分: number;
    授课教师: string;
}

// 执行SQL查询
dbs.sql<Data>`SELECT * FROM 9caf494c19dacfd4a6762d11e92db090 WHERE 祖籍="四川"`
    .then(value => {
        // 成功时，将查询结果转换为JSON字符串并打印
        console.log(JSON.stringify(value));
    }).catch((e: PGdbFailResult) => {
        // 失败时，打印错误代码
        console.error("Error:", JSON.stringify(e));
    })
```
返回：

```json
{
	"code": 200,
	"msg": "查询数据成功",
	"logid": "cc802f836ac8f8ebb9fec2f2cbc0cdc4",
	"operatAt": "2024-11-05 13:42:03",
	"count": 2,
	"fields": [{
		"createdAt": 1,
		"updatedAt": "2024-11-04 13:42:03",
		"祖籍": "四川",
		"姓名": "贺靓晴",
		"性别": "男",
		"小组": "第一组",
		"选修课程": "英语",
		"平均分": 68,
		"授课教师": "Arleen"
	}, {
		"createdAt": 6,
		"updatedAt": "2024-11-03 13:42:03",
		"祖籍": "四川",
		"姓名": "云韶",
		"性别": "女",
		"小组": "第二组",
		"选修课程": "日语",
		"平均分": 85,
		"授课教师": "Perfect"
	}]
}
```

## 复杂的语法操作：
- 查询`第二组`的`英语总分`比`第一组`的`英语总分` 的`高/低多少分`，并给出`第一组的最高分`和`第二组的最低分` 。#
```typescript
// 创建数据库连接实例
const dbs = new PGdb("9D7194D9D5A4F188200417EA283132F0");

/**
 * 定义数据接口，用于描述数据库查询结果的结构
 * 包含了用户信息相关的字段，如创建时间、更新时间、祖籍、姓名等
 */
interface Data {
    createdAt: number;
    updatedAt: Date;
    祖籍: string;
    姓名: string;
    性别: string;
    小组: string;
    选修课程: string;
    平均分: number;
    授课教师: string;
}
// 数据表ID
const dbID = "9caf494c19dacfd4a6762d11e92db090";
//选修课程
const electiveCourses = "英语";

// 执行SQL查询
dbs.sql<Data>`SELECT 
    SUM(s2 - s1), 
    MAX(s1), 
    MIN(s2) 
FROM 
    (
    SELECT 
        平均分 AS s1 
    FROM 
        ${dbID} 
    WHERE 
        小组 ="第一组" 
        AND 选修课程 = ${electiveCourses}
    ) AS t1, 
    (
    SELECT 
        平均分 AS s2 
    FROM 
        ${dbID} 
    WHERE 
        小组 ="第二组" 
        AND 选修课程 = ${electiveCourses}
    ) AS t2`
    .then(value => {
        // 成功时，将查询结果转换为JSON字符串并打印
        console.log(JSON.stringify(value));
    }).catch((e: PGdbFailResult) => {
        // 失败时，打印错误代码
        console.error("Error:", JSON.stringify(e));
    })
```
返回：
```json
{
    "code": 200,
    "msg": "查询数据成功",
    "logid": "bbc70cf2bb0a6b3cc8d51b4aeb2e2187",
    "operatAt": "2024-11-05 13:42:03",
    "count": 1,
    "fields": [
        {
            "SUM(s2 - s1)": -105,
            "MAX(s1)": 92,
            "MIN(s2)": 48
        }
    ]
}
```




