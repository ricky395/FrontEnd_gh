interface IProducto
{
  mostrar();
}

// Falta: validación de datos
class Producto implements IProducto
{
  private precio: number;
  private nombre: string;

  constructor(precio: number, nombre: string)
  {
    this.precio = precio;
    this.nombre = nombre;
  }

  mostrar()
  {
    console.log(`Producto ${this.nombre}\nPrecio: ${this.precio} €`)
  }

  public getPrecio() : number { return this.precio; }
  public setPrecio(nuevoPrecio: number) : void { this.precio = nuevoPrecio; }
  public getNombre() : string { return this.nombre; } 
}

class Camiseta extends Producto
{
  private talla: string;
  private color: string;

  constructor(precio: number, talla: string, color: string)
  {
    super(precio, "Camiseta");
    this.talla = talla;
    this.color = color;
  }

  mostrar()
  {
    console.log("Precio de la camiseta: " + this.getPrecio() + "€");
    console.log("Talla: " + this.talla);
    console.log("Color: " + this.color);
  }
  
  public getTalla() : string { return this.talla; }
  public getColor() : string { return this.color; }
}

class Libro extends Producto
{
  private titulo: string;

  constructor(precio: number, titulo: string)
  {
    super(precio, "Libro");
    this.titulo = titulo;
  }

  mostrar()
  {
    console.log("Título del libro: " + this.titulo);
    console.log("Precio del libro: " + this.getPrecio() + "€");
  }

  public getTitulo() : string { return this.titulo; }
}

enum EProducto
{
  Camiseta = 0,
  Libro
}

enum EMenu
{
  MenuCompra = 0,
  CompraInicial
}

// TESTING
//let producto = Producto.Libro;

var stdin = process.openStdin();

console.log("¿Quieres comprar algo? (s/n)");
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

stdin.addListener("data", function(d) 
{
  // Se eliminan los 2 últimos caracteres del input (\n)
  let input = d.toString().substring(0, d.length - 2);
});

function compraAlgo(input)
{
  switch (input)
  {
    case "c" || "C" || "camiseta" || "Camiseta":
    let ca: IProducto;
    ca = new Camiseta(20, "M", "#ffffff");
    ca.mostrar();
    break;

    case "l" || "L" || "libro" || "Libro":
    let li: IProducto;
    li = new Libro(8, "La llamada de Cthulhu");
    li.mostrar();
    break;
  }
}

// <ul>

//   <li> Servicios </li>
//     <ul class="">
//       <li> Elemento 1 </li>
//       <li> Elemento 2 </li>
//     </ul>

//   <li> Cuidados </li>
//     <ul class="">
//       <li> Elemento 1 </li>
//       <li> Elemento 2 </li> 
//       ...
//     </ul>

//   <li> Papaya </li>
//     <ul class="">
//     </ul>

// </ul>