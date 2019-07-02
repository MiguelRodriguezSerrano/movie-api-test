const express = require("express");
const PORT = 3000;
/* const usuarios = [
  { id: 0, name: "pepe", profesión: "Ratero", sexo: "Hombre" },
  { id: 1, name: "Juana", profesión: "Ratera", sexo: "Mujer" },
  { id: 2, name: "Aaron", profesión: "Espabilado", sexo: "Hombre" },
  { id: 3, name: "Ale", profesión: "Norteño", sexo: "NaN" },
  { id: 4, name: "Migue", profesión: "hola", sexo: "Hombre..." },
  { id: 5, name: "Paca", sexo: "Mujer" },
  { id: 6, name: "Firulays", sexo: "Gatita" }
];
 */
const app = express();
const dado = { name: "Dado", caras: 0, resultado: 0 };

/* app.get("/usuarios", (req, res) => {
  //console.log("Request", req);
  //res.send("Hello world\n");
  res.json(usuarios);
}); */

app.get("/dado/:caras", (req, res) => {
  const caras = req.params.caras;
  const resultado = Math.ceil(Math.random() * caras);
  dado.caras = caras;
  dado.resultado = resultado;
  res.json(dado);
});
app.listen(3000);
