
//var desde el nav
const btnBurgerNav = document.querySelector('#btn-burger-nav');

//variables de sobrecivi-responsive
const sobreCiviBtn     = document.querySelector('#about-civi-selector');
const sobreCiviElement = document.querySelectorAll('#about-civi-mobile');
const arrowCivi        = document.querySelector('#img-arrow-mob');

const btnBurgerMobile  = document.querySelector('#close-burguer-btn');
const crossBtn         = document.querySelector('#crossBtn');
const asideMenu        = document.querySelector('#aside-menu');


//eventos
sobreCiviBtn.addEventListener('click' , showElement);

btnBurgerNav.addEventListener('click' , showAsideMenu);
btnBurgerMobile.addEventListener('click' , moveAsideMenu);
crossBtn.addEventListener('click' , moveAsideMenu);

//functions
function showElement(){
    arrowCivi.classList.toggle('rotate');
    sobreCiviElement.forEach( (cadaElement ,i )=>{
        sobreCiviElement[i].classList.toggle('activ');
        sobreCiviElement[i].classList.toggle('about-civi-mobile');
    });
}

function moveAsideMenu(){
    asideMenu.classList.add('translate');
}
function showAsideMenu(){
    asideMenu.classList.remove('translate');
}