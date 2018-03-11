//避免滥用全局变量
var x = 10;
 function a() {
 console.log(x);
 //alert("x = "+x);
};




//如何避免全局污染，使用IIFE函数立即执行表达式
(function () {  // 开始
    var x = 10;
    function a() {
        console.log("x = ",x);
        //alert("x = "+x);
    };
})(); 