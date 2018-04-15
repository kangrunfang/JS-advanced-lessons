//�հ����밸��(˼��������������������,�Ǹ�xʼ��δ���ͷ�)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//�۲�f1�е�x����
console.log(f3);
console.log(f3);

/*
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//�۲�f1�е�x����
console.log(f3());
console.log(f3());
*/


/*
// ��һ
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
inc = createInc(5);
console.log(inc(1));
*/

// ����
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
var inc2 = createInc(5);
console.log(inc(1));//������٣�
console.log(inc2(1));//������٣�

/*
// ����
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();
foo();
*/

// ����
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();
a();
b();