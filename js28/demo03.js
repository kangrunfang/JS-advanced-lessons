//�ַ���Ҳ���Խ⹹��ֵ
const [a, b, c, d, e] = 'hello';//�൱�ڽ�'hello'ת����["h","e","l","l","o"]��⹹
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

//��������Ķ�����һ��length���ԣ���˻����Զ�������Խ⹹��ֵ��
let {length : len} = 'hello';
console.log(len); // 5


//�⹹��ֵʱ������Ⱥ��ұ�����ֵ�Ͳ���ֵ�������תΪ����
let {toString: s1} = 123;
console.log(s1); //
//s1 === Number.prototype.toString // true

let {toString: s2} = true;
console.log(s2); //
//s2 === Boolean.prototype.toString // true

//��������У���ֵ�Ͳ���ֵ�İ�װ������toString���ԣ���˱���s����ȡ��ֵ��

//�⹹��ֵ�Ĺ����ǣ�ֻҪ�Ⱥ��ұߵ�ֵ���Ƕ��󣬾��Ƚ���תΪ����
// ����undefined��null�޷�תΪ�������Զ����ǽ��н⹹��ֵ�����ᱨ��
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError