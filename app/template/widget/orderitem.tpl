{%*单个订单状态*%}

<div class="order-item" data-oid={%$item.oid%}>
	<div class="process-title">
		{%if $item.status == 0%}
			<span class="processing">等待出库</span>
		{%elseif $item.status == 1%}
			<span class="processing">等待出库</span>
		{%elseif $item.status == 2%}
			<span class="processing">送货员正在派送</span>
		{%elseif $item.status == 4%}
			<span class="canceled">已取消</span>
		{%elseif $item.status == 3%}
			<div class="evaluate">
				服务态度：
				{%if $item.is_evaluate == '1'%}
					<ul>
						{%for $start=1 to $item.star%}
							<li class="icon-star"></li>
						{%/for%}
					</ul>
				{%else%}
					<ul>
						<li class="icon-unstar"></li>
						<li class="icon-unstar"></li>
						<li class="icon-unstar"></li>
						<li class="icon-unstar"></li>
						<li class="icon-unstar"></li>
					</ul>
					<button class="rank-submit submit-btn">确定</button>
				{%/if%}
				
			</div>
		{%/if%}
	</div>
	<div class="info">
		<div class="title">
			{%if $item.status == 0%}
			<button class="cancel-submit cancel-btn">
				取消订单
			</button>
			{%elseif $item.status == 4%}
			<button class="rebuy-submit submit-btn">
				重新购买
			</button>
			{%/if%}

			<p>订单总价：￥{%$item.price%}</p>
			<p>订单号：{%$item.oid%}</p>
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
		<div class="other">
			<p>支付方式：
				{%if $item.pay_type == 0%}
					货到付款
				{%elseif $item.pay_type == 1%}
					微信支付
				{%/if%}
			</p>
			<p><span>收货地址：</span><span class="other-info">{%$item.address%}</span></p>
			<p>派送员：{%$item.sender_name%}</p>
			<p><span>下单日期：</span><span class="other-info">{%$item.create_time%}</span></p>
		</div>
		<div class="more">
			查看更多<span></span>
		</div>
	</div>
</div>