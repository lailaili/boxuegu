/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl:"/",
    //第三方库的路径配置
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