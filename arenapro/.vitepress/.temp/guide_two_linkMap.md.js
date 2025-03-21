import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./QQ_1721718378414.CW_PwuWk.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/arenapro/maplink.webp";
const _imports_2 = "/arenapro/QQ_1721015607139.webp";
const _imports_3 = "/arenapro/mapzt.webp";
const _imports_4 = "/arenapro/dao3cfg.webp";
const __pageData = JSON.parse('{"title":"链接扩展地图到项目指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/two/linkMap.md","filePath":"guide/two/linkMap.md","lastUpdated":1732810999000}');
const _sfc_main = { name: "guide/two/linkMap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="链接扩展地图到项目指南" tabindex="-1">链接扩展地图到项目指南 <a class="header-anchor" href="#链接扩展地图到项目指南" aria-label="Permalink to &quot;链接扩展地图到项目指南&quot;">​</a></h1><h2 id="第一步-启用快捷配置功能" tabindex="-1">第一步：启用快捷配置功能 <a class="header-anchor" href="#第一步-启用快捷配置功能" aria-label="Permalink to &quot;第一步：启用快捷配置功能&quot;">​</a></h2><p>请注意，此功能<strong>仅在成功登录神岛账户后</strong>才会被激活。</p><ol><li><p><strong>打开项目文件</strong>：</p><ul><li>在你的项目中，找到并点击<code>dao3.config.json</code>文件以进行打开操作。 <img${ssrRenderAttr("src", _imports_0)} alt="打开dao3.config.json文件"></li></ul></li><li><p><strong>进入配置界面</strong>：</p><ul><li>文件打开后，点击界面上的<strong>扩展地图链接</strong>选项。 <img${ssrRenderAttr("src", _imports_1)} alt="进入扩展地图链接配置界面"></li><li>点击后，系统将自动获取你神岛账户下的扩展地图列表，请耐心等待展示。</li></ul></li></ol><h2 id="第二步-链接arena扩展地图" tabindex="-1">第二步：链接Arena扩展地图 <a class="header-anchor" href="#第二步-链接arena扩展地图" aria-label="Permalink to &quot;第二步：链接Arena扩展地图&quot;">​</a></h2><ol><li><p><strong>选择目标地图</strong>：</p><ul><li>从展示的地图列表中，选择你想要链接的地图。选择后，系统将自动进行配置。 <img${ssrRenderAttr("src", _imports_2)} alt="选择目标地图进行链接"></li></ul></li><li><p><strong>选择子图（如适用）</strong>：</p><ul><li>如果所选地图包含子图，系统将弹出子图选项框。请从中选择你具体想要链接的地图。 <img${ssrRenderAttr("src", _imports_3)} alt="选择子图进行链接"></li></ul></li><li><p><strong>验证配置结果</strong>：</p><ul><li>返回<code>dao3.config.json</code>文件，检查<code>map</code>字段是否已成功填充数据。</li><li>如果<code>map</code>字段包含有效数据，则表示配置已成功完成。 <img${ssrRenderAttr("src", _imports_4)} alt="验证dao3.config.json配置结果"></li></ul></li></ol><p>按照上述步骤，你可以轻松地将你的扩展地图链接到你的项目中，以便后续的开发和上传操作。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/two/linkMap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const linkMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  linkMap as default
};
