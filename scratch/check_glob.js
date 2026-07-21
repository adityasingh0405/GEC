import { glob } from 'glob';
import path from 'path';

// Let's resolve the path relative to c:\Users\Aditya Singh\OneDrive\Desktop\GEC\src\styles
const baseDir = 'c:\\Users\\Aditya Singh\\OneDrive\\Desktop\\GEC\\src\\styles';
const pattern = path.join(baseDir, '../**/*.{js,jsx}');

console.log('Resolving pattern:', pattern);

try {
  const files = glob.sync(pattern);
  console.log('Total files found:', files.length);
  if (files.length > 0) {
    console.log('First 5 files:', files.slice(0, 5));
  }
} catch (err) {
  console.error('Error:', err.message);
}
