import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241224-201241.png";
const _imports_1 = "/arenapro/QQ20241224-193943.png";
const __pageData = JSON.parse('{"title":"数据空间权限","description":"","frontmatter":{},"headers":[],"relativePath":"authority/storage.md","filePath":"authority/storage.md","lastUpdated":1735791146000}');
const _sfc_main = { name: "authority/storage.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="数据空间权限" tabindex="-1">数据空间权限 <a class="header-anchor" href="#数据空间权限" aria-label="Permalink to &quot;数据空间权限&quot;">​</a></h1><p>为了解决Arena数据空间无法直接进行可视化操作的问题，并满足<code>疯狂星期四团队</code>的需求，后端搬砖喵为VSCode特别打造了一个远程操作数据空间的功能。这里的<code>数据空间</code>特指Arena资源管理器中的对应功能，它允许用户在edit端以可视化的方式管理自己的数据。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="数据空间示例图"></p><h2 id="如何申请开通" tabindex="-1">如何申请开通 <a class="header-anchor" href="#如何申请开通" aria-label="Permalink to &quot;如何申请开通&quot;">​</a></h2><p><strong>注意</strong>：目前，数据空间功能并未向所有创作者全面开放，而是需要单独申请才能使用。</p><p>无权限信息如下：</p><p><img${ssrRenderAttr("src", _imports_1)} alt="数据空间示例图"></p><p>申请步骤如下：</p><ol><li>请点击以下链接加入QQ群：<a href="https://qm.qq.com/q/m0Ki5GqDBY" target="_blank" rel="noreferrer">492953731</a>。</li><li>在群内联系管理员“群主冷鱼与热猫”进行申请。</li></ol><h2 id="数据空间功能概览" tabindex="-1">数据空间功能概览 <a class="header-anchor" href="#数据空间功能概览" aria-label="Permalink to &quot;数据空间功能概览&quot;">​</a></h2><ul><li><strong>链接组数据空间</strong>：允许在扩展地图下的任意地图访问数据空间。</li><li><strong>普通数据空间</strong>：仅允许在当前地图访问数据空间。</li><li><strong>查看空间数据键值对列表</strong>：提供清晰的数据键值对展示。</li><li><strong>排序数据键值对</strong>：支持对键值对进行排序操作。</li><li><strong>新建键值对数据</strong>：允许用户创建新的键值对数据。</li><li><strong>修改键值对数据</strong>：支持对现有键值对数据进行修改。</li><li><strong>查看键值对数据</strong>：提供便捷的查看功能，帮助用户快速定位所需数据。</li><li><strong>导出数据空间数据</strong>：支持将数据空间的数据导出为可用格式，便于备份或迁移。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("authority/storage.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  storage as default
};
