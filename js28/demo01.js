//���ý⹹��ֵ��ʽ�������
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

//�ý⹹��ֵ��ʽ�������
//Part 1111111111111111 ����Ľ⹹��ֵ
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

//let Ҳ֧�ֽ⹹��ֵ
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

//
let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

//ע�⣺����⹹���ɹ���������ֵ�͵���undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);

//����ȫ�⹹�����
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);

//����Ⱥŵ��ұ߲������飨�����ϸ��˵�����ǿɱ����Ľṹ���μ���Iterator��һ�£�����ô���ᱨ��
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

//�⹹��ֵ�е�Ĭ��ֵ
var [foo3 = true] = [];//foo3 Ϊ true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'

// ES6�ڲ�ʹ���ϸ�����������===�����ж�һ��λ���Ƿ���ֵ��
// ���ԣ����һ�������Ա���ϸ����undefined��Ĭ��ֵ�ǲ�����Ч�ġ�
var [x5 = 1] = [undefined];//x5 Ϊ 1
var [x6 = 1] = [null];//x6 Ϊ null

//
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);

//Ĭ��ֵ�������ý⹹��ֵ���������������ñ��������Ѿ�����
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

//
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false or true

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//false or true

//����������ֻ���˽⣬��ϸ���ݲμ�Set Map��Generator�½�
//����Set�ṹ��Ҳ����ʹ������Ľ⹹��ֵ
let [x8, y8, z8] = new Set(["a", "b", "c"]);

//Generator����
function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);//