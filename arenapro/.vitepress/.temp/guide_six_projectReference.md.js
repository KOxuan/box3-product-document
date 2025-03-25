import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241130-105649.png";
const _imports_1 = "/arenapro/QQ20241130-105935.png";
const _imports_2 = "/arenapro/QQ20241130-110625.png";
const _imports_3 = "/arenapro/QQ20241130-110733.png";
const _imports_4 = "/arenapro/QQ20241130-111024.png";
const __pageData = JSON.parse('{"title":"跨项目引用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/six/projectReference.md","filePath":"guide/six/projectReference.md","lastUpdated":1732942230000}');
const _sfc_main = { name: "guide/six/projectReference.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="跨项目引用" tabindex="-1">跨项目引用 <a class="header-anchor" href="#跨项目引用" aria-label="Permalink to &quot;跨项目引用&quot;">​</a></h1><p>在开发神岛地图的进程中，为了提高代码复用率和开发效率，不同扩展地图之间可能会共享一些代码，特别是工具类代码。例如，项目A可能会引用项目B的代码，实现功能的复用。</p><h2 id="如何实现跨项目引用" tabindex="-1">如何实现跨项目引用？ <a class="header-anchor" href="#如何实现跨项目引用" aria-label="Permalink to &quot;如何实现跨项目引用？&quot;">​</a></h2><h3 id="将项目b的文件夹引入工作区" tabindex="-1">将项目B的文件夹引入工作区 <a class="header-anchor" href="#将项目b的文件夹引入工作区" aria-label="Permalink to &quot;将项目B的文件夹引入工作区&quot;">​</a></h3><p>为了方便开发，我们可以在项目中引入其他项目的文件夹，从而实现在一个界面上同时操作两个项目的模式。AP插件支持这种多项目开发模式，它能够自动识别当前打开的项目文件，从而决定构建和资源管理的目标。</p><h4 id="导入项目b文件夹到工作区" tabindex="-1">导入项目B文件夹到工作区 <a class="header-anchor" href="#导入项目b文件夹到工作区" aria-label="Permalink to &quot;导入项目B文件夹到工作区&quot;">​</a></h4><p>在资源管理器中，右键点击空白处，选择<code>增加文件夹到工作区（Add Folder to Workspace...）</code>选项。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="增加文件夹到工作区"></p><p>接着，选择项目B的文件夹并点击确定。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="选择项目B文件夹"></p><p>现在，我们已经创建了一个包含两个根文件夹的工作区，分别代表两个神岛代码项目。</p><h3 id="引用项目代码" tabindex="-1">引用项目代码 <a class="header-anchor" href="#引用项目代码" aria-label="Permalink to &quot;引用项目代码&quot;">​</a></h3><p>假设我们现在想在<code>bottleMan</code>项目中引用<code>Backroom</code>项目中的<code>sum</code>函数。</p><h4 id="配置tsconfig-json" tabindex="-1">配置<code>tsconfig.json</code> <a class="header-anchor" href="#配置tsconfig-json" aria-label="Permalink to &quot;配置\`tsconfig.json\`&quot;">​</a></h4><p>首先，需要在<code>bottleMan</code>项目下的服务端或客户端的<code>tsconfig.json</code>文件中，将<code>rootDir</code>属性设置为<code>../../</code>，以便能够引用到<code>Backroom</code>项目下的文件。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="配置"></p><h4 id="引用文件" tabindex="-1">引用文件 <a class="header-anchor" href="#引用文件" aria-label="Permalink to &quot;引用文件&quot;">​</a></h4><p>然后，在<code>bottleMan</code>项目下的服务端<code>App.ts</code>文件中，直接引用<code>Backroom</code>项目下的<code>utils.ts</code>文件。</p><p><img${ssrRenderAttr("src", _imports_3)} alt="引用文件"></p><h4 id="构建并验证" tabindex="-1">构建并验证 <a class="header-anchor" href="#构建并验证" aria-label="Permalink to &quot;构建并验证&quot;">​</a></h4><p>最后，通过构建项目，在神岛编辑器中验证是否能够正常使用引用的代码。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="验证引用效果"></p><p>通过以上步骤，我们成功实现了在神岛地图开发中的跨项目代码引用，提高了开发效率和代码复用率。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/six/projectReference.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectReference = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  projectReference as default
};
