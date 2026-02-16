const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
const bookRouter = require('./routes/route.book')


function loggerMiddleware(req, res, next) {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("logs.txt", log, "utf-8");
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
