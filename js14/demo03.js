var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//�ĳ�true�����
    configurable:false,//�ĳ�true�����
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//���ʲô��
person.name = "Lucy";
console.log(person.name);//���ʲô��
delete person.name;
console.log(person.name);//���ʲô��

