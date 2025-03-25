import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_3 } from "./QQ20241222-160335.6ErJmi5F.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/arenapro/QQ20241222-153830.png";
const _imports_1 = "/arenapro/QQ20241222-154927.png";
const _imports_2 = "/arenapro/QQ20241222-155644.png";
const _imports_4 = "/arenapro/QQ20241222-160744.png";
const __pageData = JSON.parse('{"title":"Arena资源同步到项目","description":"","frontmatter":{},"headers":[],"relativePath":"guide/three/resourcesSynchronous.md","filePath":"guide/three/resourcesSynchronous.md","lastUpdated":1734855331000}');
const _sfc_main = { name: "guide/three/resourcesSynchronous.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arena资源同步到项目" tabindex="-1">Arena资源同步到项目 <a class="header-anchor" href="#arena资源同步到项目" aria-label="Permalink to &quot;Arena资源同步到项目&quot;">​</a></h1><p>在使用神岛的部分API（例如播放背景音乐、创建实体等）时，需要填写资源路径。为了确保资源路径的正确性并避免错误，插件提供了资源同步功能。</p><p><strong>目前支持同步的资源类型</strong>：模型、音频、图片</p><p><strong>快捷键</strong>：<code>Alt+Y</code></p><h2 id="一键同步资源到本地" tabindex="-1">一键同步资源到本地 <a class="header-anchor" href="#一键同步资源到本地" aria-label="Permalink to &quot;一键同步资源到本地&quot;">​</a></h2><p>在使用一键同步功能前，请确保成功链接地图。你会看到一个<code>一键同步地图资源</code>按钮，点击它即可将地图资源一键同步到本地。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="一键同步按钮示例"></p><p>同步过程可能需要一些时间，具体时间取决于资源数量和大小。</p><h3 id="同步步骤" tabindex="-1">同步步骤 <a class="header-anchor" href="#同步步骤" aria-label="Permalink to &quot;同步步骤&quot;">​</a></h3><ol><li><strong>同步所有模型数据</strong></li><li><strong>同步所有音频数据</strong></li><li><strong>同步所有图片数据</strong></li></ol><p><img${ssrRenderAttr("src", _imports_1)} alt="同步进度示例"></p><p>同步完成后，将在<code>server</code>和<code>client</code>文件夹的<code>types</code>目录下生成一个名为<code>GameAssets.d.ts</code>的文件。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="生成的文件示例"></p><p>该文件将记录当前地图的所有资源路径。如果你添加了新资源，只需再次点击一键同步，资源就会自动更新到本地。</p><p>此外，还会生成三个<code>type</code>记录，分别用于地图音频资源、地图图片资源和地图模型资源：</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 地图音频资源类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> GameAudioAssets</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 地图图片资源类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> GamePictureAssets</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 地图模型资源类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> GameModelAssets</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>你可以直接在脚本中使用这些类型进行约束，例如：</p><p><img${ssrRenderAttr("src", _imports_3)} alt="脚本中使用类型约束示例"></p><p>这样做可以实时检测资源是否存在，并在资源不存在时给出提示。</p><p>同时，你还可以根据程序的提示快速选择资源。因此，建议经常进行资源同步，以避免误报。</p><h2 id="资源代码片段" tabindex="-1">资源代码片段 <a class="header-anchor" href="#资源代码片段" aria-label="Permalink to &quot;资源代码片段&quot;">​</a></h2><p>在同步资源的同时，插件还会在<code>.vscode</code>文件夹中生成一个名为<code>dao3-GameAssets.code-snippets</code>的文件，用于存储所有资源，方便快速选择。</p><p>要快速调用这些资源代码片段，只需在编辑器中输入<code>#audio</code>、<code>#picture</code>或<code>#mesh</code>即可。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="快速调用资源代码片段示例"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/three/resourcesSynchronous.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resourcesSynchronous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resourcesSynchronous as default
};
