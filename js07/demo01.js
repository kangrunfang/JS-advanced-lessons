字符串的++、/=、*=转成数字类型，+和+=转换成字符串类型
例如：var x="1";
	 var y=++x;
	 console.log(y);//2

var obj1={z:false};
var obj2={z:new Boolean(false)};
console.log(obj1.z==obj2.z);	//true 为什么？？课上留下的疑问 二义性


var max=Function('a','b','return a>b?a:b;')//使用字符串的好处是可以动态的更改函数
max(2,3);
var str="return a<b?a:b;"
var min=Function('a','b',str);
min(2,3);




















