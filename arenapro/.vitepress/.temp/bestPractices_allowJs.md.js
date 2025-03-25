import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/allowjs.webp";
const _imports_1 = "/arenapro/jsentry.webp";
const _imports_2 = "/arenapro/jslook.webp";
const _imports_3 = "/arenapro/checkjs.webp";
const _imports_4 = "/arenapro/jscheck.webp";
const __pageData = JSON.parse('{"title":"TS与JS混合使用","description":"","frontmatter":{},"headers":[],"relativePath":"bestPractices/allowJs.md","filePath":"bestPractices/allowJs.md","lastUpdated":1729599888000}');
const _sfc_main = { name: "bestPractices/allowJs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ts与js混合使用" tabindex="-1">TS与JS混合使用 <a class="header-anchor" href="#ts与js混合使用" aria-label="Permalink to &quot;TS与JS混合使用&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">危险</p><p>⚠️ 不建议纯用JavaScript开发地图，因为虽能避开TypeScript的复杂性和类型检查，但在VS Code全面支持TypeScript的今天，这样做显得不够高效且未充分利用先进工具链。</p><p>混用JavaScript和TypeScript时，会遇到以下问题：</p><ul><li>代码风格和质量不一，增加审查和维护难度。</li><li>JavaScript的全局变量和副作用可能与TypeScript的模块化和类型推断冲突，需额外处理。</li><li>JavaScript的动态类型特性与TypeScript的静态类型检查不兼容，可能导致类型错误或需额外断言，降低开发效率和代码可读性。</li></ul><p>对于大型项目或遗留代码库，建议逐步迁移JavaScript到TypeScript，以逐步引入类型安全和其他特性，同时减少迁移风险和工作量。</p></div><h2 id="第一步-允许js-修改tsconfig-json" tabindex="-1">第一步：允许js，修改tsconfig.json <a class="header-anchor" href="#第一步-允许js-修改tsconfig-json" aria-label="Permalink to &quot;第一步：允许js，修改tsconfig.json&quot;">​</a></h2><p>开启允许ts编译js文件：<code>allowJs = true</code></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><h2 id="可选-第二步-修改入口-修改dao3-config-json" tabindex="-1">（可选）第二步：修改入口，修改dao3.config.json <a class="header-anchor" href="#可选-第二步-修改入口-修改dao3-config-json" aria-label="Permalink to &quot;（可选）第二步：修改入口，修改dao3.config.json&quot;">​</a></h2><p>根据自己项目情况，修改入口文件为js</p><p>当然也可以在ts文件中，导入js文件。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>开启后，就能在项目里面直接使用js啦！也可以与ts混用。</p><p>当然，目前的js文件只是有语法提示，但不会进行类型检测。（一夜回到Arena自带编辑器）</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p>如何开启js的类型检查呢？</p><h2 id="可选-第三步-开启类型检查-修改tsconfig-json" tabindex="-1">（可选）第三步：开启类型检查，修改tsconfig.json <a class="header-anchor" href="#可选-第三步-开启类型检查-修改tsconfig-json" aria-label="Permalink to &quot;（可选）第三步：开启类型检查，修改tsconfig.json&quot;">​</a></h2><p>开启js文件类型检查：<code>checkJs = true</code></p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p>此时，js文件有类型提示了，并会报告错误。</p><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bestPractices/allowJs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const allowJs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  allowJs as default
};
