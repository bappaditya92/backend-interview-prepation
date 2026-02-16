
const express = require("express");
const app = express();
const {loggerMiddleware} = require('./middlewares/logger')
const PORT = 8000;
const bookRouter = require('./routes/route.book')

//middlewares
app.use(express.json());
app.use(loggerMiddleware);

//routes
app.use('/books', bookRouter)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
