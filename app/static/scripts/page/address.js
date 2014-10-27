require(['zepto','common','widget/titlebar'], function( $ ,common ,titlebar) {

	$(function(){
		titlebar.init();
		$('.submit').click(function(){
			if($('#city').val() == -1){
				alert('请选择地址');
				return;
			}
			var data = {
				addressid : $(this).parent().data("aid"),
				act : !$(this).parent().data("aid") ? 0 :1,
				receiver: $('#receiver').val(),
				phone:$('#phone').val(),
				detail:$('#detail').val(),
				prio: $('#set-default').get(0).checked ? 1 : 0,
				city:$('#city').val(),
				district:$('#district').val(),
				community:$('#community').val(),
				unit:$('#unit').val()
			};
			if(!data.receiver){
				alert('请输入收货人');
				return;
			}
			if(!data.phone){
				alert('请输入手机号');
				return;
			}

			$.post('/shop/addresscommit',data,function(response){
				var data = JSON.parse(response);
				if(data && data.errno == 0){
					window.location.href = document.referrer;
				}else{
					alert('添加失败，请稍后再试');
				}
			})
		});

		$('.delete').click(function(){
			$.post('/shop/addresscommit',{addressid:$(this).parent().data("aid"),act:2},function(response){
				var data = JSON.parse(response);
				if(data && data.errno == 0){
					window.location.href = document.referrer;
				}else{
					alert('删除失败，请稍后再试');
				}
			})

		});
		var city = $('#city'),
			district = $('#district'),
			community = $('#community'),
			unit = $('#unit'),
			addressDetailPrefix = $('.address-detail-prefix');
		city.on('change',function(){
			if($(this).val() == -1){
				district.empty();
				community.empty();
				unit.empty();
				return;
			}
			resetAddressDetailPrefix();
			$.get('/shop/community?city='+$(this).val(),function(response){
				var data = JSON.parse(response);
				if(data && data.data){
					district.empty();
					for(var i =0;i<data.data.length;i++){
						district.append("<option value='"+data.data[i].district+"'>"+data.data[i].district+"</option>");
					}
					district.change();
				}
			});
		});
		district.on('change',function(){
			resetAddressDetailPrefix();
			$.get('/shop/community?district='+$(this).val(),function(response){
				var data = JSON.parse(response);
				if(data && data.data){
					community.empty();
					for(var i =0;i<data.data.length;i++){
						community.append("<option value='"+data.data[i].community+"'>"+data.data[i].community+"</option>");
					}
					community.change();
				}
				
			});
		});
		community.on('change',function(){
			resetAddressDetailPrefix();
			$.get('/shop/community?community='+$(this).val(),function(response){
				var data = JSON.parse(response);
				if(data && data.data){
					unit.empty();
					for(var i =0;i<data.data.length;i++){
						unit.append("<option value='"+data.data[i].unit+"'>"+data.data[i].unit+"</option>");
					}
					unit.change();
				}
			});
		});
		unit.on('change',function(){
			resetAddressDetailPrefix();
		});
		function resetAddressDetailPrefix(){
			addressDetailPrefix.html(city.val()+district.val()+community.val()+unit.val());
		}

	});

});
