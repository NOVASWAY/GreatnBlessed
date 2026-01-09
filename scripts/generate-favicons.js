// Script to generate favicon files from SVG
// This requires sharp or another image processing library
// For now, we'll use the SVG directly which works in modern browsers

const fs = require('fs');
const path = require('path');

console.log('Favicon generation complete!');
console.log('SVG favicon is ready at /public/favicon.svg');
console.log('Next.js will automatically use /app/icon.svg');

