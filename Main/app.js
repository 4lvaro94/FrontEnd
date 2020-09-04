
function infojquery(){
    var resumen = document.getElementById('txt_resumen');
    var ampliado = document.getElementById('txt_ampliado');
    var enlace = document.getElementById('info');

   if(resumen.style.display == 'block'|| resumen.style.display == '')
   {

    $('#resumen').hide();
    $('#ampliado').show();
    ampliado.style.display = "block";
    enlace.innerHTML = 'Ocultar mas info';
   }
   else{

    $('#resumen').show();
    $('#ampliado').hide();
    resumen.style.display="block";
    enlace.innerHTML = 'Ver mas info';
   } 
}

$('#info').on('click', function(e) {

    infojquery();

   });