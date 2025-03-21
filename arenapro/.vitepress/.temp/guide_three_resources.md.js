import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241129-201037.png";
const __pageData = JSON.parse('{"title":"Arena 资源管理器","description":"","frontmatter":{},"headers":[],"relativePath":"guide/three/resources.md","filePath":"guide/three/resources.md","lastUpdated":1732942230000}');
const _sfc_main = { name: "guide/three/resources.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arena-资源管理器" tabindex="-1">Arena 资源管理器 <a class="header-anchor" href="#arena-资源管理器" aria-label="Permalink to &quot;Arena 资源管理器&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="Arena 资源管理器示例图"></p><h2 id="涵盖资源" tabindex="-1">涵盖资源 <a class="header-anchor" href="#涵盖资源" aria-label="Permalink to &quot;涵盖资源&quot;">​</a></h2><p>在 <code>扩展地图</code> 模式下，当前地图下的所有副图资源数据均可实现互通。</p><p>资源支持范围广泛，包括但不限于：</p><ul><li><strong>模型</strong></li><li><strong>图片</strong></li><li><strong>UI 界面</strong></li><li><strong>数据空间</strong></li><li><strong>玩家皮肤</strong></li><li><strong>商城</strong></li><li><strong>临时聊天频道</strong></li><li><strong>音频</strong></li></ul><h2 id="资源管理器功能概览" tabindex="-1">资源管理器功能概览 <a class="header-anchor" href="#资源管理器功能概览" aria-label="Permalink to &quot;资源管理器功能概览&quot;">​</a></h2><ol><li><p><strong>快速浏览</strong></p><ul><li>在 VSCode 中，你可以轻松浏览并管理地图资源，涵盖模型、图片、音频等多种类型。</li></ul></li><li><p><strong>一键复制路径</strong></p><ul><li>只需轻点资源，即可快速复制其路径，并直接粘贴到代码中，极大简化了手动复制路径的繁琐步骤。</li></ul></li><li><p><strong>右键快捷操作</strong></p><ul><li>在资源上点击鼠标右键，即可展开更多便捷操作，如查看缩略图等。</li></ul></li></ol><h2 id="自动刷新机制" tabindex="-1">自动刷新机制 <a class="header-anchor" href="#自动刷新机制" aria-label="Permalink to &quot;自动刷新机制&quot;">​</a></h2><p>为确保资源列表的实时性和准确性，我们精心设计了多种自动刷新事件的触发条件：</p><ul><li><strong>初次展开列表</strong>：自动刷新当前资源列表，让你第一时间掌握最新资源状态。</li><li><strong>账号登录/登出</strong>：自动同步扩展地图资源，无缝切换不同账号，无需重新配置。</li><li><strong>配置扩展地图项目</strong>：自动更新模型、图片、聊天频道等相关资源，确保项目资源的完整性和一致性。</li></ul><p><strong>当然</strong>，若你需要立即查看最新的资源状态，也可随时<strong>手动刷新资源</strong>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/three/resources.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resources as default
};
