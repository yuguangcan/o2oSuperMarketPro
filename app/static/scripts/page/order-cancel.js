require(['zepto','common','widget/orderitem'], function( $ ,common ,orderitem ) {

	$(function(){
		orderitem.init($('.orderitem-wrapper'));

		var total = F.context('total'),
			pn = 5,
			rn = 5,
			isLoading = false;
		$('.load-more').click(function(){
			if(isLoading){
				return;
			}
			isLoading = true;
			$.post('/shop/user/ordermore',{
				act : 4,
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
