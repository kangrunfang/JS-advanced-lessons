var name = "Jack";
function echo() {
    console.log(name);
}
echo();

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack


//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack


//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();//g
foo()返回function("console.log(scope);")这个函数