window.onload = function(){    
    //Oculta el modal
    document.getElementById("cancel").addEventListener("click",
    function(){
        document.getElementById("mod").style = "display:none";
    })
    
    //Muestra el modal
    document.getElementsByClassName("add")[0].addEventListener("click",
    function(){
        document.getElementById("mod").style = "display:block";
    });

    //agrega una nueva nota

    var contador = 1;
    function save(){
        //¿Se ha llenado una linea de tres columnas?
        if(contador % 3 != 0 ){
            document.getElementsByClassName("columns")[0].appendChild("Hello");
        }
    }

}

var contador = 1;

function column_number(){
    return col_length = document.getElementsByClassName("columns").length;
}

function save(){

    //¿Se ha llenado una linea de tres columnas?
    if(contador % 3 != 0 ){
        document.getElementsByClassName("columns")[column_number()-1].innerHTML += "<div class='column is-4'><p>Hola</p></div>"
    }
    else {
        document.getElementsByClassName("container")[0].innerHTML += "<div class='columns'></div>"
        document.getElementsByClassName("columns")[col_length-1].innerHTML += "<div class='column is-4'><p>Hola</p></div>"
    }
}