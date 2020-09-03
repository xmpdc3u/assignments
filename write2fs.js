const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
const url = req.url;
const method=req.method;
if(url==='/')
{
    res.write('<html>');
    res.write('<head><title>My new page</title></head>'); 
    res.write('<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
 return res.end();
}
if(url==='/message'&& method==="POST"){ //iff POST method,coming from '/' url
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
    req.on('end',()=>{      //func to write to the file
        const parsdata= Buffer.concat(body).toString();     //coverts to string and stores into parsdata
        const message= parsdata.split('=')[1];      // console.log(parsdata),begin from index 1
        fs.writeFileSync('message.txt',message);
        
    });
//res.statusCode=302; //these steps are
res.setHeader('Location','/');  //used to 
//return res.end();       //loop between the /message and '/' pages.
console.log(req.url);
}
    res.setHeader('content-text','text/html');
    res.write('<html>');
    res.write('<head><title>My new page</title></head>'); 
    res.write('<body><h1>LETS DO IT</h1></body>');
    res.write('</html>');
    res.end();
    
});
 server.listen(8080);