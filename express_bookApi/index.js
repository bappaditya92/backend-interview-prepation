const express = require('express')

const app = express();

const PORT = 8000;


app.get('/', (req, res)=>{
    res.end('server is running...');
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})