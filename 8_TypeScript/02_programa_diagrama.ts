interface IProducto
{
  precio: number;

  mostrar();
}

class Camiseta implements IProducto
{
  precio: number;
  talla: string;
  color: string;

  constructor(_precio, _talla, _color)
  {
    this.precio = _precio;
    this.talla = _talla;
    this.color = _color;
  }

  mostrar()
  {
    console.log("Precio de la camiseta: " + this.precio + "\nTalla: " + this.talla + "\nColor: " + this.color);
  }
}

class Libro implements IProducto
{
  precio: number;
  titulo: string;

  constructor(_precio, _titulo)
  {
    this.precio = _precio;
    this.titulo = _titulo;
  }

  mostrar()
  {
    console.log("Título del libro: " + this.titulo + "\nPrecio del libro: " + this.precio);
  }
}

enum Producto
{
  Camiseta = 0,
  Libro
}

// TESTING
let producto = Producto.Libro;

// var stdin = process.openStdin();

// stdin.addListener("data", function(d) {
//     // note:  d is an object, and when converted to a string it will
//     // end with a linefeed.  so we (rather crudely) account for that  
//     // with toString() and then trim() 
//     console.log("you entered: [" + 
//         d.toString().trim() + "]");
//   });

switch (producto)
{
  case 0:
  let ca: IProducto;
  ca = new Camiseta(20, "M", "#ffffff");
  ca.mostrar();
  break;

  case 1:
  let li: IProducto;
  li = new Libro(8, "La llamada de Cthulhu");
  li.mostrar();
  break;
}
