const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
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
app.use(customMiddleware);
//get all books
app.get("/books", (req, res) => {
  res.json(books);
});

//get book by id
app.get("/books/:id", customMiddleware,loggerMiddleware, (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((e) => e.id === id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `id must be of type number` });
  }
  if (!book) {
    return res.status(404).json({
      error: `Book with id ${id} is not found`,
    });
  }
  return res.status(200).json(book);
});

//create book
app.post("/books", (req, res) => {
  const { title, author, price, available } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: `title is required` });
  }
  if (!author || author === "") {
    return res.status(400).json({ error: `author is required` });
  }
  if (!price || price === "") {
    return res.status(400).json({ error: `price is required` });
  }
  if (!available || available === "") {
    return res.status(400).json({ error: `available is required` });
  }
  const id = books.length + 1;
  const book = { id, title, author, price, available };
  books.push(book);
  return res.status(201).json({ message: `Book created succesfully` });
});

//Delete book by id
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `id must be a number` });
  }
  const indexToDelete = books.findIndex((e) => e.id === id);
  if (indexToDelete < 0) {
    return res.status(404).json({ error: `Book with ${id} is not exist` });
  }
  books.splice(indexToDelete, 1);
  return res.status(200).json({ message: `Book deleted with the id ${id}` });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
