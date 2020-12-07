const cards = document.getElementById('cards')

const items = document.getElementById('items')

const footer = document.getElementById('footer')


//* acceder a los elementos
const templateCard  = document.getElementById('template-card').content

const templateFooter = document.getElementById('template-footer').content

const templateCarrito = document.getElementById('template-carrito').content

const fragment = document.createDocumentFragment();

let carrito = {}



document.addEventListener('DOMContentLoaded', () =>{

    //* capturar datos
    fetchData()

})




//*obtener data

const fetchData = async() =>{

    try{

        //*leer api.json
        const res = await fetch('api.json')

        //* guardar data
        const data = await res.json()

        pintarCards(data)


    }catch(error){
        console.log(error);
    }

}




    //*modificar DOM

const pintarCards = data =>{

    //*recorrer data
    data.forEach(producto =>{

        //* titulo producto
        templateCard.querySelector('h5').textContent = producto.title

        //* precio producto
        templateCard.querySelector('p').textContent = producto.precio

        //* imagen producto
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)

        //* agregar atributo a btn
        templateCard.querySelector('.btn-dark').dataset.id = producto.id



        const clone = templateCard.cloneNode(true)

        fragment.appendChild(clone)

    }) 

    cards.appendChild(fragment)

}

//*detectar btn

cards.addEventListener('click', e =>{

    addCarrito(e);

})


//* evento
const addCarrito = e =>{

    if (e.target.classList.contains('btn-dark')) {
        
        serCarrito(e.target.parentElement)

    }

    e.stopPropagation()

}

//* capturar elementos - empujar al objeto
const serCarrito = objeto =>{


//* objeto
const producto = {

    id: objeto.querySelector('.btn-dark').dataset.id,

    title: objeto.querySelector('h5').textContent,

    precio: objeto.querySelector('p').textContent,

    cantidad: 1

}

    if(carrito.hasOwnProperty(producto.id)){

        //* aumentar cantidad
        producto.cantidad = carrito[producto.id].cantidad + 1

    }

    carrito[producto.id] = {...producto}

    pintarCarrito()


}

const pintarCarrito = () =>{

    //* limpiar html
    items.innerHTML=''

    Object.values(carrito).forEach(producto =>{

        templateCarrito.querySelector('th').textContent = producto.id

        templateCarrito.querySelectorAll('td')[0].textContent = producto.title

        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad

        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        templateCarrito.querySelector('.btn-info').dataset.id = producto.id

        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        

        const clone = templateCarrito.cloneNode(true)

        fragment.appendChild(clone)

    })

    //* pintar info
    items.appendChild(fragment)

    pintarFooter()

}



//* footer


const pintarFooter = () =>{

    footer.innerHTML = ''

    if(Object.keys(carrito).length === 0){

        //*carrito vacio
    
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `

        return
    
    }

    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad, 0)

    const nprecio = Object.values(carrito).reduce((acc, {cantidad,precio}) => acc + cantidad * precio, 0 )

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad

    templateFooter.querySelector('span').textContent = nprecio

    const clone = templateFooter.cloneNode(true)

    fragment.appendChild(clone)

    footer.appendChild(fragment)

    
    
}



