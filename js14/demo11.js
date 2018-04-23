//Part 1 JS�����Ƿ����չ isExtensible
//�¶���Ĭ���ǿ���չ�����ۺ��ַ�ʽ�����Ķ�������ʹ�õ�����������ʽ
var empty1 = {a:1};
console.log(Object.isExtensible(empty1));//true

//�����Ƿ������չ�����������Ƿ���������޹�
empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,//��������
        enumerable : true,//��ö��
        writable : true//��д
    }
});
console.log(Object.isExtensible(empty2));


//////////Object.isExtensible��Object.preventExtensionsʵ��////////
(function () {
    //Object.preventExtensions ��ԭ�����ò�����չ,���ҷ���ԭ����.
    var obj = {};
    var obj2 = Object.preventExtensions(obj);
    console.log(obj === obj2);//true

    //�´����Ķ���Ĭ���ǿ���չ��
    var empty = {};
    console.log(Object.isExtensible(empty));//true
    empty.a = 1;//��ӳɹ�

    //�����Ϊ������չ����
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));//false

    //ʹ�ô�ͳ��ʽΪ������չ�����������
    empty.b = 2;//��Ĭʧ��,���׳�����
    empty["c"] = 3;//��Ĭʧ��,���׳�����

    //���ϸ�ģʽ��,Ϊ������չ����������Խ��׳�����
    (function fail(){
        "use strict";
        empty.d = "4";//throws a TypeError
    })();

    //ʹ�� Object.defineProperty����Ϊ������չ������������Ի��׳��쳣
    Object.defineProperty(empty,"e",{value : 5});//�׳� TypeError �쳣
    Object.defineProperty(empty,"a",{value : 2});
    console.log(empty.a);//���2
})();


//Part 2 JS�����Ƿ��ܷ� isSealed
//������󲻿���չ�����������ԵĿ���������Ϊfalse����ö���Ϊ�ܷ�Ķ���
(function () {
    //�½��Ķ���Ĭ�ϲ����ܷ��
    var empty = {};
    console.log(Object.isSealed(empty));//false

    //�����һ���ն����ò�����չ,����ͬʱҲ���ɸ��ܷ����.
    Object.preventExtensions(empty);
    console.log(Object.isSealed(empty));//true

    //�������������ǿն���,�����������ܷ����,��Ϊ�ܷ����������������Ա����ǲ������õ�.
    var hasProp = {fee : "fie foe fum"};
    Object.preventExtensions(hasProp);
    console.log(Object.isSealed(hasProp));//false

    //�����������Ա�ò�������,���������Ҳ�ͳ����ܷ����.
    Object.defineProperty(hasProp,"fee",{configurable : false});
    console.log(Object.isSealed(hasProp));//true
})();

//////////Object.isSealed��Object.sealʵ��////////
(function () {
    var obj = {             //����һ������
        prop:function(){},
        foo:"bar"
    };
    //��������µ�����,�������Ե�ֵ�����޸�,����ɾ��
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;

    var o = Object.seal(obj);//�� obj �ܷ�,�ҷ���ԭ����
    console.log(o === obj);//true
    console.log(Object.isSealed(obj));//true

    //��Ȼ�����޸��ܷ�����ϵ����Ե�ֵ
    obj.foo = "quux";//�޸ĳɹ�

    //�����ܰ��ܷ��������Խ�����������,Ʃ�署���������ض���ɷ���������.
    //Object.defineProperty(obj,"foo",{get : function(){return "g";}});//�׳� TypeError

    //�κγ��޸�����ֵ����Ĳ�������ʧ��
    obj.quaxxor = "the friendly duck";//ʧ��,����û�гɹ���ӣ���Ϊseal�����˲�����չ
    delete obj.foo;//��Ĭʧ��,����û��ɾ���ɹ�

    //���ϸ�ģʽ��,���׳� TypeError �쳣
    (function fail(){
        "use strict";
        //delete obj.foo;//�׳� TypeError �쳣
        //obj.sparky = "arf";//�׳� TYpeError �쳣
    })();

    //Object.defineProperty(obj,"ohai",{value :17});//�������ʧ��
    Object.defineProperty(obj,"foo",{value : "eit"});//�޸ĳɹ�
    console.log(obj.foo);//��eit��
})();

