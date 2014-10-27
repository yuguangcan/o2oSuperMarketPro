{%*下订单*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
下订单
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/neworder.css -->
<link rel="stylesheet" href="static/styles/page/neworder.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}

{%block name="content"%}
    {%include file="shop/widget/titlebar.tpl" title="确认订单"%}

    <a href="/shop/addresslist?fr=order" class="address">
        收货人：
        {%if $address|count >0 %}
            {%foreach $address as $item%}
                {%if $item.prio == "1"%}
                {%$item.receiver%}&nbsp;&nbsp;{%$item.phone%} <br/>
                {%$item.city%}&nbsp;&nbsp;{%$item.district%}&nbsp;&nbsp;{%$item.community%}&nbsp;&nbsp;{%$item.unit%}&nbsp;&nbsp;{%$item.detail%}
                
                <script>
                    F.context('aid','{%$item.addressid%}');
                </script>

                {%/if%}
            {%/foreach%}
        {%else%}
            <i>请添加收货地址</i>
        {%/if%}
        <span></span>
    </a>

    <ul class="product-list">
        {%foreach $product.list as $item%}
        <li>
            <img src="{%$item.pics.pic%}" class="img"></img>
            <div class="info">
                <p class="name">{%$item.title%}</p>
                <p class="desc">{%$item.groupName%}</p>
                <p class="price">单价：￥{%$item.price%}</p>
                <p class="count">数量：{%$item.cartNum%}</p>
                <p class="totalprice">￥{%$item.price * $item.cartNum%}</p>
            </div>
        </li>
        {%/foreach%}
        <script>
            F.context('product',{%json_encode($product.list)%});
        </script>
    </ul>

    <div class="pay">
        <input type="radio" name="pay" class="button-checkbox" value="0" checked="checked"></input>
        <label>货到付款</label>
        <!-- <br/>
        <input type="radio" name="pay" class="button-checkbox" value="1" checked="checked"></input>
        <label>微信支付</label> -->
    </div>

    <div class="deliver">
       <!--  <input type="radio" name="deliver" class="button-checkbox" value="0"></input>
        <label>自提</label>
        <br/> -->
        <input type="radio" name="deliver" class="button-checkbox" value="1" checked="checked"></input>
        <label>送货上门</label>
    </div>

    <div class="total">
        <p>
            实付款: 
            <em class="price">￥{%$product.total%}</em>
        </p>
        <button class="submit" type="submit">
            提交订单
        </button>
    </div>

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
<script data-main="/static/shop/scripts/page/neworder" src="/static/shop/scripts/require.js"></script>
{%/block%}