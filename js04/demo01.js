//严格模式与非严格模式
function slarry()
{
	a=23;
}
slarry();
console.log(a);//23


function arr()
{
	'use strict'
	var b=45;
}
arr();
console.log(b);


function thisTest()
{
	'use strict'
	console.log(this);
}
thisTest();//undefined


function thisTest()
{
	console.log(this);
}
thisTest();//window


var arr="abc";
function to()
{
	arr.length=8;
	console.log(arr.length);
}
to();//3


var arr="abc";
function to()
{
	'use strict'
	arr.length=8;
	console.log(arr.length);
}
to();


function foo(a,a,b){
console.log(a+b);}
foo(2,3,4);//3

function foo(a,a,b){
'use strict'
console.log(a+b);}
foo(2,3,4);//报错

var i="1";
switch(i)
{
    case 1:
		console.log("i=1");
    default:
		console.log("i不等于1");
}// i不等于1  “===”判断


var j=70;
switch(true)
{
    case j>65:
		console.log("及格");
		break;
    case j<60:
		console.log("不及格");
		break;
    default:
		console.log("others");
}//及格

var j=70;
switch(false)
{
    case j>65:
		console.log("及格");
		break;
    case j<60:
		console.log("不及格");
		break;
    default:
		console.log("others");
}//不及格

var i=1;
switch(i)
{
    case 1:
		console.log("i=1");
    default:
		console.log("i不等于1");
}//  i=1  i不等于1  如果没有加break那么从第一个成立的case一直执行到default结束为止

var obj={x:10,y:20,z:30};
for(var k in obj)
{
	console.log(k,obj[k],typeof(obj[k]));
}
 //x 10 number
 //y 20 number
 //z 30 number

 var arr=[1,,"a"];
for(var k in arr)
{
	console.log(k,arr[k]);
}
//0 1
//2 a  数组里面的k是下标