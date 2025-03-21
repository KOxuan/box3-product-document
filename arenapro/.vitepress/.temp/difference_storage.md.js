import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241022-192639.png";
const _imports_1 = "/arenapro/QQ20241022-193007.png";
const __pageData = JSON.parse('{"title":"数据空间","description":"","frontmatter":{},"headers":[],"relativePath":"difference/storage.md","filePath":"difference/storage.md","lastUpdated":1732863260000}');
const _sfc_main = { name: "difference/storage.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="数据空间" tabindex="-1">数据空间 <a class="header-anchor" href="#数据空间" aria-label="Permalink to &quot;数据空间&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该API文档：<a href="https://docs.box3lab.com/api/GameDataStorage/getSpace.html" target="_blank" rel="noreferrer">GameDataStorage</a></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>修改原因：</strong><br> 由于官方原先提供的d.ts文件中，该API接口的<code>value</code>字段被统一声明为<code>any</code>类型（更具体地说，是官方自定义的<code>JSONValue</code>类型，能同时容纳字符串、数值、布尔值、对象以及数组）。</p><p>然而，在大多数情况下，为了确保当前数据空间下的类型一致性，我们采用了泛型来约束，从而提升了代码的可读性和检查准确性。</p></div><h2 id="用法示例" tabindex="-1">用法示例 <a class="header-anchor" href="#用法示例" aria-label="Permalink to &quot;用法示例&quot;">​</a></h2><h3 id="不加泛型-默认为jsonvalue类型" tabindex="-1"><strong>不加泛型，默认为<code>JSONValue</code>类型</strong> <a class="header-anchor" href="#不加泛型-默认为jsonvalue类型" aria-label="Permalink to &quot;**不加泛型，默认为\`JSONValue\`类型**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h3 id="加了泛型约束" tabindex="-1"><strong>加了泛型约束</strong> <a class="header-anchor" href="#加了泛型约束" aria-label="Permalink to &quot;**加了泛型约束**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("difference/storage.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  storage as default
};
