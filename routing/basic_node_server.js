const http = require('http');

// Creating a server object that will do this when it recieves a
// req (short for request from the client)
// properties of req are:
// 1. method (GET, POST, PUT, PATCH, DELETE) - our data operation type,
// 2. url (web address),
// 3. headers (how we are supposed to interpret the recieved data),
// 4. httpVersion (don't care much about this last param)
const server = http.createServer((req, res) => {
  // This stuff goes off after we send a request object from the client side
  console.log(req.url);   // => '/'
  console.log(req.method) // => 'GET'

  res.statusCode = 200; // set status code to successful 200

  // set content type (text/plain) (how our response data will be interpretted by the client)
  // content type can also be html, json, etc.
  res.setHeader('Content-Type', 'text/plain');

  // THIS IS OUR WRITTEN DATA, which is sent in the response
  res.write('Hello World');
  res.end(); // end response and send to client
})

// Listening address parameters
const hostname = "localhost" || "127.0.0.1"; // these strings represent local computer ip address
const port = 3000;

// Set our server to start listening at address specified by our port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
