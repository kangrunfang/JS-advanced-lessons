//����ÿһ��Symbolֵ���ǲ���ȵģ�����ζ��Symbolֵ������Ϊ��ʶ�������ڶ������������
//���ܱ�֤�������ͬ�������ԡ�
//�����һ�������ɶ��ģ�鹹�ɵ�����ǳ����ã��ܷ�ֹĳһ��������С�ĸ�д�򸲸ǡ�
//ʹ��Symbol����[]���������õ������
var mySymbol = Symbol();
// ��һ��д��
var a = {};
a[mySymbol] = 'Hello!';//ע���������ڲ�Ҫ�����ţ�������ܼ����źͲ������ŵ�����
// �ڶ���д��
var a = {
    [mySymbol]: 'Hello!'
};
// ������д��
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// ����д�����õ�ͬ�����
a[mySymbol] // "Hello!"



//˼���������룬������˼������ԣ�obj�����м������ԣ�
var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);//˼��obj�����м������ԣ�

//Part22222222222222222
//�������ͨ�������Žṹ��Object.defineProperty���������������ָ��Ϊһ��Symbolֵ��
//ע�⣬Symbolֵ��Ϊ����������ʱ�������õ��������ʹ����������ע��ʹ�����źͲ������ŵ�����
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//��������У���Ϊ����������������ַ��������Բ����ȡmySymbol��Ϊ��ʶ����ָ�����Ǹ�ֵ������a��������ʵ������һ���ַ�����������һ��
//Symbolֵ��

//˼����
var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//���ʲô����ν���Symbol
console.log(obj[myS2],obj["xx"]);
// console.log(obj["myS1"]);
// console.log(obj["myS2"]);

//ͬ���ڶ�����ڲ���ʹ��Symbolֵ��������ʱ��Symbolֵ������ڷ�����֮��
// �������[]�Ļ��൱��ʹ��s��Ӧ���ַ�����������
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);
// ��������У����s�����ڷ������У������Եļ��������ַ���s��������s��������Ǹ�Symbolֵ��

// ������ǿ�Ķ���д������������obj�������д�ø����һЩ
let obj = {
    [s](arg) {console.log("xx");}
};

// �ع�ES6�������Եı��ʽ���巽����ES6����ļ���ʾ�����������Ժͷ�������ļ���ʾ��
//����һ����Ҫע�⣬Symbolֵ��Ϊ������ʱ�������Ի��ǹ������ԣ�����˽������


//�˽���������
//Symbol����switchʱ���Ա����ظ�����
/*
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}
// ����ʹ��Symbolֵ���ĺô������������κ�ֵ������������ͬ��ֵ�ˣ�
//��˿��Ա�֤�����switch���ᰴ��Ƶķ�ʽ������
*/