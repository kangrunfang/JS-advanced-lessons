// Date �����ο�����
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date��̬������Date��������������ķ�����GMT ��������ʱ��
console.log(Date.now());//�Ժ���Ϊ��λ���ص�ǰʱ�䣨��1970��1��1��00:00:00��ʼ���㣩
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));//dateTimeString�ַ���ת���ɺ���
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));//������������ת���ɺ���,����ΪUTC Э������ʱ��


//Dateԭ�ͷ��� getter��setter���
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//Dateԭ�ͷ��� ת���ַ������
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
