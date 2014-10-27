define(['zepto'], function ($) {
    return {
    	init :function(callback){
    		$('#navback').click(function(){
    			if(typeof callback == 'function'){
    				callback();
    			}else{
    				window.history.go(-1);
    			}
    			
    		});
   	    }
	};
});
