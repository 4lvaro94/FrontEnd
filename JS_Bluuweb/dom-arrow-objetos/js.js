function aaaa() {  

var nombre= "Alvaro";
var altura= "171";

var n = document.getElementById("datos");
n.innerHTML = `

<h1>Mi nombre es: ${nombre}</h1>
<h2>Mido: ${altura} cms</h2>

`;

if(altura>= 171){

    n.innerHTML += `<h1>eres una persona baja</h1>`

}else{
        n.innerHTML += `<h1>eres una persona alta</h1>`
    }

    

    function misdatos(nombre,altura){
        var n = document.getElementById("datos");
n.innerHTML = `

<h1 id="nombre">Mi nombre es: ${nombre}</h1>
<h2>Mido: ${altura} cms</h2>

`;
    }

    misdatos("Alvaro",171);



    //ARRAY
    var nombres = ['Alvaro','Andres','Contreras','Pinto'];


    document.write('<h1>Listado del Array:</h1>')
    for(i = 0; i < nombres.length; i++){
        document.write(nombres[i] + '<br/>');

    }

}

function ejswitch() {
var hora= 12;

switch(hora){
case 12:
    document.write('Buenos dias');
    break;
case 18:
    document.write('Buenas tardes');
    break;
case 22:
    document.write('Buenas noches!');
    break;
default:
    document.write('????');
}

//function con parametros

function suma(x,y){

document.write(x+y);
}

suma(10,10);

}

//LET: variable que puedee ser reasignada, 
//CONS: variable que no puede ser reasignada o cambiar a futuro


//DOM

var h1 = document.getElementById('titulo');
console.log(h1.innerHTML);

//asignar propiedad en css
h1.style.color = "grey";

var btn= document.getElementById("btn");
var parrafo = document.getElementById("parrafo")

btn.onclick = function(){
    parrafo.style.backgroundColor = "red";
    parrafo.style.color = "black";
}

function evento(){
    h1.style.background = "red";
    h1.style.color = "black";
    parrafo.style.background = "white";
    parrafo.style.color = "black";
}

btn.onclick = evento;



//acceder a todas la claese o solo a una, mismo id y class
var parrafo = document.getElementsByClassName('lead');

//acceder a un elemento con mismo id y class mediante un array
console.log(parrafo[0]);

var btn = document.querySelectorAll('button');
console.log(btn [0]);

//eventos

var btn = document.getElementById('btn');

btn.addEventListener('mouseover', function(){
    console.log('Hola!');
})

btn.addEventListener('mouseout', function(){
    console.log('chao :(');
})


// Funciones Arrow (de Flecha)

var saludoId = document.getElementById('saludo');

/* function saludar(nombre){
    return 'Hola' +" "+ nombre;
}
 */


//funcion ARROW 1 parametro

var saludar = nombre => 'hola ' + nombre;

saludoId.innerHTML = saludar('Alvaro');


//funcion ARROW 2 parametros

var sumaId = document.getElementById('suma');

var suma = (num1,num2) => num1 + num2;

// += agregar texto y no reemplazar
sumaId.innerHTML += suma(20,20); 

sumaId.style.color = "red";



//ejemplo agregar 3 parametros

var suma2Id = document.getElementById('suma2');

var suma2 = (n1,n2) =>{
    var n3 = 10;
    return n1 + n2 + n3;
}

suma2Id.innerHTML += suma2(10,10); 



//OBJETOS: Tienen una propiedad y un valor

var objeto = {
    nombre : 'HTML',
    duracion : 15,
    estado : true,

    //OBJETO DENTRO DE OTRO
    capitulos:{
        nombre : 'Introduccion',
        videos : 20
    }
}

console.log(objeto.capitulos.nombre);


//ARRAY DE OBJETOS

var arrayObjetos = [ 

    {
        nombre: 'HTML',
        estado: true
    },

    {
        nombre: 'CSS',
        estado: true
    },

    {
        nombre: 'JS',
        estado: false
    },
]

console.log(arrayObjetos[1].nombre)

//RECORRER OBJETOS

for(let indice of arrayObjetos){
    console.log(indice)
}


// EJEMPLO API DOLAR

var dolar = [{"fecha":"2020-02-27T03:00:00.000Z","valor":811.1},{"fecha":"2020-02-26T03:00:00.000Z","valor":807.96},{"fecha":"2020-02-25T03:00:00.000Z","valor":810.2},{"fecha":"2020-02-24T03:00:00.000Z","valor":809.82},{"fecha":"2020-02-21T03:00:00.000Z","valor":804.74},{"fecha":"2020-02-20T03:00:00.000Z","valor":797.4},{"fecha":"2020-02-19T03:00:00.000Z","valor":796.9},{"fecha":"2020-02-18T03:00:00.000Z","valor":791.95},{"fecha":"2020-02-17T03:00:00.000Z","valor":792.73},{"fecha":"2020-02-14T03:00:00.000Z","valor":795.12},{"fecha":"2020-02-13T03:00:00.000Z","valor":788.33},{"fecha":"2020-02-12T03:00:00.000Z","valor":792.48},{"fecha":"2020-02-11T03:00:00.000Z","valor":795.88},{"fecha":"2020-02-10T03:00:00.000Z","valor":788.8},{"fecha":"2020-02-07T03:00:00.000Z","valor":779.12},{"fecha":"2020-02-06T03:00:00.000Z","valor":776.99},{"fecha":"2020-02-05T03:00:00.000Z","valor":781.78},{"fecha":"2020-02-04T03:00:00.000Z","valor":790.92},{"fecha":"2020-02-03T03:00:00.000Z","valor":799.11},{"fecha":"2020-01-31T03:00:00.000Z","valor":797.96},{"fecha":"2020-01-30T03:00:00.000Z","valor":788.18},{"fecha":"2020-01-29T03:00:00.000Z","valor":788.13},{"fecha":"2020-01-28T03:00:00.000Z","valor":787.86},{"fecha":"2020-01-27T03:00:00.000Z","valor":776.52},{"fecha":"2020-01-24T03:00:00.000Z","valor":771.94},{"fecha":"2020-01-23T03:00:00.000Z","valor":772.12},{"fecha":"2020-01-22T03:00:00.000Z","valor":770.5},{"fecha":"2020-01-21T03:00:00.000Z","valor":769.93},{"fecha":"2020-01-20T03:00:00.000Z","valor":771.38},{"fecha":"2020-01-17T03:00:00.000Z","valor":773.36},{"fecha":"2020-01-16T03:00:00.000Z","valor":772.01}]

for (let i of dolar){
    console.log(i.valor)
}


/* var x = 0;
for (; x <= 20; x += 2){
    document.write (x); 
}
 */

 