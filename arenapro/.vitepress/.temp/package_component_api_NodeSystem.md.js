import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
const __pageData = JSON.parse('{"title":"构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/api/NodeSystem.md","filePath":"package/component/api/NodeSystem.md","lastUpdated":1742721851000}');
const __default__ = { name: "package/component/api/NodeSystem.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><h4 id="NodeSystem" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`NodeSystem`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹T = any›`);
          } else {
            return [
              createTextVNode("‹T = any›")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: NodeSystem`);
          } else {
            return [
              createTextVNode(": NodeSystem")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#NodeSystem" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;NodeSystem&lt;font id=&quot;Type&quot;&gt;‹T = any›&lt;/font&gt;()&lt;font id=&quot;Type&quot;&gt;: NodeSystem&lt;/font&gt;{#NodeSystem}&quot;">​</a></h4><p>实例化一个节点系统类</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>NodeSystem</td><td>节点系统类</td></tr></tbody></table><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h4 id="uuid" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`uuid`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: string`);
          } else {
            return [
              createTextVNode(": string")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#uuid" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;uuid&lt;font id=&quot;Type&quot;&gt;: string&lt;/font&gt;{#uuid}&quot;">​</a></h4><p>获得系统的 uuid。</p><hr><h4 id="entities" tabindex="-1">`);
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
      _push(`entities`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: node‹T›[]`);
          } else {
            return [
              createTextVNode(": node‹T›[]")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#entities" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;&lt;font id=&quot;ReadOnly&quot; &gt;只读&lt;/font&gt;entities&lt;font id=&quot;Type&quot;&gt;: node‹T›[]&lt;/font&gt;{#entities}&quot;">​</a></h4><p>获取该系统的扩展节点列表。</p><hr><h4 id="enable" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;enable&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#enable}&quot;">​</a></h4><p>该系统启用状态。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h4 id="destroy" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;destroy()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#destroy}&quot;">​</a></h4><p>移除当前系统实例。</p><p>会执行系统的<code>onDisable</code>和<code>onDestroy</code>方法</p><hr><h4 id="onEntityNodeAdded" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onEntityNodeAdded(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`entityNode: EntityNode`);
          } else {
            return [
              createTextVNode("entityNode: EntityNode")
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
      _push(` <a class="header-anchor" href="#onEntityNodeAdded" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onEntityNodeAdded(&lt;font id=&quot;Type&quot;&gt;entityNode: EntityNode&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onEntityNodeAdded}&quot;">​</a></h4><p>当实体节点成功被添加到系统时调用。</p><p>你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onEntityNodeRemoved" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onEntityNodeRemoved(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`entityNode: EntityNode`);
          } else {
            return [
              createTextVNode("entityNode: EntityNode")
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
      _push(` <a class="header-anchor" href="#onEntityNodeRemoved" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onEntityNodeRemoved(&lt;font id=&quot;Type&quot;&gt;entityNode: EntityNode&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onEntityNodeRemoved}&quot;">​</a></h4><p>当实体节点成功被移除到系统时调用。</p><p>你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onLoad" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#onLoad" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onLoad()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onLoad}&quot;">​</a></h4><p>系统初始化函数，在系统被注册到注册表之前调用</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="update" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#update" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;update(&lt;font id=&quot;Type&quot;&gt;deltaTime: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#update}&quot;">​</a></h4><p>如果该系统启用，在每一帧中在所有组件的 update 之后被调用</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>deltaTime</td><td>自上次更新以来的时间差，单位为毫秒</td></tr></tbody></table><hr><h4 id="postUpdate" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`postUpdate(`);
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
      _push(` <a class="header-anchor" href="#postUpdate" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;postUpdate(&lt;font id=&quot;Type&quot;&gt;deltaTime: number&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#postUpdate}&quot;">​</a></h4><p>如果该系统启用，在每一帧中在所有组件的 lateUpdate 之后被调用</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>deltaTime</td><td>自上次更新以来的时间差，单位为毫秒</td></tr></tbody></table><hr><h4 id="onEnable" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#onEnable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onEnable()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onEnable}&quot;">​</a></h4><p>系统启用时调用，当系统的 enable 属性从 false 变为 true 时触发。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onDisable" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#onDisable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onDisable()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onDisable}&quot;">​</a></h4><p>系统禁用时调用，当系统的 enable 属性从 true 变为 false 时触发。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p><hr><h4 id="onDestroy" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#onDestroy" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onDestroy()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onDestroy}&quot;">​</a></h4><p>系统销毁时调用，在系统被完全清理之前的最后一个生命周期方法。</p><p>该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/api/NodeSystem.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
