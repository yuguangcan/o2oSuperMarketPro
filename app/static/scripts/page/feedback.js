require(['zepto','common',], function( $ ,common  ) {

	$(function(){
		var isSubmittin = false;
		$('.submit').click(function(e){
			if(isSubmittin){
				return;
			}
			var content = $('.feedback-content').val();
			if(!content){
				alert('请输入反馈内容');
				return;
			}
			isSubmittin = true;
			$.post('/shop/feedback',{co:content},function(response){
				var data = JSON.parse(response);
				if(response.errno == 0){
					alert('多谢您的建议');
					setTimeout(function(){
						window.history.go(-1);
					},200);
				}else{
					alert('提交错误，请稍后再试');
				}
				isSubmittin = false;
			});
		});
	});

});
