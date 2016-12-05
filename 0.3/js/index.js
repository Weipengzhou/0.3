/**
 * Created by gzwy on 2016/9/13.
 */




    var InterValObj; //timer变量，控制时间
    var count = 60; //间隔函数，1秒执行
    var curCount;//当前剩余秒数

    function sendMessage() {
        curCount = count;
        //设置button效果，开始计时
        $("#btnSendCode").attr("disabled", "true");
        $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        //向后台发送处理数据
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "text", //数据格式:JSON
            url: '', //目标地址
            data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
            error: function (XMLHttpRequest, textStatus, errorThrown) { },
            success: function (msg){ }
        });
    }

//timer处理函数
    function SetRemainTime() {
        if (curCount == 0) {
            window.clearInterval(InterValObj);//停止计时器
            $("#btnSendCode").removeAttr("disabled");//启用按钮
            $("#btnSendCode").val("重新发送验证码");
        }
        else {
            curCount--;
            $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
        }
    }



//表单验证
// function $(id) {
//     return document.getElementById(id);
// }
// function check() {
//     var mobile = $("Mobile").value;
//     var msg    = $("Msg").value;
//     var password=$("Password").value;
//     var repeat =$("Repeat").value;
//
//
// }


//弹窗
function zc() {
    $(".register").fadeIn();
    $(".modal-dialog").fadeIn();
    $(".modal-login").hide();

}
function dl() {
    $(".register").fadeIn();
    $(".modal-login").fadeIn();
    $(".success").hide();

}
function  gb() {
    $(".register").fadeOut();
}
$(function () {
    //返回顶部隐藏
    showScroll();
    function showScroll(){
        $(window).scroll( function() {
            var scrollValue=$(window).scrollTop();
            if(scrollValue > 600){$(".tabList").addClass("fix")}
            else  if( scrollValue > 100 ){$('.scroll').fadeIn()}
            else {$('#scroll').fadeOut();$(".tabList").removeClass("fix")}
        } );
        $('#scroll').click(function(){
            $("html,body").animate({scrollTop:0},200);
        });
    }
    //右侧导航电话信息栏
    $(".right-nav").delegate(".phone","mouseover mouseout",function() {
        $(".show-tel ").fadeToggle();
    });

});


