//ͨ��Object.create��̬���������Ķ����ԭ�͹�������
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//������дΪsubObj_First.x = 5;���������Σ�
console.log(subObj_Second.x);
