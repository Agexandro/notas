<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bulma.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1 class="title">Mi block de notas</h1>
    </header>
    <div>
        <a id="add" class="add">+</a>
    </div>
    <div id="contenedor" class="container">
    </div>
    <!--container-->

    <div id="mod" class="mod">
        <div class="mod_box">
            <p class="mod_title">Agregar nota</p>
            <p style="text-align:center; color:red; display:none" id="alerta">No se permiten campos vacios</p>
            <div>
                <input type="text" placeholder="Titulo" id="titulo">
                <textarea name="texto" id="texto" cols="30" rows="6"></textarea>
                <a id="save" class="button is-primary">Guardar</a>
                <a id="cancel" class="button is-danger">Cancelar</a>
            </div>
        </div>
    </div>
    <!--modal-->

    <div id="delete_mod" class="mod">
        <div class="mod_box">
            <p class="mod_title">¿Eliminar nota?</p>
            <div>
                <div class="columns">
                    <div class="column">
                        <a id="delete_btn" class="button is-primary is-block">Si</a>

                    </div>
                    <div class="column">
                        <a id="cancel_btn" class="button is-danger is-block">No</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="crud.js"></script>
    <script src="script.js"></script>
</body>

</html>