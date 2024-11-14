<script setup>
import '/style.css'
import axios from "axios";
</script>
# API代码片段

为提升编码速度，我们增加了代码片段功能，只需键入API关键字，即可快速选择代码模板，减少重复编写。


![](https://static.codemao.cn/pickduck/SkeQfDQfye.gif?hash=FiJE1_mjcLSFSBO8qbbE_DPJnuuQ)


:::info
创作者皆可参与引擎API代码片段的贡献，具体请看：[https://gitee.com/box3lab/arena_dts](https://gitee.com/box3lab/arena_dts)

代码转代码片段配置：[https://snippet-generator.app/](https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode)
:::


<div v-if="snippetsList">
    <div v-for="item in snippetsList" :key="item.description">
        <h2>
            <font id="API"></font>
            {{item.prefix}}
            <font id="Type">{{item.description}}</font>
            <a class="header-anchor" :href="`#${item.prefix}`" ></a>
        </h2>
        <pre v-highlightjs><code class="typescript">{{item.body.join("\n")}}</code></pre>
    </div>
    
</div>
<p v-else>加载代码片段中...</p>



<script>

export default {
  data() {
    return {
      snippetsList: null
    };
  },
  async created() {
    const response = await axios.get('https://api.box3lab.com/dao3lab/get-dao3-typescript-snippets', {
    headers: {
      "Content-Type": "application/json",
    }});
    this.snippetsList=response.data;
  }
};
</script>




