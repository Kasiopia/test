var slides = document.querySelectorAll('#card-slider__wrapper--2 .card-slide');
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
var next = document.getElementById('next--2');
var previous = document.getElementById('prev--2');

next.onclick = function(){
	clearInterval(slideInterval);   //останавливает слайдер по нажатию на next
	nextSlide();
};
previous.onclick = function(){
	clearInterval(slideInterval);   //останавливает слайдер по нажатию на previous
	previousSlide();
};

var opencity = document.querySelector (".js-city");
var city = document.querySelector (".modal-city");
var closecity = document.querySelector (".modal-content-close");
var modaloverlay = document.querySelector(".modal-overlay");

opencity.addEventListener ("click", function (event) {
  event.preventDefault();
  city.classList.add ("modal-content-show");
  modaloverlay.classList.add("modal-overlay--active");
});       

closecity.addEventListener ("click", function(event) {
  event.preventDefault();
  city.classList.remove ("modal-content-show")
  modaloverlay.classList.remove("modal-overlay--active");
});

window.addEventListener ("keydown", function(event) {
  if (event.keyCode === 27) {
    if (city.classList.contains ("modal-content-show")) {
      city.classList.remove ("modal-content-show");
      modaloverlay.classList.remove("modal-overlay");
    }
  }
});

$('.reviews-slider__wrappper').slick();


$('.slider__wrapper').slick({
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        dots: true,
        arrows: false,
        аccessibility: false
      }
    },   
    {
      breakpoint: 700,
      settings: {
        dots: false,
        arrows: false,
        аccessibility: false
      }
    }     
  ]
});