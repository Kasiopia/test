//подключение слайдеров
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
	},
	{
		breakpoint: 700,
		settings: {
			dots: false,
			arrows: true,
			аccessibility: true
		}
	}
	]
});
$('.card-slider--1').slick();
$('.card-slider--2').slick();
$('.card-slider--3').slick();
$('.card-slider--4').slick();
$('.card-slider--5').slick();
$('.card-slider--6').slick();
$('.reviews-slider__wrapper').slick();
//подключение всплывающих окон и закрытие окон

var opencity = document.querySelector (".js-city");
var city = document.querySelector (".modal-city");
var closecity = document.querySelector (".modal-content-close");
var modaloverlay = document.querySelector(".modal-overlay");
var navMain = document.querySelector (".header__inner");
var navToggle = document.querySelector (".nav-toggle");
var header = document.querySelector (".header");
var slider = document.querySelector(".slider");
var cardslider = document.querySelector(".card-slider");
var subnavMain = document.querySelector (".main-nav");
var subToggle = document.querySelector (".js-sub-click");
var closeDropMenu = document.querySelector (".dropdown-menu-back");
var dropMenu = document.querySelector (".dropdown-menu");

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

//not js
navMain.classList.remove("header__inner--nojs");
slider.classList.remove("slider--nojs");

// реакция на нажатие в nav-toggle
navToggle.addEventListener ("click", function(event) {
	if (navMain.classList.contains("header__inner--opened")) {
		navMain.classList.remove("header__inner--opened");
	} else {
		navMain.classList.add("header__inner--opened");
	}
});

// реакция на нажатие в dropdown-toggle
subToggle.addEventListener ("click", function(event) {
	if (subnavMain.classList.contains("main-nav--opened")) {
		subnavMain.classList.remove("main-nav--opened");
	} else {
		subnavMain.classList.add("main-nav--opened");
	}
});

// реакция на нажатие на card
var card = document.querySelector (".card");

card.addEventListener ("click", function (event) {
	event.preventDefault();
	card.classList.add ("card--click");
});

// реакция на закрытие или esc на card
window.addEventListener ("keydown", function(event) {
	if (event.keyCode === 27) {
		if (card.classList.contains ("card--click")) {
			card.classList.remove("card--click");
		}else {
			card.classList.remove("card--click");
		}
	}
});

//закрываем sub меню dropdown
closeDropMenu.addEventListener ("click", function(event) {
	event.preventDefault();
	subnavMain.classList.remove("main-nav--opened");
});

window.addEventListener ("keydown", function(event) {
	if (event.keyCode === 27) {
		if (subnavMain.classList.contains ("main-nav--opened")) {
			subnavMain.classList.remove("main-nav--opened");
		}else {
			subnavMain.classList.remove("main-nav--opened");
		}
	}
});
