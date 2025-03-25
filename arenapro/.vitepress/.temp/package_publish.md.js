import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"上传你的神岛npm包","description":"","frontmatter":{},"headers":[],"relativePath":"package/publish.md","filePath":"package/publish.md","lastUpdated":1731215443000}');
const _sfc_main = { name: "package/publish.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="上传你的神岛npm包" tabindex="-1">上传你的神岛npm包 <a class="header-anchor" href="#上传你的神岛npm包" aria-label="Permalink to &quot;上传你的神岛npm包&quot;">​</a></h1><p>初始化一个适用于神岛的npm包项目并上传到<code>dao3fun</code>组织，可以按照以下步骤进行：</p><p>在此之前，你需要安装Node.js。</p><h3 id="初始化npm包项目" tabindex="-1">初始化npm包项目 <a class="header-anchor" href="#初始化npm包项目" aria-label="Permalink to &quot;初始化npm包项目&quot;">​</a></h3><ol><li><p><strong>创建项目文件夹</strong>：</p><ul><li>选择一个合适的文件夹位置，创建一个新的文件夹作为项目的根目录。文件夹名称应避免与已有的npm包名重复，以确保上传时的唯一性。</li></ul></li><li><p><strong>初始化项目</strong>：</p><ul><li>打开终端或命令行工具，切换到项目文件夹。</li><li>运行<code>npm init</code>命令，按照提示输入项目的基本信息，如项目名称、版本、描述、入口文件、测试命令等。也可以直接使用<code>npm init -y</code>命令生成一个带有默认值的<code>package.json</code>文件。</li></ul><div class="info custom-block"><p class="custom-block-title">信息</p><p><a href="https://dev.nodejs.cn/learn/the-package-json-guide/" target="_blank" rel="noreferrer">package.json配置指南</a></p></div></li><li><p><strong>编写项目代码</strong>：</p><ul><li>在项目文件夹中创建所需的文件和目录结构，编写项目的代码。</li><li>确保项目的入口文件（通常在<code>package.json</code>的<code>main</code>字段中指定）正确无误。</li></ul></li><li><p><strong>添加依赖</strong>：</p><ul><li>如果项目需要依赖其他npm包，可以使用<code>npm install &lt;package-name&gt;</code>命令安装。</li><li>安装的依赖会自动添加到<code>package.json</code>的<code>dependencies</code>或<code>devDependencies</code>字段中。</li></ul></li><li><p><strong>导出代码以供他人使用</strong>：</p><ul><li>若你希望他人能够使用你的代码，导出操作是不可或缺的步骤。</li><li>在导出时，请遵循<code>ES6</code>模块化规范，利用<code>export</code>关键字将所需内容导出。</li></ul></li></ol><h3 id="上传到npm组织" tabindex="-1">上传到npm组织 <a class="header-anchor" href="#上传到npm组织" aria-label="Permalink to &quot;上传到npm组织&quot;">​</a></h3><ol><li><p><strong>登录npm账号</strong>：</p><ul><li>在终端或命令行工具中运行<code>npm login</code>命令，输入npm账号的用户名、密码和邮箱进行登录。</li><li>如果是第一次登录，npm会要求你验证邮箱。</li></ul></li><li><p><strong>申请加入npm组织</strong>：</p><ul><li>你可以在QQ群<code>492953731</code>里找到管理员申请加入<code>dao3fun</code>组织。</li><li>加入后，才可以在此组织里npm上发布包。</li></ul></li><li><p><strong>发布npm包</strong>：</p><ul><li>在项目文件夹中运行<code>npm publish --access=public</code>命令，将项目发布到npm上。</li><li>如果是第一次发布到该组织，npm可能会要求你确认一些额外的信息或权限。</li><li>发布成功后，你可以在npm网站上搜索到你的包，并查看其详细信息。</li></ul></li><li><p><strong>验证和更新</strong>：</p><ul><li>发布后，你可以在其他项目中通过<code>npm install &lt;your-package-name&gt;</code>命令来安装和使用你的npm包。</li><li>如果需要更新包，可以在项目文件夹中修改代码和<code>package.json</code>中的版本号，然后再次运行<code>npm publish</code>命令进行更新。</li></ul></li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>在发布npm包之前，请确保你的项目代码和<code>package.json</code>文件已经准备好，并且符合npm的发布要求。</li><li>请注意，项目代码必须在神岛Pro编辑器里能正常运行，才可以发布到组织。</li><li>发布npm包时，请遵循npm的命名规范和版本规范，以避免与其他包发生冲突或引起混淆。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/publish.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publish = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  publish as default
};
