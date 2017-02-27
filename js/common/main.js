/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //第三方库的路径配置
    paths:{
        jquery:"lib/jquery/jquery.min",
        bootstrap:"lib/bootstrap/js/bootstrap.min",
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        //自己写的路径配置
        userList:"js/user/list",
        userProfile:"js/user/profile",
        login:"js/home/login",
        common:"js/common/common",
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        }
    }
});
//所有的页面都需要这两个js，先加载他们
require(["jquery","bootstrap","common"]);
//这里获取页面的URl，然后对应的加载js
(function(window){
   var pathname=window.location.pathname;
    require(['jquery', 'jqueryCookie'],
        function($,underfined){
            var sessID= $.cookie("PHPSESSID");
            //登陆状态前端效验
            if(pathname==="/html/home/login.html"&&sessID){
                location.href="/";
            }else if(pathname!=="/html/home/login.html"&&!sessID){
                location.href="/html/home/login.html";
            };
            switch (pathname){
                case '/html/user/list.html':
                    require(["userList"]);
                    break;
                case  '/html/user/profile.html':
                    require(["userProfile"]);
                    break;
                //case '/html/teacher/add.html':
                //    require(["teacherAdd"]);
                //    break;
                //case '/html/teacher/list.html':
                //    require(["teacherList"]);
                //    break;
                case '/html/home/login.html':
                    require(["login"]);
                    break;
            }
        });
})(window);