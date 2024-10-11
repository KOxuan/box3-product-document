# 路径别名设置
在 TypeScript 项目中，路径别名是一种常用的配置，它可以帮助我们简化相对路径，提高代码的可读性和可维护性。本文将介绍如何在 TypeScript 中设置路径别名，以及如何解决开发与打包时的路径问题。

## 第一步：tscfg设置路径别名
我们可以通过在 `tsconfig.json` 文件中配置 `paths` 选项来设置路径别名。例如，我们有一个名为 `utils` 的文件夹，其中包含一些常用的工具函数。我们可以为这个文件夹设置一个别名，如下所示：

![](/pathAliases1.webp)

在上面的配置中，这意味着在代码中我们可以使用 `import { sun } from '@utils/Math'` 来导入 `./src/utils` 文件夹中的 `Math` 文件。

![](/pathAliases2.webp)

![](/pathAliases3.webp)

## 第一步：webpackcfg设置路径别名
我们可以通过在 `webpack.config.js` 文件中配置 `alias` 选项来设置路径别名，以便于打包。

![](/pathAliases4.webp)

注意，这里要写具体的引用的值。才能打包成功。



另外一种方式：[TypeScript 路径别名](https://developer.baidu.com/article/detail.html?id=2835325)

