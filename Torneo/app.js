
  // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '### FIREBASE AIzaSyBJDJwr4KUeGj08vu_SxwiE5Poppq_a5Gc KEY ###',
    authDomain: 'tournament-8cec7.firebaseapp.com',
    projectId: 'tournament-8cec7'
  });
  
  var db = firebase.firestore();




//! agregar

const btnagregar = document.getElementById('btnagregar');

function guardar(){

    var nombre = document.getElementById('nombre').value;

    var app = document.getElementById('plataforma').value;

    

    db.collection("modelos").add({
        nombre: nombre,
        plataforma: app

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

        //! una ves se guarda el dato se limpia el campo
        document.getElementById('nombre').value = '';

        document.getElementById('plataforma').value;

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    

}

btnagregar.addEventListener('click',guardar);





//! LEER

var tabla = document.getElementById('tabla');

db.collection("modelos").onSnapshot((querySnapshot) => {

    //! limpiar tabla
tabla.innerHTML='';
    
    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data()}`);

        tabla.innerHTML += `
        <tr>
            <th>${doc.id}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().plataforma}</td>
            <td><button class="btneliminar" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            <td><button class="btneditar" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().plataforma}')">Editar</button></td>
        </tr>
        `

    });
});





//! BORRAR

    function eliminar(id){

        db.collection("modelos").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }




//! EDITAR


function editar(id,nombre,app){

    document.getElementById('nombre').value = nombre;

    document.getElementById('plataforma').value = app;

    var btneditar = document.getElementById('btneditar');

    //! cambiar texto en html

    btneditar.onclick = function(){

        var nombre = document.getElementById('nombre').value;

        var app = document.getElementById('plataforma').value;

        /* var washingtonRef = db.collection("modelos").doc(id); */
        

        db.collection("modelos").doc(id).update({


            nombre: nombre,
            plataforma: app
        
        })
        .then(function() {
            console.log("Document successfully updated!");

            document.getElementById('nombre').value = '';

            document.getElementById('plataforma').value = '';

        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        }

    }

 



//! LEER

var m1 = document.getElementById('m1');

db.collection("modelos").onSnapshot((querySnapshot) => {

        //! limpiar tabla
    m1.innerHTML='';
    
    querySnapshot.forEach((doc) => {

        m1.innerHTML = `
        <h2 class="grid-item" id="m1">${doc.data().nombre}</h2>
        `

    });

});


var m2 = document.getElementById('m2');

db.collection("modelos").onSnapshot((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {

        m2.innerHTML = `
        <h2 class="grid-item" id="m2">${doc.data().nombre}</h2>
        `

    });

});



