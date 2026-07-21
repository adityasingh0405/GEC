import fs from 'fs';

const content = fs.readFileSync('dist/assets/index-5oA5zKLv.css', 'utf8');

function findMatches(pattern) {
  const regex = new RegExp(`[^\\s{}]*${pattern}[^\\s{}]*`, 'g');
  return [...new Set(content.match(regex))];
}

console.log('Matches for bg-[:', findMatches('bg-\\['));
console.log('Matches for text-[:', findMatches('text-\\['));
console.log('Matches for border-[:', findMatches('border-\\['));
