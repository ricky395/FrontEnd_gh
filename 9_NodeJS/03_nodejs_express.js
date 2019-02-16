"use strict";

var miExpress = require("express");
var app = miExpress();

var reservas = {
  "GET": function () {
    return "['todas', 'las, 'reservas']";
  },
  "POST": function (reserva) {
    console.log("Añadir reserva " + reserva.id + " " + reserva.nombre);
  }
};

var alResponder = (request, response) => 
{
  console.log("Acceso a la petición, ", request.originalUrl);
  //response.send("Ruta: " + request.originalUrl + " - Verbo: " + request.method);

  var metodo = reservas[request.method]; // Sería igual a poner 'reservas.GET'
  console.log(metodo()); // Se invoca la función correspondiente (GET o POST)
  response.send(metodo());
}

app.get("/", alResponder);
app.post("/", alResponder);
app.delete("/", alResponder);
app.all("/paratodos", alResponder);
app.all("/enotrolado", alResponder);
app.listen(9000);
console.log("Servidor express lanzado.");