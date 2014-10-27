require(['zepto','common','widget/cart'], function( $ ,common ,cart ) {

	$(function(){
		var orderpanel = $('.order-panel'),
			categorypanel = $('.category-panel');
		$('#nav-category').click(function(){
			orderpanel.hide();
			categorypanel.toggle();
		});
		$('#nav-sort').click(function(){
			categorypanel.hide();
			orderpanel.toggle();
		});
		var navCategoryList = $('.navbar .category-list li'),
			navSubCategoryList = $('.navbar .sub-category-list ul'),
			index = 0;
		navCategoryList.click(function(){
			if($(this).hasClass('cur')){
				return;
			}
			index = $.inArray(this,navCategoryList);
			navCategoryList.filter('.cur').removeClass('cur');
			$(this).addClass('cur');
			navSubCategoryList.filter('.cur').removeClass('cur');
			navSubCategoryList.eq(index).addClass('cur');
		});

		$('.product-list').on('click','.add-cart-big',function(e){
			e.stopPropagation();
			cart.add($(this).data('pid'),1,e.target);
		});

		var total = F.context('total'),
			pn = 10,
			rn = 10,
			isLoading = false,
			url = !F.context('word')?'/shop/product/listmore':'/shop/searchmore';
		
		$('.load-more').click(function(){
			if(isLoading){
				return;
			}
			isLoading = true;
			$.post(url,!F.context('word')?{
				cid: F.context('cid'),
				rn:rn,
				pn:pn,
				sort:F.context('sort')
			}:{
				word: F.context('word'),
				rn:rn,
				pn:pn,
				sort:F.context('sort')
			},function(response){
				if(response){
					$('.product-list').append(response);
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

