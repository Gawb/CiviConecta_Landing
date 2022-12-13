
const ventasjasNav = document.querySelector('#ventajas-nav');




ventasjasNav.addEventListener('click', ()=>clickOnVentajas());


const clickOnVentajas = ()=>{
    
    const scrolled = 180;
    window.scrollY= scrolled;
    console.log(scrolled);

}

window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    console.log(scrolled);
})
