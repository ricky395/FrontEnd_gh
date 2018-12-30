/*

 - Validar que el usuario introduzca un email y contraseña
 - Marcar en rojo los campos vacios
 - Comprobar que sean iguales entre sí y marcar en verde o naranja
 - Cuando esté todo correcto indicar "Registrado con éxito" y fondo de table en verde

*/

var campos = [document.getElementById("email"),
              document.getElementById("email_rep"),
              document.getElementById("password"),
              document.getElementById("password_rep")];

var cTextoInvalido = "#F04040";
var cTextosDesiguales = "blue";
var cCorrecto = "#00F000";

function validar()
{
    var valid = new Array(6);
    var i;
    for (i = 0; i < campos.length; ++i) 
    {
        valid[i] = validarCampoTexto(campos[i]);
    }

    valid[++i] = validarCamposIguales(campos[0], campos[1]);
    valid[++i] = validarCamposIguales(campos[2], campos[3]);

    var validator = true;
    for(i = 0; i < valid.length; ++i)
    {
        if (!valid[i])
        {
            validator = false;
            break;
        }
    }

    if (validator)
    {
        document.getElementById("texto_final").innerHTML = "Registrado con éxito";
        document.getElementById("tabla").setAttribute("style", "background-color: " + cCorrecto);
    }
}

function validarCampoTexto(campo)
{
    var text = campo.value;
    if (text == "")
    {
        campo.style.borderColor = cTextoInvalido;
        return false;
    }
    else
    {
        campo.style.borderColor = "";
        //campo.value = primeraMayuscula(text);
        return true;
    }
}

function validarCamposIguales(campo1, campo2)
{
    var texto1 = campo1.value;
    var texto2 = campo2.value;

    if (texto1 != "" && texto1.localeCompare(texto2) == 0)
    {
        campo1.style.borderColor = cCorrecto;
        campo2.style.borderColor = cCorrecto;
        return true;
    }
    else
    {
        campo1.style.borderColor = cTextosDesiguales;
        campo2.style.borderColor = cTextosDesiguales;
        return false;
    }
}