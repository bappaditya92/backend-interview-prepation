const http = require("http");

const server = http.createServer((req,res)=>{
    // res.send('I got a incoming request')
    console.log("I got a incoming request")
    res.writeHead(200);
    res.end("Thanks for visiting my server")

});

server.listen(8080,()=>{
    console.log(`server is listening on port 8080`);
    
})
