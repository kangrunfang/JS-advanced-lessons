//ͨ�����캯�������Ķ����ԭ�͹�������
//����д��ʵ����ԭ�ͼ̳У�������ԭ�͹��������
//˼����name,age,id���Էֱ�����ӵ����Ǹ������ϣ�����д��ʲô���⣿
//��θ�ÿ��Studnent����������е�name����
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//�������´��룬˼��Ϊʲô�������ļ̳���ʲô�׶�
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);

// console.log(s1);
// console.log(s1.__proto__);
// console.log(s1.__proto__.__proto__);

//��θ�ÿ��student���󵥶������������name��age���ڴ��Ƿ��˷�
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;


/*
 //ͨ��Object.create�����Ķ����ԭ�͹�������
 //����д��ʵ����ԭ�ͼ̳У�������ԭ�͹��������
 //˼����name,age,id���Էֱ�����ӵ����Ǹ������ϣ�����д��ʲô���⣿
 function Person(name){
 this.name = name;
 }
 Person.prototype.age = 22;
 Person.prototype.showName = function(){console.log(this.name);};

 var person1 = new Person("Mike");
 var student1 = Object.create(person1,{id:{value:123,writable:true}});
 var student2 = Object.create(person1,{id:{value:456,writable:true,enumerable:true}});

 //�������´��룬˼��Ϊʲô�������ļ̳���ʲô�׶�
 console.log(student1.name,student1.age,student1.id);
 console.log(student2.name,student2.age,student2.id);
 student1.__proto__.name = "Jack";
 console.log(student2.name);
 student2.__proto__.__proto__.age = 99;
 console.log(student2.age);
 */
