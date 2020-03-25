/**
* @package Escapium
* @version 1.6.0
* Template Scripts
* Created by Dan Fisher
*/

;(function ($){
	'use strict';

	// Preloader
	$(window).on('load', function () {
		$('#js-preloader').delay(0).fadeOut();
		$('#js-preloader-overlay').delay(200).fadeOut('slow');
	});

	$.fn.exists = function () {
		return this.length > 0;
	};

	// Language direction
	var rtl = $('html').attr('dir') === 'rtl' ? true : false;

	var Core = {

		initialize: function () {

			this.stickyHeader();

			this.headerNav();

			this.scrollTo();

			this.roomSlider();

			this.roomRelated();

		},

		stickyHeader: function () {

			var headerHeight = $('#header').innerHeight();
			$('.page-heading').css('padding-top', headerHeight);

			$('#header').jPinning({

				// offset for header to hide or show in pixels
				offset: 100,

			});

		},

		headerNav: function () {

			var mainNav = $('.main-nav');

			if (mainNav.exists()) {
				var wrapper = $('.site-wrapper');
				var navList = $('.main-nav__list');
				var navListLi = $('.main-nav__list > li');
				var navListUlLi = $('.main-nav__list > ul > li');
				var toggleBtn = $('#header-mobile__toggle');

				// Clone Shop Cart
				var navCart = $('.js-nav-secondary__cart').clone();
				navCart.appendTo(navList);

				// Clone Log In Link
				var navLogin = $('.nav-secondary__login').clone();
				navLogin.appendTo(navList);

				// Mobile Menu Toggle
				toggleBtn.on('click', function (){
					wrapper.toggleClass('site-wrapper--has-overlay');
					$(this).toggleClass('burger-menu-icon--active');
				});

				$('.site-overlay, .main-nav__back').on('click', function (){
					wrapper.toggleClass('site-wrapper--has-overlay');
				});

				$('.site-overlay').on('click', function (e){
					e.preventDefault();
					wrapper.removeClass('site-wrapper--has-overlay-pushy site-wrapper--has-overlay');
				});

				// Add toggle button and class if menu has submenu
				navListLi.has('.sub-menu').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');
				navListUlLi.has('.children').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');
				navListLi.has('.main-nav__megamenu').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');

				$('.main-nav__toggle').on('click', function (){
					$(this).toggleClass('main-nav__toggle--rotate').parent().siblings().children().removeClass('main-nav__toggle--rotate');

					$('.sub-menu, .children, .main-nav__megamenu').not($(this).siblings('.sub-menu, .children, .main-nav__megamenu')).slideUp('normal');
					$(this).siblings('.sub-menu').slideToggle('normal');
					$(this).siblings('.children').slideToggle('normal');
					$(this).siblings('.main-nav__megamenu').slideToggle('normal');
				});

				// Add toggle button and class if submenu has sub-submenu
				$('.main-nav__list > li > ul > li').has('.sub-menu').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');
				$('.main-nav__list > li > ul > li > ul > li').has('.sub-menu').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');

				$('.main-nav__toggle-2').on('click', function (){
					$(this).toggleClass('main-nav__toggle--rotate');
					$(this).siblings('.sub-menu').slideToggle('normal');
				});

				// Search Form
				$('.js-search-form-control').on('click', function (e){
					$('html, body').addClass('search-active');
					$('.input-search').focus();
					e.preventDefault();
				});

				$('.js-search-form-close').on('click', function (e){
					$('html, body').removeClass('search-active');
					e.preventDefault();
				});

				$(document).keyup( function(e) {
					if ( e.keyCode === 27 && $('html').hasClass('search-active') && $('body').hasClass('search-active') ) {
						$('html, body').removeClass('search-active');
					}
				});
			}

		},

		scrollTo: function () {
			var bookingFormLink = $('[href="#bookingForm"]');

			if (bookingFormLink.exists()) {
				bookingFormLink.on('click', function (event) {
					event.preventDefault();
					$('html,body').animate({scrollTop: $('#bookingForm').offset().top},'slow');
				});
			}
		},

		roomSlider: function () {
			// Single Room Slider
			var singleRoomSlider = $('.js-room-single-slick');

			if (singleRoomSlider.exists()) {
				singleRoomSlider.slick({
					autoplay: true,
					autoplaySpeed: 7000,
					arrows: false,
					dots: true,
					infinite: true,
					speed: 600,
					fade: true,
					rtl: rtl,
					cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
					rows: 0,
				});

			}
		},

		roomRelated: function () {
			// Related Rooms
			var RoomSliderRelated = $('.js-rooms-related');

			if (RoomSliderRelated.exists()) {
				RoomSliderRelated.slick({
					arrows: true,
					dots: false,
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					rows: 0,
					rtl: rtl,

					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								arrows: false
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								arrows: false
							}
						}
					]
				});
			}
		},

	};

	$(document).on('ready', function() {
		Core.initialize();
	});

})(jQuery);
