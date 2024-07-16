const express = require("express");
const app = express();

// ada object request dan response, dan masing-masing memiliki methodnya sendiri
// seperti res.send() itu bisa menampilkan string, json, html
app.use((req, res) => {
  console.log("we got request!");
  // console.dir(req);
  // console.dir(res);
  // res.send("Hello World!");
  // res.send("<h1>Hello World!</h1>");
  res.send({ message: "Hello World!" });
  // res.status(200).send("Hello World!");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
