import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./public/plants');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate a generic plant SVG with different colors/shapes
function generateSVG(name, potColor, plantColor, shapeType) {
  const bg = '#f4f9f4';
  let plantElement = '';
  
  if (shapeType === 'tall') {
    plantElement = `<path d="M50 85 Q 40 40 50 15 Q 60 40 50 85" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />
                    <path d="M45 85 Q 25 50 35 25 Q 50 50 45 85" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />
                    <path d="M55 85 Q 75 50 65 25 Q 50 50 55 85" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />`;
  } else if (shapeType === 'round') {
    plantElement = `<circle cx="50" cy="45" r="25" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />
                    <circle cx="35" cy="65" r="15" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />
                    <circle cx="65" cy="65" r="15" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />`;
  } else if (shapeType === 'flower') {
    plantElement = `<path d="M50 80 L 50 40" stroke="#2E8B57" stroke-width="4" />
                    <circle cx="50" cy="40" r="22" fill="${plantColor}" stroke="#fff" stroke-width="3" />
                    <circle cx="50" cy="40" r="8" fill="#FFD700" />
                    <path d="M50 70 Q 30 65 35 50" stroke="#2E8B57" stroke-width="4" fill="none" />
                    <path d="M50 60 Q 70 55 65 40" stroke="#2E8B57" stroke-width="4" fill="none" />`;
  } else if (shapeType === 'trailing') {
    plantElement = `<path d="M25 80 Q 20 100 25 115" stroke="${plantColor}" stroke-width="6" fill="none" />
                    <circle cx="25" cy="90" r="5" fill="${plantColor}" />
                    <circle cx="23" cy="105" r="5" fill="${plantColor}" />
                    <path d="M75 80 Q 80 100 75 115" stroke="${plantColor}" stroke-width="6" fill="none" />
                    <circle cx="75" cy="95" r="5" fill="${plantColor}" />
                    <circle cx="77" cy="110" r="5" fill="${plantColor}" />
                    <path d="M50 85 Q 50 50 50 35" stroke="${plantColor}" stroke-width="20" stroke-linecap="round" />`;
  } else {
    // generic big leaf
    plantElement = `<path d="M50 85 C 10 70 10 20 50 10 C 90 20 90 70 50 85" fill="${plantColor}" stroke="#1e5c3a" stroke-width="2" />
                    <path d="M50 85 L 50 15" stroke="#1e5c3a" stroke-width="2" fill="none" />`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
    <rect width="100" height="120" fill="${bg}" />
    <!-- Plant -->
    ${plantElement}
    <!-- Pot -->
    <polygon points="35,80 65,80 60,110 40,110" fill="${potColor}" />
    <rect x="30" y="75" width="40" height="8" fill="${potColor}" rx="3" />
    <!-- Label subtle text -->
    <text x="50" y="116" font-family="sans-serif" font-size="5" text-anchor="middle" fill="#000" opacity="0.4">${name}</text>
  </svg>`;
}

const plants = [
  { file: 'snake-plant.svg', type: 'tall', p: '#FF7F50', c: '#2E8B57' },
  { file: 'spider-plant.svg', type: 'trailing', p: '#D2B48C', c: '#8FBC8F' },
  { file: 'peace-lily.svg', type: 'flower', p: '#8B4513', c: '#FFF' },
  { file: 'zz-plant.svg', type: 'round', p: '#A0522D', c: '#006400' },
  { file: 'monstera.svg', type: 'generic', p: '#CD853F', c: '#228B22' },
  { file: 'rubber-plant.svg', type: 'tall', p: '#DEB887', c: '#556B2F' },
  
  { file: 'aloe-vera.svg', type: 'tall', p: '#F4A460', c: '#9ACD32' },
  { file: 'jade-plant.svg', type: 'round', p: '#B8860B', c: '#6B8E23' },
  { file: 'echeveria.svg', type: 'flower', p: '#CD5C5C', c: '#8FBC8F' },
  { file: 'zebra-plant.svg', type: 'tall', p: '#808000', c: '#556B2F' },
  { file: 'string-of-pearls.svg', type: 'trailing', p: '#D2691E', c: '#9ACD32' },
  { file: 'burros-tail.svg', type: 'trailing', p: '#DAA520', c: '#6B8E23' },
  
  { file: 'african-violet.svg', type: 'flower', p: '#BC8F8F', c: '#9370DB' },
  { file: 'orchid.svg', type: 'flower', p: '#F0E68C', c: '#DA70D6' },
  { file: 'anthurium.svg', type: 'flower', p: '#BDB76B', c: '#DC143C' },
  { file: 'begonia.svg', type: 'round', p: '#CD853F', c: '#C71585' },
  { file: 'christmas-cactus.svg', type: 'trailing', p: '#A0522D', c: '#FF69B4' },
  { file: 'hibiscus.svg', type: 'flower', p: '#8B4513', c: '#FF4500' },
];

for (const p of plants) {
  const content = generateSVG(p.file.replace('.svg', ''), p.p, p.c, p.type);
  fs.writeFileSync(path.join(outDir, p.file), content);
}
console.log('Successfully created 18 SVGs');
