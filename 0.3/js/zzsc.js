(function($) {
    $.fn.jCarouselLite = function(o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,
            speed: 200,
            easing: null,
            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,
            beforeStart: null,
            afterEnd: null
        },
        o || {});
        return this.each(function() {
            var b = false,
            animCss = o.vertical ? "top": "left",
            sizeCss = o.vertical ? "height": "width";
            var c = $(this),
            ul = $(" >ul", c),
            tLi = $(">li", ul),
            tl = tLi.size(),
            v = o.visible;
            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
                o.start += v
            }
            var f = $(">li", ul),
            itemLength = f.size(),
            curr = o.start;
            c.css("visibility", "visible");
            f.css({
                overflow: "hidden",
                float: o.vertical ? "none": "left"
            });
            ul.css({
                margin: "0",
                padding: "0",
                position: "relative",
                "list-style-type": "none",
                "z-index": "1"
            });
            c.css({
                overflow: "hidden",
                position: "relative",
                "z-index": "2",
                left: "0px"
            });
            var g = o.vertical ? height(f) : width(f);
            var h = g * itemLength;
            var j = g * v;
            f.css({
                width: f.width(),
                height: f.height()
            });
            ul.css(sizeCss, h + "px").css(animCss, -(curr * g));
            c.css(sizeCss, j + "px");
            if (o.btnPrev) $(o.btnPrev).click(function() {
                return go(curr - o.scroll)
            });
            if (o.btnNext) $(o.btnNext).click(function() {
                return go(curr + o.scroll)
            });
            if (o.btnGo) $.each(o.btnGo,
            function(i, a) {
                $(a).click(function() {
                    return go(o.circular ? o.visible + (i - 1) * o.scroll: i - 1)
                })
            });
            if (o.mouseWheel && c.mousewheel) c.mousewheel(function(e, d) {
                return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll)
            });
            if (o.auto) setInterval(function() {
                go(curr + o.scroll)
            },
            o.auto + o.speed);
            function vis() {
                return f.slice(curr).slice(0, v)
            }
            function go(a) {
                if (!b) {
                    if (o.beforeStart) o.beforeStart.call(this, vis());
                    if (o.circular) {
                        if (a <= o.start - v - 1) {
                            ul.css(animCss, -((itemLength - (v * 2)) * g) + "px");
                            curr = a == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll
                        } else if (a >= itemLength - v + 1) {
                            ul.css(animCss, -((v) * g) + "px");
                            curr = a == itemLength - v + 1 ? v + 1 : v + o.scroll
                        } else curr = a
                    } else {
                        if (a < 0 || a > itemLength - v) return;
                        else curr = a
                    }
                    b = true;
                    ul.animate(animCss == "left" ? {
                        left: -(curr * g)
                    }: {
                        top: -(curr * g)
                    },
                    o.speed, o.easing,
                    function() {
                        if (o.afterEnd) o.afterEnd.call(this, vis());
                        b = false

                    });
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled")
                    }
                }
                return false
            }
        })
    };
    function css(a, b) {
        return parseInt($.css(a[0], b)) || 0
    }
    function width(a) {
        try {
            return a[0].offsetWidth + css(a, 'marginLeft') + css(a, 'marginRight')
        } catch(ex) {
            return 0
        }
    }
    function height(a) {
        return a[0].offsetHeight + css(a, 'marginTop') + css(a, 'marginBottom')
    }
})(jQuery);

function overall(root){
	var root = root || document;
	var re = /j_([\w_]+)/;
	var funcs = {};
	$(".js",root).each(function(i) {
		var m = re.exec(this.className);
		if (m) {
			var f = funcs[m[1]];
			if (!f) {
				f = eval('CF.' + m[1].replace(/\_/gi,'.'));
				funcs[m[1]] = f;
			}
			f && f(this);
		}
	});
}

var CF = {};


//首页
CF.index = {
	//促销产品跑马灯
	carouseProduct: function(obj){		
		var obj = $(obj);
		var prevChild = obj.prev();
		var visible = 4;
		var liNums = $('li', obj).length;		
		var pageNum = Math.ceil( liNums/visible );
		var pageStr = '';
		prevChild.append('<ul class="jcarouseLiteNav"></ul>');
		var jcarouseLiteNav = $('>ul.jcarouseLiteNav', prevChild);		
		for(var i = 0; i < pageNum; i++){
			pageStr += '';
		}
		jcarouseLiteNav.prepend('' + pageStr + ' <li class="next"><a><span>其他伙伴</span><b>→</b></a></li>');
		$('>li .1', jcarouseLiteNav).parent().addClass('current');

		//if(liNums <=visible){
		//	jcarouseLiteNav.hide();
		//}
		obj.jCarouselLite({
			btnNext: $('>li.next ', jcarouseLiteNav),
			btnPrev: $('>li.prev a', jcarouseLiteNav),
			visible: visible,
			scroll: visible,
			speed: 1000,
			afterEnd: function(a){
				$('>li.current', jcarouseLiteNav).removeClass('current');
				var currLI = $(a[0]).attr("class").split('order')[1];
				$('>li:eq(' + currLI + ')', jcarouseLiteNav).addClass('current');
			},
			btnGo: $('>li:not([class*=previous]):not([class*=next]) a', jcarouseLiteNav)
		});
		var width = obj.width();
		obj.width( width - 3 );
	},
	//最新卖场和省心生活跑马灯
	carouseOther: function(obj){
		var obj = $(obj);
		var prevChild = obj.prev();
		var pageNum = 3;
		var pageStr = '';
		prevChild.append('<ul class="jcarouseLiteNav"></ul>');
		var jcarouseLiteNav = $('>ul.jcarouseLiteNav', prevChild);
		
		for(var i = 0; i < pageNum; i++){
			pageStr += '<li><a class="' + (i + 1) + '"><span>' + (i + 1) + '</span></a></li>';
		}
		jcarouseLiteNav.prepend('<li class="prev"><a><span>previous</span></a></li>' + pageStr + ' <li class="next"><a><span>next</span></a></li>');
		$('>li .1', jcarouseLiteNav).parent().addClass('current');
		obj.jCarouselLite({
			btnNext: $('>li.next ', jcarouseLiteNav),
			btnPrev: $('>li.prev a', jcarouseLiteNav),
			visible: 1,
			scroll: 1,
			speed: 1000,
			afterEnd: function(a){
				$('>li.current', jcarouseLiteNav).removeClass('current');
				var currLI = $(a[0]).attr("class").split('order')[1];
				$('>li:eq(' + currLI + ')', jcarouseLiteNav).addClass('current');
			},
			btnGo: $('>li:not([class*=previous]):not([class*=next]) a', jcarouseLiteNav)
		})
	}
};



function SetuserUserInfoPannel() {
    var cookie = GetCookie('userInfo');
    if (cookie != 'close') {
        CF.common.userPannel.showPrompt('#userPannel-userInfo');
    }
}
$(function() {
    overall();


});


$(".but .le,.but .left a").live('mouseover mouseout',function () {
    $(".ts").toggle()
});

$('.modal-dialog .form-btn').live('click',function(){
    $('.modal-dialog').hide();
    $(".success").fadeIn();
})