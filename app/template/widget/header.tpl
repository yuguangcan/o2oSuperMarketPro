{%*通用头部*%}
<header class="common-header">
	<a href="/shop/home" class="logo">
		超市
	</a>
	<div class="search-box">
		<span class="icon-search"></span>
		<form action="/shop/search" method="get">
			<input class="search-input" type="text" placeholder="搜索"></input>
		</form>
	</div>
	{%include file="shop/widget/usericon.tpl"%}
</header>