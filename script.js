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

    //eliminar nota
    document.getElementById("delete_btn").addEventListener('click',
    function () {
      $delete()
    document.getElementById("delete_mod").style.display = "none"
    }
  )

    //cancelar eliminacion nota
    document.getElementById("cancel_btn").addEventListener('click',
    function () {
      document.getElementById("delete_mod").style.display = "none"
    }
  )
}