// Instalar typescript: 'npm install -g typescript' 
// Comando para transpilar: 'tsc nombreArchivo.ts'
//#region Datos tipados
var numerillo;
numerillo = 12;
console.log("El número es " + numerillo);
var texto = "Un texto";
console.log(texto);
alert(texto);
var siONo;
siONo = true;
if (siONo) {
    console.log("Pues parece que sí");
}
//#endregion
// Uniones: permiten definir variables con diferentes tipos
var miUnion;
miUnion = "Puede ser cadena";
miUnion = 34;
var Cumpleanios = /** @class */ (function () {
    function Cumpleanios() {
    }
    Cumpleanios.prototype.mostrar = function () {
        console.log("Feliz cumpleaños! Hoy es " + this.dia + "/" + this.mes + "/" + this.anyo);
    };
    return Cumpleanios;
}());
var miCumple = { dia: 29, mes: 3, anyo: 1995 };
console.log("Cumplo años el " + miCumple.dia + " del " + miCumple.mes);
miCumple.mostrar();
