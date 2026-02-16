const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
const bookRouter = require('./routes/route.book')
//In memory database

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 450,
    available: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 350,
    available: true,
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 550,
    available: false,
  },
];
//middleware(plugins)

// app.use(function (req, res, next) {
//   console.log("I am Middleware A");
//   return res.json({ message: "I am a middleware A" });
//   next();
// });

// app.use(function(req,res,next){
//   console.log('i am from middleware B')
//   res.json({message: 'I am from middleare B'});
//   next();
// })

function loggerMiddleware(req, res, next) {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("logs.txt", log, "utf-8");
  next();
}

function customMiddleware(req, res, next) {
  console.log('I am a custom middleware')
  next();
}

app.use(express.json());
app.use(loggerMiddleware);

app.use('/books', bookRouter)


//get all books

//get book by id


app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
