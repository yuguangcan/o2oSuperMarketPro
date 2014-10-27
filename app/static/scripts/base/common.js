
define(['zepto','widget/header','widget/usericon','widget/cart'], function( $ ,header ,usericon ,cart ) {
	$(function(){
		header.init();
		usericon.init();
		cart.init();
		$('#gotop').click(function(e){
			$(window).scrollTop(0);
		});
	});
	
	return {};
});

