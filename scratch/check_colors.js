import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('dist/assets/index-5oA5zKLv.css', 'utf8');

function findMatches(pattern) {
  const regex = new RegExp(`[^\\s{}]*${pattern}[^\\s{}]*`, 'g');
  return [...new Set(content.match(regex))];
}

console.log('Matches for navy-800:', findMatches('navy-800'));
console.log('Matches for gold-500:', findMatches('gold-500'));
console.log('Matches for navy:', findMatches('navy'));
console.log('Matches for gold:', findMatches('gold'));
