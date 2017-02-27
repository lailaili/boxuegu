/**
 * Created by Administrator on 2017/2/26.
 */
//��ർ�������б�
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
    // ��ȡ����cookie�û���Ϣ��ͬʱ���ݴ���
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie("userInfo"))
    }catch(e){
        userInfo={};
    }
    // Ȼ��չʾ����ർ��
    $(".aside .profile h4").html(userInfo.tc_name?userInfo.tc_name:"monkey");
    $(".aside .profile img").attr("src",userInfo.tc_avatar?userInfo.tc_avatar:"/img/monkey.png");
});