var x;//变量声明
x = 23;//赋值表达式语句
if(x>22)
{
	x+=2;
}
else
{
console.log("x不大于22");
}


var xx = 234;
if(234 == xx){ //为什么要反写？？？？？
    console.log("相等");
}

//思考
console.log(a);
if(true){
    var a = 2;
}
console.log(a);

console.log(b);
if(false){
    var b = 3;
}
console.log(b);


//循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);//0 1 2
}
console.log(i);//3
//函数定义及调用   提问：函数有几种定义方式？？？？？
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));