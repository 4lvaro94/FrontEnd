const items = document.getElementById('items')


//* acceder a los elementos
const templateCard  = document.getElementById('template-card').content

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

    items.appendChild(fragment)

}

//*detectar btn

items.addEventListener('click', e =>{

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

console.log(objeto);

}

