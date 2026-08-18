import * as THREE from 'three';

/**
 * Creates a high-resolution Power-of-Two (2048 x 1024) Canvas Texture for a Project Card.
 * Mipmapping is explicitly disabled (generateMipmaps = false, minFilter = THREE.LinearFilter)
 * with 16x anisotropic filtering to permanently prevent WebGL downsampling collapse into tiny center dots
 * in the normal/unfocused camera state.
 */
export function createProjectCardTexture(project) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // 1. Background Fill (#111214)
  ctx.fillStyle = '#111214';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Card Outer Border (#333538)
  ctx.strokeStyle = '#333538';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

  // 3. Top Header Bar (BUILD ID & Category - 72px & 60px)
  ctx.font = 'bold 72px monospace';
  ctx.fillStyle = '#C8F36A';
  ctx.textAlign = 'left';
  ctx.fillText(project.buildId || 'BUILD_001', 90, 140);

  ctx.font = '600 60px monospace';
  ctx.fillStyle = '#A0A0A0';
  ctx.textAlign = 'right';
  ctx.fillText(project.category || 'CATEGORY', 1955, 140);

  // Divider Line below Header
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(90, 190);
  ctx.lineTo(1955, 190);
  ctx.stroke();

  // 4. Project Name (Large Bold Off-White - 160px)
  ctx.font = 'bold 160px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#F1F0EB';
  ctx.textAlign = 'left';
  ctx.fillText(project.name || 'PROJECT', 90, 390);

  // 5. Tagline Description (Wrapped 70px, Line Height 95px)
  ctx.font = '400 70px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#858887';

  const tagline = project.tagline || '';
  const words = tagline.split(' ');
  let line = '';
  let y = 510;
  const maxWidth = 1860;
  const lineHeight = 95;
  let lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, 90, y);
      line = words[i] + ' ';
      y += lineHeight;
      lineCount++;
      if (lineCount >= 2) break;
    } else {
      line = testLine;
    }
  }
  if (lineCount < 2) {
    ctx.fillText(line, 90, y);
  }

  // 6. Bottom Divider Line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(90, 820);
  ctx.lineTo(1955, 820);
  ctx.stroke();

  // 7. Footer: Tech Stack (60px) & EXPLORE Action (72px)
  const techText = project.techStack ? project.techStack.join('  ·  ') : '';
  ctx.font = '500 60px monospace';
  ctx.fillStyle = '#C0C0C0';
  ctx.textAlign = 'left';
  ctx.fillText(techText, 90, 920);

  ctx.font = 'bold 72px monospace';
  ctx.fillStyle = '#C8F36A';
  ctx.textAlign = 'right';
  ctx.fillText('EXPLORE →', 1955, 920);

  // Return THREE.CanvasTexture with Mipmapping OFF & 16x Anisotropic Filtering
  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
