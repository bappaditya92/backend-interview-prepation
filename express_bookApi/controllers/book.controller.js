const { BOOKS } = require("../models/book");
exports.getAllBooks = function (req, res) {
  res.json(BOOKS);
};

exports.getAllBooksById = function (req, res) {
  const id = parseInt(req.params.id);
  const book = BOOKS.find((e) => e.id === id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `id must be of type number` });
  }
  if (!book) {
    return res.status(404).json({
      error: `Book with id ${id} is not found`,
    });
  }
  return res.status(200).json(book);
};

exports.createBook = function (req, res) {
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
  const id = BOOKS.length + 1;
  const book = { id, title, author, price, available };
  BOOKS.push(book);
  return res.status(201).json({ message: `Book created succesfully` });
};

exports.deleteBookById = function (req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `id must be a number` });
  }
  const indexToDelete = BOOKS.findIndex((e) => e.id === id);
  if (indexToDelete < 0) {
    return res.status(404).json({ error: `Book with ${id} is not exist` });
  }
  BOOKS.splice(indexToDelete, 1);
  return res.status(200).json({ message: `Book deleted with the id ${id}` });
};
