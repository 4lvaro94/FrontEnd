var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){

    e.preventDefault();
    console.log('un click')

    //DETECTAR CAMPOS
    var datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))

    //mediante el metodo fetch enviamos a post.php
    fetch('post.php',{
        //a traves del metodo post
        method: 'POST',
        //los datos del formulario
        body: datos
    })
    .then( res => res.json())
    .then( data => {
            console.log(data)
    })
})