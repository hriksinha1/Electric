import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const mode = process.argv[2];
let failed = false;
const fail = (m) => {
  console.error('✖ ' + m);
  failed = true;
};

const walk = (d) => {
  if (!existsSync(d)) return [];
  return readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
};

// The one deliberate reference: the pre-rebrand cart storage key that useCart deletes.
const ALLOWED = /homedine-cart-v1/g;
const scrub = (s) => s.replace(ALLOWED, '');
const BANNED = /homedine|kitchenware|eco-friendly|bamboo|cookware|ceramic|rice ?cooker|dutch oven|cupeco|ecospoonery|naturesip|freshpitcher|glasskeep|oasisteam/i;

if (mode === '--source') {
  const files = [...walk('src'), 'index.html', 'README.md', 'metadata.json'].filter((f) =>
    /\.(tsx?|css|html|md|json)$/.test(f)
  );
  for (const f of files) {
    const s = readFileSync(f, 'utf8');
    if (BANNED.test(scrub(s))) fail(`${f}: stale brand or kitchenware text`);
    if (f !== 'index.html' && /['"`]\/src\/assets\//.test(s))
      fail(`${f}: string path to /src/assets (import the file instead)`);
  }
}

if (mode === '--dist') {
  if (!existsSync('dist')) {
    fail('dist/ missing');
    process.exit(1);
  }
  const files = walk('dist');
  for (const f of files.filter((x) => /\.(html|js|css)$/.test(x))) {
    const s = readFileSync(f, 'utf8');
    if (/\/src\/assets\//.test(s)) fail(`${f}: unresolved /src/assets path in build output`);
    if (BANNED.test(scrub(s))) fail(`${f}: stale brand or kitchenware text in build output`);
  }
  if (files.some((f) => f.includes('aistudio')))
    fail('dist contains design files from public/assets/aistudio');

  for (const f of files.filter((x) => x.endsWith('.js'))) {
    const s = readFileSync(f, 'utf8');
    for (const m of s.matchAll(/["'`](\/assets\/[\w.\-]+\.(?:webp|avif|jpe?g|png|svg))["'`]/g)) {
      if (!existsSync(join('dist', m[1]))) fail(`${f}: references missing ${m[1]}`);
    }
  }
  for (const f of files.filter((x) => /\.(webp|avif|jpe?g|png|svg)$/.test(x))) {
    const kb = statSync(f).size / 1024;
    const limit = f.includes('hero') ? 450 : 350;
    if (kb > limit) console.warn(`⚠ ${f} is ${kb | 0} KB (target ≤ ${limit} KB)`);
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log(`✔ verify.mjs ${mode} passed cleanly.`);
  process.exit(0);
}
