var tmp = 100;//ע�⣺�ʷ�������,�γɵıհ��Ƿ�������еı���tmp��
function foo(x) {
    var tmp = 3;//ע�⣺�ʷ�������˼���������δ��У������ʲô��foo֮���tmp�Ƿ�Ϊ�հ���һ���֣�
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee �γ���һ���հ�
fee(10);//
fee(10);//
fee(10);//


//�հ�Ƕ�ף���չ֪ʶ���˽⼴�ɣ���˼�����������д��ڼ����հ������öϵ����
function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//���öϵ㣬�鿴�м����հ�
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);
//˼���м����հ���x��z�ֱ������ĸ��հ�

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //������������γ���һ���հ�
bar(10); //���ʲô��
bar(10); //���ʲô��
bar(10); //���ʲô��


// Part 33333333333
function fn() {
    var max = 10;//�����δ��У������Ϊ���٣�
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);