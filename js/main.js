//variables vision values:
const visionButton_container = document.querySelector('#vision_button_container');
const visionButton = document.querySelector('#vision_button');
const visionArrow  = document.querySelector('#vision_arrow');
const visionInfo   = document.querySelector('#vision_info');

//variables Mission values:
const missionButton_container = document.querySelector('#mission_button_container');
const missionButton = document.querySelector('#mission_button');
const missionArrow  = document.querySelector('#mission_arrow');
const missionInfo   = document.querySelector('#mission_info');

//event:
visionButton_container.addEventListener('click' , visionShowInfo);
missionButton_container.addEventListener('click' , missionShowInfo);

//functions: 

function visionShowInfo(){
    visionArrow.classList.toggle('rotate');
    visionInfo.classList.toggle('close');
    
    if(visionButton.innerText =='Cerrar'){
        visionButton.innerText ='Ver';
    }else{
        visionButton.innerText ='Cerrar';
    };
}

function missionShowInfo(){
    missionArrow.classList.toggle('rotate');
    missionInfo.classList.toggle('close');
    
    if(missionButton.innerText =='Cerrar'){
        missionButton.innerText ='Ver';
    }else{
        missionButton.innerText ='Cerrar';
    };
}




