$(function () {
    $(".goBack").click(function () {
        window.history.go(-1);
    });
    $(".title h3").on("click",function () {
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#container section").hide();
        $("#container section").eq(index).show()
    });
    $("#phone-login .text-center a").click(function () {
        $(".title h3").eq(1).click();
    });
    $("#phone-register .text-center a").click(function () {
        $(".title h3").eq(0).click();
    });
    checkInput=function (ele1,ele2,str1,str2) {
        $(ele1).on("blur",function () {
            console.log(eval(str1));
            if (eval(str1)){
                $(ele2).css("visibility","hidden").html("");
            }else {
                $(ele1).val("");
                $(ele2).css("visibility","visible").html(str2);
            }
        })
    }
    checkInput("#loginum","#loginPhone_tip","$(this).val().indexOf('admin')>=0","你输入的账户不存在，请重新输入");
    checkInput("#password1","#loginPass_tip","$(this).val().indexOf('abc')>=0","你输入的密码错误");
    var pattern = /^1[34578]\d{9}$/;
    checkInput("#phone","#phone_tip","pattern.test($(this).val())","请输入正确的手机号");
     var myname = /^[\u4E00-\u9FA5]{1,6}$/;
    checkInput("#username","#username_tip","myname.test($(this).val())","请输入一个合适的中文名");
     var numstr=/^\w+$/;
    checkInput("#password","#password_tip","numstr.test($(this).val())","请输入密码,密码限定为字母、数字或下划线的组合,长度6-20位");
    $("#repassword").on("blur",function () {
        var a=$("#repassword").val();
        var b=$("#password").val();
        if (a==b){
            $("#repassword_tip").css("visibility","hidden").html("");
        }else {
            $("#repassword").val("");
            $("#repassword_tip").css("visibility","visible").html("两次输入密码不一致");
        }
    })
    $("login").on("click",function () {
        if ($("#loginum").val()==admin1 && $("#password1").val()==abc12345){
            $("#detail_display").text("登录成功").show()
        }else {
            $("#detail_display").text("账户或者密码错误").show()
        }
    })
})