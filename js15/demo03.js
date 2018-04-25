var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 ԭ�������Բ���////////////
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//���ɾ��ԭ���ϵ�����
delete  obj.__proto__.z;//����delete proObj.z;
console.log(obj.z);//��ʱ����û��z��

//ע�⣺hasOwnProperty��ԭ�ͷ���
//���õ�����Ϊobj,�����������Ҹ÷������Ҳ����Ļ�ȥԭ������ȥ��
//������Object.keys(obj)���־�̬����