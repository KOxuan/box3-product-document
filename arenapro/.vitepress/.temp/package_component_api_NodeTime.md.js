import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
const __pageData = JSON.parse('{"title":"方法","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/api/NodeTime.md","filePath":"package/component/api/NodeTime.md","lastUpdated":1742721851000}');
const __default__ = { name: "package/component/api/NodeTime.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h1><h4 id="start" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`start()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: void`);
          } else {
            return [
              createTextVNode(": void")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#start" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;start()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#start}&quot;">​</a></h4><p>启动时间系统，启用后全局节点开始参与刷新。</p><hr><h4 id="isRunning" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`isRunning()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: boolean`);
          } else {
            return [
              createTextVNode(": boolean")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#isRunning" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;isRunning()&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#isRunning}&quot;">​</a></h4><p>检查时间系统是否正在运行。</p><hr><h4 id="setTimeScale" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`setTimeScale(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`scale: number`);
          } else {
            return [
              createTextVNode("scale: number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: void`);
          } else {
            return [
              createTextVNode(": void")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#setTimeScale" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;setTimeScale(&lt;font id=&quot;Type&quot;&gt;scale: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#setTimeScale}&quot;">​</a></h4><p>设置 dt 时间缩放因子，你可以使用它来加速或减速时间的流逝。</p><p>默认值为 1.0，值大于 1 表示加速，值小于 1 表示降速。</p><blockquote><p>注意：时间缩放因子会影响所有节点的时间更新，包括全局节点。</p></blockquote><blockquote><p>请谨慎使用时间缩放因子，以避免出现意外的行为。</p></blockquote><blockquote><p>警告：时间缩放因子可能会导致节点之间的时间不一致，这可能会导致游戏逻辑错误。</p></blockquote><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>scale</td><td>是</td><td></td><td>number</td><td>时间缩放因子</td></tr></tbody></table><hr><h4 id="getTimeScale" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getTimeScale()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: number`);
          } else {
            return [
              createTextVNode(": number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getTimeScale" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getTimeScale()&lt;font id=&quot;Type&quot;&gt;: number&lt;/font&gt;{#getTimeScale}&quot;">​</a></h4><p>获取 dt 时间缩放因子</p><hr><h4 id="setTimeout" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`setTimeout(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`callback: () =&gt; void, delay: number`);
          } else {
            return [
              createTextVNode("callback: () => void, delay: number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: number`);
          } else {
            return [
              createTextVNode(": number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#setTimeout" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;setTimeout(&lt;font id=&quot;Type&quot;&gt;callback: () =&gt; void, delay: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: number&lt;/font&gt;{#setTimeout}&quot;">​</a></h4><p>添加延时任务，刷新率和节点刷新频率相同。</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>callback</td><td>是</td><td></td><td>()=&gt;void</td><td>回调函数</td></tr><tr><td>delay</td><td>是</td><td></td><td>number</td><td>延迟时间（毫秒）</td></tr></tbody></table><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>number</td><td>任务 ID</td></tr></tbody></table><hr><h4 id="clearTimeout" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`clearTimeout(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`taskId: number`);
          } else {
            return [
              createTextVNode("taskId: number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: boolean`);
          } else {
            return [
              createTextVNode(": boolean")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#clearTimeout" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;clearTimeout(&lt;font id=&quot;Type&quot;&gt;taskId: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#clearTimeout}&quot;">​</a></h4><p>清除延时任务</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>taskId</td><td>是</td><td></td><td>number</td><td>任务 ID</td></tr></tbody></table><hr><h4 id="stop" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`stop()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: void`);
          } else {
            return [
              createTextVNode(": void")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#stop" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;stop()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#stop}&quot;">​</a></h4><p>暂时停止时间系统</p><hr><h4 id="applyTimeWarp" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`applyTimeWarp(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`intensity: number, duration: number`);
          } else {
            return [
              createTextVNode("intensity: number, duration: number")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: void`);
          } else {
            return [
              createTextVNode(": void")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#applyTimeWarp" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;applyTimeWarp(&lt;font id=&quot;Type&quot;&gt;intensity: number, duration: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#applyTimeWarp}&quot;">​</a></h4><p>应用时间扭曲效果</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>intensity</td><td>是</td><td></td><td>number</td><td>时间扭曲强度</td></tr><tr><td>duration</td><td>是</td><td></td><td>number</td><td>持续时间（毫秒）</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/api/NodeTime.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
