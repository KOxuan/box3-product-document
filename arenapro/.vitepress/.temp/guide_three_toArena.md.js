import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241204-204315.png";
const _imports_1 = "/arenapro/QQ20241204-202828.png";
const __pageData = JSON.parse('{"title":"代码导出至Arena","description":"","frontmatter":{},"headers":[],"relativePath":"guide/three/toArena.md","filePath":"guide/three/toArena.md","lastUpdated":1733316276000}');
const _sfc_main = { name: "guide/three/toArena.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="代码导出至arena" tabindex="-1">代码导出至Arena <a class="header-anchor" href="#代码导出至arena" aria-label="Permalink to &quot;代码导出至Arena&quot;">​</a></h1><p>如果你希望在ArenaPro中编写的代码能够在Arena中被顺利调用，你需要在入口文件中将代码进行导出，这一过程类似于将代码打包成npm包。</p><h2 id="入口文件" tabindex="-1">入口文件 <a class="header-anchor" href="#入口文件" aria-label="Permalink to &quot;入口文件&quot;">​</a></h2><p>在服务端或客户端的入口文件中，你可以使用<code>export</code>关键字来导出代码。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>由于ArenaPro已经统一的代码规范，webpack在打包时会进行自动处理。因此，无论你的代码位于服务端还是客户端脚本下，都可以使用<code>export</code>关键字进行代码导出。</p></div><p>以下是一个简单的示例：</p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h2 id="在arena中调用" tabindex="-1">在Arena中调用 <a class="header-anchor" href="#在arena中调用" aria-label="Permalink to &quot;在Arena中调用&quot;">​</a></h2><p>导出代码后，你就可以在Arena中对其进行调用了。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>在Arena中导入代码时，请务必遵循Arena脚本的规范。具体而言，在服务端脚本中，应使用<code>require</code>关键字来导入代码；而在客户端脚本中，则应使用<code>import</code>关键字。</p></div><p>现在，我们以在“服务端”进行代码导入为例进行说明。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>在神岛中，为了充分发挥团队成员的各自优势，我们可以采取一种高效的合作模式：由熟悉ArenaPro的创作者负责编写核心代码，并通过导出机制将这些代码集成到Arena中，供其他团队成员调用。这种模式不仅让专业的人做专业的事，还极大地促进了团队协作。</p><h3 id="专业技能的分工" tabindex="-1">专业技能的分工 <a class="header-anchor" href="#专业技能的分工" aria-label="Permalink to &quot;专业技能的分工&quot;">​</a></h3><ul><li><strong>核心代码编写</strong>：由熟悉ArenaPro的创作者负责，可以利用该工具的高效性和灵活性，快速编写出高质量的核心代码。</li><li><strong>代码调用与集成</strong>：其他团队成员，即使不熟悉ArenaPro，也能通过简单的导入操作，在Arena中调用这些核心代码，从而实现功能的快速集成。</li></ul><h3 id="简化测试流程" tabindex="-1">简化测试流程 <a class="header-anchor" href="#简化测试流程" aria-label="Permalink to &quot;简化测试流程&quot;">​</a></h3><p>对于需要快速测试效果的场景，我们直接在Arena中编写测试代码，或者利用已导出的核心代码进行快速集成和测试。这种方式极大地缩短了测试周期，提高了开发效率。</p><ul><li><strong>设计团队</strong>：设计师可以在Arena中直接调用由开发团队导出的UI组件代码，实现设计稿的快速落地。</li><li><strong>产品团队</strong>：策划师可以在Arena中快速搭建原型，利用导出的核心代码进行功能验证，从而加速产品迭代。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/three/toArena.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toArena = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  toArena as default
};
