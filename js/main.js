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

//variables mas/menos values:
const masButon = document.querySelector('#boton_mas');
const menosButon = document.querySelector('#boton_menos')
const commentsSection = document.querySelector('.comments_section');
const comments = document.querySelector('#comments');
const manantialBox = document.querySelector('#manantial')


//event mission/vission:
visionButton_container.addEventListener('click' , visionShowInfo);
missionButton_container.addEventListener('click' , missionShowInfo);

//event mas/menos:
//masButon.addEventListener('click', mas_menos_action)
//menosButon.addEventListener('click', mas_menos_action)

masButon.addEventListener('click', function() {
    commentsSection.classList.remove('close');
    masButon.classList.toggle('close');
    menosButon.classList.toggle('close');
    comments.classList.add('open');
    manantialBox.classList.add('open');

});

menosButon.addEventListener('click', function() {
    commentsSection.classList.add('close');
    masButon.classList.toggle('close');
    menosButon.classList.toggle('close');
    comments.classList.remove('open');
    manantialBox.classList.remove('open');
});


//functions mission/vission: 

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

//functions mas/menos:
//function mas_menos_action(){
  //  masButon.classList.toggle('close');
    //menosButon.classList.toggle('close');
//}




