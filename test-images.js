// Simple script to verify image paths in the build
const fs = require('fs');
const path = require('path');

// Check if images directory exists in public
const imagesDir = path.join(__dirname, 'public', 'images');
console.log('Checking images directory:', imagesDir);

if (fs.existsSync(imagesDir)) {
  console.log('✓ Images directory exists');
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} images:`);
  files.forEach(file => {
    console.log(`  - ${file}`);
  });
} else {
  console.log('✗ Images directory does not exist');
}

// Check if dist directory exists after build
const distDir = path.join(__dirname, 'dist');
console.log('\nChecking dist directory:', distDir);

if (fs.existsSync(distDir)) {
  console.log('✓ Dist directory exists');
  
  // Check if assets directory exists
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    console.log('✓ Assets directory exists');
    const assetFiles = fs.readdirSync(assetsDir);
    console.log(`Found ${assetFiles.length} assets:`);
    assetFiles.forEach(file => {
      console.log(`  - ${file}`);
    });
  } else {
    console.log('⚠ Assets directory does not exist');
  }
  
  // Check if images directory exists in dist
  const distImagesDir = path.join(distDir, 'images');
  if (fs.existsSync(distImagesDir)) {
    console.log('✓ Dist images directory exists');
    const distImages = fs.readdirSync(distImagesDir);
    console.log(`Found ${distImages.length} images in dist:`);
    distImages.forEach(file => {
      console.log(`  - ${file}`);
    });
  } else {
    console.log('⚠ Dist images directory does not exist (this is normal if images are in assets)');
  }
} else {
  console.log('⚠ Dist directory does not exist (run npm run build first)');
}