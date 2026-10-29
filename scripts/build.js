import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

process.env.VITE_CONFIG_NATIVE_IGNORE_WARNING = 'true';

console.log('🚀 [Build] 开始构建人文艺术学院官网五套方案整合网站...');

const schemes = [
  { id: '01', name: '方案一：现代学术综合门户 (首页原型)', dir: '01' },
  { id: '02', name: '方案二：现代学术综合门户 (React版)', dir: '02' },
  { id: '03', name: '方案三：典雅人文展览年刊', dir: '03' },
  { id: '04', name: '方案四：高定极简典雅风', dir: '04' },
  { id: '05', name: '方案五：高校规范全功能门户', dir: '05' }
];

// Helper: recursive copy
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

// Package manager build command (defaults to pnpm run build)
const buildCommand = process.env.BUILD_COMMAND || 'pnpm run build';

// 1. Build each subproject
for (const scheme of schemes) {
  console.log(`📦 正在构建 ${scheme.name} (${scheme.dir})...`);
  const schemeDir = path.join(rootDir, scheme.dir);
  try {
    execSync(buildCommand, {
      cwd: schemeDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        VITE_CONFIG_NATIVE_IGNORE_WARNING: 'true'
      }
    });
    console.log(`✅ ${scheme.name} 构建成功`);
  } catch (err) {
    console.error(`❌ ${scheme.name} 构建失败:`, err);
    process.exit(1);
  }
}

// 2. Prepare dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 3. Copy subprojects dist into dist/01, dist/02, etc.
for (const scheme of schemes) {
  const srcDist = path.join(rootDir, scheme.dir, 'dist');
  const targetDist = path.join(distDir, scheme.dir);
  if (fs.existsSync(srcDist)) {
    copyFolderSync(srcDist, targetDist);
    console.log(`📁 已复制 ${scheme.dir} 到输出目录`);
  } else {
    console.error(`❌ 未找到 ${srcDist}`);
    process.exit(1);
  }
}

// 4. Inlining JS and CSS into each scheme's index.html
// This guarantees it works 100% on BOTH file:// (direct double click) and https:// (Cloudflare Pages)
const floatingSwitcherScript = `
<script>
(function() {
  // If inside the portal iframe, hide floating switcher to prevent duplicate bars
  if (window.self !== window.top) {
    return;
  }

  // Detect current scheme
  const pathname = window.location.pathname;
  let cur = '01';
  if (pathname.includes('/02')) cur = '02';
  else if (pathname.includes('/03')) cur = '03';
  else if (pathname.includes('/04')) cur = '04';
  else if (pathname.includes('/05')) cur = '05';

  const menu = document.createElement('div');
  menu.id = 'standalone-scheme-dock';
  menu.innerHTML = \`
    <style>
      #standalone-scheme-dock {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .dock-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 9px 18px;
        background: rgba(15, 23, 42, 0.92);
        color: #f8fafc;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.6);
        cursor: pointer;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        font-size: 13.5px;
        font-weight: 600;
        transition: transform 0.2s ease, background 0.2s ease;
        user-select: none;
      }
      .dock-pill:hover {
        transform: translateY(-2px);
        background: #1e293b;
        border-color: rgba(99, 102, 241, 0.5);
      }
      .dock-badge {
        font-size: 11px;
        padding: 2px 7px;
        border-radius: 9999px;
        background: rgba(99, 102, 241, 0.3);
        color: #a5b4fc;
      }
      .dock-menu {
        position: absolute;
        bottom: calc(100% + 10px);
        right: 0;
        width: 250px;
        background: #0f172a;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.7);
        padding: 6px;
        display: none;
        flex-direction: column;
        gap: 4px;
      }
      .dock-menu.show {
        display: flex;
      }
      .dock-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        color: #94a3b8;
        font-size: 13px;
        text-decoration: none;
        border-radius: 6px;
        transition: all 0.15s ease;
      }
      .dock-item:hover {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
      }
      .dock-item.active {
        background: rgba(99, 102, 241, 0.2);
        color: #38bdf8;
        font-weight: 600;
      }
      .dock-divider {
        height: 1px;
        background: rgba(255, 255, 255, 0.08);
        margin: 4px 0;
      }
    </style>
    <div class="dock-menu" id="dock-menu">
      <a href="../index.html" class="dock-item">
        <span>🏛️ 返回汇报大厅</span>
        <span>&larr;</span>
      </a>
      <a href="../index.html#compare" class="dock-item">
        <span>📊 方案对比矩阵</span>
        <span>&rarr;</span>
      </a>
      <div class="dock-divider"></div>
      <a href="../01/index.html" class="dock-item \${cur === '01' ? 'active' : ''}">
        <span>方案 01 · 现代学术综合 (首页原型)</span>
      </a>
      <a href="../02/index.html" class="dock-item \${cur === '02' ? 'active' : ''}">
        <span>方案 02 · 现代学术综合 (React版)</span>
      </a>
      <a href="../03/index.html" class="dock-item \${cur === '03' ? 'active' : ''}">
        <span>方案 03 · 典雅人文年刊</span>
      </a>
      <a href="../04/index.html" class="dock-item \${cur === '04' ? 'active' : ''}">
        <span>方案 04 · 高定极简典雅</span>
      </a>
      <a href="../05/index.html" class="dock-item \${cur === '05' ? 'active' : ''}">
        <span>方案 05 · 高校规范全能</span>
      </a>
    </div>
    <div class="dock-pill" id="dock-toggle">
      <span>方案 \${cur}</span>
      <span class="dock-badge">切换方案 ▾</span>
    </div>
  \`;
  document.body.appendChild(menu);

  const toggle = document.getElementById('dock-toggle');
  const dMenu = document.getElementById('dock-menu');
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dMenu.classList.toggle('show');
  });
  document.addEventListener('click', () => {
    dMenu.classList.remove('show');
  });
})();
</script>
`;

for (const scheme of schemes) {
  const schemeDistDir = path.join(distDir, scheme.dir);
  const htmlFile = path.join(schemeDistDir, 'index.html');
  const assetsDir = path.join(schemeDistDir, 'assets');

  if (fs.existsSync(htmlFile)) {
    let content = fs.readFileSync(htmlFile, 'utf8');

    // Replace title
    content = content.replace(/<title>.*?<\/title>/i, `<title>${scheme.name} | 人文艺术学院官网改版</title>`);

    // Inlining CSS
    const cssFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir).filter(f => f.endsWith('.css')) : [];
    for (const cssName of cssFiles) {
      const cssContent = fs.readFileSync(path.join(assetsDir, cssName), 'utf8');
      const linkTagRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssName}["'][^>]*>`, 'i');
      if (linkTagRegex.test(content)) {
        content = content.replace(linkTagRegex, () => `<style>\n${cssContent}\n</style>`);
      } else {
        content = content.replace('</head>', () => `<style>\n${cssContent}\n</style>\n</head>`);
      }
    }

    // Inlining JS - must use callback function in .replace to prevent $ patterns in minified JS from corrupting HTML
    const jsFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir).filter(f => f.endsWith('.js')) : [];
    for (const jsName of jsFiles) {
      const jsContent = fs.readFileSync(path.join(assetsDir, jsName), 'utf8');
      const scriptTagRegex = new RegExp(`<script[^>]*src=["'][^"']*${jsName}["'][^>]*>\\s*<\\/script>`, 'i');
      if (scriptTagRegex.test(content)) {
        content = content.replace(scriptTagRegex, '');
      }
      if (content.includes('</body>')) {
        content = content.replace('</body>', () => `<script type="module">\n${jsContent}\n</script>\n</body>`);
      } else {
        content += `<script type="module">\n${jsContent}\n</script>`;
      }
    }

    // Special asset copying for scheme 05 (formerly 04)
    if (scheme.id === '05') {
      const logoInAssets = path.join(assetsDir, 'school-logo-yunOovs1.png');
      const logoInRoot = path.join(schemeDistDir, 'school-logo-yunOovs1.png');
      if (fs.existsSync(logoInAssets) && !fs.existsSync(logoInRoot)) {
        fs.copyFileSync(logoInAssets, logoInRoot);
      }
    }

    // Inject floating switcher before </body>
    if (content.includes('</body>')) {
      content = content.replace('</body>', () => `${floatingSwitcherScript}\n</body>`);
    } else {
      content += floatingSwitcherScript;
    }

    fs.writeFileSync(htmlFile, content, 'utf8');
    console.log(`💉 已成功将 CSS 与 JS 内联至 ${scheme.name} (${scheme.dir}/index.html)，支持无跨域零依赖直读`);
  }
}

// 5. Copy master portal index.html to dist/index.html
const portalIndexSrc = path.join(rootDir, 'portal', 'index.html');
const portalIndexDist = path.join(distDir, 'index.html');
if (fs.existsSync(portalIndexSrc)) {
  fs.copyFileSync(portalIndexSrc, portalIndexDist);
  console.log('🏛️ 已生成主汇报门户 dist/index.html');
} else {
  console.error('❌ 未找到 portal/index.html');
  process.exit(1);
}

// 6. Copy shared images & logos to dist root
const sharedAssets = [
  '01/assets/logo.png',
  '02/public/college-logo.png',
  '02/public/favicon.svg',
  '03/public/field-library.jpg',
  '03/public/hero-exhibition.jpg',
  '03/public/research-folk-art.jpg'
];

for (const relAsset of sharedAssets) {
  const src = path.join(rootDir, relAsset);
  const fileName = path.basename(relAsset);
  const dest = path.join(distDir, fileName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

// 7. Write Cloudflare Pages headers & redirects
const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

fs.writeFileSync(path.join(distDir, '_headers'), headersContent, 'utf8');

const robotsContent = `User-agent: *
Allow: /
`;
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf8');

console.log('☁️ 已生成 Cloudflare Pages _headers 与 robots.txt');

// 8. Print Summary
console.log('🎉 [Success] 网站合并与构建完成！输出目录: dist/');
console.log('✨ 部署指引:');
console.log('   - 无论是双击本地 dist/index.html 打开，还是在 Cloudflare Pages 线上部署，均可完美展示。');
