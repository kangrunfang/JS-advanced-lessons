//�������Եļ̳��ص�
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//˼��configurable��writable��true����false
o1.x = 34;
console.log(o1.x);

var o2 = Object.create(o1);
o2.x = 56;
console.log(o2.x);//������٣�

//�������������Եļ̳��ص�
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//���21����34

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//�������


//ȫ�ֱ�����������������ε��أ�
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//��Чdelete window.a;

