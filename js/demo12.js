 //函数定义 注意分号
function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));

var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));

//函数声明的提升，初步了解，详细内容见函数章节
foo();//可以在定义前执行，解析器会将foo函数声明提升
function foo() {
    console.log("foo");
}


function f2(a,b,c,d) {
    console.log(a,b,c,d);
}
f2(2,3);

