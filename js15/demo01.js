//���� ʹ��3�ַ�ʽ����������
var obj1,obj2,obj3;
//obj1ͨ����������ʽ��������������������x
//obj2ͨ��Object��̬����������obj2��ԭ��Ϊobj1����������������y
//obj3ͨ�����캯�������������캯��ΪObj3

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

//ͨ��Object������������JS����,ע��JS������ͨ��ԭ�����ķ�ʽʵ�ֵĶ���̳�
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//��������

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));

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
