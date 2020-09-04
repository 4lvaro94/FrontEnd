var txt = document.querySelector('#contenido')

function traer(){
    //URL del archivo
    fetch('texto.txt')

    //Tomamos una data y la transformamos en un archivos text
    .then(data => data.text())

    //lo que se ejecutara con data
    .then(data=>{
       txt.innerHTML = `${data}` //colocar una variable dentro de un HTML
    })
}

var apiId = document.getElementById('apiId')

function api(){
    fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data =>{

        apiId.innerHTML = `
        <img src="${data.results[0].picture.large}" width="100px" class="rounded-circle">
        <h2 id="email">email: ${data.results[0].email}</h2>
        `
        //console.log(data.results[0].email)
    })
}

var datosuser = document.getElementById('datosuser');

function tablajson(){
    fetch('tabla.json')
    .then(data => data.json())
    .then (data =>{
        tabla(data)
        //console.log(data)
    })
}

//obtener datos del JSON y mostrarlos en el HTML
function tabla(data){
    //console.log(data)
    datosuser.innerHTML = ''
    for (let valor of data){
        //console.log(valor)
        datosuser.innerHTML += `
        
        <tr>
                <th scope="row">${valor.id}</th>
                <td>${valor.nombre}</td>
                <td>${valor.email}</td>
                
                <td>${valor.estado ? "Activo" : "Ausente"}</td>
              </tr>
        
        `
    }

}