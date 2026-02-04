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

//Route
app.get("/books", (req, res) => {
  res.json(books)
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
