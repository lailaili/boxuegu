define(['jquery','jqueryCookie'], function($,undefined) {
    console.log('login模块加载');
    $("#form-login").on("submit",function(){
        $.ajax({
            url:"/v6/login",
            type:"post",
            data:$(this).serialize(),
            success:function(data){
                console.log(111);
                // 如果登陆成功，使用cookie的方式保存用户信息，
                // 注意：cookie值必须为字符串，我们得到的是js对象，需要使用JSON.stringify进行转换
                if(data.code===200){
                    $.cookie("userInfo",JSON.stringify(data.result),{paths:"/"});
                    location.href="/";
                }
            },
        });
        return false;
    });
});