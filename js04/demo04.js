{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);//20

for(var i = 0;i<5;i++){
    console.log("in for ",i);//0 1 2 3 4
}
console.log("out of for ",i);//5

if(true){
    var a = 20;
}
console.log(a);//20




// 思考：下边的例子是否报错，输出什么，相关知识参考预解析部分
// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);//unefined