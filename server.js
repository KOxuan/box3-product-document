const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 9966;

// 静态文件服务配置
const staticOptions = {
  maxAge: '1d', // 缓存1天
  etag: false,
  lastModified: false
};

// 直接 serve dist 目录，自动映射所有子目录
app.use(express.static(path.join(__dirname, 'dist'), staticOptions));

// 动态读取 dist 目录下的项目
const distPath = path.join(__dirname, 'dist');
let projects = [];
try {
  if (fs.existsSync(distPath)) {
    projects = fs.readdirSync(distPath)
      .filter(item => fs.statSync(path.join(distPath, item)).isDirectory());
  }
} catch (err) {
  console.warn('Warning: Could not read dist directory:', err.message);
}

// SPA fallback - 为每个项目处理路由
projects.forEach(project => {
  app.get(`/${project}/*`, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', project, 'index.html'));
  });
});

// 根路径重定向到主页面（可以选择一个默认项目）
app.get('/', (req, res) => {
  const defaultProject = projects.length > 0 ? projects[0] : 'api';
  res.redirect(`/${defaultProject}`);
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 处理
app.use((req, res) => {
  const projectLinks = projects.map(project => 
    `<li><a href="/${project}">/${project}</a></li>`
  ).join('');
  
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>Available projects:</p>
    <ul>
      ${projectLinks}
    </ul>
  `);
});

// 错误处理
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Documentation server running on port ${port}`);
  console.log('Available routes:');
  projects.forEach(project => {
    console.log(`  /${project} -> dist/${project}`);
  });
});
