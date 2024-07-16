const express = require("express");
const app = express();

// URL TERDAFTAR
// kalau user mengakses route "/", akan diberikan response ini (default route)
app.get("/", (req, res) => {
  res.send("This is homepage!");
});

// kalau user mengaskes route "/cats", akan diberikan response ini
// LALU kalau misal ada request dengan method yang sama, misal ada 2 method GET, maka yang akan di ambil/dipakai/ditampilkan adalah method GET yang pertama
app.get("/cats", (req, res) => {
  res.send("This is cats page!");
});

// ini ga akan bentrok dengan yg di atas walaupun url nya sama, karena dari method nya saja sudah beda
app.post("/cats", (req, res) => {
  res.send("This is cats page from post!");
});

// kalau user mengaskes route "/about", akan diberikan response ini
app.get("/about", (req, res) => {
  res.send("This is about page!");
});

// ini akan memberikan response ketika user mencoba mengakses url yang tidak terdaftar
// dan ini harus berada di paling bawah ya, jangan coba-coba di letakkan di atas, karena nanti akan mere-place atau meng-overwrite semua route yang ada
app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
