// 4 ��ȡJSON����
//�⹹��ֵ����ȡJSON�����е����ݣ��������á�
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]
//���������Կ�����ȡJSON���ݵ�ֵ��

//5 ����������Ĭ��ֵ
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
// ... more config
}) {
// ... do stuff
};
//ָ��������Ĭ��ֵ���ͱ������ں������ڲ���дvar foo = config.foo || 'default foo';��������䡣

//6 ����Map�ṹ Map������ݲμ�Map Set�½�
// �κβ�����Iterator�ӿڵĶ��󣬶�������for...ofѭ��������
// Map�ṹԭ��֧��Iterator�ӿڣ���ϱ����Ľ⹹��ֵ����ȡ�����ͼ�ֵ�ͷǳ����㡣
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world
//���ֻ���ȡ����������ֻ���ȡ��ֵ������д������������
// ��ȡ����
for (let [key] of map) {
// ...
}
// ��ȡ��ֵ
for (let [,value] of map) {
// ...
}

// 7 ����ģ���ָ������
//����ģ��ʱ��������Ҫָ��������Щ�������⹹��ֵʹ���������ǳ�������
const { SourceMapConsumer, SourceNode } = require("source-map");