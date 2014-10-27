{%*已完成订单*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
我的订单
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/order-done.css -->
<link rel="stylesheet" href="static/styles/page/order-done.css">
<!-- endbuild -->
{%/block%}

{%block name="content"%}
    {%include file="shop/widget/ucenternav.tpl" defaultindex=3%}

    <div class="orderitem-wrapper">
    {%foreach $list as $item%}
        {%include file="shop/widget/orderitem.tpl" item=$item%}
    {%/foreach%}
    </div>

    {%if $total > 5%}
    	<div class="load-more notapcolor">点击加载更多</div>
    	<script>
    		F.context('total','{%$total%}');
    	</script>
    {%/if%}

    
{%/block%}

{%*购物车图标不需要*%}
{%block name="cart"%}
{%/block%}


{%block name="js"%}
<script data-main="/static/shop/scripts/page/order-done" src="/static/shop/scripts/require.js"></script>
{%/block%}