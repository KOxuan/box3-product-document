import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/node.webp";
const _imports_1 = "/arenapro/install-node-msi-version-on-windows-step1.webp";
const _imports_2 = "/arenapro/install-node-msi-version-on-windows-step2.webp";
const _imports_3 = "/arenapro/install-node-msi-version-on-windows-step3.webp";
const _imports_4 = "/arenapro/install-node-msi-version-on-windows-step4.webp";
const _imports_5 = "/arenapro/install-node-msi-version-on-windows-step5.webp";
const _imports_6 = "/arenapro/install-node-msi-version-on-windows-step6.webp";
const _imports_7 = "/arenapro/install-node-msi-version-on-windows-step8.webp";
const _imports_8 = "/arenapro/cmdnode.png";
const __pageData = JSON.parse('{"title":"安装 NodeJS","description":"","frontmatter":{},"headers":[],"relativePath":"bestPractices/nodejs.md","filePath":"bestPractices/nodejs.md","lastUpdated":1731378075000}');
const _sfc_main = { name: "bestPractices/nodejs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装-nodejs" tabindex="-1">安装 NodeJS <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 NodeJS&quot;">​</a></h1><h2 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h2><p>Node.js 安装包及源码下载地址为：<a href="https://nodejs.cn/en" target="_blank" rel="noreferrer">Node.js</a></p><p><strong>经过测试，V20 LTS及之后的LTS版本能正常运行项目，建议优先安装</strong></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p><strong>步骤 1 : 双击下载后的安装包，如下所示</strong></p><p><img${ssrRenderAttr("src", _imports_1)} alt=""></p><p><strong>步骤 2 : 点击以上的Run(运行)，将出现如下界面</strong></p><p><img${ssrRenderAttr("src", _imports_2)} alt=""></p><p><strong>步骤 3 : 勾选接受协议选项，点击 next（下一步） 按钮</strong></p><p><img${ssrRenderAttr("src", _imports_3)} alt=""></p><p><strong>步骤 4 : Node.js默认安装目录为 C:\\Program Files\\nodejs\\ ,并点击 next（下一步）</strong></p><div class="danger custom-block"><p class="custom-block-title">危险</p><p>默认装在系统盘！！！不要修改路径， 不要修改路径， 不要修改路径， 不要修改路径， 不要修改路径</p></div><p><img${ssrRenderAttr("src", _imports_4)} alt=""></p><p><strong>步骤 5 : 点击树形图标来选择你需要的安装模式 , 然后点击下一步 next（下一步）</strong></p><p><img${ssrRenderAttr("src", _imports_5)} alt=""></p><p><strong>步骤 6 : 格外的扩展项</strong></p><p>不需打勾，直接点击<strong>next（下一步）</strong>：</p><p><img src="https://static.codemao.cn/pickduck/HyXVe4lGyx.png?hash=FtqwLs437vYthIfsXa7SnkvsLTE4" alt=""></p><p><strong>步骤 7 : 点击 Install（安装） 开始安装Node.js。你也可以点击 Back（返回）来修改先前的配置。 然后并点击 next（下一步）</strong></p><p><img${ssrRenderAttr("src", _imports_6)} alt=""></p><p><strong>步骤 8 : 点击 Finish（完成）按钮退出安装向导</strong></p><p><img${ssrRenderAttr("src", _imports_7)} alt=""></p><h2 id="检测是否部署成功" tabindex="-1">检测是否部署成功 <a class="header-anchor" href="#检测是否部署成功" aria-label="Permalink to &quot;检测是否部署成功&quot;">​</a></h2><p>检查Node.js版本，点击开始=》运行=》输入&quot;cmd&quot; =&gt; 输入命令&quot;node -v&quot;</p><blockquote><p>快速调出运行界面快捷键：win+r</p></blockquote><p><img${ssrRenderAttr("src", _imports_8)} alt=""></p><p>到这里恭喜你，成功部署NodeJs了。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>最后记得重启一下VSCode编辑器！！ 才能在编辑器终端使用node和npm命令。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bestPractices/nodejs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nodejs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nodejs as default
};