////Part 3 JS�����Ƿ񶳽� isFrozen
//������󲻿���չ���������ԵĿ���������Ϊfalse��
//���������ԵĿ�д����Ϊfalse��ö���Ϊ�ܷ�Ķ���
(function () {
    //һ������Ĭ���ǿ���չ��,������Ҳ�ǷǶ����.
    console.log(Object.isFrozen({}));//false

    //һ��������չ�Ŀն���ͬʱҲ��һ���������.һ��������չ�Ŀն���Ҳ���ܷ����
    var vacuouslyFrozen = Object.preventExtensions({});
    console.log(Object.isFrozen(vacuouslyFrozen) === true);//true
    console.log(Object.isSealed(vacuouslyFrozen) === true);//true

    //һ���ǿն���Ĭ��Ҳ�ǷǶ����.
    var oneProp = { p:42 };
    console.log(Object.isFrozen(oneProp));//false

    //����������Ĳ�����չ,������ζ������������˶������,��Ϊ p ������Ȼ�ǿ������õ�(���ҿ�д��).
    Object.preventExtensions( oneProp );
    console.log(Object.isFrozen(oneProp));//false

    //���ɾ�����������,������Ϊ�ն���,���Ϊһ���������.
    delete oneProp.p;
    console.log(Object.isFrozen(oneProp));//true

    //һ��������չ�Ķ���,ӵ��һ������д�������õ�����,������Ȼ�ǷǶ����.
    var nonWritable = { e : "plep" };
    Object.preventExtensions(nonWritable);
    Object.defineProperty(nonWritable,"e",{writable : false});//����д
    console.log(Object.isFrozen(nonWritable));//false

    //��������Ը�Ϊ��������,������������Ϊ�������
    Object.defineProperty(nonWritable,"e",{configurable : false});//��������
    console.log(Object.isFrozen(nonWritable));//true

    //һ��������չ�Ķ���,ֵӵ��һ��������,������Ȼ�ǷǶ����.
    var accessor = {get food(){return "yum";}};//����ʹ�õ�������ֵ����������,Ĭ�Ͽ�����
    Object.preventExtensions(accessor);
    console.log(Object.isFrozen(accessor));//false

    //��������Ը�Ϊ��������,������������Ϊ�������.
    Object.defineProperty(accessor,"food",{configurable:false});
    console.log(Object.isFrozen(accessor));//true


    //ʹ�� Object.freeze �Ƕ���һ����������ķ���.
    var frozen = {1:81};
    console.log(Object.isFrozen(frozen));//false
    Object.freeze(frozen);
    console.log(Object.isFrozen(frozen));//true

    //һ���������Ҳ��һ���ܷ����
    console.log(Object.isSealed(frozen));//true

    //һ���������Ҳ��һ��������չ����
    console.log(Object.isExtensible(frozen));//false
})();

//////////Object.isFrozen��Object.freezeʵ��////////
(function () {
    var obj = {
        prop:function(){},
        foo:"bar"
    };
    //��������µ�����,���е����Կ��Ա��޸Ļ�ɾ��
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;

    Object.freeze(obj);//����

    console.log(Object.isFrozen(obj));//true

    //�Զ��������κβ�������ʧ��
    obj.foo = "quux";//��Ĭʧ��;
    obj.quaxxor = "the friendly duck";//��Ĭʧ��

    //���ϸ�ģʽ�л��׳� TypeError �쳣
    (function () {
        "use strict";
        //obj.foo = "sparky";//�׳� TypeError �쳣
        //delete obj.quaxxor;//�׳� TypeError �쳣
        //obj.sparky = "arf";//�׳� TypeError �쳣
    })();

    //ʹ�� Object.defineProperty����ͬ�����׳� TypeError �쳣
    //Object.defineProperty(obj,"ohai",{value:17});//�׳� TypeError �쳣
    //Object.defineProperty(obj,"foo",{value:"eit"});//�׳� TypeError �쳣
})();


//˼�������������� �Ƕ����ô������������������͵Ĳ��ɱ���
var str = "xxx";
console.log(Object.isFrozen(str));

//�������ݽ����˽� ǳ��������� ��� ǳ���������
(function () {
    obj = {
        internal :{}
    };
    Object.freeze(obj);//ǳ����
    obj.internal.a = "aValue";
    console.log(obj.internal.a);//"aValue"

    //����һ����������ȫ����,�������ж����еĶ���,����ʹ������ĺ���.
    function deepFreeze(o){
        var prop,propKey;
        Object.freeze(o);//���ȶ����һ�����
        for(propKey in o){
            prop = o[propKey];
            if(!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)){
                continue;
            }
            deepFreeze(prop);//�ݹ�
        }
    }

    deepFreeze(obj);
    obj.internal.b = "bValue";//��Ĭʧ��
    console.log(obj.internal.b);//undefined
})();
