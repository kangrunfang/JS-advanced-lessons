function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//������٣�
f();//������٣�


// �հ�ʵ��
// ����f1�еľֲ�����nһֱ�������ڴ��У���û����f1���ú��Զ����
// ԭ�������f1��f2�ĸ���������f2��������һ��ȫ�ֱ�����
// �⵼��f2ʼ�����ڴ��У���f2�Ĵ���������f1�����f1Ҳʼ�����ڴ��У�
// �����ڵ��ý����󣬱��������ջ��ƣ�garbage collection������
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//˼����nAdd�Ǳհ�ô? n���ĸ��������µı���
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // ������٣�
nAdd();
result(); // ������٣�


////////�հ� Ӧ�ð��� ʵ�����ݵķ�װ ˽������
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());

var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());

/////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1; // ������٣�
nAdd();
result2(); // �������


//////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); // ������٣�
nAdd();
result2(); // �������
result1();