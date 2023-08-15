// Create web server
var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  if (path === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

// Start web server
server.listen(8000);
console.log('Server running at http://localhost:8000/');