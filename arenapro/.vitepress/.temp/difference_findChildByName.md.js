import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/uifind.webp";
const _imports_1 = "/arenapro/uiimg.webp";
const _imports_2 = "/arenapro/uiinp.webp";
const __pageData = JSON.parse('{"title":"ui.findChildByName","description":"","frontmatter":{},"headers":[],"relativePath":"difference/findChildByName.md","filePath":"difference/findChildByName.md","lastUpdated":1732863260000}');
const _sfc_main = { name: "difference/findChildByName.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ui-findchildbyname" tabindex="-1">ui.findChildByName <a class="header-anchor" href="#ui-findchildbyname" aria-label="Permalink to &quot;ui.findChildByName&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该API文档：<a href="https://docs.box3lab.com/api/GameUI/UiNode.html#findChildByName" target="_blank" rel="noreferrer">findChildByName</a></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>修改原因：</strong><br> 因这个是获取神岛界面UI元素，代码无法自动判断类型，所以引入创作者手动类型约束机制，以便后续使用。</p></div><h2 id="用法示例" tabindex="-1">用法示例 <a class="header-anchor" href="#用法示例" aria-label="Permalink to &quot;用法示例&quot;">​</a></h2><h4 id="文本元素" tabindex="-1"><strong>文本元素</strong> <a class="header-anchor" href="#文本元素" aria-label="Permalink to &quot;**文本元素**&quot;">​</a></h4><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h4 id="图像元素" tabindex="-1"><strong>图像元素</strong> <a class="header-anchor" href="#图像元素" aria-label="Permalink to &quot;**图像元素**&quot;">​</a></h4><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h4 id="输入元素" tabindex="-1"><strong>输入元素</strong> <a class="header-anchor" href="#输入元素" aria-label="Permalink to &quot;**输入元素**&quot;">​</a></h4><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("difference/findChildByName.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findChildByName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findChildByName as default
};
