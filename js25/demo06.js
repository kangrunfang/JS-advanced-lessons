window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click--red");
        console.log("target:",e.target);
        console.log("this:",this);
        console.log(e.bubbles,e.cancelable,e.cancelBubble);
        //e.stopPropagation();
    },false);//�ĳ�true������

    div2.addEventListener("click",function (e) {
        console.log("div2 click--yellow");//
        //e.target.hidden = true;//��this.hidden = true;��ʲô����Ϊʲô��
        //this.hidden = true;
        
        //e.stopPropagation();
    },true);//�ĳ�true������

    div3.addEventListener("click",function (e) {
        console.log("div3 click--blue");
        //e.stopPropagation();
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
   

    //��ֹĬ���¼���Ϊ
    document.getElementById("aId").addEventListener("click",function (e) {
        e.preventDefault();//��ֹĬ���¼�����ֹ��������ת
        console.log("a click");
    });
}
