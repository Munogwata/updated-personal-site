const lavender = document.querySelector('#highlight');
const neon = document.querySelector('#full-section');
const circle = document.querySelector('#circle');


window.onmousemove = function(event){
    let x = event.clientX;
    let y = event.clientY;

    let newx = x -60;
    let newy = y -60;;

    circle.style.transform = 'translate3d(' +newx + 'px,' +newy + 'px, 0px)'
    circle.style.mixBlendMode =  'difference';
}