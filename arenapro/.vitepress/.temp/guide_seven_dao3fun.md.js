import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"如何向@dao3fun组织投稿","description":"","frontmatter":{},"headers":[],"relativePath":"guide/seven/dao3fun.md","filePath":"guide/seven/dao3fun.md","lastUpdated":1732942230000}');
const _sfc_main = { name: "guide/seven/dao3fun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="如何向-dao3fun组织投稿" tabindex="-1">如何向<code>@dao3fun</code>组织投稿 <a class="header-anchor" href="#如何向-dao3fun组织投稿" aria-label="Permalink to &quot;如何向\`@dao3fun\`组织投稿&quot;">​</a></h1><p>我们创立了<code>@dao3fun</code>组织，旨在汇集并管理各位创作者精心打造的神岛npm包。只需在npmjs上搜索<code>@dao3fun</code>，你便能轻松找到所有与神岛相关的npm包。</p><h2 id="投稿初衷" tabindex="-1">投稿初衷 <a class="header-anchor" href="#投稿初衷" aria-label="Permalink to &quot;投稿初衷&quot;">​</a></h2><p>我们之所以这么做，旨在实现以下目标：</p><ul><li><strong>便于管理</strong>：集中管理神岛相关的npm包，提升管理效率。</li><li><strong>便捷搜索</strong>：让用户能够快速找到所需的神岛npm包。</li><li><strong>避免命名冲突</strong>：通过组织名前缀，有效避免包命名重复的问题。</li><li><strong>直观识别</strong>：用户一眼就能识别出这是与神岛相关的npm包。</li></ul><h2 id="向npm组织投稿指南" tabindex="-1">向npm组织投稿指南 <a class="header-anchor" href="#向npm组织投稿指南" aria-label="Permalink to &quot;向npm组织投稿指南&quot;">​</a></h2><h3 id="_1-登录npm账号" tabindex="-1">1. 登录npm账号 <a class="header-anchor" href="#_1-登录npm账号" aria-label="Permalink to &quot;1. 登录npm账号&quot;">​</a></h3><p>首先，你需要在终端或命令行工具中运行<code>npm login</code>命令，并输入npm账号的用户名、密码以及邮箱来完成登录。如果你是首次登录，npm会要求你验证邮箱。</p><h3 id="_2-申请加入-dao3fun组织" tabindex="-1">2. 申请加入<code>@dao3fun</code>组织 <a class="header-anchor" href="#_2-申请加入-dao3fun组织" aria-label="Permalink to &quot;2. 申请加入\`@dao3fun\`组织&quot;">​</a></h3><ul><li>你可以通过QQ群<code>492953731</code>联系管理员，申请加入<code>@dao3fun</code>组织。</li><li>成功加入后，你便可以在该组织下发布npm包了。</li></ul><h3 id="_3-发布npm包" tabindex="-1">3. 发布npm包 <a class="header-anchor" href="#_3-发布npm包" aria-label="Permalink to &quot;3. 发布npm包&quot;">​</a></h3><ul><li><strong>包名规范</strong>：你的项目包名需要以<code>@dao3fun</code>为前缀，例如<code>@dao3fun/your-package-name</code>。</li><li><strong>发布步骤</strong>：在项目文件夹中运行<code>npm publish --access=public</code>命令，将你的项目发布到npm上。如果你是首次在该组织下发布包，npm可能会要求你确认一些额外的信息或权限。</li><li><strong>发布成功</strong>：发布成功后，你可以在npm网站上搜索到你的包，并查看其详细信息。</li></ul><h3 id="_4-验证与更新" tabindex="-1">4. 验证与更新 <a class="header-anchor" href="#_4-验证与更新" aria-label="Permalink to &quot;4. 验证与更新&quot;">​</a></h3><ul><li><strong>安装验证</strong>：发布后，你可以在其他项目中通过<code>npm install &lt;your-package-name&gt;</code>命令来安装并使用你的npm包。</li><li><strong>包更新</strong>：如果你需要更新包，只需在项目文件夹中修改代码和<code>package.json</code>中的版本号，然后再次运行<code>npm publish</code>命令即可完成更新。</li></ul><p>通过以上步骤，你便能轻松向<code>@dao3fun</code>组织投稿，与更多创作者共享你的创作成果。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/seven/dao3fun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dao3fun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dao3fun as default
};
