import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20250115-164245.png";
const _imports_1 = "/arenapro/QQ20250115-165106.png";
const _imports_2 = "/arenapro/QQ20250115-164848.png";
const _imports_3 = "/arenapro/QQ20250115-181214.png";
const __pageData = JSON.parse('{"title":"Husky 用法","description":"","frontmatter":{},"headers":[],"relativePath":"engineering/husky.md","filePath":"engineering/husky.md","lastUpdated":1736997054000}');
const _sfc_main = { name: "engineering/husky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="husky-用法" tabindex="-1">Husky 用法 <a class="header-anchor" href="#husky-用法" aria-label="Permalink to &quot;Husky 用法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>在项目中，找到<code>.husky</code>文件夹，通过编辑此文件夹中的文件，你可以自定义<code>Git 操作前</code>的钩子规则，确保在代码提交到仓库前自动执行一系列预设的操作。</p><div class="warning custom-block"><p class="custom-block-title">小提示</p><p>如果创作者是首次拉取 AP 项目，可能会发现项目中的 <code>.husky</code> 文件夹下的<code>_</code>文件夹没有文件，导致 Git 钩子无法生效。若该文件夹为空，请在项目的根目录下运行 <code>npm run prepare</code> 命令来初始化 Husky。</p></div><h2 id="与-lint-staged-的结合" tabindex="-1">与 Lint-Staged 的结合 <a class="header-anchor" href="#与-lint-staged-的结合" aria-label="Permalink to &quot;与 Lint-Staged 的结合&quot;">​</a></h2><p>在项目中，找到<code>.lintstagedrc</code>文件，这里可以编辑 Lint-Staged 执行的规则。</p><p>当与<code>Lint-Staged</code>结合使用时，Husky 能够在 Git 提交前对<code>暂存区</code>中的文件进行校验。经过配置，会使用<code>ESlint + Prettier</code>对代码进行检查、尝试自动修复问题以及格式化代码，从而确保代码质量。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>👇</p><p>如果 Ts 代码没有错误，Git 提交操作将会顺利完成。</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>相反，如果 Ts 代码中存在错误，Git 提交将会被阻止。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>此外，Husky 还支持多种 Git 钩子，包括但不限于<code>Git 提交</code>、<code>Git 推送</code>、<code>Git 拉取</code>、<code>Git 重置</code>、<code>Git 检出</code>、<code>Git 合并</code>以及<code>Git 标签</code>等操作。你可以根据项目需求，在这些钩子中设置自动运行的脚本，以实现更加灵活和定制化的代码管理和质量控制流程。</p><p>通过充分利用 Husky 的功能，你可以显著提升团队协作效率，确保代码库的稳定性和一致性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/husky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const husky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  husky as default
};
