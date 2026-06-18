const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const PORT = process.env.PORT || 5000;
const ROOT = path.join(process.cwd(), 'dist_static');

function sendFile(res, filePath) {
  const type = mime.getType(filePath) || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    const reqPath = decodeURIComponent(new URL(req.url, `http://localhost`).pathname);
    let filePath = path.join(ROOT, reqPath.replace(/^\//, ''));

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      sendFile(res, filePath);
      return;
    }

    // SPA fallback to index.html
    const indexPath = path.join(ROOT, 'index.html');
    if (fs.existsSync(indexPath)) {
      sendFile(res, indexPath);
      return;
    }

    res.writeHead(404);
    res.end('Not found');
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(PORT, () => {
  console.log(`Serving static SPA at http://localhost:${PORT}`);
});
