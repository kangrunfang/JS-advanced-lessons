var date1 = new Date(2017,9,18,12,34,1);//ע�⣺��0-11���գ�1-31��ʱ��0-23���֣�0-59���룺0-59�����룺0-999
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);//��yearsΪ2λ�Ļ��Զ���1900
console.log(date2);

var date3 = new Date("2017-08-09");//ע�����ڵĸ�ʽ �˴���08����8�»���9�£��Ա���һ��������ʽ
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//��������date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//���䣺��Ч����
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//����new������
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

//˼��
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);

