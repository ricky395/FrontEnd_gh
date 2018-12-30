function validar()
{
    var inputNombre  = document.getElementById("nombre");
    var inputApell_1 = document.getElementById("primer_apellido");
    var inputApell_2 = document.getElementById("segundo_apellido");

    validarCampoTexto(inputNombre);
    validarCampoTexto(inputApell_1);
    validarCampoTexto(inputApell_2);
}

function validarCampoTexto(campo)
{
    var text = campo.value;
    if (text == "")
        campo.style.borderColor = "#F04040";
    else
    {
        campo.style.borderColor = "";
        campo.value = primeraMayuscula(text);
    }
}

function primeraMayuscula(texto)
{
    var primeraLetra = texto.charAt(0).toUpperCase();
    var restoTxt = texto.substring(1).toLowerCase();
    return primeraLetra + restoTxt;
}