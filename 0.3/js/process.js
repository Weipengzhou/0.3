/**
 * Created by gzwy on 2016/10/27.
 */


    var xmName = document.getElementById('xm-name');
    var xmM    = document.getElementById('xm-m');
    var xmLx   = document.getElementById('xm-lx');
    var xmNumber=document.getElementById('xm-number');
    var xsM    = document.getElementById('xs-m');
    var xsNumber=document.getElementById('xs-number');

    function writer() {
        var index = xmLx.selectedIndex;
        var v = xmLx.options[index].value;
        if(xmM.value<350){
            xsM.innerHTML= Math.round(xmM.value *0.7)+'㎡';
        }else {
            xsM.innerHTML=Math.round(xmM.value *0.75)+'㎡';
        }

        xsNumber.innerHTML=xmNumber.value;
        localStorage.setItem('name',xmName.value);        //名称
        localStorage.setItem('xmm',xmM.value);            //初始面积
        localStorage.setItem('xsm',parseInt(xsM.innerText));//换算后面积
        localStorage.setItem('xmlx',v);                    //公司类型
        localStorage.setItem('xmnumber',xmNumber.value);   //人数


    }


    $(function(){
        //$(".center1 .know").click(function(){
        //    $(this).parent().parent().hide()
        //})
        $("#cc").live('click',function(){
            localStorage.setItem('cook',1);
        })

            $(".know").live("click",function(){
                for(var i=0;i<$(".know").length;i++){
                    $(this).parent().parent().fadeOut();
                }
            })
            $(".cancel").live("click",function(){
                $(this).parent().parent().parent().fadeOut()

                    localStorage.setItem('cook',1);

            })

    })
    window.onload=function(){
        var cook = localStorage.getItem('cook')
        if(cook ==1){
            $("#lead").hide();
        }else{
            $("#lead").fadeIn();
        }
    }

