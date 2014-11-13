require(['zepto','common','widget/titlebar'], function( $ ,common ,titlebar) {

	$(function(){
		var fr = window.localStorage.getItem('addressFr'),
			fr_url = window.localStorage.getItem('addressFrUrl');
		if(!fr || fr!=F.context('fr')){
			window.localStorage.setItem('addressFr',F.context('fr'));
			window.localStorage.setItem('addressFrUrl',F.context('fr_url'));
			fr = F.context('fr');
			fr_url = F.context('fr_url');
		}
		titlebar.init(function(){
			window.localStorage.removeItem('addressFr');
			window.localStorage.removeItem('addressFrUrl');
			window.location.href = fr_url;
		});
		$('.address-list .order-address-change').click(function(e){
			e.preventDefault();
			$.post('/shop/ajax/editaddress',{
				'aid':$(this).parent().data("aid")
			},function(resp){
				if(resp && resp.errno == 0){
					window.location.href = document.referrer;
				}else{
					alert('切换地址失败，请稍后再试');
				}
			});
			// if(fr_url.indexOf('aid=')!=-1){
			// 	var url = replaceParamVal(fr_url,'aid',$(this).parent().data("aid"));
			// }else{
			// 	var url = fr_url + '&aid=' + $(this).parent().data("aid");
			// }
			
			// window.location.href = url;
		});
	});
	function replaceParamVal(url,paramName,replaceWith) {
	    var re=eval('/('+ paramName+'=)([^&]*)/gi');
	    return url.replace(re,paramName+'='+replaceWith);
	}
});
