// Adicionando o tamanho do width da div
let totalSlider = document.querySelectorAll('.slider-item').length;
let widthSlider = document.querySelector('.slider').clientWidth;
document.querySelector('.slider-width').style.width = `${widthSlider * totalSlider}px`;

// Centralizando os controles
document.querySelector('.slider-controls').style.width = `${widthSlider}px`;
let heigthSlider = `${document.querySelector('.slider').clientHeight}px`;
document.querySelector('.slider-controls').style.height = heigthSlider;

// Vai iniciar no slider 0
let currentSlides = 0;

function goPrev(){
    currentSlides--;
    if (currentSlides < 0) {
        currentSlides = totalSlider - 1;
    }
    updateSlides();
}
function goNext(){
    currentSlides++;
    if (currentSlides > (totalSlider - 1)) {
        currentSlides = 0;
    }
    updateSlides();
}

function updateSlides(){
    let widthItemSlider = document.querySelector('.slider-item').clientWidth;
    let newSlides = (currentSlides * widthItemSlider);
    document.querySelector('.slider-width').style.marginLeft = `-${newSlides}px`;
}
setInterval(goNext, 5000)