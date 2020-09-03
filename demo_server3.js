const http = require('http');
const server = http.createServer((rq,rs)=>{
    console.log(rq);
    //process.exit();
;})
server.listen(3000);