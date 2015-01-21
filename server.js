/**
 * server.js
 *
 * A simple node server using Express.
 *
 */
var http    = require('http');
var path    = require('path');
var express = require('express');

/**
 * app.js
 *
 * Creates a new instance of server with the following options:
 *
 * `port` - The HTTP port to listen on. 
 * If `process.env.PORT` is set, _it overrides this value_.
 *
 */
var router = express();
var server = http.createServer(router);

//-- Serve angular client static content
router.use(express.static(path.resolve(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("SNAP - server listening at", addr.address + ":" + addr.port);
});
