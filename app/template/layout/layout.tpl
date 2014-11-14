<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
        <meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport"/>
        <meta content="telephone=no" name="format-detection"/>
        <meta content="address=no" name="format-detection"/>
        <meta name="apple-mobile-web-app-capable" content="no" />
        <title>
            {%block name="title"%}社区超市{%/block%}
        </title>

        <!-- build:css(.tmp) /static/shop/styles/base/common.css -->
        <link rel="stylesheet" href="static/styles/base/common.css">
        <!-- endbuild -->


        {%block name="css"%}
        {%/block%}

        <!-- build:js({app,.tmp}) /static/shop/scripts/base/context.js -->
        <script src="static/scripts/base/context.js"></script>
        <!-- endbuild -->

    </head>
    <body>
        {%block name="header"%}
            {%include file="shop/widget/header.tpl"%}
        {%/block%}

        {%block name="content"%}
        {%/block%}

        {%block name="gotop"%}
            {%include file="shop/widget/gotop.tpl"%}
        {%/block%}

        {%block name="footer"%}
            {%include file="shop/widget/footer.tpl"%}
        {%/block%}

        {%*购物车图标*%}
        {%block name="cart"%}
            <div id="cart" class="cart-wrapper">
                <div class="cart"><i class="icon-cart"></i></div>
                <div class="cart-num-wrapper cart-num-box">
                    <div class="cart-num"></div>
                </div>
            </div>
            <div class="float-cart-num-wrapper cart-num-box" animated="0">
                <div class="cart-num">1</div>
            </div>
        {%/block%}
        
        <script type="text/javascript">
        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6f834afd497f92e3aa7b67c327fadc70' type='text/javascript'%3E%3C/script%3E"));
        </script>

        {%block name="js"%}{%/block%}

    </body>
</html>
