const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // set status code to successful 200
  res.setHeader('Content-Type', 'text/plain');

  let sentData = "";
  if(req.url === '/wonderland') {
    sentData += "Welcome to Wonderland!";
  } else {
    sentData += "Hello World";
  }
  res.write(sentData);
  res.end();
})

// Listening address parameters
const hostname = "localhost" || "127.0.0.1"; // these strings represent local computer ip address
const port = 3000;

// Set our server to start listening at address specified by our port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
