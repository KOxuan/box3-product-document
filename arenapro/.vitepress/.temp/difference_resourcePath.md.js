import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_3 } from "./QQ20241222-160335.6ErJmi5F.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"游戏资源路径","description":"","frontmatter":{},"headers":[],"relativePath":"difference/resourcePath.md","filePath":"difference/resourcePath.md","lastUpdated":1735044374000}');
const _sfc_main = { name: "difference/resourcePath.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="游戏资源路径" tabindex="-1">游戏资源路径 <a class="header-anchor" href="#游戏资源路径" aria-label="Permalink to &quot;游戏资源路径&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>修改原因：</strong><br> 由于官方原先提供的d.ts文件中，相关API接口（例如创建实体，播放音频等）路径参数被统一声明为<code>string</code>类型。</p><p>然而，当资源不存在时，强制执行代码会触发游戏报错。</p><p>为了实现代码语法提示，我们采用了同步地图的资源，生成资源类型来约束。</p></div><p>如何同步资源：<a href="/arenapro/guide/three/resourcesSynchronous.html">一键同步地图资源</a></p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_3)} alt="脚本中使用类型约束示例"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("difference/resourcePath.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resourcePath = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resourcePath as default
};
