const http = require ('http');

const hostname ='127.0.0.1';
const port = 5500;

const server =  http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Olha o gordinho desenrolando')

});

server.listen(port,hostname,()=>{
    console.log("testando");
})