function f(a){
	console.log(a);
	console.log(arguments[1]);
	console.log(arguments[2]);
}//其中、arguments是类数组对象
f(1,2,3);


function foo(){              
	var a=b=3;
}
foo();
console.log("a:",a);//报错
console.log("b:",b);//输出3
以上代码相当于function foo(){
	var a=3; 
    b=3;
}//a是局部定义的变量,b是全局变量指向window，所以a不能访问
window.b===b;//true
如果函数里是var a,b=3;那么a和b都报错
