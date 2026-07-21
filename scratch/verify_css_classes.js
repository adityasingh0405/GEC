import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('dist/assets');
const files = fs.readdirSync(cssPath);
const cssFile = files.find(f => f.endsWith('.css'));

if (!cssFile) {
  console.error('No CSS file found in dist/assets!');
  process.exit(1);
}

const content = fs.readFileSync(path.join(cssPath, cssFile), 'utf8');

const classesToCheck = [
  'flex',
  'grid',
  'text-white',
  'font-display',
  'bg-\\[\\#1E3A5F\\]',
  'text-\\[\\#1E3A5F\\]',
  'px-4',
  'sm:px-6',
  'lg:px-8',
  'justify-between',
  'items-center',
  'rounded-lg'
];

console.log('Checking CSS file:', cssFile);
console.log('Total length:', content.length);

classesToCheck.forEach(cls => {
  const regex = new RegExp(cls);
  console.log(`Class "${cls}" present?`, regex.test(content));
});
