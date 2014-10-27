{%*头部栏*%}
<header class="common-titlebar">
	<a href="javascript:;" id="navback" class="icon-arrow-left"></a>
	<div class="title">
		{%if $title%}
			{%$title%}
		{%else%}
			社区超市
		{%/if%}
	</div>
	{%if $hideusericon == true%}
	{%else%}
		{%include file="shop/widget/usericon.tpl"%}
	{%/if%}
</header>