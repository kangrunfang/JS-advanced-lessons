var f = function (v) {
    return v + 1;
};
f(2);//����3

//ʹ�ü�ͷ���������������Ч����,ֻ��һ��������һ�����
var f = v => v + 1; //���������Բ��ã������������Բ���return�ؼ���
//var f = (v) => {return v + 1;};
f(2);//����3


///////////////////////////////
//û�в������ж������������£���Ҫʹ��С��������ʾ����������ж����������Ҫ�д����ű�ʾ������
var f = () => 5;
// ��ͬ��
var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);
// ��ͬ�� ES5��д��
var foo = function (num1, num2) {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);

///////////////////////////////////
var max = function (a, b) {
    return a > b ? a : b;
};

//��ͷ��������������⹹���ʹ��
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

// ��ͬ��
function full({ first, last }) {
  return last + ' ' + first;
}
full({first:"Ming",last:"Li"});

