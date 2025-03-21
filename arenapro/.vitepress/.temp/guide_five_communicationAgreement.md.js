import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241129-141305.png";
const _imports_1 = "/arenapro/QQ20241129-141021.png";
const _imports_2 = "/arenapro/QQ20241129-141215.png";
const __pageData = JSON.parse('{"title":"通讯类型约定","description":"","frontmatter":{},"headers":[],"relativePath":"guide/five/communicationAgreement.md","filePath":"guide/five/communicationAgreement.md","lastUpdated":1732863260000}');
const _sfc_main = { name: "guide/five/communicationAgreement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="通讯类型约定" tabindex="-1">通讯类型约定 <a class="header-anchor" href="#通讯类型约定" aria-label="Permalink to &quot;通讯类型约定&quot;">​</a></h1><p>在构建客户端与服务端交互的系统中，数据传输的规范与约定至关重要。为确保双方能够准确无误地理解并处理传递的数据，我们需要制定一套通讯协议和数据接口标准。当客户端和服务端的代码各自独立开发、互不直接访问时，共享脚本便成为了两者间数据传输的桥梁。</p><h2 id="定义统一的数据接口" tabindex="-1">定义统一的数据接口 <a class="header-anchor" href="#定义统一的数据接口" aria-label="Permalink to &quot;定义统一的数据接口&quot;">​</a></h2><p>为了从服务端向客户端传递用户基本数据，我们在项目中设立一个专门的<code>shares</code>文件夹，用于存放共享脚本和数据接口定义。这些共享脚本使得服务端和客户端都能遵循相同的规则来解析和处理数据。</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>我们在任意文件中，写入数据接口，然后，在服务端和客户端，都可以访问这个数据接口。</p><h2 id="在服务端的效果" tabindex="-1">在服务端的效果 <a class="header-anchor" href="#在服务端的效果" aria-label="Permalink to &quot;在服务端的效果&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h2 id="在客户端的效果" tabindex="-1">在客户端的效果 <a class="header-anchor" href="#在客户端的效果" aria-label="Permalink to &quot;在客户端的效果&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>通过这种方式，我们确保了服务端和客户端之间数据传输的一致性和可靠性，同时提高了代码的可维护性和可扩展性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/five/communicationAgreement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const communicationAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  communicationAgreement as default
};
