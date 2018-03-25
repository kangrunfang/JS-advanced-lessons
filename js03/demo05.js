//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); //stringObject.localeCompare(target)如果 stringObject 小于 target
console.log("A".localeCompare("A")); //则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target，
									 //则该方法返回大于 0 的数。如果两个字符串相等
console.log("A".localeCompare("B")); //或根据本地排序规则没有区别，该方法返回 0。

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;


//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");//返回数组  ["ab","def"]
var arr7 = "abcdef".split("c",1);  //["ab"]返回数组的第一项
var arr8 = "abcdef".split("c",2);  //["ab","def"]返回数组的前两项

var str9 = "abcdef".charAt(2);//c
var str10 = "abcdef".charCodeAt(3);//
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度  //cdefg
console.log(str13,str14);//str13 未受到破坏//

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏   //cde


var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();//转换成小写字母
var str19 = "abcDEF".toUpperCase();//转换成大写字母

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);//9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15
