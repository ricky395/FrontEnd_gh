
function ejecutarJS()
{
    var codJS = document.getElementById("codJS");
    var reps = document.getElementById("repJS").value;

    eval("for (let i_95 = 0; i_95 < " + reps + "; ++i_95){" + codJS.value + "}");
}

function codificarASCII()
{
    var inputJS = document.getElementById("codJS");
    var enc = encodeURI(inputJS.value);
    var dec = decodeURI(inputJS.value);
    alert(enc + "\n" + dec);
}