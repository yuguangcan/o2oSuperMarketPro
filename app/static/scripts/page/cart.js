require(['zepto','common','widget/cart','widget/titlebar'], function( $ ,common ,cart ,titlebar) {

	$(function(){

		titlebar.init(function(){
			if(document.referrer.indexOf('shop/plist') !=-1 || document.referrer.indexOf('shop/home') !=-1){
				window.history.go(-1);
			}else{
				window.location.href = '/shop/home';
			}
		});

		var isSelectAll = true;

		function changeSelectAll(){
			if(isSelectAll){
				$('#selectall').next().html('全选');
				$('#selectall').get(0).checked = false;
				$('#delete').get(0).disabled = true;
				
			}else{
				$('#selectall').next().html('全不选');
				$('#selectall').get(0).checked = true;
				$('#delete').get(0).disabled = false;
			}
			isSelectAll = !isSelectAll;
		}

		var totalprice = $('.total .price'),
			totalCount = $('.total .count');

		function calPriceAndCount(){
			var price = 0.00,
				count = 0;
			$('.select').each(function(index,item){
				if(item.checked){
					count++;
					var parent = $(item).parent();
					price = price + (parent.find('.current-price').html().substr(1) - 0) * parent.find('.product-count').val();
				}
			});
			totalprice.html('￥'+price.toFixed(2));
			totalCount.html(count);
		}

		$('#selectall').click(function(){
			if(isSelectAll){
				$('.select').each(function(index,item){
					item.checked = false;
				});
			}else{
				$('.select').each(function(index,item){
					item.checked = true;
				});
			}
			changeSelectAll();
			calPriceAndCount();
		});

		$('.select').click(function(e){
			var selectCount = 0;
			$('.select').each(function(index,item){
				if(item.checked){
					selectCount++;
				}
			});
			if(selectCount == $('.select').length){
				$('#selectall').next().html('全不选');
				$('#selectall').get(0).checked = true;
				$('#delete').get(0).disabled = false;
				isSelectAll = true;
			}else if(selectCount==0){
				$('#selectall').next().html('全选');
				$('#selectall').get(0).checked = false;
				$('#delete').get(0).disabled = true;
				isSelectAll = false;
			}else{
				$('#selectall').next().html('全选');
				$('#selectall').get(0).checked = false;
				$('#delete').get(0).disabled = false;
				isSelectAll = false;
			}
			calPriceAndCount();
		});

		$('#delete').click(function(){
			if(!confirm('确认删除吗？')){
				return;
			}
			$('.select').each(function(index,item){
				if(item.checked){
					cart.remove(item.value);
					$(item).parent().remove();
				}
			});
			if($('.select').length == 0){
				$('.content-wrapper').addClass('hide');
				$('.empty').removeClass('hide')
			}else{
				calPriceAndCount();
			}
			
		});

		$('.product-count').on('change',function(){
			var value = $(this).val();
			if(isNaN(value) || value<0 ){
				alert('请输入购买数量');
				return;
			}
			var max = $(this).attr('max');
			if(value > parseInt(max)){
				alert('该商品库存不足');
				$(this).val(max);
			}
			if($(this).parents('li').find('.select').get(0).checked){
				calPriceAndCount();
			}
		});

		$('.submit').click(function(){
			var cartObj = {};
			var hasSelect = false;
			$('.select').each(function(index,item){
				if(item.checked){
					var parent = $(item).parent();
					cartObj[parent.find('.select').val()] = parent.find('.product-count').val(); 
					hasSelect = true;
				}
			});
			if(!hasSelect){
				alert('请选择商品');
				return;
			}
			$.post('/shop/cartcommit',cartObj,function(response){
				var data = JSON.parse(response);
				if(data && data.errno == 0){
					window.location.href="/shop/order/neworder?id="+data.data.toid;
				}else{
					alert(data.errmsg || '库存不足');
				}
			});
		});

		calPriceAndCount();
	});

});

