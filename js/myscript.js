
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');
	const body = document.querySelector('body');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
		body.classList.toggle('active');
	});
}


$(function () {

	// ヘッダー
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('header').addClass('active');
			$('.header_in').addClass('active');
		}else{
			$('header').removeClass('active');
			$('.header_in').removeClass('active');
		}
	});

	// アニメーション発動
	$('.fadein').on('inview',function(){
		$(this).addClass('active');
	});

	var swiper01 = new Swiper('.top01 .slide01.swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		// spaceBetween: 1000,
		centeredSlides: true,
		freeMode: true,
		effect: 'fade',
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		}
	});
	var swiper02 = new Swiper('.top01 .slide02.swiper-container', {
		loop: true,
		speed: 10000,
		slidesPerView: 9,
		centeredSlides: true,
		freeMode: true,
		simulateTouch: false,
		breakpoints: {
			1025: {
				slidesPerView: 6,
			},
			767: {
				slidesPerView: 3,
			}
		},
		autoplay: {
			delay: 1
		}
	});
	var swiper03 = new Swiper('.top03 .swiper-container', {
		loop: true,
		speed: 8000,
		slidesPerView: 6.5,
		centeredSlides: true,
		freeMode: true,
		simulateTouch: false,
		breakpoints: {
			1025: {
				slidesPerView: 4.5,
			},
			767: {
				slidesPerView: 2.4,
			}
		},
		autoplay: {
			delay: 1
		}
	});
	var swiper04 = new Swiper('.school03 .swiper-container', {
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

	$('.curriculum_table dl.head').on('click', function(){
		$(this).next('.body').slideToggle(300);
	});


	// 一番最後に記述
	$("body").removeClass("preload");

});