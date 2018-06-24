// ES5�� ʵ���������β�����ʱ������ͨ��arguments��������в���
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");//

//...Rest �൱�ںϲ����ɲ���Ϊһ�����飬��Ҫ���ں�������ʱ������ arguments������arguments�ı׶�
function f(...y){
    console.log(y);
}
f("a","b","c");//��� ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

//��argumentsʹ�ø������,����ֻ�뿴�ӵڶ�����ʼ֮��Ĳ���
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//��� "a",["b","c","d"]
//˼����f("a",["b","c","d"]);//��� "a",[["b","c","d"]]
f("a");//��� "a",[]
f();//��� undefined,[]
//˼��function f(x,...y��z){console.log(y);}//��ʱy�����ʲô


// Part2222222222222
//...Spread ��չ������ �൱�ڽ�����Ϊ��ɢ�Ĳ�������Ҫ���ں�������ʱ��...Rest��������
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//�ȼ���f("a","b","c");
f("a");//��� "a",[]
f();//��� undefined,[]


//Part333333333333 ��չ֪ʶ call��apply��ת�� ����֮������� ��ͨ��...Rest��...Spreadת��
function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);//��Ч�� abc.apply(o1,[1,2,3]);

//��������͵���ʱ�� �ϲ�Ԫ��Ϊ���飨...Rest�� �� �������Ϊ����Ԫ��(...Spread)


