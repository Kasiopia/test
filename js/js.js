var slides = document.querySelectorAll('#card-slider__wrappper .card-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1); 
     
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'card-slide';
    currentSlide = (n+slides.length)%slides.length; 
    slides[currentSlide].className = 'card-slide card-slide--showing';    
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	clearInterval(slideInterval);   //останавливает слайдер по нажатию на next
    nextSlide();
};
previous.onclick = function(){
	clearInterval(slideInterval);   //останавливает слайдер по нажатию на previous
    previousSlide();
};
