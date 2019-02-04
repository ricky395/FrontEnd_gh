var Camiseta = /** @class */ (function () {
    function Camiseta(_precio, _talla, _color) {
        this.precio = _precio;
        this.talla = _talla;
        this.color = _color;
    }
    Camiseta.prototype.mostrar = function () {
        console.log("Precio de la camiseta: " + this.precio + "\nTalla: " + this.talla + "\nColor: " + this.color);
    };
    return Camiseta;
}());
var Libro = /** @class */ (function () {
    function Libro(_precio, _titulo) {
        this.precio = _precio;
        this.titulo = _titulo;
    }
    Libro.prototype.mostrar = function () {
        console.log("Título del libro: " + this.titulo + "\nPrecio del libro: " + this.precio);
    };
    return Libro;
}());
var Producto;
(function (Producto) {
    Producto[Producto["Camiseta"] = 0] = "Camiseta";
    Producto[Producto["Libro"] = 1] = "Libro";
})(Producto || (Producto = {}));
// TESTING
var producto = Producto.Libro;
switch (producto) {
    case 0:
        var ca = void 0;
        ca = new Camiseta(20, "M", "#ffffff");
        ca.mostrar();
        break;
    case 1:
        var li = void 0;
        li = new Libro(8, "Chutulu");
        li.mostrar();
        break;
}
