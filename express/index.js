const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.end('app is running')
});

app.get('/contact-us', (req,res)=>{
    res.end('you can contact me with my email address')
})

app.post('/tweets', (req,res)=>{
    res.status(201).end('Tweet created successfully')
})

app.listen(3000, ()=>{
    console.log(`app is running on 3000`)
})