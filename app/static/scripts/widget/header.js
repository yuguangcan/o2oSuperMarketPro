define(['zepto'], function ($) {
    return {
    	init :function(){
    		$('.search-box form').submit(function(e){
    			e.preventDefault();
    			window.location.href="/shop/search?word="+encodeURIComponent($('.search-box input').val());
    		});
   	    }
	};
});
