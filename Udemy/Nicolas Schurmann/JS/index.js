console.log("Hola Mundo")


//String: cadena de datos. 'aaaaaaa' "aaaa"
//Boolean: true false
//Null: nulo
//Number: 31231
//Undefined
//Object

//Variables
// var
// let
// cons
//
//

let miPrimeraVariable = 'Mi primera variable'

/* console.log(miPrimeraVariable) */

miPrimeraVariable = 'Esto ha cambiado'

/* console.log(miPrimeraVariable) */

//!---------Boolean----------
let miBoolean = true

let miOtroBool = false


//!-------Numeros---------------
let miNumero = 0

let miNumero2 = 12
let miNumero3 = -22

/* console.log(miNumero, miNumero2, miBoolean, miNumero3) */

let undef

/* console.log(undef) */

let nulo = null

/* console.log('nulo', nulo) */


//!------------OBJETO------------ 
//agrupaciones de datos

const miObjeto = {}

const miObjeto1 ={

    //propiedades
    unNumero: 12,
    unString: 'AAAAAAAAAA',
    unaCondicion: true,

}

/* console.log(miObjeto1.unNumero) */


//! -----------------Arreglos---------

const arr = [1, 2, 3, 'HOla']

/* console.log(arr) */

//agregar elementos
arr.push(5)
arr.push(miPrimeraVariable)

/* console.log(arr) */


//! -----------Operadores---------------

const suma = 1 + 2

const resta = 5 - 2

const multiplicar = 2 * 2

const dividir = 9 / 3


const modulo = 10 % 3

console.log(modulo)
 
//* aumentar numero
let num = 5
num++

console.log(num)


num += 3

console.log(num)

//! -----------Operadores de Comparacion--------------

//* igual estricta
const resultado1 = 5 === 6

const resultado2 = 5 === '5'

const resultado3 = 5 < 6

const resultado4 = 5 > 5

const resultado5 = 5 <= 5

const resultado6 = 5 !== 6



console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)


//! -------------------Operadores Logicos-------------

const resultadoOr = false || false || 'Hola'

console.log('resultadoOr', resultadoOr)



const resultadoAnd = true && true && false

console.log('resultadoAnd', resultadoAnd)



const resultadoNot = !false

console.log('resultadoNot', resultadoNot)




//! --------Control de flujo------------------

//* if

const edad = 65

if (edad > 5 && edad < 18 ) {

console.log('Puede jugar')

}else{
    console.log('No puede jugar')
}


//* While

let x = 0

while (x < 5) {

console.log(x);
x++

}


//* switch

let y = 3

switch(y){
    
    case 1: {
        console.log('caso1')
        break;
    }

    case 2:{
        console.log('caso2')
        break;
    }

    case 3:
        console.log('caso3')
        break;

    default:
        console.log('por defecto')
        break;
}



//* for


/* const numeros = [1, 2, 'Hola', 4, 5] */
/* 
console.log('array',numeros[2])

for (let i = 0; i < numeros.length; i++){

    console.log(numeros[i]);
    
    } 
 */



//! --------Funciones------------------

/* function iterar(arg1){


    for (let i = 0; i < arg1.length; i++){

    console.log(arg1[i]);
    
    } 

}

const numeros = [1, 2, 'Hola', 4, 5]
const nombres = ['Alvaro', 'Andres','Contreras','Pinto']

iterar(numeros)

iterar(nombres) */

/* function sumar(a, b){

    return a + b;

}

const resultadoSuma1 = sumar(1,2)
const resultadoSuma2 = sumar(5,6)
const resultadoSuma3 = sumar(resultadoSuma1,resultadoSuma2)

console.log('resultado', resultadoSuma3) */


//* Callback

function sumar(a, b, cb){

    const r = a + b

    cb(r)

}

function Callback(result){

    console.log('resultado', result)

}

/* Callback(6); */

/* sumar(2,3,Callback) */


//* Fat arrow

const miFattArrow = (a,b) => a + b

/* const rr = miFattArrow(1,2) */

const otraAF = (a,b) => {

    return a + b

}

const rr = otraAF (1,2)

console.log(rr)