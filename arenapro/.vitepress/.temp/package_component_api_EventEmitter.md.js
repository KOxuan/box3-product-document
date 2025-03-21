import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
const __pageData = JSON.parse('{"title":"事件通讯说明","description":"","frontmatter":{},"headers":[],"relativePath":"package/component/api/EventEmitter.md","filePath":"package/component/api/EventEmitter.md","lastUpdated":1742466606000}');
const __default__ = { name: "package/component/api/EventEmitter.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="事件通讯说明" tabindex="-1">事件通讯说明 <a class="header-anchor" href="#事件通讯说明" aria-label="Permalink to &quot;事件通讯说明&quot;">​</a></h1><p>当前支持四种类型的事件消息机制，分别为全局事件、节点事件、自定义事件以及服务端游戏世界事件。以下是针对这四种事件消息使用方法的详细介绍。</p><h3 id="全局事件" tabindex="-1">全局事件 <a class="header-anchor" href="#全局事件" aria-label="Permalink to &quot;全局事件&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 全局事件总线实例化，支持由创作者自定义事件。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * Emitter 是一个全局管理事件实例，用于在整个应用中统一管理事件的触发和监听。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 它允许通过 \`on\`、\`once\`、\`off\` 等方法注册或移除事件监听器，并支持事件的触发和通知。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 示例用法：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`typescript</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 注册事件监听器，当收到say事件时，打印事件文本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * Emitter.on(&#39;say&#39;, (text) =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *   console.log(text);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 触发say事件，并传入事件文本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * Emitter.emit(&#39;say&#39;, &#39;Hello, world!&#39;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> Emitter</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> EventEmitter</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="节点事件" tabindex="-1">节点事件 <a class="header-anchor" href="#节点事件" aria-label="Permalink to &quot;节点事件&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 每个节点都配备独立的消息事件器，用于实现该节点下组件间的事件传递与通信，且与其他节点互不干扰。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">@example</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`typescript</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * const node = new EntityNode(world.querySelector(&quot;#实体名称&quot;)!);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * node.on(&#39;say&#39;, (text) =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *   console.log(text);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> EntityNode</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">T</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt; </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">extends</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> EventEmitter</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> ;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="自定义事件" tabindex="-1">自定义事件 <a class="header-anchor" href="#自定义事件" aria-label="Permalink to &quot;自定义事件&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 事件消息管理，支持由创作者自定义事件。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * EventEmitter 是一个管理事件类，用于在应用中管理事件的触发和监听。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 它允许通过 \`on\`、\`once\`、\`off\` 等方法注册或移除事件监听器，并支持事件的触发和通知。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 示例用法：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`typescript</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 创建一个事件发射器实例</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * const emitter = new EventEmitter();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 注册事件监听器，当收到say事件时，打印事件文本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * emitter.on(&#39;say&#39;, (text) =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *   console.log(text);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 触发say事件，并传入事件文本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * emitter.emit(&#39;say&#39;, &#39;Hello, world!&#39;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> EventEmitter</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> extends</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> BaseEventEmitter</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="服务端游戏世界事件" tabindex="-1">服务端游戏世界事件 <a class="header-anchor" href="#服务端游戏世界事件" aria-label="Permalink to &quot;服务端游戏世界事件&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 服务端世界游戏事件的实例化。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * GameWorldEvent 是一个 </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">{</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">@link</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> GameWorld</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">}</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> 世界管理相关事件实例，用于处理与游戏世界相关的事件。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 它允许通过 \`on\`、\`once\`、\`off\` 等方法注册或移除事件监听器，并支持事件的触发和通知。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * 示例用法：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`typescript</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 注册事件监听器，当玩家加入游戏时触发</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * GameWorldEvent.on(world.onPlayerJoin, ({ entity }) =&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> *   console.log(entity.player.name);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * });</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> * \`\`\`</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> GameWorldEvent</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> GameEvent</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">GameEventChannel</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&gt;(world);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><hr><h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><h4 id="EventEmitter" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`EventEmitter()`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`: EventEmitter`);
          } else {
            return [
              createTextVNode(": EventEmitter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#EventEmitter" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;EventEmitter()&lt;font id=&quot;Type&quot;&gt;: EventEmitter&lt;/font&gt;{#EventEmitter}&quot;">​</a></h4><p>实例化一个事件消息类</p><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>EventEmitter</td><td>事件类</td></tr></tbody></table><h1 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h1><h4 id="on" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`on(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`eventName: string, callback: (...args: any[]) =&gt; void, target?: any`);
          } else {
            return [
              createTextVNode("eventName: string, callback: (...args: any[]) => void, target?: any")
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
      _push(` <a class="header-anchor" href="#on" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;on(&lt;font id=&quot;Type&quot;&gt;eventName: string, callback: (...args: any[]) =&gt; void, target?: any&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#on}&quot;">​</a></h4><p>注册事件监听</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>eventName</td><td>是</td><td></td><td>string</td><td>事件名称</td></tr><tr><td>callback</td><td>是</td><td></td><td>(...args: any[]) =&gt; void</td><td>回调函数</td></tr><tr><td>target</td><td></td><td>this</td><td>any</td><td>目标对象</td></tr></tbody></table><hr><h4 id="once" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`once(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`eventName: string, callback: (...args: any[]) =&gt; void, target?: any`);
          } else {
            return [
              createTextVNode("eventName: string, callback: (...args: any[]) => void, target?: any")
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
      _push(` <a class="header-anchor" href="#once" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;once(&lt;font id=&quot;Type&quot;&gt;eventName: string, callback: (...args: any[]) =&gt; void, target?: any&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#once}&quot;">​</a></h4><p>注册单次事件监听，触发后自动移除</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>eventName</td><td>是</td><td></td><td>string</td><td>事件名称</td></tr><tr><td>callback</td><td>是</td><td></td><td>(...args: any[]) =&gt; void</td><td>回调函数</td></tr><tr><td>target</td><td></td><td>this</td><td>any</td><td>目标对象</td></tr></tbody></table><hr><h4 id="off" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`off(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`eventName: string, callback: (...args: any[]) =&gt; void, target?: any`);
          } else {
            return [
              createTextVNode("eventName: string, callback: (...args: any[]) => void, target?: any")
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
      _push(` <a class="header-anchor" href="#off" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;off(&lt;font id=&quot;Type&quot;&gt;eventName: string, callback: (...args: any[]) =&gt; void, target?: any&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#off}&quot;">​</a></h4><p>移除事件监听</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>eventName</td><td>是</td><td></td><td>string</td><td>事件名称</td></tr><tr><td>callback</td><td>是</td><td></td><td>(...args: any[]) =&gt; void</td><td>回调函数</td></tr><tr><td>target</td><td></td><td>this</td><td>any</td><td>目标对象</td></tr></tbody></table><hr><h4 id="emit" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`emit(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`eventName: string, ...args: any[]`);
          } else {
            return [
              createTextVNode("eventName: string, ...args: any[]")
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
      _push(` <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;emit(&lt;font id=&quot;Type&quot;&gt;eventName: string, ...args: any[]&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#emit}&quot;">​</a></h4><p>触发事件</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>eventName</td><td>是</td><td></td><td>string</td><td>事件名称</td></tr><tr><td>...args</td><td>是</td><td></td><td>any[]</td><td>参数列表</td></tr></tbody></table><hr><h4 id="dispatchEvent" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`dispatchEvent(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`event: IEvent`);
          } else {
            return [
              createTextVNode("event: IEvent")
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
      _push(` <a class="header-anchor" href="#dispatchEvent" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;dispatchEvent(&lt;font id=&quot;Type&quot;&gt;event: IEvent&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#dispatchEvent}&quot;">​</a></h4><p>派发一个事件对象，所有监听该事件类型的监听器都会被通知。</p><p>GameEventClass 类下无此方法。</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>IEvent.type</td><td>是</td><td></td><td>string</td><td>事件类型，用于标识事件的种类</td></tr><tr><td>IEvent.target</td><td></td><td>this</td><td>any</td><td>事件目标，可选属性，表示触发该事件的元素或对象</td></tr><tr><td>[x: string]: any</td><td></td><td></td><td>object</td><td>其他任意值</td></tr></tbody></table><hr><h4 id="hasEventListener" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`hasEventListener(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`eventName: string`);
          } else {
            return [
              createTextVNode("eventName: string")
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
      _push(` <a class="header-anchor" href="#hasEventListener" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;hasEventListener(&lt;font id=&quot;Type&quot;&gt;eventName: string&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#hasEventListener}&quot;">​</a></h4><p>检查是否有特定事件的监听者</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>eventName</td><td>是</td><td></td><td>string</td><td>事件名称</td></tr></tbody></table><p><strong>返回值</strong></p><table tabindex="0"><thead><tr><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>boolean</td><td>是否有监听者</td></tr></tbody></table><hr><h4 id="removeAll" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`removeAll()`);
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
      _push(` <a class="header-anchor" href="#removeAll" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;removeAll()&lt;font id=&quot;Type&quot;&gt;: boolean&lt;/font&gt;{#removeAll}&quot;">​</a></h4><p>移除所有事件监听</p><hr><h4 id="targetOff" tabindex="-1">`);
      _push(ssrRenderComponent(_component_font, { id: "API" }, null, _parent));
      _push(`targetOff(`);
      _push(ssrRenderComponent(_component_font, { id: "Type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`target: any`);
          } else {
            return [
              createTextVNode("target: any")
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
      _push(` <a class="header-anchor" href="#targetOff" aria-label="Permalink to &quot;&lt;font id=&quot;API&quot; /&gt;targetOff(&lt;font id=&quot;Type&quot;&gt;target: any&lt;/font&gt;)&lt;font id=&quot;Type&quot;&gt;: this&lt;/font&gt;{#targetOff}&quot;">​</a></h4><p>移除指定目标的所有事件监听</p><p><strong>输入参数</strong></p><table tabindex="0"><thead><tr><th><strong><em>参数</em></strong></th><th><strong><em>必填</em></strong></th><th><strong><em>默认值</em></strong></th><th><strong><em>类型</em></strong></th><th><strong><em>说明</em></strong></th></tr></thead><tbody><tr><td>target</td><td>是</td><td></td><td>any</td><td>目标对象</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("package/component/api/EventEmitter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
