window.onload = function () {
  //Oculta el modal
  document.getElementById("cancel").addEventListener("click",
    function () {
      document.getElementById("mod").style.display = "none"
    })

  //Muestra el modal
  document.getElementById("add").addEventListener("click",
    function () {
      document.getElementById("mod").style.display = "block"
    })


  //agrega una nueva nota
  var contador = 1
  var columna = 0

  document.getElementById("save").addEventListener('click',
    function () {
      var titulo = document.getElementById("titulo").value
      var texto = document.getElementById("texto").value

      //¿Se ha llenado una linea de tres columnas?
      if (contador % 3 != 0) {
        document.getElementsByClassName("columns")[columna].innerHTML += "<div class='column is-4'><div class='nota'><h1>" + titulo + "</h1><p>" + texto + "</p></div></div>"
      }
      else {
        columna++
        document.getElementsByClassName("container")[0].innerHTML += "<div class='columns'></div>"
        document.getElementsByClassName("columns")[columna].innerHTML += "<div class='column is-4'><div class='nota'><h1>" + titulo + "</h1><p>" + texto + "</p></div></div>"
      }
      //Pintar las notas
      var notas = document.querySelectorAll(".nota")
      notas[contador-1].style = "background-color:rgb(0," + Math.random() * 254 + 1 + "," + Math.random() * 254 + 1 + ")"
      contador++

      document.getElementById("mod").style.display = "none"

      document.getElementById("add").addEventListener("click",
        function () {
          document.getElementById("mod").style.display = "block"
        });
        //Eliminar textos
        document.getElementById("texto").value = ""
        document.getElementById("titulo").value = ""
    }
  )

}
