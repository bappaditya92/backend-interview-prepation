const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log(`new request comming at [${Date.now().toString()}]`)
    console.log(req.headers);
    console.log(req.method)
    console.log(req.url)
    switch(req.url){
        case '/':
            res.writeHead(200);
            return res.end('Homepage')
            break
        case '/contact-us':
            res.writeHead(200)
            return res.end('contact me at bappadityasinha.92@gmail.com')
            break
        case '/about':
            res.writeHead(200)
            return res.end('I am software engineer')
            break
        default:
            res.writeHead(404)
            return res.end('You are lost');

    }

    res.writeHead(201);
    res.end(`Hey, You can accept ${req.headers['accept-language']}`)
    

})

server.listen(8000, ()=>{
    console.log(`server is running on port 8000`);
    
})