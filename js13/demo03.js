// ���������� ʵ��һ
var o = {
    _x:1.0,//�����д��x������
    get x(){
        return this._x;//�����д��x������
    },
    set x(val){
        this._x = val;//�����д��x������
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//����������
//o.hasOwnProperty("_x");//��������

//���������� ʵ���� ֻ��
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//������٣�

// ���������� ʵ����
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("��������������");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);


//���������� �ۺ�ʵ��
var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);