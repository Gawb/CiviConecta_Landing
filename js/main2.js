
//variables de sobrecivi-responsive
const sobreCiviBtn = document.querySelector('#about-civi-selector');
const sobreCiviElement = document.querySelector('#about-civi-mobile');
const arrowCivi = document.querySelector('#img-arrow-mob')

console.log(sobreCiviBtn)

sobreCiviBtn.addEventListener('click' , showElement);

function showElement(){
    
    sobreCiviElement.classList.toggle('remove');
    arrowCivi.classList.toggle('rotate')

}