//���index16.html ʵ�ֺ������֪ʶ���ۺ���ϰ���հ���IIFE��������
window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        // var li = document.createElement("li");//�հ�������ģʽ
        // ol.appendChild(li);//�հ�������ģʽ
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "�б�����";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                //console.log(new Date());
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};

