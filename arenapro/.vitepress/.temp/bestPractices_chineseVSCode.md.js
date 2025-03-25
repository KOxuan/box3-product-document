import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/chvsc1.webp";
const _imports_1 = "/arenapro/chvsc2.webp";
const _imports_2 = "/arenapro/chvsc3.webp";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bestPractices/chineseVSCode.md","filePath":"bestPractices/chineseVSCode.md","lastUpdated":1727341800000}');
const _sfc_main = { name: "bestPractices/chineseVSCode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="danger custom-block"><p class="custom-block-title">危险</p><p>⚠️以下是可选操作，你也可以完全使用英文版本的编辑器。</p></div><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>安装后，编辑器左下角会出现重启编辑器以切换语言按钮，点击它。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>重启后，你的编辑器是中文的了！</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bestPractices/chineseVSCode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chineseVSCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chineseVSCode as default
};
