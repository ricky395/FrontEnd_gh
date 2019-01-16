
var people;

// localStorage.removeItem("level");
// localStorage.removeItem("score");
// localStorage.removeItem("people");

$(document).ready(function() {
    tryLoadData();
  });

//jQuery("*").css("border-color", "red");

function addPerson()
{
    var newPerson = new Object();

    newPerson.name = $("#inputName").val();
    //newPerson.name = document.getElementById("inputName").value;

    newPerson.surname = $("#inputSurname").val();
    newPerson.edad = $("#inputNumber").val();
    newPerson.edad = parseInt(newPerson.edad);
    newPerson.email = $("#inputEmail").val();

    people[people.length] = newPerson;

    save();
    listPeople();
}

function modPerson()
{
    save();
}

function delPerson()
{
    people = [];
    localStorage.removeItem('people');
    listPeople();
}

function listPeople()
{
    // var divList = document.getElementById("divList");
    // divList.innerHTML = "<h2>Lista de personas</h2>";

    $("#divList").html("<h2>Lista de personas</h2>");

    for (let index = 0; index < people.length; ++index) 
    {
        var p = people[index];
        $("#divList").html(
            $("#divList").html() + "<p><b>Nombre:</b> " + p.name + ", <b>Apellido:</b> " + p.surname + ", <b>Edad:</b> " + p.edad + ", &lt;" + p.email + "&gt;</p>"
        );
    }
}

function tryLoadData()
{
    var peopleRaw = localStorage.getItem('people');
    people = JSON.parse(peopleRaw);

    if (people == null)
        people = new Array();
}

function save()
{
    localStorage.setItem('people', JSON.stringify(people));
}