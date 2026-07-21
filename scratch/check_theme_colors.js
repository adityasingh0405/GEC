import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('dist/assets/index-5oA5zKLv.css', 'utf8');

function findMatches(pattern) {
  const regex = new RegExp(`[^\\s{}]*${pattern}[^\\s{}]*`, 'g');
  return [...new Set(content.match(regex))];
}

console.log('Matches for primary:', findMatches('primary'));
console.log('Matches for accent:', findMatches('accent'));
console.log('Matches for bg-primary:', findMatches('bg-primary'));
console.log('Matches for text-primary:', findMatches('text-primary'));
console.log('Matches for bg-accent:', findMatches('bg-accent'));
console.log('Matches for text-accent:', findMatches('text-accent'));
