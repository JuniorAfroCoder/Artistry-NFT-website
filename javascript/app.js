const openButton = document.querySelector('[data-toggle="open"]');
const closeButton = document.querySelector('[data-toggle="close"]');
const navOverlay = document.querySelector('.nav__overlay');
const navMenu= document.querySelector('.nav__menu');

const toggleMenu = () => {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.classList.toggle ('scroll-false');

}

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

window.addEventListener('resize', ()=>{
    if (this.innerWidth> 1024)
        if(navMenu.classList.contains('active')) toggleMenu();
})

const sr = ScrollReveal({
    distance: '25px',
    duration: 1500,
    easing: 'cubic-bezier(.68, -.55, .265, 1.55)',
});
sr.reveal('.showcase__text-group',{
    origin: 'top',
});

sr.reveal('.showcase__image-group',{
    origin: 'bottom',
});