// 1 ����������ֵ
var [x,y] = ["a","b"];
[x, y] = [y, x];
console.log(x,y);//b,a
//������뽻������x��y��ֵ��������д��������࣬�����׶�������ǳ�������

// 2 �Ӻ������ض��ֵ
// ����ֻ�ܷ���һ��ֵ�����Ҫ���ض��ֵ��ֻ�ܽ����Ƿ������������ﷵ�ء�
// ���˽⹹��ֵ��ȡ����Щֵ�ͷǳ�����

// ����һ������
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();

// ����һ������,�⹹��������
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();

// 3 ���������Ķ���
//�⹹��ֵ���Է���ؽ�һ��������������Ӧ������
// ������һ���д����ֵ
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);

// ������һ���޴����ֵ
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});