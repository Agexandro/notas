window.onload = function(){    
    //Oculta el modal
    document.getElementById("cancel").addEventListener("click",
    function(){
        document.getElementById("mod").style.display = "none";
    })
    
    //Muestra el modal
    document.getElementById("add").addEventListener("click",
    function(){
        document.getElementById("mod").style.display = "block";
    });

    //agrega una nueva nota
    
    var contador = 1;
    var columna = 0;
    
    document.getElementById("save").addEventListener('click',
    function(){
    var titulo = document.getElementById("titulo").value
    var texto = document.getElementById("texto").value
    
      //¿Se ha llenado una linea de tres columnas?
      if (contador < 3) {
        document.getElementsByClassName("columns")[columna].innerHTML += "<div class='column is-4'><div class='nota'><h1>"+titulo+"</h1><p>"+texto+"</p></div></div>"
        contador++
      }
      else {
        columna++
        contador = 0
        document.getElementsByClassName("container")[0].innerHTML += "<div class='columns'></div>"
        document.getElementsByClassName("columns")[columna].innerHTML += "<div class='column is-4'><div class='nota'><h1>"+titulo+"</h1><p>"+texto+"</p></div></div>"
        contador++
      }
      document.getElementById("mod").style.display = "none";
      
      document.getElementById("add").addEventListener("click",
        function() {
          document.getElementById("mod").style.display = "block";
        });
    }
    )
    

}
