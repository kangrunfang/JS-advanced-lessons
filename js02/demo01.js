//undefined表示申明了变量，但是对于其值不清楚，或者函数没有返回值
NaN==NaN  //false
typeof NaN=Number
当函数作为某一个对象的属性时，我们称之为方法
在JS中函数也是一个对象，例如：
		function foo(){

		};
		foo instanceof object;   //true
//数组本身没有方法，所有的方法都与生俱来，都定义在其原型Array.prototype中
String、Number、Boolean等基本类型都有对应的对象类型，在访问其属性时，将其包装成临时对象，访问完之后将包装对象释放
例如：var str="abcdef";
	  str.length;
	  str.length=1;
	  console.log(str,str.length);//abcdef,6  //基本数据类型的不变性
但是对于非基本类型而言，则不然，例如：
	 var arr=[1,2,3];
	 arr.length;
	 arr.length=1;
	 console.log(arr,arr.length);//[1],1

if(new Boolean(false))
{
	console.log("执行")；
}//返回"执行",因为if（）里边是一个对象，而对象转换成布尔类型总为true所以执行if语句
"23"-1//结果是22，转换成Number类型了


反写的好处：避免少写了等号，如
1.var a=2;
if(2==a)
{console.log(45);}//输出45

2.var a=2;
if(a==2)
{console.log(45);}//输出45

3.var a=2;
if(2=a)
{console.log(45);}//报错，因为赋值号左边必须为变量