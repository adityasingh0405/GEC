import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Load environment variables
dotenv.config();

// Resolve paths for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_FILE = path.join(__dirname, '../src/content/gallery.json');

/**
 * Format filename into clean title & alt string.
 * Example: "sports_day_2025.jpg" -> "Sports Day 2025"
 * Example: "summer-program-01.png" -> "Summer Program 01"
 */
function formatTitle(filename) {
  // Remove extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  // Replace underscores and hyphens with spaces
  const withSpaces = nameWithoutExt.replace(/[-_]/g, ' ');
  // Capitalize every word
  return withSpaces
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function generateGallery() {
  console.log('🖼️  Starting ImageKit gallery generation...\n');

  // Check required credentials
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    console.error('❌ Error: Missing required ImageKit environment variables in .env file.');
    console.error('   Please ensure IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT are set.');
    process.exit(1);
  }

  // 2. Initialize ImageKit SDK
  let imagekit;
  try {
    imagekit = new ImageKit({
      publicKey,
      privateKey,
      urlEndpoint
    });
  } catch (err) {
    console.error('❌ Error initializing ImageKit SDK:', err.message || err);
    process.exit(1);
  }

  let allFiles = [];
  try {
    let skip = 0;
    const limit = 100;
    let hasMore = true;

    // 3. Fetch all images recursively via pagination
    while (hasMore) {
      const batch = await imagekit.listFiles({
        skip,
        limit,
        fileType: 'image'
      });

      if (Array.isArray(batch)) {
        allFiles.push(...batch);
        if (batch.length < limit) {
          hasMore = false;
        } else {
          skip += limit;
        }
      } else {
        hasMore = false;
      }
    }
  } catch (err) {
    console.error('❌ Error connecting to ImageKit API:', err.message || err);
    console.error('   Writing empty gallery.json fallback...');

    // If API fails, create empty gallery.json to prevent build crash
    try {
      fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf-8');
    } catch (e) {
      console.error('❌ Failed to write fallback gallery.json:', e.message);
    }
    process.exit(1);
  }

  const galleryItems = [];

  // 4. Process files and extract categories from /f_downloads (or /f_downlods)
  for (const file of allFiles) {
    if (!file.filePath) continue;

    // Split path into parts, e.g. ["f_downloads", "Farewell", "photo.jpg"]
    const parts = file.filePath.split('/').filter(Boolean);

    // Ensure image is inside /f_downloads or /f_downlods subfolder
    if (parts.length < 3) continue;

    const rootFolder = parts[0].toLowerCase();
    // Match /f_downloads or /f_downlods
    if (!rootFolder.startsWith('f_download') && !rootFolder.startsWith('f_downlod')) {
      continue;
    }

    const category = parts[1];

    // 5. IGNORE FACULTY FOLDER COMPLETELY
    if (category.toLowerCase() === 'faculty') {
      continue;
    }

    const rawUrl = file.url || `${urlEndpoint.replace(/\/$/, '')}/${file.filePath.replace(/^\//, '')}`;
    const cleanSrc = rawUrl.split('?')[0];
    const title = formatTitle(file.name);

    galleryItems.push({
      id: file.fileId || file.name,
      title,
      alt: title,
      category,
      src: cleanSrc
    });
  }

  // 6. SORTING: Sort categories alphabetically (with Misc always last), then images alphabetically inside each category
  galleryItems.sort((a, b) => {
    const aIsMisc = a.category.toLowerCase() === 'misc';
    const bIsMisc = b.category.toLowerCase() === 'misc';
    if (aIsMisc && !bIsMisc) return 1;
    if (!aIsMisc && bIsMisc) return -1;

    const categoryCompare = a.category.localeCompare(b.category);
    if (categoryCompare !== 0) return categoryCompare;
    return a.title.localeCompare(b.title);
  });

  // 7. Save to src/content/gallery.json
  try {
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(galleryItems, null, 2), 'utf-8');
    console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
    console.log(`📊 Total images processed: ${galleryItems.length}`);
    const categoriesFound = Array.from(new Set(galleryItems.map(item => item.category)));
    console.log(`📁 Categories generated (${categoriesFound.length}):`, categoriesFound.join(', '));
  } catch (err) {
    console.error('❌ Error writing gallery.json file:', err.message || err);
    process.exit(1);
  }
}

generateGallery();
