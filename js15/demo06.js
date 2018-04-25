function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 ԭ�������Բ���////////////
obj.z = 5;

obj.hasOwnProperty("z");
console.log(obj.z);
console.log(MyObj.prototype.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//���ɾ��ԭ���ϵ�����
delete  obj.__proto__.z;//����delete MyObj.prototype.z;
console.log(obj.z);//��ʱ����û��z��