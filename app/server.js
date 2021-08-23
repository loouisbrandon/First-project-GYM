const express = require("express");
const servidor = express();

const path = require("path");
const bp = require("body-parser");

const rotas = require("./routes/rotas");

servidor.use(bp.json());
servidor.use(bp.urlencoded());

const routeV1 = express.Router();
rotas(servidor, routeV1);

servidor.use(express.static(path.join(__dirname, "public")));

servidor.set('views', path.join(__dirname, "views"))
servidor.set("view engine", "ejs");
const porta = 3000;

servidor.listen(porta, () => {
  console.log("avengers assemble ", porta);
});


