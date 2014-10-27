<div class="order-item" data-oid={%$item.oid%}>
	<div class="info">
		<div class="title">
			订单号：{%$item.oid%}
		</div>
		<div class="other">
			<!-- <p>支付方式：
				{%if $item.pay_type == 0%}
					货到付款
				{%elseif $item.pay_type == 1%}
					微信支付
				{%/if%}
			</p> -->
			<p>收货地址：{%$item.address%}</p>
			<p>收件人：{%$item.reciever%}</p>
			<p>下单时间：{%$item.create_time%}</p>
			<p>订单总价：￥{%$item.price%}</p>
		</div>
		{%if $action == 'fight'%}
		<button class="fight-submit submit-btn">
			抢单
		</button>
		{%elseif $action == 'close'%}
		<button class="close-submit submit-btn">
			结单
		</button>
		<button class="return-submit cancel-btn">
			退货
		</button>
		{%/if%}
	</div>
	<div class="detail">
		<p>订单详情：</p>
		<ul class="product-list">
			{%foreach $item.products as $pitem%}
				<li data-pid="{%$pitem.pid%}" data-count="{%$pitem.order_buy_num%}">
					<a href="/shop/product/detail/{%$pitem.pid%}.html">
						<img src="{%$pitem.pic%}"></img>
						<div class="product-name">{%$pitem.title%}</div>
						<div class="product-count">数量：{%$pitem.order_buy_num%}</div>
						<div class="product-price">单价：{%$pitem.order_price%}</div>
					</a>
				</li>
			{%/foreach%}
		</ul>
	</div>
	<div class="more">
		查看更多<span></span>
	</div>
</div>