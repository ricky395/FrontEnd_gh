var Camiseta = /** @class */ (function () {
    function Camiseta(precio, talla, color) {
        this.precio = precio;
        this.talla = talla;
        this.color = color;
    }
    Camiseta.prototype.mostrar = function () {
        console.log("Precio de la camiseta: " + this.precio + "€");
        console.log("Talla: " + this.talla);
        console.log("Color: " + this.color);
    };
    return Camiseta;
}());
var Libro = /** @class */ (function () {
    function Libro(precio, titulo) {
        this.precio = precio;
        this.titulo = titulo;
    }
    Libro.prototype.mostrar = function () {
        console.log("Título del libro: " + this.titulo);
        console.log("Precio del libro: " + this.precio);
    };
    return Libro;
}());
var Producto;
(function (Producto) {
    Producto[Producto["Camiseta"] = 0] = "Camiseta";
    Producto[Producto["Libro"] = 1] = "Libro";
})(Producto || (Producto = {}));
// TESTING
//let producto = Producto.Libro;
var stdin = process.openStdin();
console.log("¿Quieres comprar algo?");
console.log("¿Quieres camiseta(c) o libro(l)?");
// function inputUsuario(d) 
// {
//   // Se eliminan los 2 últimos caracteres del string (\n)
//   stdin.off("data", inputUsuario);
//   // Se llama a la función que crea los objetos
//   compraAlgo(input);
//   process.exit();
// }
// stdin.addListener("data", inputUsuario());
stdin.addListener("data", function (d) {
    var input = d.toString().substring(0, d.length - 2);
    console.log("Entered " + input);
});
function compraAlgo(input) {
    switch (input) {
        case "c" || "C" || "camiseta" || "Camiseta":
            var ca = void 0;
            ca = new Camiseta(20, "M", "#ffffff");
            ca.mostrar();
            break;
        case "l" || "L" || "libro" || "Libro":
            var li = void 0;
            li = new Libro(8, "La llamada de Cthulhu");
            li.mostrar();
            break;
    }
}
