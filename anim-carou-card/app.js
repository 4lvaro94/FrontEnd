function carousel(){
    new Glide(".images",{
        type: 'carousel',
        perView: 5,
        focusAt: 'center',
        gap: 40,
        breakpoints: {
          1200:{
            perView: 3
          },
          800:{
            perView: 2
          }
        }
      }).mount();
}

const navSlide = () =>{

    const burger = document.querySelector('.burger');

    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{

        //! toggle nav
        nav.classList.toggle('nav-active');

        //! animated links
        navLinks.forEach((link,index) =>{

            if(link.style.animation){
    
                link.style.animation = '';
    
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;  
            }
    
        });

        //! burger animation
        burger.classList.toggle('toggle');

    })



}

navSlide();

carousel();
