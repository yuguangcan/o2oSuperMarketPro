require(['zepto','common','swipe'], function( $ ,common,Swipe ) {
	$(function(){
		var activityList = $('.activity-list'),
			positionList = $('#slider-position');
		$.get('/shop/ajax/getactivity',function(res){
			var data = JSON.parse(res);
			if(data && data.errno == 0){
				var imgList = data.data;
				for(var i=0;i<imgList.length;i++){
					var div = $('<div></div>');
					$('<a class="activity"></a>').css({
						'background-image': 'url('+imgList[i].img + ')'
					}).attr('href',imgList[i].url).appendTo(div);
					div.appendTo(activityList);
					positionList.append(i==0?'<li class="on"></li>':'<li></li>');
				}
				var bullets = positionList.find('li');
				new Swipe(document.getElementById('activity-slider'), {
					auto: 3000,
            		continuous: true,
            		callback: function(pos) {

            		  var i = bullets.length;
            		  
            		  if( i == 2 ){
            		    if(pos == 1||pos == 3){
            		        bullets[0].className = ' ';
            		        bullets[1].className = 'on';
            		    }else{
            		        bullets[1].className = ' ';
            		        bullets[0].className = 'on';
            		    }
            		  }else{
            		    while (i--) {
            		        bullets[i].className = ' ';
            		    }
            		    bullets[pos].className = 'on';
            		  }
            		}
            	});
			}
		});

		function Nav(option){
			this.nav = $(option.nav);
			this.navlist = this.nav.find('li');
			this.callback = option.callback;
			this.lastIndex = option.defaultIndex || 0;
			this.navToIndex(this.lastIndex);
			this._bindEvent();
		}
		Nav.prototype = {
			navToIndex : function(index){
				if(this.navlist.eq(index).hasClass('cur')){
					return;
				}
				if(index>=0 && index < this.navlist.length){
					this._setCssToIndex(index);
					this._scrollIntoView(index);
					this.lastIndex = index;
				}
			},
			_setCssToIndex : function(index){
				this.navlist.eq(this.lastIndex).removeClass('cur');
				this.navlist.eq(index).addClass('cur');
			},
			_scrollIntoView : function(index){
				var current = this.navlist.eq(index),
					currentOffset = current.offset(),
					scrollParent = current.parent().parent(),
					parentOffset = current.parent().offset();

				var windowWidth = document.body.scrollWidth;

				if(currentOffset.width + currentOffset.left > windowWidth ){
					scrollParent.scrollLeft(currentOffset.left);
				}else if(currentOffset.left <= 0 ){
					scrollParent.scrollLeft(-parentOffset.left+currentOffset.left);
				}

			},
			_bindEvent : function(){
				var _self = this;
				this.navlist.on('click',function(){
					_self.navToIndex($.inArray(this,_self.navlist));
					if(typeof(_self.callback) === 'function'){
						_self.callback(_self.lastIndex);
					}
				});
			}

		};

		var indexNavList = $('.category ul'),
			type = getQueryStringByName('type'),
			paramNavItem = indexNavList.find('li[data-type="'+type+'"]'),
			paramIndex = $.inArray(paramNavItem.get(0),indexNavList.find('li'));

		function getQueryStringByName(name){
	        var result = location.search.match(new RegExp('[\?\&]' + name+ '=([^\&]+)','i'));
	        if(result == null || result.length < 1){
	            return '';
	        }
	        return result[1];
	    }

		var categoryNav = new Nav({
			nav : $('.category ul'),
			callback : function(index){
				categorySwipe.slide(index,250);
			},
			defaultIndex : paramIndex == -1 ? 0:paramIndex
		});

		var categorySwipe = new Swipe(document.getElementById('category-slider'), {		
			startSlide : paramIndex == -1 ? 0:paramIndex,
			callback: function(index, elem) {},
			transitionEnd: function(index, elem) {
				categoryNav.navToIndex(index);
			}
		});

				
	});
});
