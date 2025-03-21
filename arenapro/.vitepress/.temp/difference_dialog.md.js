import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/text.webp";
const _imports_1 = "/arenapro/select.webp";
const _imports_2 = "/arenapro/input.webp";
const _imports_3 = "/arenapro/dialog.webp";
const __pageData = JSON.parse('{"title":"entity.player.dialog","description":"","frontmatter":{},"headers":[],"relativePath":"difference/dialog.md","filePath":"difference/dialog.md","lastUpdated":1732942230000}');
const _sfc_main = { name: "difference/dialog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="entity-player-dialog" tabindex="-1">entity.player.dialog <a class="header-anchor" href="#entity-player-dialog" aria-label="Permalink to &quot;entity.player.dialog&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该API文档：<a href="https://docs.box3lab.com/api/GamePlayer/chat.html#dialog" target="_blank" rel="noreferrer">dialog</a></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>修改原因：</strong><br> 由于官方原先提供的d.ts文件中，该API的接口定义与TypeScript的编码标准不匹配，导致许多创作者使用上的困难，我们进行了必要的优化调整。</p></div><h2 id="用法示例" tabindex="-1">用法示例 <a class="header-anchor" href="#用法示例" aria-label="Permalink to &quot;用法示例&quot;">​</a></h2><h3 id="弹出文本对话框" tabindex="-1"><strong>弹出文本对话框</strong> <a class="header-anchor" href="#弹出文本对话框" aria-label="Permalink to &quot;**弹出文本对话框**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h3 id="弹出选项对话框" tabindex="-1"><strong>弹出选项对话框</strong> <a class="header-anchor" href="#弹出选项对话框" aria-label="Permalink to &quot;**弹出选项对话框**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h3 id="弹出输入对话框" tabindex="-1"><strong>弹出输入对话框</strong> <a class="header-anchor" href="#弹出输入对话框" aria-label="Permalink to &quot;**弹出输入对话框**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><ol><li><p><strong>类型安全</strong>：通过定义明确的类型，TypeScript 能够在编译时捕获潜在的错误，比如传递了错误类型的参数或遗漏了必需的属性。</p></li><li><p><strong>清晰的API文档</strong>：类型定义本身就是一种文档，它清楚地说明了每个API调用需要什么参数以及这些参数的类型。</p></li><li><p><strong>增强的代码可读性</strong>：当其他创作者阅读你的代码时，类型定义提供了额外的上下文，使他们更容易理解你的意图。</p></li><li><p><strong>减少运行时错误</strong>：通过静态类型检查，你可以在代码运行之前捕获许多常见的错误，从而减少运行时出现问题的可能性。</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("difference/dialog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dialog as default
};
