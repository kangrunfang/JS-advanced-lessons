// Ҫ����������������ʹ��
// Object.keys() �����������У��Ǽ̳У���ö�����Եļ�
// Object.getOwnPropertyNames()�����������У��Ǽ̳У�������������ö��
// Object.prototype.hasOwnProperty() �ж������Ƿ��и����ԣ���������ö�ٵ�����
// Object.prototype.propertyIsEnumerable() �ж������Ƿ��и����Բ����������Ƿ��ö��
// in  ���һ�������Ƿ���ĳ�����ԣ������̳е����ԣ���������ö�ٵ�����
// for...in ����һ����������ԣ������̳е����ԣ�������������ö�ٵ�����
// ˼��Object��̬������Object.prototypeԭ�ͷ��������𣨶������˷�����ʹ������ʲô����
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));//�Ƿ������ö�����Եļ���
console.log(Object.getOwnPropertyNames(o3));//�Ƿ������ö�����Եļ���

console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("a"));

for(var k in o3){ //��������x����
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);// in �� for...in ������ ���ڿ�ö����������
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//�Ƿ���Ŀ�ö��


//�������Ե��ۺ�ʵ��
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 ���пɱ������ԣ�",k,o5[k]);
    }else {
        console.log("o5 �����пɱ������ԣ�",k,o5[k]);
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);//���ٸ�true ���ٸ�false
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//���ٸ�true ���ٸ�false
console.log(Object.keys(o5));//ֻ��ʾ�����ö�ٵ�����
console.log(Object.getOwnPropertyNames(o5));//����һ�����飬���������������ԣ���������ö�ٵ�����

//console.log(o4.isPrototypeOf(o5));


