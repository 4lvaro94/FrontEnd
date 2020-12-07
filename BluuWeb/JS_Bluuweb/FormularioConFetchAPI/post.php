<?php

//guardar ek usuario dentro de una variable
$usuario = $_POST['usuario'];

$pass = $_POST['pass'];

//si el usuario o contraseña vienen vacios como un campo vacio
//se realizara la sgte respuesta
if($usuario === '' || $pass === ''){
    echo json_encode('llena los campos'); //Con json encode enviamos nuestra respuesta en formato Json
}
else{
    echo json_encode('Correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass);
}

?>