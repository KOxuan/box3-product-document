import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241224-194636.png";
const __pageData = JSON.parse('{"title":"扩展地图权限","description":"","frontmatter":{},"headers":[],"relativePath":"authority/expandMap.md","filePath":"authority/expandMap.md","lastUpdated":1735791146000}');
const _sfc_main = { name: "authority/expandMap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="扩展地图权限" tabindex="-1">扩展地图权限 <a class="header-anchor" href="#扩展地图权限" aria-label="Permalink to &quot;扩展地图权限&quot;">​</a></h1><p><code>扩展地图</code>模式实现了多个子地图资源互通，涵盖了<code>代码</code>、<code>模型</code>、<code>图片</code>、<code>UI界面</code>、<code>数据空间</code>、<code>玩家皮肤</code>、<code>商城</code>及<code>音频</code>资源，旨在显著提升开发效率与灵活性。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="扩展地图示例"></p><h2 id="如何申请开通" tabindex="-1">如何申请开通 <a class="header-anchor" href="#如何申请开通" aria-label="Permalink to &quot;如何申请开通&quot;">​</a></h2><p>目前，<code>扩展地图</code>功能并非面向所有创作者开放，需要进行单独申请才能获取。</p><p>申请步骤如下：</p><ol><li>请点击以下链接加入QQ群：<a href="https://qm.qq.com/q/m0Ki5GqDBY" target="_blank" rel="noreferrer">492953731</a>。</li><li>在群内联系管理员“群主冷鱼与热猫”进行申请。</li></ol><h2 id="扩展地图优势" tabindex="-1">扩展地图优势 <a class="header-anchor" href="#扩展地图优势" aria-label="Permalink to &quot;扩展地图优势&quot;">​</a></h2><h3 id="_1-资源互通与高效管理" tabindex="-1">1. 资源互通与高效管理 <a class="header-anchor" href="#_1-资源互通与高效管理" aria-label="Permalink to &quot;1. 资源互通与高效管理&quot;">​</a></h3><ul><li><strong>资源共享</strong>：通过扩展地图，不同子地图之间的资源可以实现互通，方便创作者在一个统一的平台上管理和访问所有资源。</li><li><strong>管理便捷</strong>：集中化的资源管理方式可以简化开发流程，减少资源查找和整合的时间成本。</li></ul><h3 id="_2-提升开发效率" tabindex="-1">2. 提升开发效率 <a class="header-anchor" href="#_2-提升开发效率" aria-label="Permalink to &quot;2. 提升开发效率&quot;">​</a></h3><ul><li><strong>快速定位资源</strong>：创作者可以迅速在扩展地图中找到所需的资源，无需在不同的子地图之间来回切换。</li><li><strong>减少重复工作</strong>：扩展地图可以避免资源的重复创建和存储，从而降低开发过程中的冗余和错误。</li></ul><h3 id="_3-增强开发灵活性" tabindex="-1">3. 增强开发灵活性 <a class="header-anchor" href="#_3-增强开发灵活性" aria-label="Permalink to &quot;3. 增强开发灵活性&quot;">​</a></h3><ul><li><strong>多样化资源支持</strong>：扩展地图涵盖了多种资源类型，为创作者提供了丰富的素材选择。</li><li><strong>自定义开发</strong>：创作者可以根据自己的需求，在扩展地图中创建和修改资源，实现更加个性化的开发。</li></ul><h3 id="_4-优化用户体验" tabindex="-1">4. 优化用户体验 <a class="header-anchor" href="#_4-优化用户体验" aria-label="Permalink to &quot;4. 优化用户体验&quot;">​</a></h3><ul><li><strong>资源优化</strong>：扩展地图可以对资源进行整合和优化，确保游戏或应用的流畅运行。</li><li><strong>个性化推荐</strong>：基于用户的偏好和行为数据，扩展地图可以提供个性化的资源推荐，提升用户体验。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("authority/expandMap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expandMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expandMap as default
};
