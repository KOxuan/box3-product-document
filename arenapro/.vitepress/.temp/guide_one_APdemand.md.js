import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ArenaPro 插件运作原理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/one/APdemand.md","filePath":"guide/one/APdemand.md","lastUpdated":1733887552000}');
const _sfc_main = { name: "guide/one/APdemand.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arenapro-插件运作原理" tabindex="-1">ArenaPro 插件运作原理 <a class="header-anchor" href="#arenapro-插件运作原理" aria-label="Permalink to &quot;ArenaPro 插件运作原理&quot;">​</a></h1><p>许多创作者在初次接触 VSCode 时，可能会有这样的疑惑：<strong>是否需要在 VSCode 中编写完代码后，再手动把代码复制到神岛的 Arena 代码编辑器中？</strong></p><p>答案是否定的。实际上，你完全无需进行这样的手动操作。ArenaPro 插件作为连接神岛的桥梁，能够自动化地完成代码打包与上传的全过程。</p><p>尽管不使用插件也能编写神岛代码，但插件的存在极大地简化了繁琐的配置工作，让你能够更专注于编写代码。只需进行简单的配置，即可享受插件带来的便捷。</p><h2 id="与神岛交互" tabindex="-1">与神岛交互 <a class="header-anchor" href="#与神岛交互" aria-label="Permalink to &quot;与神岛交互&quot;">​</a></h2><ul><li><strong>自动上传代码</strong>：插件解决了链接神岛的问题，让你直接在 VSCode 中上传代码到神岛地图，无需手动复制粘贴。</li><li><strong>获取地图数据</strong>：在 VSCode 编辑器中，你可以方便地获取地图的数据，无需切换到其他工具。</li></ul><p>在上传代码之前，你只需在 VSCode 中登录神岛的账号，插件会自动获取用户 Token，从而能够访问并管理你的地图信息。</p><h2 id="神岛代码适配" tabindex="-1">神岛代码适配 <a class="header-anchor" href="#神岛代码适配" aria-label="Permalink to &quot;神岛代码适配&quot;">​</a></h2><ul><li><strong>一键安装脚手架</strong>：插件提供了一键安装脚手架的功能，并附带<code>服务端</code>和<code>客户端</code>模板，供你直接使用，无需从零开始搭建。</li><li><strong>自动更新 API</strong>：插件每次启动时都会检测神岛代码的 dts 文件，并自动更新，确保你使用的 API 是最新版本。</li><li><strong>适配 ArenaPro 插件</strong>：该脚手架特别适用于 ArenaPro 插件的编译功能，让你的开发更加高效。</li></ul><h2 id="编译和打包" tabindex="-1">编译和打包 <a class="header-anchor" href="#编译和打包" aria-label="Permalink to &quot;编译和打包&quot;">​</a></h2><ul><li><strong>一键编译上传</strong>：插件支持一键编译<code>服务端</code>和<code>客户端</code>的代码并上传，同时自动进行代码模块适配，确保代码模块与神岛一致。</li><li><strong>HMR 服务器</strong>：插件提供了 HMR 服务器的一键开启功能，方便你快速对接神岛，支持代码热更新，提高开发效率。</li><li><strong>动态解析配置</strong>：插件会读取神岛配置文件，后台自动处理入口文件等，并提供完整复杂的 webpack 配置以进行动态解析，无需手动配置。</li></ul><p>所有通过插件上传的 bundle 文件，其文件名前缀都会自动加上 <code>_server_</code> 或 <code>_client_</code> 以作区分，方便管理和清晰表明脚本用途。</p><h2 id="资源管理" tabindex="-1">资源管理 <a class="header-anchor" href="#资源管理" aria-label="Permalink to &quot;资源管理&quot;">​</a></h2><ul><li><strong>资源文件对接</strong>：插件对接了扩展地图中的资源文件，你可以快速读取和插入资源，无需手动查找和导入。</li><li><strong>API 查询</strong>：插件对接了懂神岛 API 的吉 PT，你可以快速进行 API 查询，获取所需信息。</li></ul><h2 id="debugger" tabindex="-1">Debugger <a class="header-anchor" href="#debugger" aria-label="Permalink to &quot;Debugger&quot;">​</a></h2><ul><li><strong>便捷测试</strong>：插件提供了便捷的 Debugger，方便你快速测试整个项目，支持在 ts 源文件中断点等操作，提高调试效率。</li><li><strong>单文件调试</strong>：插件也支持对单个文件进行代码调试，让你能够更灵活地定位和解决问题。</li></ul><h2 id="便捷功能" tabindex="-1">便捷功能 <a class="header-anchor" href="#便捷功能" aria-label="Permalink to &quot;便捷功能&quot;">​</a></h2><ul><li><strong>一键上传文件</strong>：插件提供了一键上传文件功能，方便你快速上传单个 <code>js</code> 文件到神岛中，无需手动上传。</li><li><strong>NPM 包管理</strong>：插件提供了神岛 NPM 包列表查询，并支持一键安装 NPM 包，让你能够更方便地管理项目依赖。</li><li><strong>一键安装脚手架</strong>：插件提供了一键安装脚手架功能，简化开发流程，让你能够更快速地开始新项目。</li><li><strong>一键链接配置</strong>：插件提供了一键链接配置扩展地图功能，提高开发效率，让你能够更轻松地管理多个地图项目。</li></ul><hr><p>通过 ArenaPro 插件，你可以更高效地开发神岛项目，享受自动化带来的便捷。无论你是初学者还是老创作者，都能从中受益。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/one/APdemand.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const APdemand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  APdemand as default
};
