//! variables

const formulario = document.getElementById('formulario');

const btn = document.getElementById('btn');

const productos = [

    {nombre: 'Platanos', Valor: 500},
    {nombre: 'Pera', Valor: 500},
    {nombre: 'Sandia', Valor: 500},
    {nombre: 'Melon', Valor: 500},
    {nombre: 'Frutillas', Valor: 500}
]

const resultados = document.getElementById('resultados');



//! mostrar en consola lo que se escribe
const filtrar = ()=>{
    //console.log(formulario.value);

    resultados.innerHTML = '';

    //! guardar texto del usuario
    const texto = formulario.value.toLowerCase();

    //! recorrer array
    for(let producto of productos){

        let nombre = producto.nombre.toLowerCase();

        //! si encuentra un producto
        if(nombre.indexOf(texto) !== -1){
            resultados.innerHTML += `<li>${producto.nombre} - Valor: ${producto.Valor}</li>`
        }
    }

    //! si no encuentra ningun resultado
    if(resultados.innerHTML === ''){
        resultados.innerHTML += `<li>Producto no encontrado :(</li>`
    }

}

//! agregar evento al btn y ejecutar funcion
btn.addEventListener('click',filtrar)

//! mostrar resultado mientras se escribe
 formulario.addEventListener('keyup',filtrar)

 //! muestra todos los productos al inicio
 filtrar();
