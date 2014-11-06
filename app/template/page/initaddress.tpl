{%*选择住址*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
选择住址
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/initaddress.css -->
<link rel="stylesheet" href="static/styles/page/initaddress.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}

{%block name="content"%}
    <header class="common-titlebar">
        <div class="title">
            选择住址
        </div>
    </header>

    <p>选择您的住址</p>

	<div class="address-input">
		<label>城市</label>
        <div class="select-wrap">
    		<select id="city">
                <option value="-1">请选择</option>
                {%foreach $city as $item%}
                    <option value="{%$item.city%}">{%$item.city%}</option>
                {%/foreach%}
            </select>
        </div>
	</div>
    <div class="address-input">
        <label>区域</label>
        <div class="select-wrap">
            <select id="district">
            </select>
        </div>
    </div>
    <div class="address-input">
        <label>小区</label>
        <div class="select-wrap">
            <select id="community">
            </select>
        </div>
    </div>
    <p>
        温馨提示：<br>
        领结管家会严格保密用户提交的住址信息，请放心填写。填写真实信息会让您充分享受到领结管家为您带来的优质服务。
    </p>
    <div class="submit-btn">
        <button class="submit">确认</button>
    </div>

{%/block%}

{%*gotop不需要*%}
{%block name="gotop"%}
{%/block%}

{%*购物车图标不需要*%}
{%block name="cart"%}
{%/block%}


{%block name="js"%}
<script data-main="/static/shop/scripts/page/initaddress" src="/static/shop/scripts/require.js"></script>
{%/block%}