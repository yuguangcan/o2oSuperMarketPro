require(['zepto','common'], function( $ ,common ) {

	$(function(){

		var city = $('#city'),
			district = $('#district'),
			community = $('#community');
		city.on('change',function(){
			if($(this).val() == -1){
				district.empty();
				community.empty();
				return;
			}
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
			$.get('/shop/community?district='+$(this).val(),function(response){
				var data = JSON.parse(response);
				if(data && data.data){
					community.empty();
					for(var i =0;i<data.data.length;i++){
						community.append("<option value='"+data.data[i].community+"'>"+data.data[i].community+"</option>");
					}
				}
				
			});
		});

		$('.submit').click(function(){
			if(city.val() == -1){
				alert('请选择地址');
				return;
			}
			var data = {
				city:city.val(),
				district:district.val(),
				community:community.val()
			};

			$.post('/shop/addresscommit',data,function(response){
				var data = JSON.parse(response);
				if(data && data.errno == 0){
					window.location.href = '/shop/home';
				}else{
					alert('添加失败，请稍后再试');
				}
			})
		});

	});

});
