const express = require("express"); //para requerir express
const app = express(); //ejecuto express que requeri arriba
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../public"))); //para requerir imagenes de public

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/home.html")); //para visualizar en el servidor
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
