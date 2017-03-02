/**
 * Created by Administrator on 2017/2/26.
 */
//左侧导航下拉列表
define(["jquery"],function($){
    $(".navs a").on("click",function(){
        $(this).next().slideToggle();
    });
});