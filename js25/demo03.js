//����2 DOM0���¼�����
/*
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//˼�����Ǹ��ǻ���������䶼�������
    div2.onclick = eventHandler;
    //div2.onclick = null;//ȡ���¼���Ӧ
}
*/

/*
//����3 DOM2���¼�����
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//��3��������ѡ
    div1.addEventListener("click",function(){
        console.log("xx");
    });//˼�����Ǹ��ǻ���������䶼�������

    div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//ȡ���¼���Ӧ����

    //�Զ����¼����¼��ַ����¼�����
    div2.addEventListener("MyEvent",function(){console.log("�����Զ����¼�")});
    div2.dispatchEvent(new Event("MyEvent"));

    //˼��DOM�ڵ����ļ̳й�ϵ
    
    //addEventListener��removeEventListener��dispatchEvent��3���������Ƕ������ĸ�ԭ���ϵģ�
    // console.log(div2.__proto__);
    // console.log(div2.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);
    //EventTarget ��һ���ɿ��Խ����¼��Ķ���ʵ�ֵĽӿڣ����ҿ���Ϊ���Ǵ���������
    
}
*/


//�Զ����¼����������ַ���������ۺϰ�����
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//������div1�ַ��Ļ�������
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    //�������벿�֣��μ��¼�������
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//��Ϊtrue

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//����3����ѡ����Ϊtrue�Ļ����������Ǹ�����������ð�ݺͲ���
    //��3������Ĭ����falseʹ�õ���ð�ݷ�ʽ������Ϊtrue�Ļ���Ϊ����ʽ

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//����3����ѡ����Ϊtrue�Ļ����������Ǹ�����������ð�ݺͲ���
    //��3������Ĭ����falseʹ�õ���ð�ݷ�ʽ������Ϊtrue�Ļ���Ϊ����ʽ
}

/*
//DOM0���¼���Ӧ ���������
document.body.__proto__.hasOwnProperty("onclick");//false
document.body.__proto__.__proto__.hasOwnProperty("onclick");//true

//DOM2���¼���Ӧ  ���������
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__proto__.__proto__.__proto__.hasOwnProperty("addEventListener");//true
*/

