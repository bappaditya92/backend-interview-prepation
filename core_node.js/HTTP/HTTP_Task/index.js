const http = require('node:http');

const server = http.createServer((req, res)=>{

})
server.listen(8000, ()=>{
    console.log('http server is running on 8000')
})