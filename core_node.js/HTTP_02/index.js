const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log(`new request comming at [${Date.now().toString()}]`)
    console.log(req.headers);
    console.log(req.method)

    res.writeHead(201);
    res.end(`Hey, You can accept ${req.headers['accept-language']}`)
    

})

server.listen(8000, ()=>{
    console.log(`server is running on port 8000`);
    
})