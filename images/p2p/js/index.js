$(function() {

    $("#phone").mouseover(function () {
        $("#down").show()
    })
    $("#phone").mouseout(function () {
        $("#down").hide()
    })
    var alist=$("#share a")
    var index=0
    for (var i=0;i<alist.length;i++){
        $(alist[i]).attr("index",i+1);
        $(alist[i]).hover(function( ){
            index=$(this).attr("index");
            $(this).css("background", "url(images/top_0"+index+"0.png) no-repeat center center");
        }, function( ){
            $(this).css("background", "url(images/top_0"+index+".jpg) no-repeat center center");
        } );
    }

    var list=$("#nav li")
    list.mouseover(function () {
        list.removeClass("current")
        $(this).addClass("current")
        $(this).children("ul").show()
    })
    list.mouseout(function () {
        list.removeClass("current")
        // $(this).parent().firstChild.addClass("current")
        $(this).children("ul").hide()
    })

    var kind=$(".kind_div .kind_bgpic");
    var num=0
    for (var i=0;i<kind.length;i++){
        $(kind[i]).attr("num",i+1);
        $(kind[i]).hover(function( ){
            num=$(this).attr("num");
            $(this).css("background", "url(images/kind_bgpic_kind0"+num+"0.png) no-repeat center center");
            $(this).next().css("color","#29A7E1");
        }, function( ){
            $(this).css("background", "url(images/kind_bgpic_kind0"+num+".png) no-repeat center center");
            $(this).next().css("color","#555")
        } );
    }
    $(".banner").mouseover(function () {
        $(".arrow").show();
        clearInterval(innerTime);
    })
    $(".banner").mouseout(function () {
        $(".arrow").hide();
        innerTime=setInterval(autoplay,1000);
    });
    var index=0;
    var autoplay=function () {
            index++;
            if(index>$(".inner li").length-1){
                index=0
            }
            console.log(index)
            $(".inner li").eq(index).fadeIn().siblings().fadeOut();
            $(".circle i").eq(index).addClass("current").siblings().removeClass("current");
    };
        $("#left").click(autoplay);
    $("#right").click(function () {
        index--
        if(index<0){
            index=$(".inner li").length-1;
        }
        console.log(index)
        $(".inner li").eq(index).fadeIn().siblings().fadeOut();
        $(".circle i").eq(index).addClass("current").siblings().removeClass("current");
    });
    var innerTime=setInterval(autoplay,1000);

    $(".prj-item").hover(function () {
        $(this).addClass("z-hover").siblings().removeClass("z-hover");
    });
    $(".rugular-cell").hover(function () {
        $(this).addClass("z-hover").siblings().removeClass("z-hover");
    });
    $(".fund-box").hover(function () {
        $(this).css("backgroundColor", "rgba(0, 150, 255, 0.2)" ).siblings().css("backgroundColor", "#fff");
    });
    $(".investment_tit span").mouseover(function () {
        $(this).addClass("curspan").siblings("span").removeClass("curspan");
        var idx=$(this).index();
        $(".investDetail").eq(idx/2).addClass("selected").siblings().removeClass("selected");
    });

    var informTit0l=$("#inform-tit1")
    var informTit02=$("#inform-tit2")
    informTit0l.mouseover(function () {
        $(this).removeClass("remocl").addClass("addcl")
        informTit02.removeClass("addcl").addClass("remocl")
        $("#inform-box1").show();
        $("#inform-box2").hide();
    });
    informTit02.mouseover(function () {
        $(this).removeClass("remocl").addClass("addcl")
        informTit0l.removeClass("addcl").addClass("remocl")
        $("#inform-box2").show();
        $("#inform-box1").hide();
    });
    var i=0;
    var autoFu=function () {
        i++;
        if(i>12){
            i=1
        }
        $(".partner-bg").css("left",-150*i+"px");
    };
     var autoTime=setInterval(autoFu,500);
    $(".partner-bg").mouseover(function () {
        clearInterval(autoTime);
    });
    $(".partner-bg").mouseout(function () {
        autoTime=setInterval(autoFu,500);
    });
})
