var campos = document.querySelectorAll('.textb input');

var btn = document.querySelector('.btn');

function check(){

    if(campos[0].value != "" && campos[1].value != ""){

        btn.disabled = false;

    }

    else{

        btn.disabled = true

    }

}

campos[0].addEventListener('keyup', check);

campos[1].addEventListener('keyup', check);


document.querySelector('.ver-pass').addEventListener('click', function(){

    if(this.classList[2] == "fa-eye-slash"){

        this.classList.remove('fa-eye-slash')

        this.classList.add('fa-eye')

        campos[1].type = 'text';

    }else{

        this.classList.remove('fa-eye')

        this.classList.add('fa-eye-slash')

        campos[1].type = 'password';

    }

})