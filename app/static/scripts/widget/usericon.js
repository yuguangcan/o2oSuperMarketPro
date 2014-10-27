define(['zepto'], function ($) {
	var userIcon = $('#user'), 
		userMenu = $('#uermenu');
    return {
    	init :function(){
            if(userIcon.length == 0){
                return;
            }
    		userIcon.click(function(e){
                e.stopPropagation();
    			userMenu.toggleClass('show');
    		});
    		$(document.body).on('touchend',function(e){
    			if(e.target == userIcon.get(0) || e.target == userMenu.get(0) || $.contains(userMenu.get(0),e.target) || $.contains(userIcon.get(0),e.target)){
    				return;
    			}
    			if(userMenu.hasClass('show')){
    				userMenu.removeClass('show');
    			}
    		});
   	    }
	};
});
