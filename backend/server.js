import express from 'express';

//require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.listen(PORT,()=>{
    console.log(`application running on ${PORT}`); 
});