/*

1 - Crear una func elemPorId(id) que devuelva un elemento por su id
    1.1 - Probar la funcion elmPorId("div_form").style.background-color = "red";

2 - Crear una función cambiarAtribPorId(id, atrib, valor) que modifique el atrib de un elemento buscado por su Id
    2.1 - Probar la función Ej cambiaAtribPorId("div_form", "style", "background-color:red");

3 - Crear una func adjuntarElementoPorId(id, etiqueta) que genere un elemento tipo "etiqueta" y lo adjunte a un elemento encontrado por Id.
    3.1 - Probar la función adjuntarEPI("div_form", "input");

4 - Lo mismo que los 3 anteriores pero que en vez de buscar por Id busque por clase (devuelve o busca un array de elms a los que hacer lo que sea)

*/

function elemPorId(id)
{
    return document.getElementById(id);
}

function cambiarAtribPorId(id, atrib, valor)
{
    elemPorId(id).setAttribute(atrib, valor);
}

function adjuntarElementoPorId(id, etiqueta)
{
    var node = document.createElement(etiqueta);
    elemPorId(id).appendChild(node);
}



function elemPorClase(clase)
{
    return document.getElementsByClassName(clase);
}

function cambiarAtribPorClase(clase, atrib, valor)
{
    var elems = elemPorClase(clase);

    for (var i = 0; i < elems.length; ++i) 
    {
        elems[i].setAttribute(atrib, valor);
    }
}

function adjuntarElementoPorClase(clase, etiqueta)
{
    var elems = elemPorClase(clase);

    for (var i = 0; i < elems.length; ++i) 
    {
        var node = document.createElement(etiqueta);
        elems[i].appendChild(node);
    }    
}

function generar()
{
    elemPorId("div_form").setAttribute("style", "background-color: lightblue");

    cambiarAtribPorId("div_form", "style", "font-size: 3em");

    adjuntarElementoPorId("div_form", "input");

    cambiarAtribPorClase("mi_clase", "style", "font-size: 6em");

    adjuntarElementoPorClase("mi_clase", "input");
}