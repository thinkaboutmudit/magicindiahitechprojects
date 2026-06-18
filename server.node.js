import http from "http";
import fs from "fs";
import path from "path";
import mime from "mime";

import serverModule from "./dist/server/server.js";

const handler = (serverModule.default ?? serverModule);
const PORT = process.env.PORT || 3000;
const CLIENT_DIR = path.join(process.cwd(), "dist", "client");

async function toNodeResponse(response, res) {
  res.statusCode = response.status;
  response.headers.forEach((v, k) => res.setHeader(k, v));
  const buf = await response.arrayBuffer();
  res.end(Buffer.from(buf));
}

function getRawHeaders(req) {
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      for (const vv of v) headers.append(k, vv);
    } else {
      headers.set(k, v);
    }
  }
  return headers;
}

function tryServeStatic(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let filePath = path.join(CLIENT_DIR, decodeURIComponent(url.pathname.replace(/^\//, "")));
    if (url.pathname === "/") {
      filePath = path.join(CLIENT_DIR, "index.html");
    }
    if (!filePath.startsWith(CLIENT_DIR)) return false;
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const type = mime.getType(filePath) || "application/octet-stream";
      res.statusCode = 200;
      res.setHeader("content-type", type);
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      return true;
    }
  } catch (e) {
    console.error("Static serve error", e);
  }
  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    // Log request path for debugging
    try {
      const debugUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      console.log('HTTP', req.method, debugUrl.pathname);
    } catch (e) {
      console.log('HTTP', req.method, req.url);
    }

    // Serve static assets if present
    if (tryServeStatic(req, res)) return;

    const host = req.headers.host || `localhost:${PORT}`;
    const url = `http://${host}${req.url}`;
    const headers = getRawHeaders(req);

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length ? Buffer.concat(chunks) : undefined;

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    const response = await handler.fetch(request, {}, {});
    await toNodeResponse(response, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
