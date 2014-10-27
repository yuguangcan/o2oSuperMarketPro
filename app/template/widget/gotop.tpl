{%*返回顶部*%}
<section class="common-gotop">
    {%if $user.address%}
        <p>{%$user.receiver%}&nbsp;&nbsp;{%$user.phone%}<br/>{%$user.address%}</p>
        <a href="/shop/addresslist" class="switch"><i class="icon-switch"></i>切换地址</a>
    {%/if%}
    <div id="gotop" class="gotop"><i class="icon-gotop"></i>回顶部</div>
</section>
