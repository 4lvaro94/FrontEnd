const sections = document.querySelectorAll('section')

const bubble = document.querySelector('.bubble')

const container = document.querySelector('.des_skills');

const css= document.querySelector('.bxl-css3');

const html = document.querySelector('.bxl-html5');

const js = document.querySelector('.bxl-javascript');

const gradients = [
"rgba(240, 240, 240,0.3)",
]

const options = {

    threshold : 0.7

}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries){

    entries.forEach(entry =>{

        const className = entry.target.className;

        const activeAnchor = document.querySelector(`[data-page=${className}]`)

        const gradientIndex = entry.target.getAttribute('data-index')

        const coords = activeAnchor.getBoundingClientRect()

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }

        if (entry.isIntersecting){
        
        bubble.style.setProperty('left', `${directions.left}px`)

        bubble.style.setProperty('top', `${directions.top}px`)

        bubble.style.setProperty('width', `${directions.width}px`)

        bubble.style.setProperty('height', `${directions.height}px`)

        bubble.style.background = gradients[gradientIndex]
        
        }

    });

}

sections.forEach(section =>{

    observer.observe(section)

})


//!Skills

html.addEventListener('mouseenter', (e) =>{

    html.classList.add('xyz-in');

})

html.addEventListener('mouseleave', (e) =>{

    html.classList.remove('xyz-in');

})

css.addEventListener('mouseenter', (e) =>{

    css.classList.add('xyz-in');

})

css.addEventListener('mouseleave', (e) =>{

    css.classList.remove('xyz-in');

})

js.addEventListener('mouseenter', (e) =>{

    js.classList.add('xyz-in');

})

js.addEventListener('mouseleave', (e) =>{

    js.classList.remove('xyz-in');

})

