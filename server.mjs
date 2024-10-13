import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'fs';
import { URL } from 'url';

const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;

  if (pathname === '/') {
    // Read the index.html file and send it as the response
    const indexPath = 'index.html'; // Adjust the path if needed
    const indexContent = readFileSync(indexPath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexContent);
  } else {
    // Handle static file requests
    const filePath = '.' + pathname; // Adjust the path if needed
    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath);
      const contentType = getContentType(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(fileContent);
    } else {
      // Handle other requests (e.g., API endpoints)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found\n');
    }
  }
});

function getContentType(filePath) {
  const ext = filePath.split('.').pop();
  const mimeTypes = {
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    // Add more mime types as needed
  };
  return mimeTypes[ext] || 'text/plain';
}

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`