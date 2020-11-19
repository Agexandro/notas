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
  document.getElementById("save").addEventListener('click',
    function () {
      save()
    }
  )
}