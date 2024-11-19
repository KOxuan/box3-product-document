# 快速开始
:::tip
因官方规划，本插件仅在`扩展地图`模式下才能正常使用。

`扩展地图`模式实现了多个子地图资源互通，涵盖了`代码`、`模型`、`图片`、`UI界面`、`数据空间`及`音频`资源，旨在显著提升开发效率与灵活性。
:::
## 插件安装

### 支持的 IDE 及操作系统
+ [Node.js V20.x](/bestPractices/nodejs) or later (LTS)
+ Windows 10/11 / macOS / Linux
+ [Visual Studio Code 1.90](/bestPractices/vscode) or later


满足上方条件可以安装：[ArenaPro Creator 插件](vscode:extension/box3lab.box3arenapro)

![](/QQ20240926-151900.png)

## 创建项目文件夹

步骤1：创建一个空文件夹

![](/屏幕截图20240715111112.webp)



步骤2：给文件夹项目命名，纯英文命名

:::warning
⚠️为避免后续编译问题。项目名，甚至整个路径，都需要`纯英文命名`，不要加`非法字符`和`中文`，也不要有`空格`。
:::

以下是示例，请根据你自己的项目命名。

游戏项目：`瓶盖人大乱斗`。英文名：`bottleMan`

![](/屏幕截图20240715111714.webp)



## 打开项目

步骤1：点击`文件[File]`->打开`文件夹[Open Folder]`->选择刚才创建文件夹

![](/屏幕截图20240715113226.webp)

导入后的效果如下：

![](/屏幕截图20240715113501.webp)




## 新建Arena-Ts项目
在VSCode中，按下`Shift+Ctrl+P` 或 `F1`（Mac上是`Shift+Cmd+P`）调出`命令面板（Command Palette)`

![](/commd.webp)

输入`arenapro`，找到`新建Arena项目[Create new Arena Project]`选项并点击

![](/QQ_1721718026872.webp)



:::danger
⚠️请注意，如果在执行命令过程中，出现`Ok to proceed?`时，可能会有2次这样的情况，请你按下`键盘上的y键`，然后按下`Enter`即可。请不要输入其他信息，否则会安装失败。

![](/proceedok.webp)
:::


当终端出现这行时，代表项目安装成功。

![](/atsok.webp)

:::warning
如果出现其他情况，请查看：[NodeJS 部署Arena-Ts问题](/bestPractices/nodejsTest)
:::

此刻，脚手架将自动在指定的文件夹中构建而成，便标志着已成功创建了一个Arena-Ts项目。

![](/arenats.webp)