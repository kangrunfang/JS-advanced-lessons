window.onload = function (e) {
    // console.log("window onload");
    // console.log("e:", e);
    // console.log(e.target);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // ����0
        console.log(e.type);
        console.log(e.target);//˼��target��this��ʱ�Ƿ�һ����
        //���������һ��ô?��û��ĳ�������һ���أ���߽��¼���ʱ�ٸ�����

        // ����1
        // console.log(e.clientX,e.clientY);
        // console.log(this, "-----", e.target.id);

        // ����2
        // console.log(e);
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);

        // ����3
        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //�Զ����¼��������¼��ַ�
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
}

