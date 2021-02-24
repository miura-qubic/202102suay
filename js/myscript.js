
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	// ヘッダー
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.header_in').addClass('active');
		}else{
			$('.header_in').removeClass('active');
		}
	});

	var swiper01 = new Swiper('.top01 .swiper-container', {
		loop: true,
		speed: 40000,
		slidesPerView: 1.4,
		centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 1
		}
	});
	var swiper02 = new Swiper('.top03 .swiper-container', {
		loop: true,
		speed: 8000,
		slidesPerView: 6.5,
		centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 1
		}
	});




	// 一番最後に記述
	$("body").removeClass("preload");

});