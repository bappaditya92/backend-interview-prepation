import express from "express";
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get('/api/books', (req, res) => {
  const books = [
    {
      id: 1,
      name: "Atomic Habits",
      author: "James Clear",
    },
    {
      id: 2,
      name: "The Alchemist",
      author: "Paulo Coelho",
    },
    {
      id: 3,
      name: "Clean Code",
      author: "Robert C. Martin",
    },
    {
      id: 4,
      name: "Deep Work",
      author: "Cal Newport",
    },
    {
      id: 5,
      name: "Think Like a Monk",
      author: "Jay Shetty",
    },
    {
      id: 6,
      name: "The Pragmatic Programmer",
      author: "Andrew Hunt",
    },
    {
      id: 7,
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
    },
    {
      id: 8,
      name: "You Don’t Know JS",
      author: "Kyle Simpson",
    },
    {
      id: 9,
      name: "Zero to One",
      author: "Peter Thiel",
    },
    {
      id: 10,
      name: "The Power of Now",
      author: "Eckhart Tolle",
    },
  ];
  res.send(books);
});

app.listen(PORT, () => {
  console.log(`application running on ${PORT}`);
});
