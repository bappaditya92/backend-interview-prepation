const http = require("http");

const server = http.createServer();

server.listen(8000,()=>{
    console.log(`server is listening on port 8000`);
    
})
