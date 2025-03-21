import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
const __pageData = JSON.parse('{"title":"构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/api/EntityNode.md","filePath":"package/component/api/EntityNode.md","lastUpdated":1742531673000}');
const __default__ = { name: "package/component/api/EntityNode.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><p>该扩展节点继承至 <a href="./EventEmitter.html">EventEmitter</a>。</p><h4 id="EntityNode" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`EntityNode`);
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
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`entity:T,isEnable?:boolean`);
          } else {
            return [
              createTextVNode("entity:T,isEnable?:boolean")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: EntityNode`);
          } else {
            return [
              createTextVNode(": EntityNode")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#EntityNode" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;EntityNode&lt;font id=&quot;Type&quot;&gt;‹T = any›&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;entity:T,isEnable?:boolean&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: EntityNode&lt;/font&gt;{#EntityNode}&quot;">​</a></h4><p>实例化一个扩展节点类</p><p>组件只能挂载在扩展节点上。</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>entity</td><td>是</td><td></td><td>T</td><td>游戏实体，可以是任意实体，例如角色、道具、ui 等</td></tr><tr><td>isEnable</td><td></td><td>true</td><td>boolean</td><td>扩展节点是否启用，启用时每帧刷新，且会影响节点下的组件启用状态</td></tr></tbody></table><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>EntityNode</td><td>扩展节点类</td></tr></tbody></table><h2 id="静态属性" tabindex="-1">静态属性 <a class="header-anchor" href="#静态属性" aria-label="Permalink to &quot;静态属性&quot;">​</a></h2><h4 id="isMonitoringEnabled" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`isMonitoringEnabled`);
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
      _push(` <a class="header-anchor" href="#isMonitoringEnabled" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;isMonitoringEnabled&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt; {#isMonitoringEnabled}&quot;">​</a></h4><p>设置是否启用全局性能监控。 默认为 true。</p><p>当启用时，所有组件的 Component.update 方法将被性能监控器跟踪， 以便记录和分析其执行性能。关闭此选项可以减少性能开销，适用于生产环境或不需要性能监控的场景。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h4 id="uuid" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#uuid" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;&lt;font id=&quot;ReadOnly&quot; &gt;只读&lt;/font&gt;uuid&lt;font id=&quot;Type&quot;&gt;: string&lt;/font&gt; {#uuid}&quot;">​</a></h4><p>获取该节点的 uuid。</p><hr><h4 id="components" tabindex="-1">`);
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
      _push(`components`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: Map‹string, Component‹T››`);
          } else {
            return [
              createTextVNode(": Map‹string, Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#components" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;&lt;font id=&quot;ReadOnly&quot; &gt;只读&lt;/font&gt;components&lt;font id=&quot;Type&quot;&gt;: Map‹string, Component‹T››&lt;/font&gt; {#components}&quot;">​</a></h4><p>获取该节点下所有组件实例。</p><hr><h4 id="entity" tabindex="-1">`);
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
      _push(`entity`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: entity‹T›`);
          } else {
            return [
              createTextVNode(": entity‹T›")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#entity" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;&lt;font id=&quot;ReadOnly&quot; &gt;只读&lt;/font&gt;entity&lt;font id=&quot;Type&quot;&gt;: entity‹T›&lt;/font&gt; {#entity}&quot;">​</a></h4><p>获取关联的游戏实体。</p><hr><h4 id="enable" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;enable&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#enable}&quot;">​</a></h4><p>节点启用状态，会影响每帧刷新和节点下的组件启用状态。</p><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h4 id="onPerformanceWarning" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`onPerformanceWarning(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`event: (event: IonPerformanceData) =&gt; void`);
          } else {
            return [
              createTextVNode("event: (event: IonPerformanceData) => void")
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
      _push(` <a class="header-anchor" href="#onPerformanceWarning" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;onPerformanceWarning(&lt;font id=&quot;Type&quot;&gt;event: (event: IonPerformanceData) =&gt; void&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#onPerformanceWarning}&quot;">​</a></h4><p>设置全局组件的性能警告回调。</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>event</td><td>是</td><td></td><td>(event: IonPerformanceData) =&gt; void</td><td>回调方法</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h4 id="addComponentName" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`addComponent(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentName: string, object?: Record‹string, any› , isEnable?: boolean`);
          } else {
            return [
              createTextVNode("componentName: string, object?: Record‹string, any› , isEnable?: boolean")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: this`);
          } else {
            return [
              createTextVNode(": this")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#addComponentName" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;addComponent(&lt;font id=&quot;Type&quot;&gt;componentName: string, object?: Record‹string, any› , isEnable?: boolean&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#addComponentName}&quot;">​</a></h4><p>向该节点增加指定类型的组件。</p><p>子组件类须加上@apclass 修饰器。否则无法获取组件实例。</p><p>【使用组件名】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentName</td><td>是</td><td></td><td>string</td><td>组件名</td></tr><tr><td>object</td><td></td><td>{}</td><td>Record&lt;string, any&gt;</td><td>组件初始化属性，默认不修改属性</td></tr><tr><td>isEnable</td><td></td><td>true</td><td>boolean</td><td>组件是否启用，默认启用</td></tr></tbody></table><hr><h4 id="addComponent" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`addComponent`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹U extends Component‹T››`);
          } else {
            return [
              createTextVNode("‹U extends Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentConstructor: new (...args: any[]) =&gt; U, object?: Partial‹Omit‹U, keyof Component‹T››› , isEnable?: boolean`);
          } else {
            return [
              createTextVNode("componentConstructor: new (...args: any[]) => U, object?: Partial‹Omit‹U, keyof Component‹T››› , isEnable?: boolean")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: this`);
          } else {
            return [
              createTextVNode(": this")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#addComponent" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;addComponent&lt;font id=&quot;Type&quot;&gt;‹U extends Component‹T››&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;componentConstructor: new (...args: any[]) =&gt; U, object?: Partial‹Omit‹U, keyof Component‹T››› , isEnable?: boolean&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#addComponent}&quot;">​</a></h4><p>向该节点增加指定类型的组件。</p><p>【使用组件构造函数】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentConstructor</td><td>是</td><td></td><td>new (...args: any[]) =&gt; U</td><td>组件构造函数</td></tr><tr><td>object</td><td></td><td>{}</td><td>Partial‹Omit‹U, keyof Component‹T›››</td><td>组件初始化属性，默认不修改属性</td></tr><tr><td>isEnable</td><td></td><td>true</td><td>boolean</td><td>组件是否启用，默认启用</td></tr></tbody></table><hr><h4 id="getComponentName" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getComponent(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentName: string`);
          } else {
            return [
              createTextVNode("componentName: string")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: U | undefined`);
          } else {
            return [
              createTextVNode(": U | undefined")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getComponentName" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getComponent(&lt;font id=&quot;Type&quot;&gt;componentName: string&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: U | undefined&lt;/font&gt;{#getComponentName}&quot;">​</a></h4><p>获取该节点下指定类型的组件。</p><p>【使用组件名】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentName</td><td>是</td><td></td><td>string</td><td>组件名</td></tr></tbody></table><hr><h4 id="getComponent" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getComponent`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹U extends Component‹T››`);
          } else {
            return [
              createTextVNode("‹U extends Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentConstructor: new (...args: any[]) =&gt; U`);
          } else {
            return [
              createTextVNode("componentConstructor: new (...args: any[]) => U")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: U | undefined`);
          } else {
            return [
              createTextVNode(": U | undefined")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getComponent" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getComponent&lt;font id=&quot;Type&quot;&gt;‹U extends Component‹T››&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;componentConstructor: new (...args: any[]) =&gt; U&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: U | undefined&lt;/font&gt;{#getComponent}&quot;">​</a></h4><p>获取该节点下指定类型的组件。</p><p>【使用组件构造函数】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentConstructor</td><td>是</td><td></td><td>new (...args: any[]) =&gt; U</td><td>组件构造函数</td></tr></tbody></table><hr><h4 id="getComponentPerformanceName" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getComponentPerformance(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentName: string`);
          } else {
            return [
              createTextVNode("componentName: string")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: IBasePerformanceData | null`);
          } else {
            return [
              createTextVNode(": IBasePerformanceData | null")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getComponentPerformanceName" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getComponentPerformance(&lt;font id=&quot;Type&quot;&gt;componentName: string&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: IBasePerformanceData | null&lt;/font&gt;{#getComponentPerformanceName}&quot;">​</a></h4><p>获取该节点下指定的组件性能数据。</p><p>【使用组件名】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentName</td><td>是</td><td></td><td>string</td><td>组件名</td></tr></tbody></table><hr><h4 id="getComponentPerformance" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getComponentPerformance`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹U extends Component‹T››`);
          } else {
            return [
              createTextVNode("‹U extends Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentConstructor: new (...args: any[]) =&gt; U`);
          } else {
            return [
              createTextVNode("componentConstructor: new (...args: any[]) => U")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: IBasePerformanceData | null`);
          } else {
            return [
              createTextVNode(": IBasePerformanceData | null")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getComponentPerformance" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getComponentPerformance&lt;font id=&quot;Type&quot;&gt;‹U extends Component‹T››&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;componentConstructor: new (...args: any[]) =&gt; U&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: IBasePerformanceData | null&lt;/font&gt;{#getComponentPerformance}&quot;">​</a></h4><p>获取该节点下指定的组件性能数据。</p><p>【使用组件构造函数】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentConstructor</td><td>是</td><td></td><td>new (...args: any[]) =&gt; U</td><td>组件构造函数</td></tr></tbody></table><hr><h4 id="getComponents" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`getComponents()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: Map‹string, Component‹T››`);
          } else {
            return [
              createTextVNode(": Map‹string, Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#getComponents" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;getComponents()&lt;font id=&quot;Type&quot;&gt;: Map‹string, Component‹T››&lt;/font&gt;{#getComponents}&quot;">​</a></h4><p>获取该节点下所有组件。</p><hr><h4 id="removeComponentnName" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`removeComponent(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentName: string`);
          } else {
            return [
              createTextVNode("componentName: string")
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
      _push(` <a class="header-anchor" href="#removeComponentnName" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;removeComponent(&lt;font id=&quot;Type&quot;&gt;componentName: string&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#removeComponentnName}&quot;">​</a></h4><p>移除节点下指定类型的组件。</p><p>【使用组件名】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentName</td><td>是</td><td></td><td>string</td><td>组件名</td></tr></tbody></table><hr><h4 id="removeComponent" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`removeComponent`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹U extends Component‹T››`);
          } else {
            return [
              createTextVNode("‹U extends Component‹T››")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`componentConstructor: new (...args: any[]) =&gt; U`);
          } else {
            return [
              createTextVNode("componentConstructor: new (...args: any[]) => U")
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
      _push(` <a class="header-anchor" href="#removeComponent" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;removeComponent&lt;font id=&quot;Type&quot;&gt;‹U extends Component‹T››&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;componentConstructor: new (...args: any[]) =&gt; U&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#removeComponent}&quot;">​</a></h4><p>移除节点下指定类型的组件。</p><p>【使用组件构造函数】</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>componentConstructor</td><td>是</td><td></td><td>new (...args: any[]) =&gt; U</td><td>组件构造函数</td></tr></tbody></table><hr><h4 id="removeComponentAll" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`removeComponentAll()`);
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
      _push(` <a class="header-anchor" href="#removeComponentAll" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;removeComponentAll()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#removeComponentAll}&quot;">​</a></h4><p>移除节点下所有组件。</p><hr><h4 id="destroy" tabindex="-1">`);
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
      _push(` <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;destroy()&lt;font id=&quot;Type&quot;&gt;: void&lt;/font&gt;{#destroy}&quot;">​</a></h4><p>移除节点及其所有组件，并清理相关资源。</p><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h4 id="find" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`find`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`‹U = any›`);
          } else {
            return [
              createTextVNode("‹U = any›")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`entityOrUUID:U`);
          } else {
            return [
              createTextVNode("entityOrUUID:U")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`)`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: EntityNode‹U› | undefined`);
          } else {
            return [
              createTextVNode(": EntityNode‹U› | undefined")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#find" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;find&lt;font id=&quot;Type&quot;&gt;‹U = any›&lt;/font&gt;(&lt;font id=&quot;Type&quot;&gt;entityOrUUID:U&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: EntityNode‹U› | undefined&lt;/font&gt;{#find}&quot;">​</a></h4><p>根据 entity 或 uuid 从全局注册表中获取一个已注册的节点实例。</p><ul><li>优先级：entity &gt; uuid</li></ul><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>entityOrUUID</td><td>是</td><td></td><td>U</td><td>游戏实体或节点 uuid</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/api/EntityNode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
