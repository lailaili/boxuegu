/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //���������·������
    paths:{
        jquery:"lib/jquery/jquery.min",
        bootstrap:"lib/bootstrap/js/bootstrap.min",
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        }
    }
});
require(["jquery","bootstrap"]);