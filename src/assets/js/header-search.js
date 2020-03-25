// Search Form
;(function ($){
	'use strict';
	$(document).on('ready', function () {
		$('.js-search-form-control').on('click', function (e){
			$('html, body').addClass('search-active');
			$('.input-search').focus();
			e.preventDefault();
		});

		$('.js-search-form-close').on('click', function (e){
			$('html, body').removeClass('search-active');
			e.preventDefault();
		});
	});
})(jQuery);