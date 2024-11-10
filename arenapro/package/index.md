<script setup>
import '/style.css'
import axios from "axios";
import { marked } from "marked";
</script>
# 神岛npm包

为造福广大创作者能高效构建项目，欢迎各位创作者分享自己的工具包。助力其他创作者创作。

国内平台安装方式：
```bash
npm --registry=https://mirrors.cloud.tencent.com/npm/ i <package-name>
```
或在AP插件中，进入`Arena资源管理器`，找到`神岛NPM包`一项，可快速安装。


<div v-if="npmPackageList">
    <div v-for="item in npmPackageList" :key="item.name">
        <h2>
            <font id="API"></font>
            <a :href="item.links.npm" target="_blank" rel="noreferrer">{{item.name}}</a>
            <font id="Type">v{{item.version}}</font>
            <a class="header-anchor" :href="`#${item.name}`" aria-label="Permalink to &quot;<font id=&quot;API&quot; />[{{item.name}}]({{item.links.npm}})<font id=&quot;Type&quot;>v{{item.version}}</font>{#{{item.name}}}&quot;">&ZeroWidthSpace;</a>
        </h2>
        <ul>
            <li>第一作者：{{item.author.name}}</li>
            <li>最后更新：{{new Date(item.date).toLocaleString()}}</li>
        </ul>
        <div v-html="item.description"></div>
    </div>
</div>
<p v-else>加载npm包中...</p>



<script>

export default {
  data() {
    return {
      npmPackageList: null
    };
  },
  async created() {
      const response = await axios.get('https://api.box3lab.com/dao3lab/get_npm_packge', {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.npmPackageList = response.data.filter((item) => item.scope === 'dao3fun').map(item => ({
        ...item,
        description: marked.parse(item.description)
      }));
  }
};
</script>
