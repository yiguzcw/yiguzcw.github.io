$(function () {
    var width=window.screen.width/2 ;
    var left=$("#month-wrap .active").offset().left;
    function activeMouth() {

        var box=$("#month-wrap .active").offset().width/2;
        console.log(left);
        if (left>width){
            $("#month-wrap").scrollLeft(left-width+box);
        }else{
            $("#month-wrap").scrollLeft(left);
        }
    }
    activeMouth();
    $("#month-wrap .item").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
        console.log($("#month-wrap .active").offset().left);
        // activeMouth();
        $("#state_wrap .item").hide();
        var num1=Math.floor(Math.random()*15);
        var num2=Math.floor(Math.random()*15);
        var num3=Math.floor(Math.random()*15);
        if (num2==num1){
            num2=Math.floor(Math.random()*15);
        }
        if (num3==num1||num3==num2){
            num3=Math.floor(Math.random()*15);
        }
        $("#state_wrap .item").eq(num1).show();
        $("#state_wrap .item").eq(num2).show();
        $("#state_wrap .item").eq(num3).show();
    });
    var mySwiper = new Swiper('#sdewre', {
        autoplay: 1000,//可选选项，自动滑动
        pagination: '.swiper-pagination',
        paginationType : 'bullets',
    });
    var footbg=function(){
        var num=0
        $(".foot span").each(function() {
            $(this).parent().attr('index',num);
            num++
            $(this).css({
                "background": "url(images/footer_bg"+num+".png) no-repeat center center",
                "background-size": "24px auto",
            });
        });
    }
    footbg();
    $(".foot").on("click",function() {
        footbg();
        var index=parseInt($(this).index()+1);
        $(this).find('span').css({
            "background": "url(images/footer_bg"+index+"_act.png) no-repeat center center",
            "background-size": "24px auto",
        });
        $(this).addClass('act').siblings().removeClass('act');
    });
    setTimeout(function () {
        $(".foot").eq(2).click();
    },20);

})