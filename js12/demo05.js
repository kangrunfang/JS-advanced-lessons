// ����˵�����ڵ������������ģ�����ҳ����ʱ�����Ҫ���ֲ㣬���õ�ʱ���Ҿʹ���һ����
// �����㲻����ÿ�ε��ô���������������ھ�����ǰ�ģ���������ھʹ����µ�
function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();

//////////��ʱ��ڵ� �հ�Ӧ�ð��� 2���ִ�У����ڱհ�����objID��ʱ������
//��Ȼ��ʱû��ֱ���ã����հ���ʱ�޿̲�����
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);

//////////�հ� Ӧ�ð���
var db = (function() {
// ����һ�����ص�object, ���object����һЩ����
// ���ⲿ�ǲ��ܷ������object��
    var data = {};
// ����һ������, ��������ṩһЩ����data�����ݵķ���
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
// ���ǿ��Ե��������������
// ��������ڲ����������γ���һ���հ�
})();

db('x'); // ���� undefined
db('x', 1); // ����data['x']Ϊ1
db('x'); // ���� 1
// ���ǲ���ֱ�ӷ���data���object����
// �������ǿ����������ĳ�Ա


//////////////����ʵ��///////
(function () {
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();

//ע��հ��벻����ı�������
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;//����return i;�Ļ���������Ǽ���
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());// ��� 1�� 2�� 3����û��û��IIFEʱ������i��posʱ������

