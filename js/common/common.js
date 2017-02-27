/**
 * Created by Administrator on 2017/2/26.
 */
//左侧导航下拉列表
define(["jquery", 'jqueryCookie'],function($){
    $(".navs a").on("click",function(){
        $(this).next().slideToggle();
    });
    $("#logout").on("click",function(){
        $.post("/v6/logout",function(data){
            if(data.code==200){
                location.href="/html/home/login.html";
            }
        })
    });
    // 获取本地cookie用户信息，同时做容错处理
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie("userInfo"))
    }catch(e){
        userInfo={};
    }
    // 然后展示到左侧导航
    $(".aside .profile h4").html(userInfo.tc_name?userInfo.tc_name:"monkey");
    $(".aside .profile img").attr("src",userInfo.tc_avatar?userInfo.tc_avatar:"/img/monkey.png");
});