define(['jquery','common','nprogress',"util","template","datepicker","datepickerLanguage"], function($,undefined,nprogress,util,template,datepicker,undefined) {
    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();
    /*
    * 获取tc_id差选字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面
    *
    * 编辑讲师：
    * 1 先获取讲师信息，展示到表单中
    * 2 监听提交表单事件，转为ajax方式提交到讲师修改借口
    *
    * 添加讲师：
    * 1 监听提交表单事件，转为ajax方式提交到讲师添加借口
    *
    * */
    var tcId=util.getQueryString("tc_id");
    if(tcId){
        $.get("/v6/teacher/edit",{tc_id:tcId},function(data){
            if(data.code==200){
                var html=template("teacher-form-tpl",data.result);
                $(".teacher-add").html(html);
                $("#datepicter").datepicker({
                    language:"zh-CN",
                    endDate:new Date(),
                    format:"yyyy-mm-dd"
                });
            }
        })
    }
    else{
        var html=template("teacher-form-tpl",{});
        $(".teacher-add").html(html);
        $("#datepicter").datepicker({
            language:"zh-CN",
            endDate:new Date(),
            format:"yyyy-mm-dd"
        });
    }
    //添加讲师
    $(".teacher-add").on("submit","#teacher-add-form",function(){
        console.log($(this).serialize());
        $.ajax({
            url:"/v6/teacher/"+(tcId?"update":"add"),
            type:'post',
            data:$(this).serialize()+(tcId?"&tc_id="+tcId:""),
            success:function(data){
                //添加成功，跳转到讲师列表页
                if(data.code==200){
                    location.href='/html/teacher/list.html';
                }
            }
        });
        return false;
    })
});
