//XMLHttpRequest Get ����
//��˴���μ��μ�NodeAjaxTest01.js
//ʵ��һ
var xhr = new XMLHttpRequest();
// if (!xhr) {
//     console.log("xhr ����ʧ�ܣ���");
// }
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        //��ʾ����������Ӧ������200����ȷ����������
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post������
xhr.send();




// �������
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com



