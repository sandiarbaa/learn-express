// setup express
const express = require("express"); // import framework express nya
const app = express(); // buat object express di dalam constant app

// memberikan response ketika port 8080 diakses
app.use(() => {
  console.log("we got request!");
});

// port nya akan menunggu atau mendengarkan ketika ada request
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

// NOTE :
// kalau mau tes, jalankan "node index.js"
// nanti di browser akan loading terus, karena kita buat ketika ada akses ke port 8080 hanya menampilkan console.log saja di terminal
// kalau ada perubahan di code nya, harus di jalankan lagi perintah "node index.js"
