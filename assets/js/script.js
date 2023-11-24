// ------------ CONFIG IMAGES ------------ // 
const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




let index = 0;
const imageFolder = "./assets/images/slideshow/"

// ------------ GESTION CAROUSSEL ------------ // 
const arrowPrevious = document.querySelector('#banner .arrow_left');
const arrowNext = document.querySelector('#banner .arrow_right');

arrowPrevious.addEventListener('click', () => {
    index--
    if (index < 0) index = slides.length -1
    console.log(`Previous : slide ${index +1}`);
    dotSelected(index)
    changeSlide(index)
})
arrowNext.addEventListener('click', () => {
    index++
    if(index > slides.length -1) index = 0 
    console.log(`Next : slide ${index +1}`);
    dotSelected(index)
    changeSlide(index)
})


// ------------ AJOUT ET INIT DOTS ------------ // 
const dots = document.querySelector('#banner .dots');

for (let i=0; i<slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add("dot");
    dots.append(dot);
    
    if(index === i) {
        dot.classList.add("dot_selected");
    }
}


// ------------ GESTION DOT_SELECTED ------------ // 
function dotSelected(index) {
    const dot = document.querySelectorAll('.dots .dot');

    for (let i=0; i<dot.length; i++) {
        dot[i].classList.remove("dot_selected");
        if(i === index) dot[i].classList.add("dot_selected");
    }
}


// ------------ GESTION IMAGE ET TEXTE ------------ // 
function changeSlide(index) {
    const slideImage = document.querySelector('#banner .banner-img');
    const slideText = document.querySelector('#banner p');

    slideImage.src = `${imageFolder}/${slides[index].image}`
    slideText.innerHTML = `${slides[index].tagLine}`
}


