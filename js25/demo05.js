�¼���Ӧ���¼���
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);//�ĳ�true������
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);//�ĳ�true������
    div3.addEventListener("click",function (e) {
        console.log("div3 click");
    },false);//�ĳ�true������

    /*
    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);//����3����ѡ����Ϊtrue�Ļ������������ð�ݺͲ����˳��
    //��3������Ĭ����falseʹ�õ���ð�ݷ�ʽ������Ϊtrue�Ļ���Ϊ����ʽ

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//����3����ѡ����Ϊtrue�Ļ������������ð�ݺͲ����˳��
    */
   
}