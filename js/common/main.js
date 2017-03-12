/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //?????????·??????
    paths: {

        // ?????????·??????
        jquery: 'node_modules/jquery/dist/jquery.min',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        jqueryCookie: 'node_modules/jquery.cookie/jquery.cookie',
        nprogress: 'node_modules/nprogress/nprogress',
        template: 'node_modules/art-template/dist/template',
        datepicker: 'node_modules/bootstrap-datepicker/js/bootstrap-datepicker',
        datepickerLanguage: 'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        region:"node_modules/region/jquery.region",
        ckeditor: 'node_modules/ckeditor/ckeditor',
        uploadify:"node_modules/uploadify/jquery.uploadify",
        // ???д??·??????
        courseAddStep1: 'js/course/add_step1',
        courseAddStep2: 'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseAdd: 'js/course/add',
        courseCategoryAdd: 'js/course/category_add',
        courseCategory: 'js/course/category',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        teacherAdd: 'js/teacher/add',
        teacherList: 'js/teacher/list',
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        util: 'js/common/util',
        common: 'js/common/common',
        index: 'js/index',
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        },
        detepickerLanguage:{
            deps:['jquery','datepicker'],
        },
        ckeditor:{
            deps:["jquery"],
            exports:"CKEDITOR"
        }
    }
});
require(["nprogress"],function(nprogress){
    nprogress.start();
})
//???е???涼?????????js???????????
require(["jquery","bootstrap","common"]);
//??????????URl????????????js
(function(window){
   var pathname=window.location.pathname;
    require(['jquery', 'jqueryCookie'],
        function($,underfined){
            var sessID= $.cookie("PHPSESSID");
            //????????Ч??
            if(pathname==="/html/home/login.html"&&sessID){
                location.href="/";
            }else if(pathname!=="/html/home/login.html"&&!sessID){
                location.href="/html/home/login.html";
            };
            switch(pathname) {
                case '/html/user/list.html':
                    //?????????·?????????userList
                    require(['userList']);
                    break;
                case '/html/user/profile.html':
                    require(['userProfile']);
                    break;
                case '/html/teacher/add.html':
                    require(['teacherAdd']);
                    break;
                case '/html/teacher/list.html':
                    require(['teacherList']);
                    break;
                /*course*/
                case '/html/course/add.html':
                    require(['courseAdd']);
                    break;
                case '/html/course/add_step1.html':
                    require(['courseAddStep1']);
                    break;
                case '/html/course/add_step2.html':
                    require(['courseAddStep2']);
                    break;
                case '/html/course/add_step3.html':
                    require(['courseAddStep3']);
                    break;
                case '/html/course/category.html':
                    require(['courseCategory']);
                    break;
                case '/html/course/category_add.html':
                    require(['courseCategoryAdd']);
                    break;
                case '/html/course/list.html':
                    require(['courseList']);
                    break;
                case '/html/course/topic.html':
                    require(['courseTopic']);
                    break;
                /*home*/
                case '/html/home/login.html':
                    require(['login']);
                    break;
                case '/html/home/repass.html':
                    require(['repass']);
                    break;
                case '/html/home/settings.html':
                    require(['settings']);
                    break;
                case '/':
                    require(['index']);
                    break;
            }
        });
})(window);