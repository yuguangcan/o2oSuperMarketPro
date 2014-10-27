{%*送货员操作页*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
订单操作
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/sender.css -->
<link rel="stylesheet" href="static/styles/page/sender.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}


{%block name="content"%}
	{%*个人中心tab*%}
	<nav class="ucenter-nav">
		{%if $action=='fight'%}
		<a href="javascript:;" class="cur">抢单</a>
		<a href="/shop/order/orderfightlist?action=close">结单</a>
		{%elseif $action=='close'%}
		<a href="/shop/order/orderfightlist">抢单</a>
		<a href="javascript:;" class="cur">结单</a>
		{%/if%}
	</nav>
    {%if $list|count > 0%}
    <div class="orderitem-wrapper">
    {%foreach $list as $item%}
        {%include file="shop/widget/senderitem.tpl" item=$item action=$action%}
    {%/foreach%}
    </div>
    {%else%}
        <div class="empty">
            目前还没有订单
        </div>
    {%/if%}

    {%if $total > 5%}
    	<div class="load-more notapcolor">点击加载更多</div>
    	<script>
    		F.context('total','{%$total%}');
    		F.context('action','{%$action%}');
    	</script>
    {%/if%}


{%/block%}

{%*购物车图标不需要*%}
{%block name="cart"%}
{%/block%}

{%*gotop不需要*%}
{%block name="gotop"%}
{%/block%}

{%*通用底部不需要*%}
{%block name="footer"%}
{%/block%}


{%block name="js"%}
<script data-main="/static/shop/scripts/page/sender" src="/static/shop/scripts/require.js"></script>
{%/block%}