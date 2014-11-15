{%*添加地址*%}

{%extends file="shop/layout/layout.tpl"%} 

{%block name="title"%}
添加收货地址
{%/block%}

{%block name="css"%}
<!-- build:css(.tmp) /static/shop/styles/page/address.css -->
<link rel="stylesheet" href="static/styles/page/address.css">
<!-- endbuild -->
{%/block%}

{%*通用顶部不需要*%}
{%block name="header"%}
{%/block%}

{%block name="content"%}
    {%include file="shop/widget/titlebar.tpl" title="添加收货地址"%}

    	<div class="address-input">
    		<label>收货人</label><input name="receiver" id="receiver" type="text" value="{%$address.receiver%}"></input>
    	</div>
    	<div class="address-input">
    		<label>手机号</label><input name="phone" id="phone" type="telephone" value="{%$address.phone%}"></input>
    	</div>
    	<div class="address-input">
    		<label>城市</label>
            <div class="select-wrap">
        		<select id="city">
                    {%if $address.city%}
                        {%foreach $city as $item%}
                            {%if $address.city == $item.city%}
                                <option value="{%$address.city%}" checked="checked">{%$address.city%}</option>
                            {%else%}
                                <option value="{%$item.city%}">{%$item.city%}</option>
                            {%/if%}
                        {%/foreach%}
                    {%else%}
                        <option value="-1">请选择</option>
                        {%foreach $city as $item%}
                            <option value="{%$item.city%}">{%$item.city%}</option>
                        {%/foreach%}
                    {%/if%}
                </select>
            </div>
    	</div>
        <div class="address-input">
            <label>区域</label>
            <div class="select-wrap">
                <select id="district">
                    {%if $address.district%}
                        {%foreach $district as $item%}
                            {%if $address.district == $item.district%}
                                <option value="{%$address.district%}" checked="checked">{%$address.district%}</option>
                            {%else%}
                                <option value="{%$item.district%}">{%$item.district%}</option>
                            {%/if%}
                        {%/foreach%}
                    {%/if%}
                </select>
            </div>
        </div>
        <div class="address-input">
            <label>小区</label>
            <div class="select-wrap">
                <select id="community">
                    {%if $address.community%}
                        {%foreach $community as $item%}
                            {%if $address.community == $item.community%}
                                <option value="{%$address.community%}" checked="checked">{%$address.community%}</option>
                            {%else%}
                                <option value="{%$item.community%}">{%$item.community%}</option>
                            {%/if%}
                        {%/foreach%}
                    {%/if%}
                </select>
            </div>
        </div>
        <div class="address-input">
            <label>幢/座/楼</label>
            <div class="select-wrap">
                <select id="unit">
                    {%foreach $unit as $item%}
                        {%if $address.unit == $item.unit%}
                            <option value="{%$address.unit%}" checked="checked">{%$address.unit%}</option>
                        {%else%}
                            <option value="{%$item.unit%}">{%$item.unit%}</option>
                        {%/if%}
                    {%/foreach%}
                </select>
            </div>
        </div>
    	<div class="address-detail">
    		<label>详细地址</label>
            <div class="address-detail-textarea">
                <textarea name="name" id="detail" placeholder="请输入房间号">{%$address.detail%}</textarea>
            </div>
    	</div>
        <div class="address-set-default">
            {%if $address.prio == '1'%}
                <input id="set-default" class="button-checkbox set-default" type="checkbox" checked="checked"></input>
            {%else%}
                <input id="set-default" class="button-checkbox set-default" type="checkbox"></input>
            {%/if%}
                <label for="set-default">设置为默认地址</label>
        </div>
        <div class="submit-btn" data-aid="{%$address.addressid%}">
            <button class="submit">确认</button>
            {%if $address%}
            <button class="delete">删除</button>
            {%/if%}
        </div>

{%/block%}

{%*gotop不需要*%}
{%block name="gotop"%}
{%/block%}

{%*购物车图标不需要*%}
{%block name="cart"%}
{%/block%}


{%block name="js"%}
<script data-main="/static/shop/scripts/page/address" src="/static/shop/scripts/require.js"></script>
{%/block%}