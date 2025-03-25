import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"组件生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/componentGuide/lifecycle.md","filePath":"package/component/componentGuide/lifecycle.md","lastUpdated":1742610872000}');
const _sfc_main = { name: "package/component/componentGuide/lifecycle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-label="Permalink to &quot;组件生命周期&quot;">​</a></h1><blockquote><p><strong>重要提示：</strong> 生命周期函数的执行顺序是固定的，创作者应该在合适的生命周期阶段处理相应的游戏逻辑。错误的执行时机可能会导致组件之间的依赖关系出现问题。</p></blockquote><p><img src="https://static.codemao.cn/pickduck/HyH4xoin1g.png?hash=FsUtJcE2yBbKnn-btkwZrCzoc68g" alt=""></p><p>组件生命周期是指脚本组件从创建到销毁的整个过程中所经历的一系列预设事件。这些事件定义了组件在不同阶段的行为，帮助创作者有效管理游戏逻辑和资源。以下是组件生命周期的详细解释：</p><h3 id="_1-初始化阶段" tabindex="-1">1. 初始化阶段 <a class="header-anchor" href="#_1-初始化阶段" aria-label="Permalink to &quot;1. 初始化阶段&quot;">​</a></h3><ul><li><strong>onLoad()</strong>：组件实例化时调用。这是进行资源加载和数据初始化的最佳时机。可以将其视为组件的&quot;出生&quot;时刻，此时组件开始准备进入游戏世界。<strong>整个生命周期只会被调用一次。</strong></li></ul><h3 id="_2-启用阶段" tabindex="-1">2. 启用阶段 <a class="header-anchor" href="#_2-启用阶段" aria-label="Permalink to &quot;2. 启用阶段&quot;">​</a></h3><ul><li><strong>onEnable()</strong>：组件被启用时调用，在 onLoad 之后、start 之前执行。通常用于注册事件监听器、启动计时器等需要在组件激活时执行的操作。</li></ul><h3 id="_3-准备阶段" tabindex="-1">3. 准备阶段 <a class="header-anchor" href="#_3-准备阶段" aria-label="Permalink to &quot;3. 准备阶段&quot;">​</a></h3><ul><li><strong>start()</strong>：组件首次启用时执行。即使组件后续被禁用再启用，也不会重复调用。这是设置初始状态、注册事件监听器等操作的理想时机。可以将其视为组件&quot;正式上岗&quot;的时刻。<strong>整个生命周期只会被调用一次。</strong></li></ul><h3 id="_4-更新阶段" tabindex="-1">4. 更新阶段 <a class="header-anchor" href="#_4-更新阶段" aria-label="Permalink to &quot;4. 更新阶段&quot;">​</a></h3><ul><li><p><strong>update(deltaTime)</strong>：每帧调用一次，用于实现帧更新逻辑。<code>deltaTime</code> 参数表示自上一帧以来经过的时间（毫秒），可用于时间相关计算，如动画、移动等基于时间的操作。这是游戏逻辑的核心部分，每一帧都在此更新。</p></li><li><p><strong>lateUpdate(deltaTime)</strong>：update 会在所有动画更新前执行，但如果我们要在动效（如动画、粒子、物理等）更新之后才进行一些额外操作，或者希望在所有组件的 update 都执行完之后才进行其它操作，那就需要用到 lateUpdate 回调。</p></li></ul><h3 id="_5-禁用和销毁阶段" tabindex="-1">5. 禁用和销毁阶段 <a class="header-anchor" href="#_5-禁用和销毁阶段" aria-label="Permalink to &quot;5. 禁用和销毁阶段&quot;">​</a></h3><ul><li><p><strong>onDisable()</strong>：组件被禁用时调用。通常用于注销事件监听器、暂停动画或计时器等操作。可以理解为组件&quot;暂时下岗&quot;，不再参与游戏世界的交互。</p></li><li><p><strong>onDestroy()</strong>：组件被销毁时调用。这是进行资源清理的最后机会，如释放内存、注销全局事件监听器等。可以将其视为组件的&quot;终结&quot;时刻，它将从游戏世界中彻底移除。<strong>整个生命周期只会被调用一次。</strong></p></li></ul><p>总的来说，组件生命周期类似于组件的&quot;生命旅程&quot;。通过合理利用这些生命周期回调函数，创作者可以更加有序地管理游戏逻辑和资源，确保游戏流畅运行。每个阶段都有其特定的用途和意义，正确理解并应用这些生命周期方法对于开发高质量游戏至关重要。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/componentGuide/lifecycle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lifecycle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lifecycle as default
};
