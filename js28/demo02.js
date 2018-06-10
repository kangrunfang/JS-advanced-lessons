//����Ľ⹹��ֵ
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

// ����Ľ⹹��������һ����Ҫ�Ĳ�ͬ��\
// �����Ԫ���ǰ��������еģ�������ȡֵ������λ�þ���
// �����������û�д��򣬱�������������ͬ��������ȡ����ȷ��ֵ
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//˳��ͬ��û��ϵ
console.log(foo2,bar2);

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);

////////////////////////////////////////////////////
//���Ϊ��ֵ��ʱ,ע���ֵ�Ը�ֵʱ�Ķ�Ӧ��ϵ
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"

////////////////////////////////////////////////////
let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);//ע����±�д��������

let { first, last } = obj1;
console.log(first,last);

////////////////////////////////////////
//��ʵ����˵��������Ľ⹹��ֵ��������ʽ�ļ�д���μ����������չ��һ�£���
var { foo5: foo5, bar5: bar5 } = { foo5: "aaa", bar5: "bbb" };

//Ҳ����˵������Ľ⹹��ֵ���ڲ����ƣ������ҵ�ͬ�����ԣ�Ȼ���ٸ�����Ӧ�ı�������������ֵ���Ǻ��ߣ�������ǰ�ߡ�
var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);// "aaa"
//foo6 // error: foo is not defined
//��������У���������ֵ���Ǳ���baz6��������ģʽfoo6

/////////////////
//������һ�����⹹Ҳ��������Ƕ�׽ṹ�Ķ���,����Ǽ�ֵ�Ե��������ֻ����ƥ�䣬�����������Ƕ�Ӧ��ֵ
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World //���ϱ߸�Ϊvar { p: [x, { y:z }] } = obj2;�������yô��
//˼��console.log(p);������������Ǳ���

///
var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line // 1
//loc // error: loc is undefined
//start // error: start is undefined
//��������У�ֻ��line�Ǳ�����loc��start����ģʽ�����ᱻ��ֵ��

//Ƕ�׸�ֵ�����ӣ�Ϊʲô�����ţ�����������Ž�����������Ϊ����飬���Լ�����
let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);// {prop:123}
console.log(arr);// [true]

//����Ľ⹹Ҳ����ָ��Ĭ��ֵ��
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x4:y4 = 3} = {};
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"