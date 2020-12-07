
document.querySelector('#btn').addEventListener('click', traer)
 var txt = document.querySelector('#ajax');

function traer(){
   
    //instanciar objeto
    const xhttp = new XMLHttpRequest();

    //ruta del archivo
    xhttp.open('GET','archivo.txt',true);

    xhttp.send();

    //respuesta
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
           txt.innerHTML = this.responseText;
        }
    }
}



//LEER ARCHIVO JSON Y MOSTRAR EN TABLA
document.querySelector('#btntabla').addEventListener('click', traerjson);

function traerjson(){

    //console.log('dentro json');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            //array de objetos
            let datos = JSON.parse(this.responseText);

            //Tbody
            let res = document.querySelector('#res');

            res.innerHTML = ``;
            
            ///recorrer array - obtener archivos por separado - rellenar tabla
            for(let item of datos){
                
               res.innerHTML += `
               
               <tr>
              <th>${item.titulo}</th>
              <th>${item.artista}</th>
            </tr>
               
               `
            }
        }
    }

}

//recibe texto y lo transforma en json



//Consumiendo una API pública

document.querySelector('#btndolar').addEventListener('click',function(){
    obtenerDatos('dolar');
})

document.querySelector('#btnuf').addEventListener('click',function(){
    obtenerDatos('uf');
})



function obtenerDatos(valor){
   // console.log('aaaaaaaaaaA')
   let url = `https://mindicador.cl/api/${valor}`

   const api = new XMLHttpRequest()
   //metodo
   api.open('GET', url, true);
   api.send();

   api.onreadystatechange = function(){
       if(this.status == 200 && this.readyState == 4){

        //console.log(this.responseText);
        //transformar a json para ser leido en un array
        let datos = JSON.parse(this.responseText);
        //console.log(datos);
        let resultado = document.querySelector('#resultado');

        resultado.innerHTML = '';


        let i = 0;

        for(let item of datos.serie){
            //se incrementa en uno
            i++;                       //fecha, caracteres
            resultado.innerHTML += `<li>${item.fecha.substr(0,10)}  $${item.valor}</li>`
            
            //corta el ciclo al llegar a 10
            if(i>10){
                break;
            }
        }

       }
   }
}

//Funciones autoinvocativas

(function suscribete(){
    console.log('Suscribete!')
})();

//funcion arrow

((nombre) =>{
    console.log(`Suscribete! ${nombre}`)
}
)('Alvaro');




//Event Delegation

//variables globales

const agregarbtns = document.querySelector('#agregarbtns');

const botones = document.querySelector('#botones');


const body = document.querySelector('#body');



(() =>{

    //evento
    agregarbtns.addEventListener('click', agregarBotones);
    botones.addEventListener('click',delegacion);
})();


function agregarBotones(e){
    e.preventDefault();
    //console.log('diste click');
    botones.innerHTML = `<button class="btn1">Boton1</button>
    <button class="btn2">Boton2</button>
    <button class="btn3">Boton3</button>
    <button class="btn4">Boton4</button>
    <button class="btn5">Boton5</button>`;
}

//delegacion - acceder a un elemento - detectar clase
function delegacion(e){
    e.preventDefault();
    //console.log(e.target.classList[0])
    const colorBoton = e.target.classList[0];

    switch(colorBoton){
        case('btn1'):
        body.className = 'red lighten-2';

        //guardar cadena de texto en localstorage
        localStorage.setItem('colorFondo','red lighten-2')
        break;

        case('btn2'):

        body.className = 'blue lighten-2';

        localStorage.setItem('colorFondo','blue lighten-2')
        break;

        case('btn3'):

        body.className = 'orange lighten-2';

        localStorage.setItem('colorFondo','orange lighten-2')
        break;

        case('btn4'):

        body.className = 'grey lighten-2';

        localStorage.setItem('colorFondo','white lighten-2')
        break;

        case('btn5'):
        
        body.className = 'teal lighten-2'

        localStorage.setItem('colorFondo','teal lighten-2')
        break;
    }

}




//LocalStorage: guarda cadenas de texto, clave => valor
//SET => Guardando
//GET => Obtener
//set item, guardar informacion

const nombre = 'Alvaro';
                        //clave
localStorage.setItem('nombreUsuario',nombre);

const nombreLocalStorage = localStorage.getItem('nombreUsuario');
console.log(nombreLocalStorage);

//eliminar
localStorage.removeItem('nombreUsuario');


//ejecutar automaticamente

(()=>{

//getitem obtener info del localstorage
 const color = localStorage.getItem('colorFondo');
 console.log(color);
 
 if(color === null){

 }
 else{
    body.className = color;
 }
})();





//CRUD con LocalStorage y Vanilla Javascript

//variables
const formulario = document.getElementById('formulario');

const listaActividades = document.getElementById('listaActividades')

let arrayActividades = [];



//funciones

const CrearItem = (actividad) =>{

    let item = {
        actividad: actividad,
        estado: false
    }

    //guardar dentro del array
    arrayActividades.push(item);

    return item;
}

//guardar actividad en LocalStorage

const GuardarDB = () =>{

    //guardar el texti en formato JSON 
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

    PintarDB();
}

const PintarDB = () =>{

    //string vacio, desaparece lo que esta en forma estatica, limpia
    listaActividades.innerHTML = '';

    //leer
    arrayActividades = JSON.parse(localStorage.getItem('rutina'));

    if(arrayActividades === null){

        //iniciar array vacio
        arrayActividades = [];
    }else{

        //por cada elemento lo muestra en el html
        arrayActividades.forEach(element => {

            //cuando es verdadero alerta color verde de lo contrario Rojo
            if(element.estado){
                listaActividades.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }
            else{
                listaActividades.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }

            
        });
    }


}


const EliminarDB = (actividad) =>{
    /* console.log(actividad) */
    
    let indexArray;

    arrayActividades.forEach((elemento,index) => {
        if(elemento.actividad === actividad){

            indexArray = index;
        }
    });

    //eliminar
    arrayActividades.splice(indexArray,1);

    GuardarDB();
}


const EditarDB = (actividad) =>{
    //funcion para encontrar el index
    let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad
    );

    arrayActividades[indexArray].estado = true;

    //guardar cambios
    GuardarDB();

}





//Event Listener

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    //capturar valor del input
    let actividad = document.getElementById('actividad').value;

    console.log(actividad);

    //mandar actividad
    CrearItem(actividad);

    GuardarDB();

    //reiniciar formulario
    formulario.reset();

})



//mostrar actividades en las Alertas

document.addEventListener('DOMContentLoaded',PintarDB);


listaActividades.addEventListener('click',(e)=>{
    e.preventDefault();


   //mostar nombre actividades
   if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
       
    let texto = e.path[2].childNodes[1].innerHTML;

    //editar
    if(e.target.innerHTML === 'done'){
        EditarDB(texto);
    }

    //eliminar
    if(e.target.innerHTML === 'delete'){

        EliminarDB(texto);

    }
   }
})