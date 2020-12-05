document.querySelector('h3')

console.log(document.querySelector('h3'))

console.log(document.querySelector('.h3-danger'))

console.log(document.querySelector('#parrafo'))

console.log(document.getElementById('parrafo'))

console.log(document.querySelectorAll('.h3-danger'))


//!---------------- modificar elemento-------------------------------------------------

const parrafo = document.querySelector('#parrafo')

parrafo.textContent = 'texto desde JS';

parrafo.innerHTML = '<em> texto con innerHTML </em>'

parrafo.classList.add('h3-danger','my-2')



//!----------------crear elemento-------------------------------------------------

const lista = document.getElementById('lista');

const array = ['uno','dos','tres','cuatro']

/*  array.forEach(item =>{

    const li = document.createElement('li')

    li.textContent = item;

    lista.appendChild(li)

})  */


 array.forEach(item =>{

    lista.innerHTML += `<li>${item}</li>`

})
 

//!----------------Fragment-------------------------------------------------

const listafragment = document.getElementById('listafragment');

const fragment = document.createDocumentFragment();

array.forEach(item =>{

    const li = document.createElement('li')

    li.textContent = item

    fragment.appendChild(li);

})

listafragment.appendChild(fragment)



//!----------------Template-------------------------------------------------

const listatemplate = document.querySelector('#listatemplate')

const arraylista = ['item1', 'item2', 'item3']


const template = document.querySelector('#template-li').content

const fragmentDos = document.createDocumentFragment();


arraylista.forEach(item =>{

    template.querySelector('.list span').textContent = item

    const clone = template.cloneNode(true)

    fragmentDos.appendChild(clone)

})

listatemplate.appendChild(fragmentDos);



//!----------------addEventListener-------------------------------------------------

/* const btnAumentar = document.querySelector('.btn-info')

const btnDisminuir = document.querySelector('.btn-danger') */

const span = document.getElementById('span')

const container = document.querySelector('.container')

let contador = 0

/* btnAumentar.addEventListener('click', () => {

    contador++

    span.textContent = contador 

} )

*/

container.addEventListener('click', e =>{

    if(e.target.classList.contains('btn-info')){

        contador ++

        span.textContent = contador

    }

    if(e.target.classList.contains('btn-danger')){

        contador --

        span.textContent = contador

    }

    e.stopPropagation()

    //* Stop propagation

    document.body.addEventListener('click', ()=>{

        console.log('diste click');

    })

})


