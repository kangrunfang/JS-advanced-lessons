function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();
//name��age�����Ƕ�����p1���ˣ����Ƕ�����p1��ԭ������
//sayHi�����Ƕ�����p1���ˣ����Ƕ�����p1��ԭ������
//����һ�·��ʺ͵��õĹ�����������


//���������Ժͷ��������ڹ��캯���к�д��prototype�������������ʲô��ͬ?
//û��˽����������£�����������ӵ����캯����prototype�����ϣ�ʵ�ַ�������
//�����Ը��������ȷ���Ƕ����ڹ��캯����,���Ƕ����ڹ��캯����prototype����ʵ���������ԭ���ϣ�������

console.log(p1.__proto__ === Person.prototype);


