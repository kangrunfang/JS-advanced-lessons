//ΪʲôҪʹ��Symbol
// ES5�������������������ַ�����
// �������Ҫʹ��һ�������ṩ�Ķ�����������������Щ����Ҳ���Ǻ������
// ������Ϊ�����������һЩ���ԣ���ô���������������ͺܿ��ܺ�ԭ�������������ͳ�ͻ
// ���磺
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("������������");
};
obj.moveTo(0,0);
// ��Ȼ�����ǲ�ϣ��������������ġ����ԣ�������Ҫȷ��ÿ�����������Ƕ�һ�޶�
// ��ˣ�ES6���������Symbol������������һ����һ�޶���ֵ��

//����Symbol������ע��Symbol�ǻ����������͵�һ�֣�������new
//�ع��»����������͵��ص㣬���ֻ������ͺ���������
let s = Symbol();//������new
typeof s;// "symbol"

//Symbol�������Խ���һ���ַ�����Ϊ��������ʾ��Symbolʵ������������Ҫ��Ϊ���ڿ���̨��ʾ������תΪ�ַ���ʱ���Ƚ��������֡�
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(bar)
console.log(s1.toString()); // "Symbol(foo)"
console.log(s2.toString()); // "Symbol(bar)"


//Part2222222222222222222
//ע�⣬Symbol�����Ĳ���ֻ�Ǳ�ʾ�Ե�ǰSymbolֵ�������������ͬ������Symbol�����ķ���ֵ�ǲ���ȵġ�
// û�в��������
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// �в��������
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

//��� Symbol �Ĳ�����һ�����󣬾ͻ���øö����toString����������תΪ�ַ�����Ȼ�������һ�� Symbol ֵ
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

//Symbolֵ�������������͵�ֵ�������㣬�ᱨ��
var sym = Symbol('My symbol');
//"your symbol is " + sym;//����
//���ǣ�Symbolֵ������ʽתΪ�ַ�����
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'


