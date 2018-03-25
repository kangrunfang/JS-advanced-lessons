//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();//四舍五入
// Number.prototype.toPrecision();//可在对象的值超出指定位数时将其转换为指数计数法
// Number.prototype.toString();//可把一个逻辑值转换为字符串,并返回结果
// Number.prototype.toExponential();//可把对象的值转换成指数计数法

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(3.5));//4     正数五入
console.log(Math.round(-3.5));//-3   负数五舍
console.log(Math.round(-3.8));//-4