# 多项目引用
在多个地图项目的开发过程中，脚本复用成为了一个普遍且高效的做法。这种实践不仅促进了代码的重用性，还显著提升了开发效率。

## 第一步：导入多项目到工作区
:::danger
⚠这一步其实可以忽略，只是为了方便同时编辑。

:::

我们可以使用vscode的导入根目录来导入多个地图项目。

点击`文件[File]`->`将文件夹添加到工作区[Add Folder to Workspace]`导入另外的项目

![](/crossProject1.webp)

这里的文件夹是123

![](/crossProject2.webp)


## 第二步：tscfg设置基本路径
如果我们直接调用其他项目的脚本，会导致报错。

![](/crossProject3.webp)

![](/crossProject4.webp)


我们可以通过在 `tsconfig.json` 文件中配置 `rootDir` 选项来设置根路径，如下所示：

![](/crossProject5.webp)


修改后，就不会报错了

![](/crossProject6.webp)


编译后在地图中查看效果。

![](/crossProject7.webp)


