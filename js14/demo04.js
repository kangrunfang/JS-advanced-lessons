var obj = {
    x:1,
    y:2
};
//ֱ����ӵ����ԣ�����������Ĭ�϶���true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//Part 2

var obj = {
    x:1,
    y:2
};
//ֱ����ӵ����ԣ�����������Ĭ�϶���true
obj.z = 3;

//ͨ��Object.defineProperty������ӵ����ԣ������ֶ��޸ģ�����������Ĭ�϶���false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerableû��ָ��������Ĭ��Ϊfalse
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//��w�����ϱ�for...in��������


//ͨ�������������������鿴ĳһ�������Ե�����