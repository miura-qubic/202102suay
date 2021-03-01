
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

	// アニメーション発動
	$('.fadein').on('inview',function(){
		$(this).addClass('active');
	});

	var swiper01 = new Swiper('.top01 .swiper-container', {
		loop: true,
		speed: 10000,
		slidesPerView: 9,
		centeredSlides: true,
		freeMode: true,
		simulateTouch: false,
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
		simulateTouch: false,
		autoplay: {
			delay: 1
		}
	});
	var swiper03 = new Swiper('.school03 .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: '.school03 .swiper-button-next',
			prevEl: '.school03 .swiper-button-prev',
		}
	});

	// スムーススクロール
	var headerHeight = $('header').outerHeight();
	var urlHash = location.hash;
	if(urlHash) {
			$('body,html').stop().scrollTop(0);
			setTimeout(function(){
					var target = $(urlHash);
					var position = target.offset().top - headerHeight;
					$('body,html').stop().animate({scrollTop:position}, 1000);
			}, 100);
	}
	$('a[href^="#"]').click(function () {
		var speed = 300;
		var header = $('header').innerHeight();
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({ scrollTop: position - header }, speed, "swing");
		return false;
	});


	// 一番最後に記述
	$("body").removeClass("preload");

});