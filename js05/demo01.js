var a = 34;
if(a = 45){
    console.log("是否会输出？");
}

var b = 34;
if(45 == b){//为什么要这样写，避免少写等号
    console.log("是否会输出？");
}

console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

//
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11
// 思考：+= 是转成字符串类型还是转成数字类型
// 不同情况下转换的类型不同
var x = "1";
console.log(x+=1);//连接
var x = 1;
console.log(x+=1);

//回顾++i 与 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y);//9