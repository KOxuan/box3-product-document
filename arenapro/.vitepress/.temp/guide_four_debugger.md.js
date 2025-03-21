import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241101-111306.png";
const _imports_1 = "/arenapro/QQ20241101-111542.png";
const _imports_2 = "/arenapro/QQ20241101-111952.png";
const _imports_3 = "/arenapro/QQ20241101-112041.png";
const _imports_4 = "/arenapro/QQ20241101-112658.png";
const _imports_5 = "/arenapro/QQ20241101-142736.png";
const _imports_6 = "/arenapro/QQ20241101-125949.png";
const _imports_7 = "/arenapro/QQ20241101-131416.png";
const __pageData = JSON.parse('{"title":"VSCode 调试脚本指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/four/debugger.md","filePath":"guide/four/debugger.md","lastUpdated":1732810999000}');
const _sfc_main = { name: "guide/four/debugger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vscode-调试脚本指南" tabindex="-1">VSCode 调试脚本指南 <a class="header-anchor" href="#vscode-调试脚本指南" aria-label="Permalink to &quot;VSCode 调试脚本指南&quot;">​</a></h1><p>本调试功能建立在 Node.js 的调试基础之上，无需依赖特定的 AP 插件即可进行调试。我们对动态编译文件路径、源映射等繁琐配置进行了优化，旨在减轻创作者的手动配置负担。然而，需要注意的是，目前暂不支持对神岛 API 进行调试。</p><p>在调试过程中，你可以选择 <code>完整编译</code> 或 <code>HMR编译</code> 两种编译模式。<code>HMR编译</code> 模式推荐用于调试，因为它能够自动监听文件变化并自动编译，从而允许你在修改 <code>ts</code> 文件的同时进行调试。而 <code>完整编译</code> 模式则需要手动编译，且只能在编译后的 <code>js</code> 文件上进行断点调试。</p><h2 id="捆绑-js-文件调试" tabindex="-1">捆绑 JS 文件调试 <a class="header-anchor" href="#捆绑-js-文件调试" aria-label="Permalink to &quot;捆绑 JS 文件调试&quot;">​</a></h2><h3 id="配置-launch-json" tabindex="-1">配置 <code>launch.json</code> <a class="header-anchor" href="#配置-launch-json" aria-label="Permalink to &quot;配置 \`launch.json\`&quot;">​</a></h3><ol><li><p><strong>创建 <code>launch.json</code> 文件</strong>：</p><ul><li>初次调试时，你需要创建 <code>launch.json</code> 文件。如果已存在，可跳过此步骤。</li></ul><p><img${ssrRenderAttr("src", _imports_0)} alt="创建 launch.json 文件"></p></li><li><p><strong>选择调试配置</strong>：</p><ul><li>在调试配置选择框中，有三种类型可供选择： <ul><li>Arena Debugger（目前不支持）：远程调试神岛编辑器，并返回数据。</li><li>ArenaPro Client Debugger：本地调试客户端的捆绑 JS 文件。</li><li>ArenaPro Server Debugger：本地调试服务端的捆绑 JS 文件。</li></ul></li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt="选择调试配置"></p></li><li><p><strong>自动配置</strong>：</p><ul><li>选择配置后，VSCode 会自动生成对应的调试配置。</li></ul><p><img${ssrRenderAttr("src", _imports_2)} alt="自动配置"></p></li><li><p><strong>新增配置</strong>：</p><ul><li>你可以使用右下角的配置按钮进行新增配置。</li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt="新增配置"></p></li></ol><h3 id="编译并调试文件" tabindex="-1">编译并调试文件 <a class="header-anchor" href="#编译并调试文件" aria-label="Permalink to &quot;编译并调试文件&quot;">​</a></h3><p>在调试之前，你需要选择 <code>HMR编译</code> 模式进行编译。这样，调试器会自动监听文件变化并自动编译，从而允许你在修改 <code>ts</code> 文件的同时进行调试。</p><ul><li><p>推荐关闭将编译脚本上传到神岛编辑器的功能，以便进行本地调试。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="关闭上传功能"></p></li><li><p>推荐开启 debugger 模式，这样打包后的捆绑文件不会压缩和混淆，方便查看运行时变量等数据。</p><p><img${ssrRenderAttr("src", _imports_5)} alt="开启 debugger 模式"></p></li><li><p>开启 HMR 服务器后，你可以在入口文件开始的任意 <code>ts</code> 文件里设置断点，然后按下 <code>F5</code> 进行调试。</p><p><img${ssrRenderAttr("src", _imports_6)} alt="调试过程"></p></li></ul><h2 id="单个-js-文件调试" tabindex="-1">单个 JS 文件调试 <a class="header-anchor" href="#单个-js-文件调试" aria-label="Permalink to &quot;单个 JS 文件调试&quot;">​</a></h2><p>为了满足对快速调试单个 JS 脚本而非整个项目的需求，VSCode 提供了单个 JS 文件的调试功能。只需在任意的 <code>.js</code>、<code>.mjs</code> 或 <code>.cjs</code> 文件中设置断点，然后运行该文件进行调试。</p><ul><li><p>在编辑器的右上角，找到并点击 <code>快速Debugger</code> 按钮即可开始调试。</p></li><li><p>快捷键：<code>Alt+D</code></p><p><img${ssrRenderAttr("src", _imports_7)} alt="单个 JS 文件调试"></p></li></ul><p>注：默认非捆绑文件的 <code>.js</code> 文件会被解析为 <code>ECMAScript</code> 模块。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/four/debugger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _debugger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _debugger as default
};
