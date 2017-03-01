define(['jquery','common','nprogress',"template"], function($,undefined,nprogress,template) {
    nprogress.done();
    //渲染讲师列表
    $.get("/v6/teacher",function(data){
        console.log(111);
        if(data.code==200){
            console.log(1111);
            $("#teacher-list-tbody").html(template("teacher-list-tpl",{list:data.result}));
        }
    });
    //通过事件委托的方式给动态生成的a标签绑定点击事件
    // 讲师详细信息并展示
    $('#teacher-list-tbody').on('click', '.teacher-view', function() {
        $.get('/v6/teacher/view', {
            tc_id: $(this).parent().attr('data-id')
        }, function(data) {
            if(data.code == 200) {
                var html = template('teacher-view-tpl', data.result);
                $('#teacherModal').html(html);
            }
        });
    });
});
