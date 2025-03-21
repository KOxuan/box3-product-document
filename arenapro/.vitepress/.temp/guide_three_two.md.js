import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241128-223900.png";
const _imports_1 = "/arenapro/QQ_1721023926173.webp";
const _imports_2 = "/arenapro/QQ_1721024305286.webp";
const _imports_3 = "/arenapro/QQ_1721023950939.webp";
const __pageData = JSON.parse('{"title":"编译与上传指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/three/two.md","filePath":"guide/three/two.md","lastUpdated":1732810999000}');
const _sfc_main = { name: "guide/three/two.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="编译与上传指南" tabindex="-1">编译与上传指南 <a class="header-anchor" href="#编译与上传指南" aria-label="Permalink to &quot;编译与上传指南&quot;">​</a></h1><p>在VSCode编辑器中，你会在界面左下角看到一个名为<strong>完整构建项目</strong>的按钮，其旁边会显示<strong>当前项目的根文件夹名称</strong>。这个按钮是执行项目构建与上传的关键。</p><p><strong>快捷键</strong>：<code>Alt+Q</code></p><p><strong>注意</strong>：如果你当前的项目并非Arena-Ts项目，那么你将不会看到这个构建按钮。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="完整构建项目按钮图示"></p><p>只需点击该按钮，插件便会自动开始打包你的项目。</p><h2 id="自动检测、构建与上传" tabindex="-1">自动检测、构建与上传 <a class="header-anchor" href="#自动检测、构建与上传" aria-label="Permalink to &quot;自动检测、构建与上传&quot;">​</a></h2><p>在打包开始前，插件会进行一系列检测，以确保所有必要的依赖都已安装。若检测到缺失的依赖，插件将自动进行安装。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="检测并安装依赖图示"></p><p>接下来，插件将开始打包你的项目。请耐心等待，直至打包完成。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="正在打包图示"></p><p>当打包与上传流程顺利完成，你将看到一条成功提示，表明你的代码已经成功上传至神岛地图平台。【前提是你已经登录神岛账户并成功链接了地图项目】</p><p><img${ssrRenderAttr("src", _imports_3)} alt="打包且上传成功图示"></p><p>至此，你的项目已经成功构建并上传，可以在神岛地图平台上进行进一步的测试与发布了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/three/two.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const two = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  two as default
};
