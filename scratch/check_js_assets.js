import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('dist/assets');
const files = fs.readdirSync(assetsDir);
const jsFiles = files.filter(f => f.endsWith('.js'));

console.log('Searching in JS files...');
jsFiles.forEach(file => {
  const filePath = path.join(assetsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('bg-[#') || content.includes('#1E3A5F') || content.includes('1E3A5F')) {
    console.log(`Found match in file: ${file}`);
    // Print a small sample around the match
    const idx = content.indexOf('1E3A5F');
    console.log('Context:', content.substring(Math.max(0, idx - 40), Math.min(content.length, idx + 40)));
  }
});
