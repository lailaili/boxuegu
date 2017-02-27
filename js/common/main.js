/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //���������·������
    paths:{
        jquery:"lib/jquery/jquery.min",
        bootstrap:"lib/bootstrap/js/bootstrap.min",
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        //�Լ�д��·������
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
//���е�ҳ�涼��Ҫ������js���ȼ�������
require(["jquery","bootstrap","common"]);
//�����ȡҳ���URl��Ȼ���Ӧ�ļ���js
(function(window){
   var pathname=window.location.pathname;
    require(['jquery', 'jqueryCookie'],
        function($,underfined){
            var sessID= $.cookie("PHPSESSID");
            //��½״̬ǰ��Ч��
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