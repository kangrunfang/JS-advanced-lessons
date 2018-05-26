window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);//��3���������Բ�д��Ĭ��Ϊfalse

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);//����3����ѡ����Ϊtrue�Ļ������������ð�ݺͲ����˳��
    //��3������Ĭ����falseʹ�õ���ð�ݷ�ʽ������Ϊtrue�Ļ���Ϊ����ʽ

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//����3����ѡ����Ϊtrue�Ļ������������ð�ݺͲ����˳��
}





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
    //div2.removeEventListener("click",eventHandler);//ȡ����Ӧ

    //�Զ����¼����¼��ַ����¼�����
    document.addEventListener("MyEvent",function(){console.log("�����Զ����¼�")});
    document.dispatchEvent(new Event("MyEvent"));
}
*/

/*
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
*/
