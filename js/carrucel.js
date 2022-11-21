
const point          = document.querySelectorAll('.point');

//segundo video.
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

const DIRECTION ={
    RIGHT: 'RIGHT',
    LEFT:  'LEFT'
};

const getTransformValue = ()=>
    Number(rootStyles.getPropertyValue('--slide-transform').replace('px',''));

const reorderSlide = ()=>{
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'none');
    if(blockCounter === 2){
        containerBlock.appendChild(containerBlock.firstElementChild);
        rootStyles.setProperty('--slide-transform', `${transformValue+ 363}px`);
        blockCounter--;
        blockPosition = blockPosition -1;
    }else if(blockCounter === 0){
        containerBlock.prepend(containerBlock.lastElementChild);
        if (key === 0){
            rootStyles.setProperty('--slide-transform', `${transformValue - 387}px`);
            key++; 
            blockPosition = blockPosition -1;           
        }else{
            rootStyles.setProperty('--slide-transform', `${transformValue - 363}px`);
        }
        blockPosition = blockPosition +2;
        blockCounter++;
    }
    containerBlock.children[2].classList
    blockElements.forEach( ( everyBlock , i )=>{
        containerBlock.children[i].classList.add('block-unselected');
        containerBlock.children[i].children[1].classList.remove('block-info');
        containerBlock.children[i].children[1].classList.add('unselected-box-info');
        // containerBlock.children[i].children[1].children[0].children[0].classList.toggle('curtain');
    })
    containerBlock.children[2].classList.remove('block-unselected');
    containerBlock.children[2].children[1].classList.remove('unselected-box-info');
    containerBlock.children[2].children[1].classList.add('block-info');
    // containerBlock.children[2].children[1].children[0].children[0].classList.remove('curtain')
 
    // blockElements.forEach( ( everyBlock , i )=>{
    //     blockElements[i].classList.add('block-unselected');
    // })
    // blockElements[blockPosition].classList.remove('block-unselected');

    isInTransition =  false;
    console.log('posición: '+blockPosition);
    console.log('blockCounter: '+blockCounter);
    console.log({containerBlock});

}

const moveSlide = (direction)=>{
    if(isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform 1s');
    isInTransition = true;
    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty('--slide-transform', `${transformValue + 363}px`);
        blockCounter--;
        blockPosition = blockPosition -1; 

    }else if(direction===DIRECTION.RIGHT){
        rootStyles.setProperty('--slide-transform', `${transformValue - 363}px`);
        blockCounter++
        blockPosition = blockPosition +1; 
    }
};



arrowCarrucelRight.addEventListener('click',()=> moveSlide(DIRECTION.RIGHT));
arrowCarrucelLeft.addEventListener('click',()=> moveSlide(DIRECTION.LEFT));

containerBlock.addEventListener('transitionend', reorderSlide);

reorderSlide();



//blockElements.length - 1














// let positionArrow = 0;




// //Arrows
// arrowCarrucelR.addEventListener('click',()=>{
//     positionArrow = positionArrow -1;
//     let operation = positionArrow * -33.33;

//     containerBlock.style.transform = `translateX(${ operation }%)`;


//     // point.forEach( ( everyPoint , i )=>{
//     //     if(point[i].classList.contains('selected')){
//     //         e = i -(1);
//     //     }
//     //     point[i].classList.remove('selected');
//     // })
//     // point[e].classList.add('selected');
//     carrucelCounter++;
//     console.log(carrucelCounter);
//     reorderCarrucel();
// })

// arrowCarrucelL.addEventListener('click',()=>{
//     positionArrow = positionArrow + 1;
//     let operation = positionArrow * -33.33;

//     containerBlock.style.transform = `translateX(${ operation }%)`;


//     // point.forEach( ( everyPoint , i )=>{
//     //     if(point[i].classList.contains('selected')){
//     //         e = i -(-1);
//     //     }
//     //     point[i].classList.remove('selected');
//     // })
//     // point[e].classList.add('selected');
//     carrucelCounter--;
//     console.log(carrucelCounter);
// })

// //Points
// point.forEach( ( everyPoint , i )=>{
//     point[i].addEventListener('click',()=>{
//         let position = i - 1;
//         let operation = position * -33.33;

//         containerBlock.style.transform = `translateX(${ operation }%)`;

//         point.forEach( ( everyPoint , i )=>{
//             point[i].classList.remove('selected');
//         })
//         point[i].classList.add('selected');
//         positionArrow = i -1;
//         console.log('valor de positionarrow en punto: '+positionArrow)
//     })
// })