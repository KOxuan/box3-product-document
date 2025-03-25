import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20250115-160857.png";
const _imports_1 = "/arenapro/QQ20250115-161406.png";
const _imports_2 = "/arenapro/QQ20250115-163405.png";
const _imports_3 = "/arenapro/QQ20250115-162137.png";
const __pageData = JSON.parse('{"title":"Prettier 用法","description":"","frontmatter":{},"headers":[],"relativePath":"engineering/prettier.md","filePath":"engineering/prettier.md","lastUpdated":1736931384000}');
const _sfc_main = { name: "engineering/prettier.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prettier-用法" tabindex="-1">Prettier 用法 <a class="header-anchor" href="#prettier-用法" aria-label="Permalink to &quot;Prettier 用法&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>在项目中，找到<code>.prettierrc</code>文件通过编辑这个文件，你可以灵活地自定义<code>代码格式化</code>的规则，从而确保 Prettier 能够根据你的需求自动格式化代码。</p><h2 id="vscode-插件集成" tabindex="-1">VSCode 插件集成 <a class="header-anchor" href="#vscode-插件集成" aria-label="Permalink to &quot;VSCode 插件集成&quot;">​</a></h2><p>为了获得更加流畅的编码体验，我们强烈建议你在 VSCode 编辑器中安装<code>Prettier</code>插件。这样，VSCode 将能够实时根据你在<code>.prettierrc</code>中定义的规则，自动对代码进行格式化。</p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p>如果 VSCode 没有自动格式化代码，你可能需要进行一些设置。按下快捷键<code>ctrl+,</code>打开设置界面，然后按照以下步骤进行配置：</p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  // 启用保存文件时自动格式化代码的功能</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">  &quot;editor.formatOnSave&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">true</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  // 将Prettier设置为默认的代码格式化工具</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">  &quot;editor.defaultFormatter&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;esbenp.prettier-vscode&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  // 在保存文件时执行特定的代码操作，例如使用eslint修复代码问题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">  &quot;editor.codeActionsOnSave&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">    &quot;source.fixAll.eslint&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;explicit&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="插件效果精彩展示" tabindex="-1">插件效果精彩展示： <a class="header-anchor" href="#插件效果精彩展示" aria-label="Permalink to &quot;插件效果精彩展示：&quot;">​</a></h4><p>（以下效果还结合了<code>Error Lens</code>插件的强化视觉反馈）</p><p><img src="https://static.codemao.cn/pickduck/SyeZkeSw1g.gif?hash=FoYfsUc3U1Np-vx6G8pKjpYCvfMz" alt=""></p><p>根据我的自定义规则，Prettier 会在文件保存时自动对代码进行格式化，并确保每个代码语句以分号结尾，从而保持代码的一致性和可读性。</p><h2 id="命令行工具使用" tabindex="-1">命令行工具使用 <a class="header-anchor" href="#命令行工具使用" aria-label="Permalink to &quot;命令行工具使用&quot;">​</a></h2><p>除了编辑器内的实时格式化功能外，Prettier 还提供了强大的命令行工具，方便你在项目管理和持续集成中使用。</p><ul><li><p>执行<code>npx prettier . --write</code>命令，Prettier 将遍历项目目录，并自动格式化所有符合条件的文件。</p></li><li><p>执行<code>npx prettier . --check</code>命令，Prettier 将检查项目中所有文件的格式是否符合<code>.prettierrc</code>中定义的规则，而不会对文件进行实际修改。</p></li></ul><p>通过命令行工具，你可以轻松地在项目的不同阶段应用 Prettier 的格式化规则，确保代码质量的一致性和可维护性。</p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/prettier.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prettier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prettier as default
};
