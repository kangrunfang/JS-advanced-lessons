console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object
console.log(typeof function foo(){});//function

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);

var b = [12,34,{},""];
console.log(b instanceof Array);//true
console.log(b instanceof Object);//true

var Person = function(){
    //...
};
var p1 = new Person1();
console.log(p1 instanceof Person1);//true
console.log(p1 instanceof Object);//true

console.log(typeof Array);   //function
console.log(typeof Function);//function
console.log(typeof Date);    //function   /*因为它们都是构造函数，可以实例化对象，比如var a=new Array();*/
console.log(typeof Number);  //function
...
console.log(typeof Object);//function