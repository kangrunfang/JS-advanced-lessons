var a = 10,
    b = 20;
function fn() {
    //fn�ֲ�������
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar�ֲ�������
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//console.log(a,b,c,d);//500 20 200 600
