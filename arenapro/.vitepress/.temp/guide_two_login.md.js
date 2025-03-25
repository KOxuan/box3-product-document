import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ_1721718184133.webp";
const _imports_1 = "/arenapro/QQ20241128-220338.png";
const _imports_2 = "/arenapro/QQ20241128-220642.png";
const _imports_3 = "/arenapro/QQ20241128-220736.png";
const __pageData = JSON.parse('{"title":"插件登录神岛账号指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/two/login.md","filePath":"guide/two/login.md","lastUpdated":1732810999000}');
const _sfc_main = { name: "guide/two/login.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="插件登录神岛账号指南" tabindex="-1">插件登录神岛账号指南 <a class="header-anchor" href="#插件登录神岛账号指南" aria-label="Permalink to &quot;插件登录神岛账号指南&quot;">​</a></h1><p>由于最终需要将本地的代码打包编译后上传至神岛地图中，因此，你需要先登录你的神岛账户，并将你的地图项目与之关联起来。</p><h2 id="登录步骤详解" tabindex="-1">登录步骤详解 <a class="header-anchor" href="#登录步骤详解" aria-label="Permalink to &quot;登录步骤详解&quot;">​</a></h2><p>在VSCode的右下角，你可以轻松找到并点击<code>Arena图标</code>，未登录状态栏为<code>橙色</code>。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Arena图标位置"></p><p>接下来，从弹出的选项中选择<code>登陆神岛账号[Login BOX3 Account]</code>。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="选择登录选项界面"></p><h3 id="步骤1-配置浏览器用户代理-user-agent" tabindex="-1">步骤1：配置浏览器用户代理（User-Agent） <a class="header-anchor" href="#步骤1-配置浏览器用户代理-user-agent" aria-label="Permalink to &quot;步骤1：配置浏览器用户代理（User-Agent）&quot;">​</a></h3><p>在正式登录之前，你需要先配置一个与你神岛账号来源相匹配的<strong>User-Agent</strong>。</p><ul><li><strong>获取User-Agent的方法</strong>：访问<a href="https://passer-by.com/browser/" target="_blank" rel="noreferrer">https://passer-by.com/browser/</a>，在页面中查找并复制你的浏览器<code>用户代理</code>。</li></ul><p><img src="https://static.codemao.cn/pickduck/r1MiBddxkg.gif?hash=FnDE12EtzYOF85UdIFU2tGZrPr-B" alt="获取User-Agent的演示"></p><h3 id="步骤2-输入神岛账户token" tabindex="-1">步骤2：输入神岛账户Token <a class="header-anchor" href="#步骤2-输入神岛账户token" aria-label="Permalink to &quot;步骤2：输入神岛账户Token&quot;">​</a></h3><ul><li><strong>获取Token的方法</strong>：访问<a href="https://code-api-pc.dao3.fun/auth/user" target="_blank" rel="noreferrer">https://code-api-pc.dao3.fun/auth/user</a>，在登录状态下，你可以复制整个JSON文本，或者仅复制其中的<code>token</code>字段。</li></ul><p><img src="https://static.codemao.cn/pickduck/Hkyxvu_ekg.gif?hash=FmIsFcjEF_1YO2HVd4xDNFZDT3pl" alt="获取Token的演示"></p><p>登录成功后，状态栏为<code>绿色</code>，会显示你的账号信息。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="登录成功"></p><p><img${ssrRenderAttr("src", _imports_3)} alt="登录成功"></p><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>请严格按照步骤操作，确保每个步骤都正确无误。</li><li><code>User-Agent</code>配置与<code>账号Token</code>必须在同一个浏览器环境中获取，否则可能会导致登录失败。</li><li>如遇问题，请检查网络连接状态，以及输入的<code>User-Agent</code>和<code>账号Token</code>信息是否准确无误。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/two/login.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  login as default
};
