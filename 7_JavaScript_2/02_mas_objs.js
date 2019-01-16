
var people;

// localStorage.removeItem("level");
// localStorage.removeItem("score");
// localStorage.removeItem("people");

tryLoad();

function addPerson()
{
    var newPerson = new Object();
    newPerson.name = document.getElementById("inputName").value;
    newPerson.edad = document.getElementById("inputNumber").value;
    newPerson.edad = parseInt(newPerson.edad);
    newPerson.email = document.getElementById("inputEmail").value;

    people[people.length] = newPerson;

    save();
}

function modPerson()
{
    save();
}

function delPerson()
{
    save();
}

function listPeople()
{
    var divList = document.getElementById("divList");
    divList.innerHTML = "<h2>Lista de personas</h2>"
    for (let index = 0; index < people.length; ++index) 
    {
        var p = people[index];
        divList.innerHTML += "<p>Nombre: " + p.name + ", Edad: " + p.edad + ", &lt;" + p.email + "&gt;</p>"
    }
}

function tryLoad()
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