let body = document.body;

let togglebtn = document.querySelector('.toggle-btn');

let currentTheme = localStorage.getItem('currentTheme')

if(currentTheme){
    body.classList.add('dark-theme');
}

togglebtn.addEventListener('click', function (){

    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')){

        localStorage.setItem('currentTheme', 'themeActive');

    }else{

        localStorage.removeItem('currentTheme');

    }


})