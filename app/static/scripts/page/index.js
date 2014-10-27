require(['zepto','common','swipe'], function( $ ,common,Swipe ) {
	$(function(){
		var activityList = $('.activity-list');
		$.get('/shop/ajax/getactivity',function(res){
			var data = JSON.parse(res);
			if(data && data.errno == 0){
				var imgList = data.data;
				for(var i=0;i<imgList.length;i++){
					$('<a href="'+imgList[i].url+'" class="activity" style="background-image:url('+imgList[i].img+')"').appendTo(activityList);
				}
				new Swipe(document.getElementById('activity-slider'), {
					auto: 3000,
            		continuous: true
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
