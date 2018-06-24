var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content');
m.get(o); // "content"
m.has(o); // true
m.delete(o); // true
m.has(o); // false

//
//��Ϊ���캯����MapҲ���Խ���һ��������Ϊ������������ĳ�Ա��һ������ʾ��ֵ�Ե����顣
var o = {};
var map = new Map([
    ['name', '����'],
    [o, 'Author']
]);
map.size; // 2
map.has('name'); // true
map.get('name'); // "����"
map.has(o); // true
map.get(o); // "Author"

//Map���캯������������Ϊ������ʵ����ִ�е���������㷨��
var items = [
    ['name', '����'],
    ['title', 'Author']
];
var map = new Map();
items.forEach(([key, value]) => map.set(key, value));
//��Ч��
// items.forEach(function(v){
// 	map.set(v[0],v[1]);
// });

//
// �����ͬһ������θ�ֵ�������ֵ������ǰ���ֵ��
let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); // "bbb"
// �������Լ�1������ֵ���Σ���һ�ε�ֵ����ǰһ�ε�ֵ��
// �����ȡһ��δ֪�ļ����򷵻�undefined��
new Map().get('asfddfsasadf');
// undefined

//ֻ�ж�ͬһ����������ã�Map�ṹ�Ž�����Ϊͬһ��������һ��Ҫ�ǳ�С�ġ�
//˼�����������������ô������ļ���ʲô���ͣ��е�������ʲô��
//Ҫ�ر�ע��
var map = new Map();
map.set(['a'], 555);
map.get(['a']); // undefined

//˼����
var map = new Map();
map.set('a', 555);
map.get('a'); // ���ʲô��

//
var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 111
map.get(k2); // 222
//��������У�����k1��k2��ֵ��һ���ģ�����������Map�ṹ�б���Ϊ��������
// ���Ͽ�֪��Map�ļ�ʵ�����Ǹ��ڴ��ַ�󶨵ģ�ֻҪ�ڴ��ַ��һ��������Ϊ��������
// ��ͽ����ͬ��������ײ��clash�������⣬������չ���˵Ŀ��ʱ�����ʹ�ö�����Ϊ������
// �Ͳ��õ����Լ���������ԭ���ߵ�����ͬ����

// ���Map�ļ���һ�������͵�ֵ�����֡��ַ���������ֵ������ֻҪ����ֵ�ϸ���ȣ�Map������Ϊһ������
// ����0��-0�����⣬��ȻNaN���ϸ������������Map������Ϊͬһ��������������
let map = new Map();
map.set(NaN, 123);
map.get(NaN); // 123
map.set(-0, 123);
map.get(+0); // 123



//Part2222222222222222222222222222222222222222 Map��ط���
//Mapԭ�����Ժͷ���/////////////////////////////////////////
let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size // 2

var m = new Map();
m.set("edition", 6); // �����ַ���
m.set(262, "standard"); // ������ֵ
m.set(undefined, "nah"); // ����undefined

// set�������ص���Map������˿��Բ�����ʽд��
let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
// get������ȡkey��Ӧ�ļ�ֵ������Ҳ���key������undefined��
var m = new Map();
var hello = function() {console.log("hello");};
m.set(hello, "Hello ES6!"); // ���Ǻ���
m.get(hello); // Hello ES6!

//has��������һ������ֵ����ʾĳ�����Ƿ���Map���ݽṹ�С�
var m = new Map();
m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");
m.has("edition"); // true
m.has("years"); // false
m.has(262); // true
m.has(undefined); // true

//delete����ɾ��ĳ����������true�����ɾ��ʧ�ܣ�����false��
var m = new Map();
m.set(undefined, "nah");
m.has(undefined); // true
m.delete(undefined);
m.has(undefined); // false

//clear����������г�Ա��û�з���ֵ��
let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size // 2
map.clear();
map.size // 0

//Map������صķ���////////////////////////////////
let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);
console.log(typeof map.keys());//ע�������Ƕ��󣬲�������
for (let key of map.keys()) {
    console.log(key);
}
// "F"
// "T"
console.log(typeof map.values());//ע�������Ƕ��󣬲�������
for (let value of map.values()) {
    console.log(value);
}
// "no"
// "yes"
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"
// ���� �ع˽⹹��ֵ
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
// ��ͬ��ʹ��map.entries()
// for (let [key, value] of map) {
//     console.log(key, value);
// }

/////////////////////////////////////////////
//Map�ṹתΪ����ṹ���ȽϿ��ٵķ����ǽ��ʹ����չ�������...����
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log([...map.keys()]);
// [1, 2, 3]
console.log([...map.values()]);
// ['one', 'two', 'three']
console.log([...map.entries()]);
// [[1,'one'], [2, 'two'], [3, 'three']]
console.log([...map]);
// [[1,'one'], [2, 'two'], [3, 'three']]

//��������map������filter����������ʵ��Map�ı����͹��ˣ�Map����û��map��filter��������
let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
// ����Map�ṹ {1 => 'a', 2 => 'b'}
let map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
);
// ����Map�ṹ {2 => '_a', 4 => '_b', 6 => '_c'}

//���⣬Map����һ��forEach�������������forEach�������ƣ�Ҳ����ʵ�ֱ�����
map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});



//��չ���ݣ�����˼����
//Map���������ݽṹ�����ת�����ο�������13.3.4�½�
//MapתΪ����
//ǰ���Ѿ������MapתΪ�������ķ���������ʹ����չ�������...����
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

//����תΪMap
//������ת��Map���캯�����Ϳ���תΪMap��
new Map([[true, 7], [{foo: 3}, ['abc']]]);
// Map {true => 7, Object {foo: 3} => ['abc']}

//MapתΪ����
//�������Map�ļ������ַ�����������תΪ����
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

//����תΪMap
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
objToStrMap({yes: true, no: false});
// [ [ 'yes', true ], [ 'no', false ] ]




