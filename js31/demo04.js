var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}// 2 3 5 4

//
// ��һ
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
// [1, 2, 3, 4]
// ����
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5

// ȥ��������ظ���Ա
[...new Set([1,2,3,3])];

//
//���ֻ������ͺ����ã��������ͣ������������ǲ���ȵģ�˼����������
var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2


//Part 22222222222222222222222222222222222222222222222
s.add(1).add(2).add(2);
// ע��2������������
s.size // 2
s.has(1); // true
s.has(2); // true
s.has(3); // false
s.delete(2);
s.has(2); // false

//
var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);
if (properties.has('width')&&properties.has('height')) {
    console.log("do something!");
}

//Array.from�������Խ�Set�ṹתΪ���顣
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);

//...Ҳ���Խ�setת��������
console.log([...(new Set([1, 2, 3, 4, 5]))]);//[1, 2, 3, 4, 5]
//�������[]����ɢ�е�Ԫ��
console.log(...(new Set([1, 2, 3, 4, 5])));//1, 2, 3, 4, 5


//����Set�ı�������
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());//ע����ʲô���ͣ��Ƿ�ɵ������Ƿ����for...of����
console.log(typeof set.values());
console.log(typeof set.entries());

//keys������values������entries�������صĶ��Ǳ���������
for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//��ϰ��ʹ�ý⹹��ֵ����������ȡ
for (var [key,value] of set.entries()) {
    console.log(key,value);
}

//Set�ṹ��ʵ����forEach���������ڶ�ÿ����Աִ��ĳ�ֲ�����û�з���ֵ��
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );
// 2
// 4
// 6

//���ң������map��filter����Ҳ���Լ������Set�ˣ�ͨ��...ת���������ú�������set
var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// ����Set�ṹ��{2, 4, 6}
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// ����Set�ṹ��{2, 4}


// setӦ�ð��� ����������
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// ����
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// ����
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}


//����WeakSet
/*
WeakSet �ṹ�� Set ���ƣ�Ҳ�ǲ��ظ���ֵ�ļ��ϡ����ǣ����� Set ����������
���ȣ�WeakSet �ĳ�Աֻ���Ƕ��󣬶��������������͵�ֵ��

��Σ�WeakSet �еĶ����������ã����������ջ��Ʋ����� WeakSet �Ըö�������ã�
Ҳ����˵������������󶼲������øö���
��ô�������ջ��ƻ��Զ����ոö�����ռ�õ��ڴ棬�����Ǹö��󻹴����� WeakSet ֮�С�
������Ϊ�������ջ����������ü��������һ��ֵ�����ô�����Ϊ0���������ջ��ƾͲ����ͷ�����ڴ档
����ʹ�ø�ֵ֮����ʱ������ȡ�����ã������ڴ��޷��ͷţ��������ܻ������ڴ�й©��WeakSet ��������ã�
���������������ջ��ƣ����ԾͲ�����������⡣��ˣ�WeakSet �ʺ���ʱ���һ������Լ���Ÿ�����󶨵���Ϣ��
ֻҪ��Щ�������ⲿ��ʧ������ WeakSet ��������þͻ��Զ���ʧ��

������������ص㣬WeakSet �ĳ�Ա�ǲ��ʺ����õģ���Ϊ������ʱ��ʧ��
���⣬���� WeakSet �ڲ��ж��ٸ���Ա��ȡ�����������ջ�����û�����У�
����ǰ��ܿ��ܳ�Ա�����ǲ�һ���ģ����������ջ��ƺ�ʱ�����ǲ���Ԥ��ģ�
��� ES6 �涨 WeakSet ���ɱ�����
*/