const fs = require('fs');
const path = require('path');

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function buildStatic() {
  const clientDir = path.join(process.cwd(), 'dist', 'client');
  const outDir = path.join(process.cwd(), 'dist_static');
  if (!fs.existsSync(clientDir)) {
    console.error('dist/client not found — run `npm run build` first');
    process.exit(1);
  }

  // Clean outDir
  if (fs.existsSync(outDir)) {
    await fs.promises.rm(outDir, { recursive: true, force: true });
  }
  await fs.promises.mkdir(outDir, { recursive: true });

  // Copy everything from dist/client
  await copyDir(clientDir, outDir);

  const assetsDir = path.join(outDir, 'assets');
  const files = fs.existsSync(assetsDir) ? await fs.promises.readdir(assetsDir) : [];

  // Find CSS files and JS entry files
  const cssFiles = files.filter((f) => f.endsWith('.css'));
  const jsFiles = files.filter((f) => f.endsWith('.js'));

  // Prefer index-*.js ordering: smaller name first
  jsFiles.sort();

  const cssLinks = cssFiles
    .map((f) => `<link rel="stylesheet" href="assets/${f}" />`)
    .join('\n    ');

  const jsScripts = jsFiles
    .map((f) => `<script type="module" src="assets/${f}"></script>`)
    .join('\n    ');

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Magic India Hitech Projects</title>
    ${cssLinks}
  </head>
  <body>
    <div id="root"></div>
    ${jsScripts}
  </body>
</html>`;

  await fs.promises.writeFile(path.join(outDir, 'index.html'), indexHtml, 'utf8');

  console.log('Static site generated at', outDir);
}

buildStatic().catch((err) => {
  console.error(err);
  process.exit(1);
});
