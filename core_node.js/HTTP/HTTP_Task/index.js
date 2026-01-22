const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n [${Date.now()}: ${method} ${path}]`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("Hello from from server 👋");

          case "/contact-us":
            return res
              .writeHead(200)
              .end("Contact at bappadityasinha.92@gmail.com, phone: 77777777");

          case "/tweet":
            return res.writeHead(200).end("Tweet list");
        }
      }
      break;
    case "POST":
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Your tweet is being created");
      }
  }
  return res.writeHead(404).end("you are lost man");
});
server.listen(8000, () => {
  console.log(`http server is running on 8000`);
});
