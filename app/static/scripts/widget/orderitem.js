define(['zepto'], function ($) {
    return {
    	init :function(container){
    		container.on('click','.more',function(){
    			var self = $(this);
				var moreproduct = self.parent().find('.product-list'),
					other = self.parent().find('.other');
				if(self.attr('open') == 1){
					moreproduct.css('height',140);
					other.hide();
					self.attr('open',0);
					self.html('查看更多<span></span').removeClass('expand');
				}else{
					moreproduct.css('height','auto');
					other.show();
					self.attr('open',1);
					self.html('收起<span></span').addClass('expand');
				}
    		});
    		
    		container.on('click','.icon-unstar',function(){
    			var parent = $(this).parent().find('li'),
    				index = $.inArray(this,parent),
    				starLength = parent.find('.icon-star').length;
    			if(index+1 == starLength){
    				return;
    			}

    			var left = parent.slice(0,index +1),
    				right = parent.slice(index+1);

  				left.each(function(index,item){
					$(item).addClass('icon-star');
				});
				right.each(function(index,item){
					$(item).removeClass('icon-star');
				});
    		});

       		container.on('click','.rank-submit',function(){
       			$.post('/shop/evaluate',{
       				id:$(this).parents('.order-item').data('oid'),
       				score:$(this).parent().find('.icon-star').length,
       				act :0,
       				type: 1
       			},function(response){
       				var data = JSON.parse(response);
       				if(data && data.errno == 0){
       					alert('评价成功');
       					setTimeout(function(){
       						window.location.reload();
       					},200);
       				}else{
       					alert(data.msg ||'评价失败，请稍后再试');
       				}
       			});
       		});

       		container.on('click','.cancel-submit',function(){
       			$.post('/shop/order/ordercancel',{
       				oid:$(this).parents('.order-item').data('oid')
       			},function(response){
       				var data = JSON.parse(response);
       				if(data && data.errno == 0){
       					alert('取消成功'); 
                setTimeout(function(){
                  window.location.reload();
                },200);      					
       				}else{
       					alert(data.msg || '取消失败，请稍后再试');
       				}
       			});

       		});

       		container.on('click','.rebuy-submit',function(){
       			var pids = "";
       			$(this).parent().parent().find('.product-list li').each(function(index,item){
       				pids = pids + $(item).data('pid') + '=' + $(item).data('count') + '&';
       			});
       			window.location.href="/shop/cart?"+pids;
       		});
   	    }
	};
});
