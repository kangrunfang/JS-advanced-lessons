// ����ջ Call Stack
console.log("ȫ��������-start");
var x = 1;
function foo(){
    console.log("foo������-start");//���öϵ�
    var y = 2;
    function bar(){
        console.log("bar������-start");//���öϵ�
        var z = 3;
        console.log(x+y+z);
        console.log("bar������-end");//���öϵ�
    }
    bar();
    console.log("foo������-end");//���öϵ�
}
foo();//���öϵ�
console.log("ȫ��������-end");//���öϵ�
