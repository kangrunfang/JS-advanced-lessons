var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//ԭ��������toString����

for(var k in obj){//ͨ��for...in��������ԭ�����ϵ�����
    console.log(k,obj[k]);//�Ƿ��ܱ�����toString��
}