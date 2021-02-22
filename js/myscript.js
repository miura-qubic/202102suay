
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

	var swiper01 = new Swiper('.top01 .swiper-container', {
		loop: true,
		speed: 8000,
		slidesPerView: 9.3,
		centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 1
		}
	});




	// 一番最後に記述
	$("body").removeClass("preload");

});