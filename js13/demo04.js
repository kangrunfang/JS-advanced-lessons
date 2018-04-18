//�������� ���ַ���
//ͨ���������ķ�ʽ���� JS����
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

//ͨ��Object������������JS����,ע��JS������ͨ��ԭ�����ķ�ʽʵ�ֵĶ���̳�
var newObj = Object.create(obj);//newObj��ԭ����obj
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//��������
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);

//Object.create�ĵڶ����������μ����������½�
/*
o = {};
// ����������ʽ�����Ŀն�����൱��:
o = Object.create(Object.prototype);
o = Object.create(Object.prototype, {
    // foo���Ϊ�������������������
    foo: {
        writable:true,
        configurable:true,
        value: "hello"
    },
    // bar���Ϊ����������ķ���������
    bar: {
        configurable: false,
        get: function() { return 10 },
        set: function(value) {
            console.log("Setting `o.bar` to", value);
        }
    }
});
*/

//���캯���ķ�ʽ����JS����  �˴��Խ���������պ������������ ע��JS������ͨ��ԭ�����ķ�ʽʵ�ֵĶ���̳�
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();

//ע�⣺
var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true