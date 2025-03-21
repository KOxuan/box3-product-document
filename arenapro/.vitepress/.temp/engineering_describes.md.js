import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20250115-151543.png";
const __pageData = JSON.parse('{"title":"四大剑客介绍","description":"","frontmatter":{},"headers":[],"relativePath":"engineering/describes.md","filePath":"engineering/describes.md","lastUpdated":1736996417000}');
const _sfc_main = { name: "engineering/describes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="四大剑客介绍" tabindex="-1">四大剑客介绍 <a class="header-anchor" href="#四大剑客介绍" aria-label="Permalink to &quot;四大剑客介绍&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>在搭建 ArenaPro 脚手架的过程中，会提供多人协助前端开发的必备神器，助力提升代码质量与开发效率。</p><p>ArenaPro 项目已将以下工具集成其中，你无需繁琐配置，开箱即用。当然，你需要根据团队需求灵活调整规则。</p><h2 id="eslint" tabindex="-1"><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a> <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;[ESLint](https://eslint.org/)&quot;">​</a></h2><p>ESLint 是一个静态代码分析工具，用于识别并报告 JavaScript 代码中的模式。它可以帮助创作者发现代码中的潜在问题，比如语法错误、未声明的变量、未使用的变量等。同时，ESLint 允许创作者自定义规则，以确保代码风格的一致性。</p><h2 id="typescript-eslint" tabindex="-1"><a href="https://typescript-eslint.io/" target="_blank" rel="noreferrer">TypeScript-ESLint</a> <a class="header-anchor" href="#typescript-eslint" aria-label="Permalink to &quot;[TypeScript-ESLint](https://typescript-eslint.io/)&quot;">​</a></h2><p>TypeScript-ESLint 是 ESLint 的扩展，专为 TypeScript 项目提供静态代码分析功能。它允许创作者在 TypeScript 项目中使用 ESLint 的规则和插件。</p><h2 id="prettier" tabindex="-1"><a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a> <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;[Prettier](https://prettier.io/)&quot;">​</a></h2><p>Prettier 是一个代码格式化工具，支持多种编程语言。它可以根据预设的规则自动格式化代码，确保代码风格的一致性。Prettier 不会检查代码中的逻辑错误，而是专注于代码的格式和风格。</p><h2 id="husky" tabindex="-1"><a href="https://typicode.github.io/husky/" target="_blank" rel="noreferrer">Husky</a> <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;[Husky](https://typicode.github.io/husky/)&quot;">​</a></h2><p>Husky 是一个 Git 钩子工具，允许创作者在 Git 操作（如 commit、push 等）之前运行自定义的脚本或命令。它常用于在代码提交之前自动运行代码检查、测试或格式化等工具。</p><h2 id="lint-staged" tabindex="-1"><a href="https://www.npmjs.com/package/lint-staged" target="_blank" rel="noreferrer">Lint-Staged</a> <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;[Lint-Staged](https://www.npmjs.com/package/lint-staged)&quot;">​</a></h2><p>Lint-Staged 是一个用于在 Git 暂存区（staged）文件上运行 lint 工具（如 ESLint、Prettier 等）的命令行工具。它只针对那些被暂存的文件运行 lint 工具，从而提高了 lint 的速度和效率。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/describes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const describes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  describes as default
};
