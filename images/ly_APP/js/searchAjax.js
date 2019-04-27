$(function () {
    $(".cancelsearch").on("click",function () {
        window.history.go(-1);
    });
    $("#top_searchbox").on("keypress",function (event) {
        console.log(event);
    });
    var oUl=document.querySelector("#datalist");
    var oTxt=document.querySelector("#top_searchinput");
    var oHead=document.getElementsByTagName('head')[0];
    oTxt.onkeyup=function(){
        var oScript=document.createElement('script');
        oScript.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+oTxt.value+'&cb=fn';//从百度获取的接口数据
        oHead.appendChild(oS);
        if(oTxt.value!=""){
            oUl.style.display='block';
        }else{
            oUl.style.display='none';
        }

    };
    function getJsonp(str) {
       if(str==""){
           oUl.style.display="none";
       };
        var xmlHttp=new XMLHttpRequest();
        xmlHttp.open("get",str,true);
        xmlHttp.send();
        xmlHttp.onreadystatechange=function () {
            if (xmlHttp.readyState==4 && xmlHttp.status==200){
                return xmlHttp.responseText;
            }
        }
    }
})