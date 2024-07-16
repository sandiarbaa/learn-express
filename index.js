const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is homepage!");
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

// mengambil nilai dari route parameter
app.get("/blog/:judul", (req, res) => {
  console.log(req.params);
  const { judul } = req.params;
  res.send(`Tampilkan postingan dengan judul : <b>${judul}</b>`);
  console.log(judul);
});

// mengambil nilai dari route parameter
app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(
    `Blog dengan category : <b>${category}</b>, judul : <b>${judul}</b>, dan author : <b>${author}</b>`
  );
});

// mengambil nilai dari query string
app.get("/search", (req, res) => {
  // console.log(req.query); // jadi bisa mendapatkan beberapa properti sekaligus dari object query
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

// NOTE :
// jadi mengirimkan data di express js itu bisa dari route parameter nya dan juga dari query string
