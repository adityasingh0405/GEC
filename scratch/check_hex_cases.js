import fs from 'fs';

const content = fs.readFileSync('dist/assets/index-5oA5zKLv.css', 'utf8');

function findMatches(pattern) {
  const regex = new RegExp(`[^\\s{}]*${pattern}[^\\s{}]*`, 'g');
  return [...new Set(content.match(regex))];
}

console.log('Matches for 1e3a5f (lowercase):', findMatches('1e3a5f'));
console.log('Matches for c8972b (lowercase):', findMatches('c8972b'));
console.log('Matches for 1E3A5F (uppercase):', findMatches('1E3A5F'));
console.log('Matches for C8972B (uppercase):', findMatches('C8972B'));
