/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //���������·������
    paths:{
        jquery:"lib/jquery/jquery.min",
        bootstrap:"lib/bootstrap/js/bootstrap.min",
        //�Լ�д��·������
        userList:"js/user/list",
        userProfile:"js/user/profile",
        teacherAdd:"js/teacher/add",
        teacherList:"js/teacher/list",
        homeLogin:"js/home/login",
        homeRepass:"js/home/repass",
        homeReSettings:"js/home/settings",
        courseAdd:"js/course/add",
        courseAddStep1:"js/course/add_step1",
        courseAddStep2:"js/course/add_step2",
        courseAddStep3:"js/course/add_step3",
        courseCategory:"js/course/category",
        courseCategoryAdd:"js/course/category_add",
        common:"js/common/common",
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        }
    }
});
//���е�ҳ�涼��Ҫ������js���ȼ�������
require(["jquery","bootstrap","common"]);
//�����ȡҳ���URl��Ȼ���Ӧ�ļ���js
(function(){
   var pathname=window.location.pathname;
    switch (pathname){
        case '/html/user/list.js':
            require(["userList"]);
            break;
        case  '/html/user/profile.js':
            require(["userProfile"]);
            break;
        case '/html/teacher/add.js':
            require(["teacherAdd"]);
            break;
        case '/html/teacher/list.js':
            require(["teacherList"]);
            break;
        case '/html/home/login.js':
            require(["homeLogin"]);
            break;
        case '/html/home/repass.js':
            require(["homeRepass"]);
            break;
        case '/html/home/settings.js':
            require(["homeReSettings"]);
            break;
        case '/html/course/add.js':
            require(["courseAdd"]);
            break;
        case '/html/course/add_step1.js':
            require(["courseAddStep1"]);
            break;
        case '/html/course/add_step2.js':
            require(["courseAddStep2"]);
            break;
        case '/html/course/add_step3.js':
            require(["courseAddStep3"]);
            break;
        case '/html/course/category.js':
            require(["courseCategory"]);
            break;
        case '/html/course/category_add.js':
            require(["courseCategoryAdd"]);
            break;
    }
})(window);