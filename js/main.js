//botones de ver y Cerrar de  Mision/Vision

//variables vision values:
const visionDiv = document.querySelector('#vision-div');
const visionP = document.querySelector('#vision-p');
const visionImg = document.querySelector('#img-btn-vision');
const btnVisionP = document.querySelector('#btn-p-vision');

const btnVision = document.querySelector('#btn-vision');

//variables Mision values:
const misionDiv = document.querySelector('#mision-div');
const misionP = document.querySelector('#mision-p');
const misionImg = document.querySelector('#img-btn-mision');
const btnMisionP = document.querySelector('#btn-p-mision');

const btnMision = document.querySelector('#btn-mision');

//event:
btnVision.addEventListener('click' , btnOnClickvision);
btnMision.addEventListener('click' , btnOnClickMision);

//functions: 

function btnOnClickvision(){
    visionDiv.classList.toggle('vision');
    visionDiv.classList.toggle('vision2');
    visionP.classList.toggle('remove');
    visionImg.classList.toggle('img-btn');
    
    if(btnVisionP.innerText =='Cerrar'){
        btnVisionP.innerText ='Ver';
    }else{
        btnVisionP.innerText ='Cerrar';
    };
}

function btnOnClickMision(){
    misionDiv.classList.toggle('mision');
    misionDiv.classList.toggle('mision2');
    misionP.classList.toggle('remove');
    misionImg.classList.toggle('img-btn');
    
    if(btnMisionP.innerText =='Cerrar'){
        btnMisionP.innerText ='Ver';
    }else{
        btnMisionP.innerText ='Cerrar';
    };
}




