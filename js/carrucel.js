
const point          = document.querySelectorAll('.point');


const containerCarrucel = document.querySelector('.box-content');
const containerBlock = document.querySelector('.carrucel-container__block'); 
const arrowCarrucelLeft = document.getElementById ('carrucel-arrow-left');
const arrowCarrucelRight = document.getElementById('carrucel-arrow-right');

const blockElements  = document.querySelectorAll('.block');

const rootStyles = document.documentElement.style;


let blockCounter = 0;
let blockPosition = 0;
let isInTransition = false;
let key = 0;
let widthBlock = 34.4;
let widthBlockMobile = 19.4;

let widthScreen = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const DIRECTION ={
    RIGHT: 'RIGHT',
    LEFT:  'LEFT'
};

const getTransformValue = ()=>
    Number(rootStyles.getPropertyValue('--slide-transform').replace('%',''));  

const reorderSlide = ()=>{
    const transformValue = getTransformValue();
    console.log(transformValue);  
    rootStyles.setProperty('--transition', 'none');
    if(blockCounter === 2){
        containerBlock.appendChild(containerBlock.firstElementChild);
        rootStyles.setProperty('--slide-transform', `${transformValue+ widthBlock}%`);
        blockCounter--;
        blockPosition = blockPosition -1;
    }else if(blockCounter === 0){
        containerBlock.prepend(containerBlock.lastElementChild);
        if (key === 0){
            rootStyles.setProperty('--slide-transform', `${transformValue - 36}%`);
            key++; 
            blockPosition = blockPosition +1;           
        }else{
            rootStyles.setProperty('--slide-transform', `${transformValue - widthBlock}%`);
        }
        blockCounter++;
    }
    
    blockElements.forEach( ( everyBlock , i )=>{
        containerBlock.children[i].classList.add('block-unselected');
        containerBlock.children[i].children[1].classList.remove('block-info');
        containerBlock.children[i].children[1].classList.add('unselected-box-info');
        containerBlock.children[i].children[0].children[0].classList.add('curtain');
        
    })
    containerBlock.children[2].classList.remove('block-unselected');
    containerBlock.children[2].children[1].classList.remove('unselected-box-info');
    containerBlock.children[2].children[1].classList.add('block-info');
    containerBlock.children[2].children[0].children[0].classList.remove('curtain');
 
    isInTransition =  false;
    pointSelecter();

}
const moveSlide = (direction)=>{
    if(isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform 0.6s');
    isInTransition = true;
    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty('--slide-transform', `${transformValue + widthBlock}%`);
        blockCounter--;
        blockPosition--; 

    }else if(direction===DIRECTION.RIGHT){
        rootStyles.setProperty('--slide-transform', `${transformValue - widthBlock}%`);
        blockCounter++
        blockPosition=blockPosition+2; 
    }
};



const reorderSlideMobile = ()=>{
    const transformValue = getTransformValue();
    console.log(transformValue);  
    rootStyles.setProperty('--transition', 'none');
    if(blockCounter === 2){
        containerBlock.appendChild(containerBlock.firstElementChild);
        rootStyles.setProperty('--slide-transform', `${transformValue+ widthBlockMobile }%`);
        blockCounter--;
        blockPosition = blockPosition -1;
    }else if(blockCounter === 0){
        containerBlock.prepend(containerBlock.lastElementChild);
        if (key === 0){
            rootStyles.setProperty('--slide-transform', `${transformValue - 36}%`);
            key++; 
            blockPosition = blockPosition +1;           
        }else{
            rootStyles.setProperty('--slide-transform', `${transformValue - widthBlockMobile }%`);
        }
        blockCounter++;
    }
    
    blockElements.forEach( ( everyBlock , i )=>{
        containerBlock.children[i].classList.add('block-unselected');
        containerBlock.children[i].children[1].classList.remove('block-info');
        containerBlock.children[i].children[1].classList.add('unselected-box-info');
        containerBlock.children[i].children[0].children[0].classList.add('curtain');
        
    })
    containerBlock.children[2].classList.remove('block-unselected');
    containerBlock.children[2].children[1].classList.remove('unselected-box-info');
    containerBlock.children[2].children[1].classList.add('block-info');
    containerBlock.children[2].children[0].children[0].classList.remove('curtain');
    isInTransition =  false;
    pointSelecter();

}
const moveSlideMobile = (direction)=>{
    if(isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform 0.6s');
    isInTransition = true;
    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty('--slide-transform', `${transformValue + 19.4}%`);
        blockCounter--;
        blockPosition--; 

    }else if(direction===DIRECTION.RIGHT){
        rootStyles.setProperty('--slide-transform', `${transformValue - 19.4}%`);
        blockCounter++
        blockPosition=blockPosition+2; 
    }
};

const pointSelecter = () =>{
    point.forEach((everyPoint , i) =>{
        point[i].classList.remove('selected')
    })

    if(blockPosition === 8){
        blockPosition = 0;
    }else if(blockPosition === -1){
        blockPosition =7;
    }
    point[blockPosition].classList.add('selected');
}


arrowCarrucelRight.addEventListener('click',()=> moveSlide(DIRECTION.RIGHT));
arrowCarrucelLeft.addEventListener('click',()=> moveSlide(DIRECTION.LEFT));
let valueStart =0;
let valueMove =0;
let valX = 0;
containerCarrucel.addEventListener('touchstart',touchStart());
containerCarrucel.addEventListener('touchmove',touchMove());
containerCarrucel.addEventListener('touchend',directionSelector);


containerBlock.addEventListener('transitionend', reoderOption);

//Disable context menu
// window.oncontextmenu = function (event) {
//     event.preventDefault()
//     event.stopPropagation()
//     return false
// }

function touchStart(){
    return function (event){
        valueStart = getPositionX(event)
        console.log("valor incial: "+parseInt(valueStart));
    }
}
function touchMove(){
    return function (event){
        valueMove = getPositionX(event)
        console.log("volor movimiento: "+parseInt(valueMove));
    }
}
function directionSelector(){
    console.log("toque liberado. El valor inicial es de: "+valueStart+" Y el valor final: "+valueMove);
    if (valueStart < valueMove){
        moveSlideMobile(DIRECTION.LEFT);
    }else if(valueStart > valueMove & valueMove != 0){
        moveSlideMobile(DIRECTION.RIGHT)
    }
    valueStart =0;
    valueMove =0;
}

function getPositionX(event){
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX     
}

function reoderOption(){
    if (widthScreen <= 495){
        reorderSlideMobile();
    }else{ 
        reorderSlide();
    }
}

reoderOption()



