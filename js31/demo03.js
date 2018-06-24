//����ʵ��һ
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]

//����ʵ����
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // �����
}
Object.getOwnPropertyNames(obj);// []
Object.getOwnPropertySymbols(obj);// [Symbol(foo)]


//Part2222222222222222222222
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

//Symbol.for()��Symbol()������д�������������µ�Symbol��
// ���ǵ������ǣ�ǰ�߻ᱻ�Ǽ���ȫ�ֻ����й����������߲��ᡣ
// Symbol.for()����ÿ�ε��þͷ���һ���µ�Symbol���͵�ֵ�����ǻ��ȼ�������key�Ƿ��Ѿ����ڣ�
// ��������ڲŻ��½�һ��ֵ�����磬��������Symbol.for("cat")30�Σ�ÿ�ζ��᷵��ͬһ��Symbolֵ��
// ���ǵ���Symbol("cat")30�Σ��᷵��30����ͬ��Symbolֵ��

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor��������һ���ѵǼǵ�Symbol����ֵ��key��
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//˼����
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);
