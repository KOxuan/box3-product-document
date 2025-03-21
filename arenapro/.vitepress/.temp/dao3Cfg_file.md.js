import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"dao3Cfg 脚手架架构","description":"","frontmatter":{},"headers":[],"relativePath":"dao3Cfg/file.md","filePath":"dao3Cfg/file.md","lastUpdated":1736931384000}');
const _sfc_main = { name: "dao3Cfg/file.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dao3cfg-脚手架架构" tabindex="-1">dao3Cfg 脚手架架构 <a class="header-anchor" href="#dao3cfg-脚手架架构" aria-label="Permalink to &quot;dao3Cfg 脚手架架构&quot;">​</a></h1><div class="language-plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>myArenaProject</span></span>
<span class="line"><span>├─ .prettierignore</span></span>
<span class="line"><span>├─ .prettierrc</span></span>
<span class="line"><span>├─ dao3.config.json</span></span>
<span class="line"><span>├─ eslint.config.mjs</span></span>
<span class="line"><span>├─ package-lock.json</span></span>
<span class="line"><span>├─ package.json</span></span>
<span class="line"><span>├─ shares</span></span>
<span class="line"><span>│  └─ sharesApp.ts</span></span>
<span class="line"><span>├─ server</span></span>
<span class="line"><span>│  ├─ tsconfig.json</span></span>
<span class="line"><span>│  ├─ webpack.config.js</span></span>
<span class="line"><span>│  ├─ types</span></span>
<span class="line"><span>│  │  ├─ GameAPI.d.ts</span></span>
<span class="line"><span>│  │  ├─ GameEntity.d.ts</span></span>
<span class="line"><span>│  │  └─ GamePlayer.d.ts</span></span>
<span class="line"><span>│  └─ src</span></span>
<span class="line"><span>│     └─ App.ts</span></span>
<span class="line"><span>├─ client</span></span>
<span class="line"><span>│  ├─ tsconfig.json</span></span>
<span class="line"><span>│  ├─ webpack.config.js</span></span>
<span class="line"><span>│  ├─ types</span></span>
<span class="line"><span>│  │  └─ ClientAPI.d.ts</span></span>
<span class="line"><span>│  └─ src</span></span>
<span class="line"><span>│     └─ clientApp.ts</span></span>
<span class="line"><span>├─ .vscode</span></span>
<span class="line"><span>│  ├─ dao3-ap.code-snippets</span></span>
<span class="line"><span>│  └─ launch.json</span></span>
<span class="line"><span>└─ .husky</span></span>
<span class="line"><span>   ├─ pre-commit</span></span>
<span class="line"><span>   └─ _</span></span>
<span class="line"><span>      ├─ applypatch-msg</span></span>
<span class="line"><span>      ├─ commit-msg</span></span>
<span class="line"><span>      ├─ h</span></span>
<span class="line"><span>      ├─ husky.sh</span></span>
<span class="line"><span>      ├─ post-applypatch</span></span>
<span class="line"><span>      ├─ post-checkout</span></span>
<span class="line"><span>      ├─ post-commit</span></span>
<span class="line"><span>      ├─ post-merge</span></span>
<span class="line"><span>      ├─ post-rewrite</span></span>
<span class="line"><span>      ├─ pre-applypatch</span></span>
<span class="line"><span>      ├─ pre-auto-gc</span></span>
<span class="line"><span>      ├─ pre-commit</span></span>
<span class="line"><span>      ├─ pre-merge-commit</span></span>
<span class="line"><span>      ├─ pre-push</span></span>
<span class="line"><span>      ├─ pre-rebase</span></span>
<span class="line"><span>      └─ prepare-commit-msg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">危险</p><p>⚠️ 以下文件<strong>禁止移动/改名</strong>，否则可能会出现不可预知的错误：</p><ol><li><strong>GameAPI.d.ts</strong></li><li><strong>ClientAPI.d.ts</strong></li><li><strong>tsconfig.json</strong></li><li><strong>package.json</strong></li><li><strong>package-lock.json</strong></li><li><strong>dao3.config.json</strong></li><li><strong>.gitignore</strong></li><li><strong>dao3-ap.code-snippets</strong></li><li><strong>webpack.config.js</strong></li><li><strong>.prettierrc</strong></li><li><strong>.prettierignore</strong></li><li><strong>eslint.config.mjs</strong></li></ol></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>⚠️<strong>重要提示</strong>：以下文件<strong>严禁修改/移动</strong>，因为内置了自动检测更新机制，任何自定义更改都可能导致数据丢失。</p><p>请注意，这些文件与 Arena 脚本编辑器内置的<code>.d.ts</code>文件存在差异。AP 插件专为 TypeScript 语言定制了一份<code>.d.ts</code>文件，提供了更佳的适配性和代码提示功能。</p><ol><li><strong>GameAPI.d.ts</strong></li><li><strong>ClientAPI.d.ts</strong></li></ol></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dao3Cfg/file.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const file = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  file as default
};
