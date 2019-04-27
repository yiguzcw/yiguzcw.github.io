/*
* @Author: Administrator
* @Date:   2018-06-05 14:23:21
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-05 20:35:05
*/

$(function(){
	$("#search").focus(function () {
        window.location.href="search-page.html";
    });
	var hight=window.screen.height;
	$("#maiMap").on("click",function () {
		$("#mapdiv").show().css({"height":hight-90+"px"}).siblings("#container").hide();
		$("#mapclose").click(function () {
            $("#mapdiv").hide().siblings("#container").show();
        });
        // var map = new BMap.Map("mapcontainer");          // 创建地图实例
        // var point = new BMap.Point(114.118061,22.615326);   // 创建点坐标
        // map.centerAndZoom(point, 17); 	// 初始化地图，设置中心点坐标和地图级别

        //创建和初始化地图函数：
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMapOverlay();//向地图添加覆盖物
        }
        function createMap(){
            map = new BMap.Map("mapcontainer");
            map.centerAndZoom(new BMap.Point(114.118652,22.614933),17);
        }
        function setMapEvent(){
            map.enableScrollWheelZoom();
            map.enableKeyboard();
            map.enableDragging();
            map.enableDoubleClickZoom()
        }
        function addClickHandler(target,window){
            target.addEventListener("click",function(){
                target.openInfoWindow(window);
            });
        }
        function addMapOverlay(){
            var markers = [
                {content:"我当前所在位置",title:"我的位置",imageOffset: {width:-46,height:-21},position:{lat:22.615692,lng:114.118563}}
            ];
            for(var index = 0; index < markers.length; index++ ){
                var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
                var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                        imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
                    })});
                var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
                var opts = {
                    width: 200,
                    title: markers[index].title,
                    enableMessage: false
                };
                var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
                marker.setLabel(label);
                addClickHandler(marker,infoWindow);
                map.addOverlay(marker);
            };
        }
        //向地图添加控件
        function addMapControl(){
            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
            map.addControl(overviewControl);
        }
        var map;
        initMap();
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
        $(".foot").first().click();
        },20);

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        paginationType : 'bullets',
    })
})