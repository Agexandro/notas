var titulos = new Array()
var textos = new Array()
var numero_notas = 0

function save() {

    document.getElementById("contenedor").innerHTML = "";
    titulos.push(document.getElementById("titulo").value)
    textos.push(document.getElementById("texto").value)
    numero_notas++

    load()

    document.getElementById("mod").style.display = "none"

    //Eliminar textos
    document.getElementById("texto").value = ""
    document.getElementById("titulo").value = ""
}

function load() {
    var columnas = -1

    for (let indice = 0; indice < numero_notas; indice++) {
        //¿Primera nota?
        if (indice % 3 != 0) {
            document.getElementsByClassName("columns")[columnas].innerHTML += inner(indice)
        } else {
            document.getElementsByClassName("container")[0].innerHTML += "<div class='columns'></div>"
            columnas++
            document.getElementsByClassName("columns")[columnas].innerHTML += inner(indice)
        }
    }
}


function position(el){
    alert(el.id)
}


function inner(indice){
    return "<div onclick='position(this)' id='"+indice+"' class='column is-4'><div class='nota'><h1>" + titulos[indice] + "</h1><p>" + textos[indice] + "</p></div></div>"
}