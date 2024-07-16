// Setup Framework Express
const express = require("express");
const app = express();

// URL Terdaftar
app.get("/", (req, res) => {
  res.send("<h1>This is homepage with h1</h1>");
});

app.get("/cats", (req, res) => {
  res.send("This is cats page!");
});

app.post("/cats", (req, res) => {
  res.send("This is cats page from post!");
});

app.get("/about", (req, res) => {
  res.send("This is about page!");
});

app.get("/blog/:judul", (req, res) => {
  console.log(req.params);
  const { judul } = req.params;
  res.send(`Tampilkan postingan dengan judul : <b>${judul}</b>`);
  console.log(judul);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(
    `Blog dengan category : <b>${category}</b>, judul : <b>${judul}</b>, dan author : <b>${author}</b>`
  );
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("<h1>Search keyword not found!</h1>");
  }
  res.send(`Search keyword: ${q}`);
});

app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
