{%*首页*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
首页
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/index.css -->
<link rel="stylesheet" href="static/styles/page/index.css">
<!-- endbuild -->
{%/block%}

{%block name="content"%}

    <div class="category">
        <ul class="clearfix">
            {%foreach $category as $item%}
                <li class="notapcolor" data-type="{%$item.cid%}">
                {%$item.cname%}
                <div></div>
                </li>
            {%/foreach%}
        </ul>
    </div>
    <div id="activity-slider" class="swipe">
        <div class="activity-list swipe-wrap">

        </div>
    </div>
    <div id='category-slider' class='swipe'>
        <div class="category-list swipe-wrap">
            {%foreach $category as $itemarr%}
                <ul>
                    {%foreach $itemarr.child as $item%}
                        <li>
                            <a href="/shop/product/plist/{%$item.cid%}.html" class="clearfix">
                                <img class="img" src="{%$item.pic%}"></img>
                                <div class="info">
                                    <div class="name">{%$item.cname%}</div>
                                    <div class="sub">{%$item.desc%}</div>
                                </div>
                            </a>
                        </li>
                    {%/foreach%}
                </ul>
            {%/foreach%}
        </div>
    </div>
{%/block%}

{%block name="js"%}
<script data-main="/static/shop/scripts/page/index" src="/static/shop/scripts/require.js"></script>
{%/block%}