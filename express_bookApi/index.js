const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;

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
app.use(express.json());

//Route
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
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


app.post("/books", (req, res) => {
  const { title, author,price,available } = req.body;
  if(!title || title === ''){
    return res.status(400).json({error: `title is required`})
  }
  if(!author || author===''){
    return res.status(400).json({error:`author is required`})
  }
  if(!price || price===''){
    return res.status(400).json({error:`price is required`})
  }
  if(!available || available===''){
    return res.status(400).json({error:`available is required`})
  }

  const id = books.length + 1;
  const book = {id, title, author,price, available}
  books.push(book);

  return res.status(201).json({ message: `Book created succesfully` });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
