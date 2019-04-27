$(function ( ) {

    $("nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".head-portrait").click(function () {
        $(".head-portrait .My-resume").toggle();
    });
    var width=$(window).width();
    var height=$(window).height();
    moduleH=function (element) {
        $(element).css("height",height+"px");
    };
    moduleH("#jl_page1,#jl_page2,#jl_page3,#jl_page4,#jl_page5,#jl_page6");
    if (width<767){
        $("#jl_page5 .webItem").addClass("slide");
        $("#jl_page5 .webItem").eq(0).addClass("active");
    }
    if(width>768){
        $("#jl_page5 .webItem .hover-bg").mouseover(function () {
            $(this).addClass("biger");
        }).mouseout(function () {
            $(this).removeClass("biger")
        })
    }
    var selHei=$(".self-eval .self-cover").height();
    console.log(selHei);
    if (width<620){
        $(".self-eval .self-cover").css("padding-top",selHei*0.26+"px");
    }else if (width<767){
        $(".self-eval .self-cover").css("padding-top",selHei*0.3+"px");
    }else {
        $(".self-eval .self-cover").css("padding-top",selHei*0.3+"px");
    }
    var preCol = [{
        "color": "#1abc9c",
    }, {
        "color": "#e74c3c",
    }, {
        "color": "#34495e",
    }, {
        "color": "#3498db",
    }, {
        "color": "#d35400",
    }, {
        "color": "#9b59b6",
    }];
    $('.skills li').each(function(index){
        $(this).find('h4').css('backgroundColor', preCol[index].color);
        $(this).find('.progress .progress-bar').css('backgroundColor', preCol[index].color);
    })
    var len=$("#jl_page4 .work-time").width();
    if(width<768){
        $("#jl_page4 .title").css("left",$("#jl_page4 .work-time").width()-47+"px");
    }else {
        $("#jl_page4 .title").css("left",$("#jl_page4 .work-time").width()-32+"px");
    }
    $(window).resize(function () {
        var widTH=$(window).width();
        if(widTH<768){
            $("#jl_page4 .title").css("left",$("#jl_page4 .work-time").width()-47+"px");
            $("#jl_page5 .webItem").addClass("slide");
            $("#jl_page5 .webItem").eq(0).addClass("active");
        }else {
            $("#jl_page4 .title").css("left",$("#jl_page4 .work-time").width()-32+"px");
            $("#jl_page5 .webItem").removeClass("slide");
            $("#jl_page5 .webItem").eq(0).removeClass("active");
        }
    });
    $(".work-exp h3.title").mouseenter(function () {
        $(this).text(" ").addClass("xuan")
    });
    $(".work-exp h3.title").mouseout(function () {
        $(this).text("个人简历").removeClass("xuan")
    });

    setTimeout(function () {
        $('.self-eval .corner').show();
        $('.self-eval_detail').show();
    }, 500);

    setTimeout(function () {
        $('.self-eval .top').animate({'height': '25%'},400).css("z-index",0);
        $('.self-eval .foot').animate({'height': '28%'},400).css("z-index",0);
    },500);
    $(".self-eval .contact-me").on("click",function () {
        $(this).children("div").toggle()
    });
    $(".self-eval .send-me").on("click",function () {
        $(".self-eval .reserved").show();
    });
    $(".self-eval .plw-me").on("click",function () {
        $(".self-eval .comments").show();
    });
    $("#jl_page6 .turn-off").on("click",function () {
        $(this).parent().hide();
    });


    $('#content').fullpage({
        navigation: true,
        scrollOverflow: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        easing: 'easeInOut',
    });
    $("#fp-nav").addClass("hidden-xs").append("<div class='dot-line'></div><div class='my-audio'><audio src='images/audio/show.OGG' autoplay controls id='mp3Btn'></audio></div>")




})