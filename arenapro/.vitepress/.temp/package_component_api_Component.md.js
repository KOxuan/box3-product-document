import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
const __pageData = JSON.parse('{"title":"属性","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/api/Component.md","filePath":"package/component/api/Component.md","lastUpdated":1742721851000}');
const __default__ = { name: "package/component/api/Component.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h1><h4 id="weight" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`weight`);
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
      _push(` <a class="header-anchor" href="#weight" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;weight&lt;font id=&quot;Type&quot;&gt;: number&lt;/font&gt; {#weight}&quot;">​</a></h4><p>组件权重，值越小权重越大，刷新时会根据权重进行排序。</p><p>默认值：0</p><hr><h4 id="node" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(ssrRenderComponent(_component_font, { id: "ReadOnly" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`只读`);
          } else {
            return [
              createTextVNode("只读")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`node`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: node‹T›`);
          } else {
            return [
              createTextVNode(": node‹T›")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#node" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;&lt;font id=&quot;ReadOnly&quot; &gt;只读&lt;/font&gt;node&lt;font id=&quot;Type&quot;&gt;: node‹T›&lt;/font&gt;{#node}&quot;">​</a></h4><p>获取该组件关联的扩展节点。</p><hr><h4 id="enable" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`enable`);
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
      _push(` <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;enable&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#enable}&quot;">​</a></h4><p>该组件启用状态。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h4 id="destroy" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`destroy()`);
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
      _push(` <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;destroy()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#destroy}&quot;">​</a></h4><p>从当前节点上移除当前组件实例。</p><p>会执行组件的<code>onDisable</code>和<code>onDestroy</code>方法</p><hr><h4 id="onLoad" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onLoad()`);
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
      _push(` <a class="header-anchor" href="#onLoad" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onLoad()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onLoad}&quot;">​</a></h4><p>当附加到一个节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="start" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#start" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;start()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#start}&quot;">​</a></h4><p>如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="update" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`update(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`deltaTime: number`);
          } else {
            return [
              createTextVNode("deltaTime: number")
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
      _push(` <a class="header-anchor" href="#update" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;update(&lt;font id=&quot;Type&quot;&gt;deltaTime: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#update}&quot;">​</a></h4><p>如果该组件启用，则每帧（60 FPS）调用 update。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>deltaTime</td><td>自上次更新以来的时间差，单位为毫秒</td></tr></tbody></table><hr><h4 id="lateUpdate" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`lateUpdate(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`deltaTime: number`);
          } else {
            return [
              createTextVNode("deltaTime: number")
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
      _push(` <a class="header-anchor" href="#lateUpdate" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;lateUpdate(&lt;font id=&quot;Type&quot;&gt;deltaTime: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#lateUpdate}&quot;">​</a></h4><p>如果该组件启用，则等节点下所有组件 update 执行完后调用 lateUpdate。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>deltaTime</td><td>自上次更新以来的时间差，单位为毫秒</td></tr></tbody></table><hr><h4 id="onEnable" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onEnable()`);
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
      _push(` <a class="header-anchor" href="#onEnable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onEnable()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onEnable}&quot;">​</a></h4><p>当该组件被启用，并且它的节点也激活时。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onDisable" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onDisable()`);
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
      _push(` <a class="header-anchor" href="#onDisable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onDisable()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onDisable}&quot;">​</a></h4><p>当该组件被禁用或节点变为无效时调用。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onDestroy" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onDestroy()`);
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
      _push(` <a class="header-anchor" href="#onDestroy" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onDestroy()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onDestroy}&quot;">​</a></h4><p>当该组件被销毁时调用。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><h2 id="修饰器函数" tabindex="-1">修饰器函数 <a class="header-anchor" href="#修饰器函数" aria-label="Permalink to &quot;修饰器函数&quot;">​</a></h2><h4 id="apclass" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`apclass`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹T extends { new (...args: any[]): Component }›`);
          } else {
            return [
              createTextVNode("‹T extends { new (...args: any[]): Component }›")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`constructor:T`);
          } else {
            return [
              createTextVNode("constructor:T")
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
      _push(` <a class="header-anchor" href="#apclass" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;apclass&lt;font id=&quot;Type&quot;&gt;‹T extends { new (...args: any[]): Component }›&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;constructor:T&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#apclass}&quot;">​</a></h4><p>该装饰器函数的目的在于确保传入的构造函数是 Component 类的子类，并将自动注册到 registryComponent 中，从而们可以直接使用类名来注册组件。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/api/Component.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
