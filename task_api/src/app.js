const express = require('express');
const app = express();
app.use(express.json())

const notes = [];

app.post('/notes', (req,res)=>{
   //res.end('from create notes api');
   console.log(req.body)
})

module.exports = app;