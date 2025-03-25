import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/vscode.webp";
const _imports_1 = "/arenapro/vscodejm.webp";
const __pageData = JSON.parse('{"title":"安装Visual Studio Code","description":"","frontmatter":{},"headers":[],"relativePath":"bestPractices/vscode.md","filePath":"bestPractices/vscode.md","lastUpdated":1727341800000}');
const _sfc_main = { name: "bestPractices/vscode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装visual-studio-code" tabindex="-1">安装Visual Studio Code <a class="header-anchor" href="#安装visual-studio-code" aria-label="Permalink to &quot;安装Visual Studio Code&quot;">​</a></h1><p><strong>步骤1：访问VS Code官网</strong></p><ol><li>首先，打开你的网页浏览器，比如Chrome、Firefox或Edge等。</li><li>点击 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>，这将带你到VS Code的官方网站。</li></ol><p><strong>步骤：下载</strong></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p><strong>步骤2：安装</strong></p><ol><li><strong>对于Windows用户</strong>： <ul><li>双击下载好的<code>.exe</code>文件启动安装程序。</li><li>按照安装向导的指示操作，通常你只需要点击“下一步”几次，然后勾选“我接受协议”并点击“安装”。</li><li>安装完成后，点击“完成”按钮，VS Code将自动启动。</li></ul></li><li><strong>对于macOS用户</strong>： <ul><li>找到下载好的<code>.dmg</code>文件，双击打开它。</li><li>将VS Code的图标拖拽到“应用程序”文件夹中。</li><li>安装完成后，你可以在“启动台”中找到VS Code并启动它。</li></ul></li><li><strong>对于Linux用户</strong>（这里以Ubuntu为例）： <ul><li>打开终端。</li><li>使用<code>cd</code>命令切换到下载文件的目录，例如：<code>cd ~/Downloads</code>。</li><li>根据下载的VS Code版本（可能是一个<code>.deb</code>或<code>.tar.gz</code>文件），使用适当的命令进行安装。例如，如果是<code>.deb</code>文件，可以运行：<code>sudo dpkg -i code_*.deb</code>。</li><li>安装完成后，你可以在应用程序菜单中找到VS Code并启动。</li></ul></li></ol><p><strong>步骤3：启动</strong></p><ol><li>首次启动时，VS Code可能会提示你安装一些推荐的扩展或设置你的工作环境。你可以根据自己的需要选择安装或跳过。</li><li>现在，你已经成功安装了VS Code，并准备好开始编写代码了！</li></ol><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bestPractices/vscode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscode as default
};
