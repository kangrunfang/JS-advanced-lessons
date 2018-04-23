var obj = {_x:1};
// Object.defineProperty(obj,"y",{
//     configurable:false,
//     writable:false,
//     enumerable:true,
//     value:6
// });
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});


//����������Բ������������� bookʵ��
var book={};
//����Object.defineProperties(��������Ҫ��ӵ�����)������Ϊ����һ�ζ���������(1.��������)(2.����������)
Object.defineProperties(book,{
//��ӵ�������������(_year,edition)
    _year:{//(_year)ǰ����»��߱�ʾֻ��ͨ�����󷽷����ʵ�����
        value:2004,
        writable:true //���ûд��һ�л�������
    },
    edition:{
        value:1,
        writable:true
    },
//����˷���������(year)
    year:{
//����get������ȡ����
        get:function(){
            return this._year;
        },
//����set����д������
        set:function(newValue){
            if (newValue>2004) {
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }