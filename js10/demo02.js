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


//�ʷ������� �������ʽ�޹� ʵ����
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


//ͨ��new Functionʵ�����ĺ������󣬲�һ����Ӿ�̬�ʷ�������
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();//g
foo()����function("console.log(scope);")�������