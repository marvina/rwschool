import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 1. Copy index.html
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));

// 2. Copy assets/
const srcAssets = path.join(__dirname, 'assets');
if (fs.existsSync(srcAssets)) {
  copyFolderSync(srcAssets, path.join(distDir, 'assets'));
}

// 3. Copy vendor/
const srcVendor = path.join(__dirname, 'vendor');
if (fs.existsSync(srcVendor)) {
  copyFolderSync(srcVendor, path.join(distDir, 'vendor'));
}

// 4. Copy public/
const srcPublic = path.join(__dirname, 'public');
if (fs.existsSync(srcPublic)) {
  copyFolderSync(srcPublic, distDir);
}

console.log('✅ 方案一（首页原型）静态资源构建完成 -> dist/');
