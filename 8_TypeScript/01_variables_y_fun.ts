// Instalar typescript: 'npm install -g typescript' 
// Comando para transpilar: 'tsc nombreArchivo.ts'

//#region Datos tipados
let numerillo : Number;
numerillo = 12;
console.log("El número es " + numerillo);

var texto = "Un texto";
console.log(texto);
alert(texto);

let siONo : boolean;
siONo = true;

if (siONo)
{
  console.log("Pues parece que sí");
}

//#endregion

// Uniones: permiten definir variables con diferentes tipos
let miUnion : number | string;
miUnion = "Puede ser cadena";
miUnion = 34;

// Error de tipado
//miUnion = false;


interface Tiempo
{
  dia : number;
  mes : number;
  anyo : number;

  mostrar();
}

class Cumpleanios implements Tiempo
{
  dia: number;
  mes: number;
  anyo: number;

  mostrar() 
  {
    console.log("Feliz cumpleaños! Hoy es " + this.dia + "/" + this.mes + "/" + this.anyo);
  }  
}

var miCumple : Tiempo = {dia: 29, mes: 3, anyo: 1995};
console.log("Cumplo años el " + miCumple.dia + " del " + miCumple.mes);

miCumple.mostrar();