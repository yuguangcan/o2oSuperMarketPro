require(['zepto','common'], function( $ ,common  ) {

	$(function(){
		var isSubmmiting = false;
		$('.orderitem-wrapper').on('click','.more',function(){
			var self = $(this);
			var moreproduct = self.parent().find('.product-list'),
				detail = self.parent().find('.detail');
			if(self.attr('open') == 1){
				moreproduct.css('height',140);
				detail.hide();
				self.attr('open',0);
				self.html('查看更多<span></span').removeClass('expand');
			}else{
				moreproduct.css('height','auto');
				detail.show();
				self.attr('open',1);
				self.html('收起<span></span').addClass('expand');
			}
		}).on('click','.fight-submit',function(){
			if(isSubmmiting){
				return;
			}
			var _self = this;
			isSubmmiting = true;
   			$.post('/shop/order/orderfight',{
   				oid:$(this).parents('.order-item').data('oid')
   			},function(response){
   				var data = JSON.parse(response);
   				isSubmmiting = false;
   				if(data){
   					if(data.errno == 0){
   						alert('抢单成功'); 
   						$(_self).parents('.order-item').hide();
   					}
   					if(data.errno == -1){
   						alert('该订单已被抢');
   						$(_self).parents('.order-item').hide();
   					}
            		      					
   				}else{
   					alert('抢单失败');
   				}
   			});

   		}).on('click','.close-submit',function(){
   			if(isSubmmiting){
				return;
			}
			var _self = this;
			isSubmmiting = true;
   			$.post('/shop/order/orderdone',{
   				oid:$(this).parents('.order-item').data('oid')
   			},function(response){
   				var data = JSON.parse(response);
   				isSubmmiting = false;
                if(data){
                    if(data.errno == 0){
                        alert('结单成功'); 
                        $(_self).parents('.order-item').hide();
                    }
                }else{
                    alert('结单失败，请稍后再试');
                }
   			});

   		}).on('click','.return-submit',function(){
   			if(isSubmmiting || !confirm("确认退货？")){
				return;
			}
			var _self = this;
			isSubmmiting = true;
   			$.post('/shop/order/orderquit',{
   				oid:$(this).parents('.order-item').data('oid')
   			},function(response){
   				var data = JSON.parse(response);
   				isSubmmiting = false;
                if(data){
                    if(data.errno == 0){
                        alert('退货成功'); 
                        $(_self).parents('.order-item').hide();
                    }
                }else{
                    alert('退货失败，请稍后再试');
                }
   			});

   		});


		var total = F.context('total'),
			pn = 5,
			rn = 5,
			isLoading = false;
		$('.load-more').click(function(){
			if(isLoading){
				return;
			}
			isLoading = true;
			$.post('/shop/order/orderfightlistmore?action='+F.context('action'),{
				pn : pn,
				rn : rn
			},function(response){
				if(response){
					$('.orderitem-wrapper').append(response);
					pn = pn + rn;
					isLoading = false;
					if(pn >= total){
						$('.load-more').remove();
					}
				}
			});
		});


	});

});
