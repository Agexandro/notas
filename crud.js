var titulos = new Array()
var textos = new Array()
var numero_notas = 0
var item = 0
var class_name = ""

function clear() {
    document.getElementById("contenedor").innerHTML = "";
}

function reset_inputs() {
    //Eliminar textos
    document.getElementById("texto").value = ""
    document.getElementById("titulo").value = ""
}

function save() {
    const val1 = document.getElementById("titulo").value
    const val2 = document.getElementById("texto").value

    if (val1 != "" && val2 != "") {
        document.getElementById("alerta").style.display = "none";
        titulos.push(val1)
        textos.push(val2)
        numero_notas++
        load()
        document.getElementById("mod").style.display = "none"
        reset_inputs()
    } else {
        document.getElementById("alerta").style.display = "block";
    }
}

function load() {
    clear()
    var columnas = -1

    for (let indice = 0; indice < numero_notas; indice++) {
        //¿Primera nota?
        if (indice % 3 != 0) {
            document.getElementsByClassName("columns")[columnas].innerHTML += inner(indice)
        } else {
            document.getElementById("contenedor").innerHTML += "<div class='columns'></div>"
            columnas++
            document.getElementsByClassName("columns")[columnas].innerHTML += inner(indice)
        }
    }
}


function $delete() {
    --numero_notas
    for (let index = item; index < numero_notas; index++) {
        titulos[index] = titulos[index + 1]
        textos[index] = textos[index + 1]
    }
    titulos.pop()
    textos.pop()
    load()
}

function update() {
    const val1 = document.getElementById("titulo").value
    const val2 = document.getElementById("texto").value
    if (val1 != "" && val2 != "") {
        titulos[item] = (val1)
        textos[item] = (val2)
        load()
        document.getElementById("mod").style.display = "none"
        reset_inputs()
        class_name = ""
    } else {
        document.getElementById("alerta").style.display = "block";
    }
}


function inner(indice) {
    return "<div class='column is-4'><a class='delete' onclick='getId(this)' id='" + indice + "'></a><a class='update' onclick='getId(this)' id='" + indice + "'>Editar</a><div class='nota'><h1>" + titulos[indice] + "</h1><p>" + textos[indice] + "</p></div></div>"
}


function getId(id) {
    item = id.id * 1
    class_name = id.className
    if (class_name == "delete") {
        document.getElementById("delete_mod").style.display = "block"
    } else if (class_name == "update") {
        document.getElementById("titulo").value = titulos[item]
        document.getElementById("texto").value = textos[item]
        document.getElementById("mod").style.display = "block"
    }
}