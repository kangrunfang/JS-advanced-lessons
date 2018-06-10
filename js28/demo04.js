function add([x, y]){
    return x + y;
}
add([1, 2]); // 3

/////
[[1, 2], [3, 4]].map(function([a, b]){return a + b;});
// [ 3, 7 ]
//��ͷ������ʾ��ʽ [[1, 2], [3, 4]].map(([a, b]) => a + b);

/////
//���������Ľ⹹Ҳ����ʹ��Ĭ��ֵ,�������������εĽ⹹��ֵ
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

///////
//ע�⣬�����д����õ���һ���Ľ����
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
//���������Ϊ����move�Ĳ���ָ��Ĭ��ֵ��������Ϊ����x��yָ��Ĭ��ֵ�����Ի�õ���ǰһ��д����ͬ�Ľ����


//undefined�ͻᴥ������������Ĭ��ֵ
[1, undefined, 3].map(function(x = 'yes') {return x;});
// [ 1, 'yes', 3 ]
//��ͷ������ʾ��ʽ [1, undefined, 3].map((x = 'yes') => x);