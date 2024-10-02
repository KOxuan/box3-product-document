# 导入JSON文件
## 第一步：Excel转JSON
如果你是Excel表格写的，请先转成JSON格式文件。

![](/json1.webp)

在[在线Excel转JSON](https://www.lddgo.net/string/excel-to-json) 转成JSON文件并保存到本地。


![](/json2.webp)

## 第二步：导入JSON
刚才保存的JSON文件，内容是这样的


![](/json3.webp)

再任意ts文件中，这里选择App.ts文件里，导入这个JSON文件，以便后续调用内容。


![](/json4.webp)

编译后在地图中查看效果。


![](/json5.webp)

## 第三步：自定义JSON格式
你完全可以不限制于数组，可以使用Python助你转成你想要的格式，以下是《单词派对》地图中的一个示例：

以下是一个关卡配置格式：

```json
{
  "pass": {  //当前章节
    "1-1": {	//当前章节-关卡
      "name": "遗迹深林 1-1",	//关卡名称
      "word": [		//当前关卡所包含的单词
        {
          "name": "Head",	//单词
          "explain": "头部",  //单词中文
          "example0": "She nodded her head in agreement.",	//示例句子
          "translate0": "她点头表示同意。",	//示例句子中文
          "example1": "This is my head.",	
          "translate1": "这是我的头。",
          "pic0": "picture/Head_0.jpg",	// 单词图片资源
          "pic1": "picture/Head_1.jpg",
          "pic2": "picture/Head_2.jpg",
          "pic3": "picture/Head_3.jpg",
          "audio0": "audio/Head_0.mp3",	//单词语音资源
          "audio1": "audio/Head_1.mp3",
          "audio2": "audio/Head_2.mp3"
        }
      ]
    }
  }
}
```

我们用Excel表格写入关卡数据

![](/json6.webp)

在[在线Excel转JSON](https://www.lddgo.net/string/excel-to-json) 转成JSON文件并保存到本地。


![](/json7.webp)

通过python程序，（自己写或找AI生成程序）我们批量转成所需要的格式即可。


![](/json8.webp)

生成后的结果

![](/json9.webp)

在ts中调用单词数据


![](/json10.webp)

打包成js，在神岛地图中运行


![](/json11.webp)
