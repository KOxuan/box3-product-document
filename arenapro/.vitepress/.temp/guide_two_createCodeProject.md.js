import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2, b as _imports_4, c as _imports_5, d as _imports_10 } from "./QQ20241128-221728.iCj5Czd1.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/arenapro/QQ20241128-212721.png";
const _imports_3 = "/arenapro/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE20240715113501.webp";
const _imports_6 = "/arenapro/QQ20241128-215431.png";
const _imports_7 = "/arenapro/QQ20241128-215102.png";
const _imports_8 = "/arenapro/QQ20241128-215225.png";
const _imports_9 = "/arenapro/arenats.webp";
const __pageData = JSON.parse('{"title":"创建地图代码项目","description":"","frontmatter":{},"headers":[],"relativePath":"guide/two/createCodeProject.md","filePath":"guide/two/createCodeProject.md","lastUpdated":1736931384000}');
const _sfc_main = { name: "guide/two/createCodeProject.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="创建地图代码项目" tabindex="-1">创建地图代码项目 <a class="header-anchor" href="#创建地图代码项目" aria-label="Permalink to &quot;创建地图代码项目&quot;">​</a></h1><p>在 ArenaPro 插件中，创作者们不再需要直接在 Arena 地图代码编辑器中编写代码。相反，我们需要在本地计算机上创建一个文件夹，每个文件夹代表一个独立的项目，用于存放一张或多张扩展地图的全部代码。</p><h2 id="创建项目文件夹" tabindex="-1">创建项目文件夹 <a class="header-anchor" href="#创建项目文件夹" aria-label="Permalink to &quot;创建项目文件夹&quot;">​</a></h2><h3 id="步骤-1-新建空文件夹" tabindex="-1">步骤 1：新建空文件夹 <a class="header-anchor" href="#步骤-1-新建空文件夹" aria-label="Permalink to &quot;步骤 1：新建空文件夹&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="创建空文件夹"></p><h3 id="步骤-2-文件夹命名-纯英文" tabindex="-1">步骤 2：文件夹命名（纯英文） <a class="header-anchor" href="#步骤-2-文件夹命名-纯英文" aria-label="Permalink to &quot;步骤 2：文件夹命名（纯英文）&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">警告</p><p><strong>注意</strong>：为避免编译错误，项目名称及路径应使用纯英文命名，避免包含非法字符、中文及空格。</p></div><p>示例命名如下：</p><ul><li>游戏项目名称：<code>瓶盖人大乱斗</code></li><li>英文名：<code>bottleMan</code></li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt="项目命名"></p><h2 id="打开项目" tabindex="-1">打开项目 <a class="header-anchor" href="#打开项目" aria-label="Permalink to &quot;打开项目&quot;">​</a></h2><h3 id="步骤-1-在编辑器中导入文件夹" tabindex="-1">步骤 1：在编辑器中导入文件夹 <a class="header-anchor" href="#步骤-1-在编辑器中导入文件夹" aria-label="Permalink to &quot;步骤 1：在编辑器中导入文件夹&quot;">​</a></h3><ul><li>在 VSCode 中，点击<code>文件(File)</code> -&gt; <code>打开文件夹(Open Folder)</code> -&gt; 选择刚才创建的文件夹。</li></ul><p><img${ssrRenderAttr("src", _imports_2)} alt="打开文件夹"></p><p>导入后的项目结构如下：</p><p><img${ssrRenderAttr("src", _imports_3)} alt="导入后效果"></p><h2 id="新建-arena-ts-项目" tabindex="-1">新建 Arena-Ts 项目 <a class="header-anchor" href="#新建-arena-ts-项目" aria-label="Permalink to &quot;新建 Arena-Ts 项目&quot;">​</a></h2><p>在 VSCode 中，按下<code>F1</code>或<code>Shift+Ctrl+P</code>（Mac 上是<code>Shift+Cmd+P</code>）调出命令面板。</p><p>输入<code>arena-ts</code>，找到并点击<code>新建Arena-Ts项目(Create new Arena-Ts Project)</code>选项。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="新建Arena-Ts项目"></p><p>接下来，开始创建项目。</p><p><img${ssrRenderAttr("src", _imports_5)} alt="项目创建中"></p><div class="danger custom-block"><p class="custom-block-title">危险</p><p><strong>注意</strong>：在创建项目过程中，如果出现<code>Ok to proceed?</code>提示，请按下<code>y</code>键，然后按下<code>Enter</code>键。避免输入其他信息，否则可能导致安装失败。</p><p><img${ssrRenderAttr("src", _imports_6)} alt="确认继续"></p></div><p>随后，脚手架会询问一些配置问题，请根据个人习惯进行选择。特别需要注意的是，这里需要选择<code>神岛地图项目</code>作为项目类型。</p><p><img${ssrRenderAttr("src", _imports_7)} alt="选择项目类型"></p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>程序会提示你是否部署 ESLint、Husky、Lint-Staged 和 Prettier 包，</p><p>根据你自身需求选择是否额外部署，如是多人协助项目，建议部署。</p><p>请参考：<a href="/arenapro/engineering/describes.html">前端工程化介绍</a></p></div><p>选择完成后，按<code>Enter</code>键确认。接下来，脚手架将开始创建文件，并安装项目开发及编译所需的依赖包。请耐心等待创建过程完成。</p><p>当终端显示如下信息时，表示项目已成功安装。</p><p><img${ssrRenderAttr("src", _imports_8)} alt="项目安装成功"></p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如遇到其他问题，请参考：<a href="/arenapro/bestPractices/nodejsTest.html">NodeJS 部署 Arena-Ts 问题解决方案</a></p></div><p>此刻，脚手架已在指定的文件夹中完成构建，标志着已成功创建了一个 Arena-Ts 项目。</p><p><img${ssrRenderAttr("src", _imports_9)} alt="Arena-Ts项目创建成功"></p><div class="info custom-block"><p class="custom-block-title">信息</p><p>关于脚手架的架构，请参考：<a href="/arenapro/dao3Cfg/file.html">Arena-Ts 地图项目架构</a></p></div><h2 id="验证项目是否正常" tabindex="-1">验证项目是否正常 <a class="header-anchor" href="#验证项目是否正常" aria-label="Permalink to &quot;验证项目是否正常&quot;">​</a></h2><p>在安装完脚手架之后，首要的任务便是验证项目的正常运行。为此，我们只需点击编辑器左下角的<code>完整构建项目</code>按钮。</p><p>若项目构建成功，你将在终端窗口中查看到如下提示信息：</p><p><img${ssrRenderAttr("src", _imports_10)} alt="构建成功"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/two/createCodeProject.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createCodeProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createCodeProject as default
};
