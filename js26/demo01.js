// Part111111111111111  �����ص�
// ����һ ͬ��ִ�еĻص�
var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {//���������飬�������Ԫ���Ƿ���Ϊtrue����ЩԪ��
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);

// ������ �첽ִ�еĻص�(ͨ����ʱ��ģ��)
var LTimeOperation = function(taskID){
    var id = taskID;
    //˼��ʲôʱ�򽫷��������ڹ��캯���ڣ�ʲôʱ�����ڹ��캯����prototype������
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}


// Part22222222222222  �¼��������¼�����
// ����һ �ڿ���̨�����window �� document ������window�е�on ��document�е�on
document.onclick = function () {
    console.log("document ������ˣ�");
};

// ������
for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}
//˼���첽 �� ������������� ES5�����IIFE�������������
for(var i=0;i<5;i++) {
    //(function (i) {
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
    //})(i);
}