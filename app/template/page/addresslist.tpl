{%*选择地址*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
选择地址
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/addresslist.css -->
<link rel="stylesheet" href="static/styles/page/addresslist.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}

{%block name="content"%}
    {%include file="shop/widget/titlebar.tpl" title="收货地址" hideusericon=true%}
    <ul class="address-list">
        {%foreach $address as $item%}
            <li data-aid="{%$item.addressid%}">
                {%if $item.prio == "1"%}
                    {%if $fr == 'user'%}
                    <input type="checkbox" class="button-checkbox" checked="true"/>
                    {%else%}
                    <input id="order-address-change{%$item.addressid%}" type="checkbox" class="button-checkbox order-address-change" checked="true"/>
                    {%/if%}
                {%else%}
                    {%if $fr != 'user'%}
                    <input id="order-address-change{%$item.addressid%}" type="checkbox" class="button-checkbox order-address-change"/>
                    {%/if%}
                {%/if%}
                {%if $fr == 'user'%}
                <a href="/shop/address?addressid={%$item.addressid%}">
                {%/if%}
                    {%if $fr == 'user'%}
                    <label class="address-info">
                    {%else%}
                    <label class="address-info" for="order-address-change{%$item.addressid%}">
                    {%/if%}
                        {%$item.receiver%}&nbsp;&nbsp;{%$item.phone%}<br>
                        {%$item.city%}&nbsp;&nbsp;{%$item.district%}&nbsp;&nbsp;{%$item.community%}&nbsp;&nbsp;{%$item.unit%}&nbsp;&nbsp;{%$item.detail%}
                    </label>
                {%if $fr == 'user'%}
                </a>
                {%/if%}
            </li>
        {%/foreach%}
    </ul>
    <a class="add-address" href="/shop/address?edit=0">
        新增收货地址
    </a>
    <script>
        F.context('fr','{%$fr%}');
        F.context('fr_url','{%$fr_url%}');
    </script>
{%/block%}

{%*gotop不需要*%}
{%block name="gotop"%}
{%/block%}

{%*购物车图标不需要*%}
{%block name="cart"%}
{%/block%}


{%block name="js"%}
<script data-main="/static/shop/scripts/page/addresslist" src="/static/shop/scripts/require.js"></script>
{%/block%}