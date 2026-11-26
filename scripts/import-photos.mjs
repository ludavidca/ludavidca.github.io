// Bring new photos into the gallery.
//
//   npm run photos                       # reads ~/Desktop/Personal Website Photos
//   npm run photos -- "/path/to/folder"  # or any folder you name
//
// For each HEIC / JPG / PNG / WEBP not already imported, it writes
// src/assets/gallery/<name>.jpg: upright, at most 2400px on the long side, with
// all metadata (GPS location included) stripped. HEIC needs macOS (uses `sips`).
// Then it lists the new files so you can place them in src/data/gallery.ts.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const src = path.resolve(process.argv[2] ?? path.join(os.homedir(), 'Desktop', 'Personal Website Photos'));
const dest = path.resolve('src/assets/gallery');
const tmp = path.resolve('.tmp-photos');

if (!fs.existsSync(src)) {
  console.error(`No folder at ${src}`);
  process.exit(1);
}
fs.mkdirSync(dest, { recursive: true });
fs.mkdirSync(tmp, { recursive: true });

const slug = (f) => path.parse(f).name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '') + '.jpg';
const added = [];

for (const f of fs.readdirSync(src).sort()) {
  const ext = path.extname(f).toLowerCase();
  if (!['.heic', '.heif', '.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
  const out = path.join(dest, slug(f));
  if (fs.existsSync(out)) continue;

  let input = path.join(src, f);
  if (ext === '.heic' || ext === '.heif') {
    if (process.platform !== 'darwin') {
      console.warn(`skip ${f}: HEIC needs macOS (or export it as JPG first)`);
      continue;
    }
    const t = path.join(tmp, slug(f));
    execFileSync('sips', ['-s', 'format', 'jpeg', input, '--out', t], { stdio: 'ignore' });
    input = t;
  }

  await sharp(input)
    .rotate() // honour the camera's orientation, then drop the tag
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true }) // sharp writes no EXIF/GPS unless asked
    .toFile(out);
  added.push(path.basename(out));
  console.log(`added ${path.basename(out)}`);
}

fs.rmSync(tmp, { recursive: true, force: true });

if (added.length) {
  console.log(`\n${added.length} new photo(s). They already show at the end of the gallery.`);
  console.log('To place them, add lines like these to src/data/gallery.ts:\n');
  for (const a of added) console.log(`  ['${a}', 'Describe the photo'],`);
} else {
  console.log('Nothing new to import.');
}
