const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080; // You can choose any port

const server = http.createServer((req, res) => {
  const filePath = req.url === '/' ? '/index.html' : req.url; // Default to index.html
  const absolutePath = path.join(__dirname, filePath);

  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' }); // Or appropriate content type
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});