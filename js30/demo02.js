// Part1 �����еĺ���Ƕ�� thisȱ��
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //�ڲ�Ƕ�׺���
        function moveToX() {
            this.x = x;//this�󶨵������
        }
        //�ڲ�Ƕ�׺���
        function moveToY() {
            this.y = y;//this�󶨵������
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);


// Part2 �����еĺ���Ƕ�� thisȱ�� ES5��ͨ����󶨽���취
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//�ؼ���һ�У����
        //�ڲ�Ƕ�׺���
        function moveToX() {
            that.x = x;//this��Ϊthat
        }
        //�ڲ�Ƕ�׺���
        function moveToY() {
            that.y = y;//this�󶨵������
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//˼�����عˣ������call��apply��ӵ��õķ������thisָ�����⣿����

//ES6�� ��ͷ������this���뺯������ʱ���ڵĶ���󶨣�������ʹ��ʱ���ڵĶ��󣨱���thisȱ�ݣ�
//��ͷ��������this����ָ����������Чʱ���ڵĶ���
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //�ڲ�Ƕ�׺���
        var moveToX = ()=>this.x=x;
        //�ڲ�Ƕ�׺���
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//˼�������ͨ��bind�������thisָ������

//ͨ����ͷ����������Ч����thisָ������

//
// ��ͷ�����м���ʹ��ע��㡣
// ��1���������ڵ�this���󣬾��Ƕ���ʱ���ڵĶ��󣬶�����ʹ��ʱ���ڵĶ���
// ��2�������Ե������캯����Ҳ����˵��������ʹ��new���������׳�һ������
// ��3��������ʹ��arguments���󣬸ö����ں������ڲ����ڡ����Ҫ�ã�������Rest�������档
// ��4��������ʹ��yield�����˼�ͷ������������Generator����

//˼�������е�this ES5����ν��
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21

//�鿴�����м�ͷ������д���ͽ��
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42
//��ͷ��������this����ָ����������Чʱ���ڵĶ��󣨱�����{id: 42}���������������42
//��ʵ��ͷ��������û���Լ���this��������������this

//��ʵ��ͷ��������û���Լ���this��������������this
//���ڼ�ͷ����û���Լ���this�����Ե�ȻҲ�Ͳ�����call()��apply()��bind()��Щ����ȥ�ı�this��ָ��
function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

//////////////////////////////////////////////////////////////////
//��Ҫ�ر�ע�⣺
//���ڴ����ű�����Ϊ����飬���������ͷ����ֱ�ӷ���һ�����󣬱����ڶ����������С����
var getTempItem = itemId => ({ id: itemId, name: "Temp" });
//getTempItem(23);

//��Ч��
var getTempItem = function (itemId) {
    return { id: itemId, name: "Temp" }
};
//getTempItem(23);

