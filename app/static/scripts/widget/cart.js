define(['zepto'], function ($) {
	var cartKey = 'cart',
		cartObj = JSON.parse(localStorage.getItem(cartKey)) || {},
		cartDom = $('#cart'),
		floatCartNum = $('.float-cart-num-wrapper');

	cartDom.click(function(){
		toCartPage();
	});

	function save(){
		localStorage.setItem(cartKey,JSON.stringify(cartObj));
	}
	function renderCartHtml(){
		var pidCount = 0;
		for(var key in cartObj){
			if(cartObj.hasOwnProperty(key)){
				pidCount++;
			}
		}
		if(pidCount > 0){
			cartDom.find('.cart-num').html(pidCount);
			cartDom.find('.cart-num-wrapper').show();
		}else{
			cartDom.find('.cart-num-wrapper').hide();
		}
		
	}
	function resetCartHtml(){
		cartDom.find('.cart-num-wrapper').hide();
	}

	function checkCart(){
		return (cartDom && cartDom.length > 0);
	}

	function toCartPage(){
		var param = [];
		for(var key in cartObj){
			if(cartObj.hasOwnProperty(key)){
				param.push(key + "=" + cartObj[key]);
			}
		}
		window.location.href = "/shop/cart?"+param.join('&');
	}

	function floaterNumAnimate(target,callback){
		if(floatCartNum.attr('animated') == '1'){
			floatCartNum.hide().css({top:0,left:0});
		}
		var targetOffset = $(target).offset(),
			destOffset = cartDom.offset();
		floatCartNum.attr('animated',1);
		floatCartNum.css({top:targetOffset.top,left:targetOffset.left}).show().animate(
			{
				top : destOffset.top-5,
				left : destOffset.left+destOffset.width+5-26
			},500,'ease-out',function(){
				floatCartNum.hide().css({top:0,left:0});
				floatCartNum.attr('animated',0);
				callback();
			});
		
	}

	return {
		init : function(){
			checkCart() && renderCartHtml();			
		},
		add : function(pid ,count ,target){
			if(pid){
				if(cartObj[pid]>=0){
					cartObj[pid] = cartObj[pid] -0 + count;
				}else{
					cartObj[pid] = count;
				}
				save();
				if(checkCart()){
					!target ? renderCartHtml() : floaterNumAnimate(target,renderCartHtml);
				}
			}
		},
		remove : function(pid){
			if(pid){
				if(cartObj[pid] >=0){
					delete cartObj[pid];
				}
				save();
				checkCart() && renderCartHtml();
			}
		},
		clear: function(){
			
			cartObj = {};
			save();
			checkCart() && renderCartHtml();
			
		},
		toCartPage: function(){
			return toCartPage();
		}
	};
});