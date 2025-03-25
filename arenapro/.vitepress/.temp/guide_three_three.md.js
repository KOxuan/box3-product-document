import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./QQ_1721718378414.CW_PwuWk.js";
import { _ as _imports_4 } from "./QQ20241025-105839.IYFSY_Iu.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/arenapro/openmap.webp";
const _imports_2 = "/arenapro/map.webp";
const _imports_3 = "/arenapro/QQ20241128-225146.png";
const __pageData = JSON.parse('{"title":"运行地图指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/three/three.md","filePath":"guide/three/three.md","lastUpdated":1732810999000}');
const _sfc_main = { name: "guide/three/three.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="运行地图指南" tabindex="-1">运行地图指南 <a class="header-anchor" href="#运行地图指南" aria-label="Permalink to &quot;运行地图指南&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p><strong>⚠️ 官方建议</strong>：为了获得更加出色的创作体验，并规避VSCode内iframe适配可能带来的各类问题，<strong>我们强烈推荐你直接通过系统浏览器打开创作端</strong>。这样的操作能确保功能的全面兼容性，同时带来更为流畅的体验。</p><p>此外，为了提升你的工作效率，<strong>我们建议你尝试使用双显示屏或双桌面配置</strong>。这样的设置可以让你同时处理多项任务，例如一边编写代码，一边实时查看地图效果，实现工作流程的无缝衔接。</p><p>更多详细信息，请查阅：<a href="/arenapro/bestPractices/multipleDesktops.html">多桌面开发最佳实践</a></p></div><h2 id="运行地图步骤" tabindex="-1">运行地图步骤 <a class="header-anchor" href="#运行地图步骤" aria-label="Permalink to &quot;运行地图步骤&quot;">​</a></h2><h3 id="第一步-打开游戏地图界面" tabindex="-1">第一步：打开游戏地图界面 <a class="header-anchor" href="#第一步-打开游戏地图界面" aria-label="Permalink to &quot;第一步：打开游戏地图界面&quot;">​</a></h3><ol><li><p>在你的项目中，找到并打开<strong>dao3.config.json</strong>文件。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="打开dao3.config.json文件"></p></li><li><p>点击<strong>打开创作端</strong>按钮。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="点击“打开创作端”按钮"></p></li><li><p>此时，游戏创作端界面将呈现于你眼前。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="游戏创作端界面"></p></li></ol><h3 id="第二步-测试运行代码" tabindex="-1">第二步：测试运行代码 <a class="header-anchor" href="#第二步-测试运行代码" aria-label="Permalink to &quot;第二步：测试运行代码&quot;">​</a></h3><ol><li><p>在创作端内，切换到<strong>脚本</strong>界面，你会发现之前上传的代码文件已列于此。</p><p><img${ssrRenderAttr("src", _imports_3)} alt="脚本界面中的代码文件"></p></li><li><p>接下来，你需要在神岛代码入口文件中引入<code>_xxx_bundle.js</code>。</p><ul><li><p><strong>服务端导入方式</strong>：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// index.js</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">require</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;./_server_bundle.js&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><strong>客户端导入方式</strong>：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// clientIndex.js</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;./_client_bundle.js&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li><li><p>完成代码引入后，点击<strong>运行</strong>按钮，即可查看地图效果。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="运行地图效果预览"></p></li></ol><p>恭喜你，已成功运行了你的第一个项目！现在，你可以继续深入开发，丰富你的游戏地图内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/three/three.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const three = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  three as default
};
