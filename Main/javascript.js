function sumar(){

    var a = 10;
    var b = 10;
    var c = a+b;
    var resultado='El resultado es: ';
    
    document.write(resultado+c);
    
}

//[ ]
var suma=["hola","chao","ñe" ];


function ampliarinfo(){
    var resumen = document.getElementById('txt_resumen');
    var ampliado = document.getElementById('txt_ampliado');
    var enlace = document.getElementById('info');

   if(resumen.style.display == 'block'|| resumen.style.display == '')
   {

    resumen.style.display = 'none';
    ampliado.style.display = 'block';
 
    enlace.innerHTML = 'Ocultar mas info';



   }
   else{

    resumen.style.display = 'block';
    ampliado.style.display = 'none';
    enlace.innerHTML = 'Ver mas info';
   } 

}


function infojquery(){
    var resumen = document.getElementById('txt_resumen');
    var ampliado = document.getElementById('txt_ampliado');
    var enlace = document.getElementById('info');

   if(resumen.style.display == 'block'|| resumen.style.display == '')
   {

    $('#txt_resumen').hide();
    $('#txt_ampliado').show();

    enlace.innerHTML = 'Ocultar mas info';
   }
   else{

    $('#txt_resumen').show();
    $('#txt_ampliado').hide();
    enlace.innerHTML = 'Ver mas info';
   } 
}

$('#info').on('click', function(e) {

    infojquery();

   });

function edad(){
    var edad= prompt('Ingrese su edad');

    if(edad>=18){
        alert('Es mayor de edad');
    }
    else{
        alert('Nooo');
    }
}


//alert(suma[2]);

//document.write(suma[1]);



/*var edad= prompt('introduzca su edad :D');
var y=18;


if(edad>y){

alert("mayor de edad");
}
else{

    alert("FBI!!!!!");
}
*/
/*var i = "hola";
for(i=1;i<=10;i++){
    alert(i);
}*/



/*
var a = 1;

do{

alert("Hola");

a= a+1;

}
while (a<=10);
*/