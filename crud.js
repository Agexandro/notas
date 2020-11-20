var titulos = new Array()
var textos = new Array()
var numero_notas = 0
var deleteItem = 0

function clear(){
    document.getElementById("contenedor").innerHTML = "";
}

function save() {
    
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
    clear()
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


function $delete(){
    --numero_notas
    for (let index = deleteItem; index < numero_notas; index++) {
        titulos[index] = titulos[index+1]
        textos[index] = textos[index+1]
    }
    titulos.pop()
    textos.pop()
    load()
}


function inner(indice){
    return "<div class='column is-4'><a class='delete' onclick='getId(this)' id='"+indice+"'>x</a><div class='nota'><h1>" + titulos[indice] + "</h1><p>" + textos[indice] + "</p></div></div>"
}


function getId(id){
    deleteItem = id.id*1
    document.getElementById("delete_mod").style.display = "block"
}