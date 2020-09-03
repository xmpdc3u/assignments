const http = require('http');

const routes = require('./routes');   //it's not a global module,add a local path to it by './'
//const serverHandle = require('./routes');

const server = http.createServer(routes);

server.listen(3000);
