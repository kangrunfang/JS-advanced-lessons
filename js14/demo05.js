//ͨ��Object.defineProperty����Ӻ͸ı��get /set����������
//��ӷ�����
var obj1={
    _name:"Daisy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//ֻ������get ���ԣ����ֻ�ܶ�����д
        return this._name;
    }
});
console.log(obj1.name);//"Daisy"
obj1.name="jack";//ֻ������getter�����������д��ʧЧ
console.log(obj1.name);//"Daisy"

//�ı�������������� ע����ӷ��������޸ķ��������Ե�д��������
var obj2={
    _name:"Daisy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//
obj2.name="jack";
console.log(obj2.name);//
