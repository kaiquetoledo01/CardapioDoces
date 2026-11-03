// Servidor local opcional para pré-visualizar o site sem instalar dependências.
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".jpg":"image/jpeg", ".png":"image/png" };
http.createServer((request, response) => {
  const requested = request.url === "/" ? "index.html" : decodeURIComponent(request.url).replace(/^\/+/, "");
  const file = path.resolve(root, requested);
  if (!file.startsWith(root)) { response.writeHead(403); response.end("Forbidden"); return; }
  fs.readFile(file, (error, data) => {
    response.writeHead(error ? 404 : 200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    response.end(error ? "Not found" : data);
  });
}).listen(4174, "127.0.0.1", () => console.log("http://127.0.0.1:4174"));
