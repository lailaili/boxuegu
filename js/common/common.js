/**
 * Created by Administrator on 2017/2/26.
 */
//��ർ�������б�
define(["jquery"],function($){
    $(".navs a").on("click",function(){
        $(this).next().slideToggle();
    });
});