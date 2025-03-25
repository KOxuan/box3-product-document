import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20250115-155045.png";
const _imports_1 = "/arenapro/QQ20250115-155555.png";
const _imports_2 = "/arenapro/QQ20250115-155254.png";
const _imports_3 = "/arenapro/QQ20250115-155830.png";
const __pageData = JSON.parse('{"title":"ESLint 用法","description":"","frontmatter":{},"headers":[],"relativePath":"engineering/eslint.md","filePath":"engineering/eslint.md","lastUpdated":1736931384000}');
const _sfc_main = { name: "engineering/eslint.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eslint-用法" tabindex="-1">ESLint 用法 <a class="header-anchor" href="#eslint-用法" aria-label="Permalink to &quot;ESLint 用法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>在项目中，找到<code>eslint.config.mjs</code>文件，这是 ESLint 的核心配置文件（且已自动配置<code>TypeScript-ESLint</code>）。在此文件中，你可以自定义<code>代码检查</code>的规则，以便程序能够依据这些规则来检查代码是否符合既定的编码规范。</p><h2 id="vscode-插件" tabindex="-1">VSCode 插件 <a class="header-anchor" href="#vscode-插件" aria-label="Permalink to &quot;VSCode 插件&quot;">​</a></h2><p>为了提升编码体验，我们强烈推荐在 VSCode 编辑器中安装<code>ESLint</code>插件。这样，VSCode 将会实时根据你在<code>eslint.config.mjs</code>中定义的规则，检查代码合规性，并在代码中直接显示错误提示，帮助你及时发现问题。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><h4 id="插件效果展示" tabindex="-1">插件效果展示： <a class="header-anchor" href="#插件效果展示" aria-label="Permalink to &quot;插件效果展示：&quot;">​</a></h4><p>（以下效果还结合了<code>Error Lens</code>插件的增强显示）</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><h2 id="命令行工具" tabindex="-1">命令行工具 <a class="header-anchor" href="#命令行工具" aria-label="Permalink to &quot;命令行工具&quot;">​</a></h2><p>除了编辑器内检查，你还可以通过命令行工具来运行 ESLint。执行<code>npx eslint --fix</code>命令，ESLint 将扫描所有文件，显示错误提示，并尝试自动修复部分错误。这一功能在快速定位并修复大规模代码问题时尤为实用。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/eslint.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eslint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eslint as default
};
