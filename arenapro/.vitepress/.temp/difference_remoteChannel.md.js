import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241022-195207.png";
const _imports_1 = "/arenapro/QQ20241022-195257.png";
const _imports_2 = "/arenapro/QQ20241022-195414.png";
const __pageData = JSON.parse('{"title":"数据跨端通讯","description":"","frontmatter":{},"headers":[],"relativePath":"difference/remoteChannel.md","filePath":"difference/remoteChannel.md","lastUpdated":1733713555000}');
const _sfc_main = { name: "difference/remoteChannel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="数据跨端通讯" tabindex="-1">数据跨端通讯 <a class="header-anchor" href="#数据跨端通讯" aria-label="Permalink to &quot;数据跨端通讯&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>服务端API文档：<a href="https://docs.box3lab.com/api/RemoteChannel/Server/" target="_blank" rel="noreferrer">ServerRemoteChannel</a></p><p>客户端API文档：<a href="https://docs.box3lab.com/api/RemoteChannel/Client/" target="_blank" rel="noreferrer">ClientRemoteChannel</a></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>修改原因：</strong><br> 由于官方原先提供的d.ts文件中，该API接口通讯信息被统一声明为<code>any</code>类型。</p><p>然而，在大多数情况下，为了确保当前通讯信息格式的一致性，我们采用了泛型来约束，从而提升了代码的可读性和检查准确性。</p></div><h2 id="用法示例" tabindex="-1">用法示例 <a class="header-anchor" href="#用法示例" aria-label="Permalink to &quot;用法示例&quot;">​</a></h2><h3 id="客户端向服务端发送数据" tabindex="-1"><strong>客户端向服务端发送数据</strong> <a class="header-anchor" href="#客户端向服务端发送数据" aria-label="Permalink to &quot;**客户端向服务端发送数据**&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h3 id="服务器接收数据" tabindex="-1"><strong>服务器接收数据</strong> <a class="header-anchor" href="#服务器接收数据" aria-label="Permalink to &quot;**服务器接收数据**&quot;">​</a></h3><h4 id="没有约束类型" tabindex="-1"><strong>没有约束类型</strong> <a class="header-anchor" href="#没有约束类型" aria-label="Permalink to &quot;**没有约束类型**&quot;">​</a></h4><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h4 id="约束类型" tabindex="-1"><strong>约束类型</strong> <a class="header-anchor" href="#约束类型" aria-label="Permalink to &quot;**约束类型**&quot;">​</a></h4><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("difference/remoteChannel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const remoteChannel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  remoteChannel as default
};
