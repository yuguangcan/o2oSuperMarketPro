{%*购物车*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
购物车
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/cart.css -->
<link rel="stylesheet" href="static/styles/page/cart.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}

{%block name="content"%}
    {%include file="shop/widget/titlebar.tpl" title="购物车"%}

    {%if $cart|count > 0%}
    <div class="content-wrapper">
        <div class="operation clearfix">
            <input type="checkbox" class="button-checkbox" id="selectall" checked="checked"></input><label for="selectall">全不选</label>
            <input type="button" class="button-gray" id="delete"  value="删除"></input>
        </div>

        <ul class="product-list">
            {%foreach $cart as $item%}
            <li>
                <input type="checkbox" class="select button-checkbox" value="{%$item.pid%}" checked="checked"></input>
                <div class="product">
                    <a href="/shop/product/detail/{%$item.pid%}.html" class="img">
                        <img src="{%$item.pics.pic%}"></img>
                    </a>
                    <div class="info">
                        <a href="/shop/product/detail/{%$item.pid%}.html" class="name">
                            {%$item.title%}
                        </a>
                        <p class="desc">{%$item.desc%}</p>
                        <div class="price">
                            {%if $item.discount%}
                                <span class="old-price">￥{%$item.price%}</span>
                                <span class="current-price">￥{%$item.discount%}</span>
                            {%else%}
                                <span class="current-price">￥{%$item.price%}</span>
                            {%/if%}
                            X<input type="number" value="{%$item.cartNum%}" min="1" max="{%$item.productNum%}" class="product-count"></input>
                        </div>
                    </div>
                </div>
            </li>
            {%/foreach%}
        </ul>

        <div class="total">
            <p>
                合计: 
                <em class="price">￥0.00</em>
            </p>
            <button class="submit" type="submit">
                结算(<em class="count">0</em>)
            </button>
        </div>
    </div>
    {%/if%}
    
    {%if $cart|count > 0%}
    <div class="empty hide">
    {%else%}
    <div class="empty">
    {%/if%}
        你还没有购物哦
        <a href="/shop/home" class="empty">点我去买点东西吧</a>
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
<script data-main="/static/shop/scripts/page/cart" src="/static/shop/scripts/require.js"></script>
{%/block%}