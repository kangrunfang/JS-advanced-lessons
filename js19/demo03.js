//���ڸ�ʽʵ��
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());

//���ڸ�ʽ����ʱ�䣩
console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));

//���ں�ʱ���ʽ
console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));

//ʱ��ıȽϺ����㣬�ڲ�ת��Ϊ���ֽ��бȽϺ����㣨��1970��1��1��00:00:00��ʼ���㣩
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));
