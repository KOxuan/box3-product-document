import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241202-224228.png";
const _imports_1 = "/arenapro/QQ20241202-223842.png";
const _imports_2 = "/arenapro/QQ20241202-224302.png";
const _imports_3 = "/arenapro/QQ20241202-224008.png";
const __pageData = JSON.parse('{"title":"完整构建项目和HMR编译原理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/four/compilationPrinciple.md","filePath":"guide/four/compilationPrinciple.md","lastUpdated":1733191299000}');
const _sfc_main = { name: "guide/four/compilationPrinciple.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="完整构建项目和hmr编译原理" tabindex="-1">完整构建项目和HMR编译原理 <a class="header-anchor" href="#完整构建项目和hmr编译原理" aria-label="Permalink to &quot;完整构建项目和HMR编译原理&quot;">​</a></h1><p>tsc编译后再进行webpack打包，以及webpack的HMR（Hot Module Replacement，模块热替换）编译，是前端开发中的两个重要环节，它们各自有着不同的原理和流程。</p><h2 id="完整构建项目原理" tabindex="-1">完整构建项目原理 <a class="header-anchor" href="#完整构建项目原理" aria-label="Permalink to &quot;完整构建项目原理&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><ol><li><p><strong>tsc编译</strong>：</p><ul><li>TSC（TypeScript Compiler）是TypeScript语言的核心组件，负责将创作者编写的TypeScript代码转换为神岛可以执行的JavaScript代码。</li><li>TSC的编译过程包括词法分析、语法分析、语义分析、类型检查和代码转换等阶段。通过这些阶段，TSC确保TypeScript代码符合语法规则、变量声明和使用规范，以及类型匹配等要求。</li><li>编译完成后，TSC将生成的JavaScript代码输出到指定的文件中，供后续工具（webpack）使用。</li></ul></li><li><p><strong>webpack打包</strong>：</p><ul><li>Webpack是一个现代JavaScript应用程序的静态模块打包工具。它会递归地构建一个依赖关系图，以便能够将所有模块打包成一个或多个bundle文件。</li><li>打包过程从指定的入口文件开始，通过分析代码中的import、require等语句，Webpack可以识别出哪些模块是被引用的，并将它们添加到依赖关系图中。</li><li>Webpack还会根据模块之间的依赖关系，递归地解析所有模块，包括模块路径的解析、解析模块的依赖关系等操作。</li><li>最后，Webpack将所有模块打包成一个或多个bundle文件。</li></ul></li><li><p><strong>编译后的文件结构</strong>：</p><ul><li>包含每个ts文件编译成的js文件，以及webpack打包后的bundle文件。</li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p></li></ol><h2 id="hmr编译原理" tabindex="-1">HMR编译原理 <a class="header-anchor" href="#hmr编译原理" aria-label="Permalink to &quot;HMR编译原理&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><ol><li><p><strong>HMR概述</strong>：</p><ul><li>HMR是webpack提供的一个特性，它允许在应用程序运行时动态替换模块，而无需重新加载整个页面。这可以极大地提高开发效率，因为创作者可以立即看到代码更改的效果。</li></ul></li><li><p><strong>HMR工作原理</strong>：</p><ul><li>当文件内容发生变化时，Webpack Dev Server会检测到这些变化，并通知应用程序。</li><li>应用程序通过HMR Runtime（运行时框架）来处理这些更新。HMR Runtime是构建工具在编译时注入的，它负责将编译时的文件变化与运行时的模块对应起来。</li><li>HMR Runtime会异步下载更新并通知应用程序。一旦所有新模块下载完成并准备就绪，HMR Runtime会同步应用这些更新。</li><li>在应用更新的过程中，HMR Runtime会将更新清单中的所有模块都标记为失效。对于每一个被标记为失效的模块，如果在当前模块中没有发现accept事件处理，就会向上冒泡，将其父模块也标记为失效，一直冒泡到应用入口模块。</li><li>所有失效模块被释放并从模块系统中卸载掉后，更新模块会被插入到模块系统中，并通过accept事件通知应用层使用新的模块进行“局部刷新”。</li></ul></li><li><p><strong>编译后的文件结构</strong>：</p><ul><li>只包含webpack打包后的bundle文件。</li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/four/compilationPrinciple.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compilationPrinciple = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  compilationPrinciple as default
};
