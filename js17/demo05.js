//Part 1 constructor���Ե�Ӧ��

// 1 ȷ������Ĺ��캯����
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

// 2 �������ƶ���
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

// 3 constructor������ָ�����캯��
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //����constructorָ��
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);


//Part2 �������ԡ�˽�����ԡ���Ȩ����
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
// console.log(a.privateId);
a.getId();


//˼����Щ��true����Щ��false
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //�������������Person.prototype����ֻ���ʲô?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true or false?
console.log(p.__proto__ === p.constructor.prototype);//true or false?
console.log(Object.prototype === p.constructor.prototype);//true or false?
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//true or false?



//���䣺Shape ��̬

/*
//����
function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();