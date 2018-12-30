
// var hui = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

// var styleBySelector = {};
// for (var i = 0; i < hui.length; i++)
//     styleBySelector[hui[i].selectorText] = hui[i].style;

// // now access the StyleDeclaration directly:
// styleBySelector[".circulo"].color = "#00ff00";

var circulos = document.getElementsByClassName("circulo");
var animPaused = true;
// for(var i = 0; i < circulos.length; ++i)
// {
//     circulos[i].style.webkitAnimationPlayState="paused";
// }

var marco = document.getElementsByClassName("marco") [0];
var button = marco.appendChild(document.createElement("input"));
button.setAttribute("type", "button");
button.setAttribute("value", "Stop!");
button.setAttribute("style", "width: 80px");
button.addEventListener('click', botonPulsado);

function botonPulsado(state)
{   
    animPaused = !animPaused;
    
    var value;
    if (animPaused)
    {
        value = "running";
        button.setAttribute("value", "Stop!");
    }
    else
    {
        value = "paused";
        button.setAttribute("value", "Anímate");
    }

    for(var i = 0; i < circulos.length; ++i)
    {
        circulos[i].style.webkitAnimationPlayState = value;
    }
}

//botonPulsado();