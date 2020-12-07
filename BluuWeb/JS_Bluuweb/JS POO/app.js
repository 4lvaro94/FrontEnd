//objeto
const peli = {

    nombre: 'Harry Potter',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula: ${this.nombre}`
    }
}

console.log(peli.reproducir())


//Creacion de clase : "plantlla"

class Pelicula{
    //le pasamos como parametros las propiedades del obj
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }

    //metodo
    reproducir(){
        return `Reproduciendo pelicula: ${this.nombre}`
    }
}

//crear un obj a partir de una clase

//Herencia
class Serie extends Pelicula{

    constructor(nombre,id,cap){
        //utiliza el nombre y el id que estoy extendiendo de Pelicula
        super(nombre,id);
        this.cap = cap;
    }

    reproducirCapitulo(){
        return `Reproduciendo capitulo: ${this.cap}...${this.nombre}`
    }
}




//instanciar obj
const PeliculaUno = new Pelicula('Harry Potter',1)
const PeliculaDos = new Pelicula('Avengers',2)

const serieUno = new Serie('Pokemon',3,128);

var p1 = document.getElementById('pelicula1');
var p2 = document.getElementById('pelicula2');
var p3 = document.getElementById('pelicula3');

p1.innerHTML = (PeliculaUno.reproducir());
p2.innerHTML =(PeliculaDos.reproducir());
p3.innerHTML =(serieUno.reproducirCapitulo());