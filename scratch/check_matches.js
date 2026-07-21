import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('dist/assets/index-5oA5zKLv.css', 'utf8');

function findMatches(pattern) {
  const regex = new RegExp(`[^\\s{}]*${pattern}[^\\s{}]*`, 'g');
  return [...new Set(content.match(regex))];
}

console.log('Matches for px-4:', findMatches('px-4'));
console.log('Matches for sm:px-6:', findMatches('sm\\\\:px-6'));
console.log('Matches for bg-\\[\\#1E3A5F\\]:', findMatches('bg-\\[\\#1E3A5F\\]'));
console.log('Matches for text-\\[\\#1E3A5F\\]:', findMatches('text-\\[\\#1E3A5F\\]'));
