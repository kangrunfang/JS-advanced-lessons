ES5��û�п�������
{
    var a = 4;
}
console.log(a);//4


//������Ⱦ��������������,�������첽ִ�е�����¡�����������������ļ�������£���������ɱ�����Ⱦ
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//һ��������󣬼��翴��������������
var a=2,b=3;
if(a<b){
    var userId = 234;
}




//ʹ��IIFE�������������
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//����Эͬ����ʱ���⣬��������ȱ�ݵ�������ܻ��������
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());

