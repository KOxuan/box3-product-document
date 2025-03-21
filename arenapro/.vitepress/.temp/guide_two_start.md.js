import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20240926-151900.png";
const __pageData = JSON.parse('{"title":"安装AP插件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/two/start.md","filePath":"guide/two/start.md","lastUpdated":1735044374000}');
const _sfc_main = { name: "guide/two/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装ap插件" tabindex="-1">安装AP插件 <a class="header-anchor" href="#安装ap插件" aria-label="Permalink to &quot;安装AP插件&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>因官方规划，本插件仅在<a href="/arenapro/authority/expandMap.html"><code>扩展地图</code></a>模式下才能正常使用。</p><p><a href="/arenapro/authority/expandMap.html"><code>扩展地图</code></a>模式实现了多个子地图资源互通，涵盖了<code>代码</code>、<code>模型</code>、<code>图片</code>、<code>UI界面</code>、<code>数据空间</code>、<code>玩家皮肤</code>、<code>商城</code>及<code>音频</code>资源，旨在显著提升开发效率与灵活性。</p></div><h2 id="插件安装" tabindex="-1">插件安装 <a class="header-anchor" href="#插件安装" aria-label="Permalink to &quot;插件安装&quot;">​</a></h2><h3 id="支持的-ide-及操作系统" tabindex="-1">支持的 IDE 及操作系统 <a class="header-anchor" href="#支持的-ide-及操作系统" aria-label="Permalink to &quot;支持的 IDE 及操作系统&quot;">​</a></h3><ul><li><a href="/arenapro/bestPractices/nodejs.html">Node.js V20.x</a> or later (LTS)</li><li>Windows 10/11 / macOS / Linux</li><li><a href="/arenapro/bestPractices/vscode.html">Visual Studio Code 1.90</a> or later</li></ul><p>初次使用请先安装上方程序，满足上方条件可以安装：<a href="vscode:extension/box3lab.box3arenapro" target="_blank" rel="noreferrer">ArenaPro Creator 插件</a></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/two/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
