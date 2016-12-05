/**
 * Created by gzwy on 2016/10/28.
 */

window.onload = function () {
    var xsm = localStorage.getItem('xsm'); //换算后面积
    var xmm = localStorage.getItem('xmm'); //初始建筑面积
    var people =localStorage.getItem('xmnumber');//人数
    var price =localStorage.getItem('price');//价格
    var type =localStorage.getItem('xmlx');//类型
    var day; //天数
    var b = $('#center').children();

    if(xmm<400){
        $('#time').text('18');
        var day =18;
    }else {
        $('#time').text('？');
        var day ='?';
    }
    function sta(param) {
        var on = [];
        var txt = param.find(':text');
        for (var i = 0; i < txt.length; i++) {
            on.push(txt.eq(i).val()); // 将文 本框的值添加到数组中
        }
        return on;
    }              //获取每个值组成数组


    function suan() {
        function all(param) {
            var str = 0;
            param.each(function () {
                str += parseInt($(this).val());

            });
            return str;

        }                //求和方法


        var a1 = sta($('.one'));                          //总经理办公室
        var a2 = sta($('.twoa'));                         //主管办公室
        var a3 = sta($('.three'));                        //独立办公室
        var a4 = sta($('.eight'));                        //会议室
        var a5 = sta($('.five'));                         //茶水间
        var a6 = sta($('.seven'));                        //储物室
        var a7 = sta($('.six'))                           //前厅
        var a8 = sta($('.four'));                         //接待室
        var an = sta($('.bottom .m div:eq(0)'));         //自定义
        var af = sta($('.bottom .m div:eq(1)'));         //自定义


        var yi = all($('.one input'));                    //总经理总面积
        var er = all($('.twoa input'));                   //主管室总面积
        var sa = all($('.three input'));                  //独立办公室总面积
        var si = all($('.eight input'));                  //会议室总面积
        var wu = all($('.five input'));                   //茶水间总面积
        var li = all($('.seven input'));                  //储物室总面积
        var qi = all($('.six input'));                    //前厅总面积
        var ba = all($('.four input'));                   //接待室总面积
        var f  = all($('.bottom .m input.w-100'));        //自定义总值

        var g = yi + er + sa + si + wu + li + qi + ba;    //获取前8个value 总和
        var c = $('#center .aaa:last input');
        var d = xsm - g - f; //开敞面积


        function people() {
            $(".zd .to .m  .ren ").find('span').text(parseInt(d/3));
            var ars =$('.eight input');
            for(var i=0;i<ars.length;i++){
                $(ars[i]).parent().siblings('.ren').children('span').text(parseInt($(ars[i]).val()/2))
            }
        }
        people();

        function bj() {
            if(xmm<=100){
                var F1 = 966;   //总经理办公室
                var F2 = 798;   //主管办公室
                var F3 = 798;   //独立办公室
                var F4 = 882;   //会议室
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义
                var F10 = 380;   //开敞
                m = yi*F1+er*F2+sa*F3+si*F4+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9

            }
            else if(xmm<=160){
                var F1 = 721;   //总经理办公室
                var F2 = 840;   //主管办公室
                var F3 = 766;   //独立办公室
                var F4 = 814;   //会议室
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义
                var F10 = 384;   //开敞
                m = yi*F1+er*F2+sa*F3+si*F4+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9

            }
            else if(xmm<=250){
                var F1 = 557;   //总经理办公室
                var F2 = 919;   //主管办公室
                var F3 = 591;   //独立办公室
                var F4 = 834;   //会议室
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义
                var F10= 340;   //开敞
                m = yi*F1+er*F2+sa*F3+si*F4+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9

            }//算法改变
            else if(xmm<=350){
                var F1 = 602;   //总经理办公室
                var F2 = 754;   //主管办公室
                var F3 = 712;   //独立办公室
                var F4_12 = 416;   //会议室
                var F4_18 = 792;
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F10= 348;   //开敞
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义

                function hq(pop) {
                    var sum =0;
                    var snm =0;
                    var xiao= $.grep(pop,function(value){
                        return value <18 ;
                    });
                    var da= $.grep(pop,function(value){
                        return value >=18;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }) //大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;
                    })//小于18平面积

                    return sum*F4_18+snm*F4_12
                }
                var k= hq(a4); //会议室价格
             m = yi*F1+er*F2+sa*F3+k+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9

            }
            else if(xmm<=450){
                var F1 = 507;   //总经理办公室
                var F2 = 700;   //主管办公室
                var F3 = 632;   //独立办公室
                var F4_15 = 578;   //会议室
                var F4_28 = 659;
                var F5 = 841;    //茶水间
                var F6 = 982;   //储物室
                var F10= 309;   //开敞
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义

                function ha(pop) {
                    var sum =0;
                    var snm =0;
                    var xiao= $.grep(pop,function(value){
                        return value <28 ;
                    });
                    var da= $.grep(pop,function(value){
                        return value >=28;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }); //大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;
                    });//小于18平面积

                    return sum*F4_15+snm*F4_28
                }
                var k= ha(a4); //会议室价格
                m = yi*F1+er*F2+sa*F3+k+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9



            }
            else if(xmm<=550){
                var F1 = 482;   //总经理办公室
                var F2 = 773;   //主管办公室
                var F3_8 = 927;   //独立办公室
                var F3_12 = 955;   //独立办公室
                var F4_9 = 750;   //会议室
                var F4_20 = 791;
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F10= 350;   //开敞
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义
                function he(pop) {
                    var sum =0;
                    var snm =0;
                    var xiao= $.grep(pop,function(value){
                        return value <20 ;
                    });
                    var da= $.grep(pop,function(value){
                        return value >=20;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }) //大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;

                    })//小于18平面积

                    return  snm*F4_20+sum*F4_9;
                }
                function hh(pop) {
                    var sum =0;
                    var snm =0;
                    var xiao= $.grep(pop,function(value){
                        return value <12 ;
                    });
                    var da= $.grep(pop,function(value){
                        return value >=12;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }) ;//大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;
                    });//小于18平面积

                    return sum*F3_8+snm*F3_12

                }

                var k= he(a4) ;  //会议室价格
                var p= hh(a3);   //部门
                m = yi*F1+er*F2+p+k+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9

            }
            else if(xmm<700){
                var F1 = 475;   //总经理办公室
                var F2_12 = 806;   //主管办公室
                var F2_16 = 860;   //主管办公室
                var F3 = 971;   //独立办公室
                var F4_9  = 566;   //会议室
                var F4_12 = 605;   //会议室
                var F4_20 = 828;
                var F5 = 841;    //茶水间
                var F6 = 857;   //储物室
                var F10= 330;   //开敞
                var F7 = 330;   //前厅
                var F8 = 0;     //接待室
                var F9 = 800;   //自定义
                function hs(pop) {
                    var sum =0;
                    var snm =0;
                    var xiao= $.grep(pop,function(value){
                        return value <16 ;
                    });
                    var da= $.grep(pop,function(value){
                        return value >=16;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }) ;//大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;
                    });//小于18平面积

                    return sum*F2_12+snm*F2_16
                }
                function hz(pop) {
                    var sum =0;
                    var snm =0;
                    var sam =0;
                    var xiao= $.grep(pop,function(value){
                        return value <=9 ;
                    });
                    var zhong= $.grep(pop,function(value){
                        return value >9&&value<=12;
                    });
                    var da= $.grep(pop,function(value){
                        return value >12;
                    });

                    $.each(da, function getSum (index,item){
                        sum +=parseInt(item) ;
                    }) //大于18平面积
                    $.each(xiao, function getSum (index,item){
                        snm +=parseInt(item) ;

                    })//小于18平面积
                    $.each(zhong, function getSum (index,item){
                        sam+=parseInt(item) ;

                    })//小于18平面积

                    return  snm*F4_20+sam*F4_12 +sum*F4_9;

                }
                var p= hs(a2);   //经理
                var k= hz(a4);   //会议室价格
                m = yi*F1+p+sa*F3+k+wu*F5+li*F6+qi*F7+ba*F8+d*F10+af*F9
            }
            return m;
        }
        var m=bj(); //报价

        if (parseInt(d) < 0) {
            alert('您输入的面积过大,请重新输入');
        }else {
            c.val(d);
            $('.top-title .bo:eq(0) p').text(d + '㎡');
            var ch1 = 0;var ch2 = 0;
            if(document.getElementById('check1').checked){
                 ch1 = 40;

            }
            if(document.getElementById('check2').checked){
                 ch2 = 30;
            }
            $('.top-title .bo:eq(2) p').text(m-(ch1+ch2)*xsm +'元');
            localStorage.setItem('price',m-(ch1+ch2)*xsm);
        }

    }

    function Arry() {
        var arry = [];
        if (xmm <= 100) {
            arry = [{number: '0', value: '9'}, {number: '7', value: '12'}, {number: '8', value: '1'}];
        } else if (xmm <= 160) {
            arry = [{number: '0', value: '16'}, {number: '1', value: '12'}, {number: '7', value: '12'}, {
                number: '8',
                value: '1'
            }];
        } else if (xmm <= 250) {
            arry = [{number: '0', value: '20'}, {number: '1', value: '12'}, {number: '2', value: '12'}, {
                number: '7',
                value: '16'
            }, {number: '8', value: '1'}];
        } else if (xmm <= 350) {
            arry = [{number: '0', value: '20'}, {number: '1', value: '16'}, {number: '2', value: '8'}, {
                number: '2',
                value: '8'
            }, {number: '7', value: '12'}, {number: '7', value: '18'}, {number: '8', value: '1'}];
        } else if (xmm <= 450) {
            arry = [{number: '0', value: '20'}, {number: '1', value: '16'}, {number: '1', value: '16'}, {
                number: '2',
                value: '10'
            }, {number: '2', value: '10'}, {number: '6', value: '5'}, {number: '7', value: '28'}, {
                number: '7',
                value: '15'
            }, {number: '8', value: '1'}];
        } else if (xmm <= 550) {
            arry = [{number: '0', value: '24'}, {number: '1', value: '16'}, {number: '1', value: '16'}, {
                number: '1',
                value: '16'
            }, {number: '2', value: '12'}, {number: '2', value: '12'}, {number: '2', value: '8'}, {
                number: '6',
                value: '8'
            }, {number: '7', value: '9'}, {number: '7', value: '20'}, {number: '8', value: '1'}];
        } else if (xmm <= 700) {
            arry = [{number: '0', value: '24'}, {number: '1', value: '12'}, {number: '1', value: '16'}, {
                number: '1',
                value: '16'
            }, {number: '2', value: '10'}, {number: '2', value: '10'}, {number: '2', value: '10'}, {
                number: '4',
                value: '12'
            }, {number: '6', value: '8'}, {number: '7', value: '9'}, {number: '7', value: '12'}, {
                number: '7',
                value: '20'
            }, {number: '8', value: '1'}];
        }
        return arry;
    }



    var arry = Arry();

    $.each(arry, function (index, contant) {
         if(contant.number > 7){ b.eq(contant.number).find('.to').children('.add').before(' <div class="m"> <div class="top"> <span class="left scroll-chevron"></span> <input type="text"  value=' + contant.value + '> <b>㎡</b><span class="right scroll-chevron"></span> </div> <div class="bottom"> </div> <em class="ren">可容纳<span>0</span>人</span></em><em class="del"></em> </div>');
        }else if(contant.number > 6) {
            b.eq(contant.number).find('.to').children('.add').before(' <div class="m"> <div class="top"> <span class="left scroll-chevron">-</span> <input type="text"  value=' + contant.value + '> <b>㎡</b><span class="right scroll-chevron">+</span> </div> <div class="bottom"> </div> <em class="ren">可容纳<span>0</span>人</span></em><em class="del"></em> </div>');
        }
        else{
            b.eq(contant.number).find('.to').children('.add').before('<div class="m"> <div class="top"> <span class="left scroll-chevron">-</span> <input type="text"  value=' + contant.value + '> <b>㎡</b><span class="right scroll-chevron">+</span> </div> <div class="bottom"> </div> <em class="del"></em> </div>')

        }
        suan();
    });//根据数值显示不同配置


    $.each($('.aaa'), function (index) {
        if ($(this).children('.to').children('.m').length < 1) {
            $(this).children('.tou').removeClass('on')
        }
        else {
            $(this).children('.tou').addClass('on')
        }
    });//加载时头部颜色变化


    $('.scroll-chevron').live('click', function () {

        if ($(this).hasClass('right')) {//判断点击按钮是否有class：right
            $(this).siblings('input').val(parseInt($(this).siblings('input').val()) + 1);//有，为input中的值加1

        } else {
            if (parseInt($(this).siblings('input').val()) < 1) {//判断input中得值是否小于1
                return;                 //是，停止动作
            }
            $(this).siblings('input').val(parseInt($(this).siblings('input').val()) - 1);//否,让input中得值减1

        }
        suan();
    });//点击加减


    $(".aaa ").live('DOMNodeRemoved', function () {

        if ($(this).children('.to').find('.m').length < 2) {
            $(this).children('.tou').removeClass('on');
        } else if ($(this).children('.to').find('.m').length <= 6) {
            $(this).children('.to').find('.add').show()
        }
    }).live('DOMNodeInserted ', function () {

        $(this).children('.tou').addClass('on');
        if ($(this).children('.to').find('.m').length > 5) {
            $(this).children('.to').find('.add').hide()
        }

    }); //监听图标变色

    $(".add").live('click', function () {
        var par = $(this).parent().parent();
        if (par.hasClass('people')) {
            $(this).before(' <div class="m"> <div class="top"> <span class="left scroll-chevron">-</span> <input type="text"  value="0"> <b>㎡</b><span class="right scroll-chevron">+</span> </div> <div class="bottom"> </div> <em class="ren">可容纳<span>0</span>人</span></em><em class="del"></em> </div>');
        }
        else if (par.hasClass('aaa')) {
            $(this).before(' <div class="m"> <div class="top"> <span class="left scroll-chevron">-</span> <input type="text"  value="0"> <b>㎡</b><span class="right scroll-chevron">+</span> </div> <div class="bottom"> </div> <em class="del"></em> </div>');
        } else {
            $(this).before('<div class="m"> <div><p>房间名称</p><input type="text" class="w-200" placeholder="请输入房间类型"></div> <div><p class="t-r">面积 &nbsp;</p><input type="text" class="w-100" value="0"><span>㎡</span><em class="del"></em></div> </div>')
        }

    });//添加功能

    $(".del").live('click', function () {
        var par = $(this).parent().parent();
        if (par.hasClass('to')) {
            $(this).parent().remove()
        } else ( $(this).parent().parent().remove())
        suan();
    }); //删除功能


    $('.aaa input,.bottom .m input.w-100').live('input propertychange', function () {
        if ($(this).val() == '') {
            $(this).val(0)
        }
        suan();

    });//input输入时校对值
    $('#check1,#check2').live('click', function () {

        suan();
    });


    $("#sublime").click(function() {
        if($("#check1").is(":checked")){
            var check1 = true;
        }else { var check1 = false;}
        if($("#check2").is(":checked")){
            var check2 =true;
        }else {
            var check2 = false;
        }
        var a1 = sta($('.one'));                          //总经理办公室
        var a2 = sta($('.twoa'));                         //主管办公室
        var a3 = sta($('.three'));                        //独立办公室
        var a4 = sta($('.eight'));                        //会议室
        var a5 = sta($('.five'));                         //茶水间
        var a6 = sta($('.seven'));                        //储物室
        var a7 = sta($('.six')) ;                         //前厅
        var a8 = sta($('.four'));                         //接待室
        var a9 = sta($('.zd'));                           //开敞
        var af = sta($('.bottom .m div:eq(1)'));         //自定义
        var an = sta($('.bottom .m div:eq(0)'));         //自定义

        $("#request-process-patent").html("正在提交数据，请勿关闭当前窗口...");
        function GetJsonData() {
            var json = {
                "F1": a1,
                "F2": a2,
                "F3": a3,
                "F6": a4,
                "F5": a5,
                "F8": a6,
                "F7": a7,
                "F4": a8,
                "F10":a9,
                "F9": af,
                "F9_name":an,
                "people":people,
                "price":price,
                "day":day,
                "type":type,
                "check1":check1,
                "check2":check2
            };

            return json;

        }
        $.ajax({
            type: "POST",
            url: " ",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(GetJsonData()),
            dataType: "json",
            success: function (message) {
                if (message > 0) {
                    window.location = "http://www.51ddo.com/gzwy/3.0/ProcessThree.html"
                }
            },
            error: function (message) {
                $("#request-process-patent").html("提交数据失败！");
            }
        });
    });
    var cook2 = localStorage.getItem('cook2');
    if(cook2 == 2){
        $("#lead").hide();
    }else{
        $("#lead").fadeIn();
    }
    $(".cancel").live("click",function(){
        $(this).parent().parent().parent().fadeOut()
        closeclick()
    })

    $("#cc").live('click',function(){
        localStorage.setItem('cook2',2);
    })

    $(".know").live("click",function(){
        for(var i=0;i<$(".know").length;i++){
            $(this).parent().parent().fadeOut();
        }
    })


};






