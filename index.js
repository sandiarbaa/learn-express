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

// domain.com/blog/judul-berita
// domain.com/blog/akan-berubah-dinamis-sesuai-judul
// domain.com/blog/tapi-url-awalnya-tetap-sama
// domain.com/blog/misalnya-blog-kaya-gini
// jadi setelah url response utamanya, misal di sini contohnya itu blog, maka itu akan menjadi path/variabel/parameter
// dan karena parameter itu termasuknya ke dalam request, maka dia harus di tangkap menggunakan object request, biasanya ada di dalam object req.params
app.get("/blog/:judul", (req, res) => {
  console.log(req.params); // params ini adalah object yang akan berisi si parameternya sebagai object juga
  // console.log(req.params.judul);
  // res.send("Ini halaman blog!");

  const { judul } = req.params;

  res.send(`Tampilkan postingan dengan judul : <b>${judul}</b>`);
  console.log(judul);
});

// ini ternyata kalau mau di implementasi semua variabel parameter path ini harus wajib ada di setiap route nya, kalau salah 1 nya tidak terisi maka akan error dan akan di tangani oleh route "*"
app.get("/blog/:category/:judul/:author", (req, res) => {
  // console.log(req.params);
  // res.send("This blog page!");

  const { category, judul, author } = req.params;
  res.send(
    `Blog dengan category : <b>${category}</b>, judul : <b>${judul}</b>, dan author : <b>${author}</b>`
  );
});

// MANFAAT MEMPELAJARI ROUTE PARAMETER DI EXPRESS JS
// route dengan parameter ini bisa dimanfaatkan untuk fitur :
// - update data sesuai id
// - delete data sesuai id
// - filterin data tertentu sesuao parameter yang dikirimkan

app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
