var obj = {};
obj.x = 2;//ֱ���������
console.log(obj.x);//ͨ��.��������
obj.x = 5;//��������
console.log(obj["x"]);//ͨ��[]��������
delete obj.x;//ɾ������
console.log(obj.x);

//�������Ե�forѭ����ϰ
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};

//˼��obj3 �� obj4 ������ʲô��Ϊʲô��
var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}