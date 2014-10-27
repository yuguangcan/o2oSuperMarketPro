{%*商品详情页*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
商品详情
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/product.css -->
<link rel="stylesheet" href="static/styles/page/product.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}


{%block name="content"%}
    {%include file="shop/widget/titlebar.tpl" title="商品详情"%}

    <div class="product"> 
        <img src="{%$product.pics.pic%}"></img>
        <div class="name">{%$product.title%}</div>
        <div class="info clearfix">
            <div class="price-label-big">
                {%if $product.discount%}
                ￥{%$product.discount%}
                <span class="old-price">￥{%$product.price%}</span>
                {%else%}
                ￥{%$product.price%}
                {%/if%}
            </div>
            <div class="stock">库存：{%$product.productNum%}</div>
        </div>
    </div>
    <div class="operation">
        <div class="type clearfix">
            {%foreach $product.group as $item%}
                {%if $item.desc%}
                    {%if $product.pid == $item.pid%}
                        <a href="/shop/product/detail/{%$item.pid%}.html" class="selected notapcolor">
                    {%else%}
                        <a href="/shop/product/detail/{%$item.pid%}.html" class="notapcolor">
                    {%/if%}
                    {%$item.desc%}<i><b></b></i></a>
                {%/if%}
            {%/foreach%}
        </div>
        <div class="add-minus">
            <span class="minus notapcolor">-</span>
            <input type="number" value="1" min="1" max="{%$product.productNum%}" id="product-count"></input>
            <span class="add notapcolor">+</span>
        </div>
        <div class="add-cart notapcolor" data-pid="{%$product.pid%}">
            <i class="icon-add-cart-big"></i>
            加入购物车
        </div>
    </div>
    <div class="product-description">
        <div class="title">商品详情</div>
        <div class="content">{%$product.content%}</div>
    </div>

    <div class="product-related">
        <div class="title">猜你喜欢</div>
        <ul class="related-list clearfix">
            {%foreach $relate as $item%}
            <li>
                <a href="/shop/product/detail/{%$item.pid%}.html">
                    <img src="{%$item.pics.pic%}"></img>
                    <div class="name">{%$item.title%}</div>
                </a>
                <div class="price-label-small">
                    {%if $item.discount%}
                    ￥{%$item.discount%}
                    <span class="old-price">￥{%$item.price%}</span>
                    {%else%}
                    ￥{%$item.price%}
                    {%/if%}
                </div>
                <div class="info">
                    <div class="add-cart-small" data-pid="{%$item.pid%}">
                        <i class="icon-add-cart-small"></i>
                    </div>
                    <div class="sales-info">{%$item.sales%}人购买</div>
                </div>
            </li>
            {%/foreach%}
        </ul>
    </div>

{%/block%}

{%block name="js"%}
<script data-main="/static/shop/scripts/page/product" src="/static/shop/scripts/require.js"></script>
{%/block%}