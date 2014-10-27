<li class="clearfix">
    <a href="/shop/product/detail/{%$item.pid%}.html">
        <div class="img" style="background-image: url({%$item.pics.pic%});"></div>
        <div class="info">
            <div class="name">{%$item.title%}</div>
            <div class="price-label-big">
                {%if $item.discount%}
                ￥{%$item.discount%}
                <span class="old-price">￥{%$item.price%}</span>
                {%else%}
                ￥{%$item.price%}
                {%/if%}
            </div>
            <div class="sales">最近30天卖出{%$item.sales%}件</div>
        </div>
    </a>
    <div class="add-cart-big" data-pid="{%$item.pid%}">
        <i class="icon-add-cart-big"></i>
    </div>
    {%if $item.isnew%}
    <div class="new-tag">
        <i></i>
        <span>NEW</span>
    </div>
    {%/if%}
</li>
