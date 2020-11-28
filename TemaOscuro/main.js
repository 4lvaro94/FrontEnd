const boton = document.getElementById('boton');

const configUser = window.matchMedia('(prefers-color-scheme: dark)');

const localconfig = localStorage.getItem('tema');

if(localconfig === 'dark'){

    document.body.classList.toggle('dark-theme');

} else if(localconfig === 'light'){

    document.body.classList.toggle('light-theme')
}

boton.addEventListener('click', ()=>{

   /*  console.log(configUser.matches) */
   let colorTema;

    if(configUser.matches){

        //entramos con modo oscuro
        document.body.classList.toggle('light-theme')

        colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark'

    } else{

        document.body.classList.toggle('dark-theme')

        colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'

    }

    localStorage.setItem('tema', colorTema)

})