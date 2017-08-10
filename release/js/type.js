/**
 * Created by asus on 2017/8/10.
 */
//TODO 布尔
var aBoolean = true;
//TODO 字符串
var aString = 'a';
//TODO 数字
var aNumber = 1;
//TODO 数组
var anArray = [1];
// let anArray: Array[number] = [1];
//TODO 元组
var x = ['a', 1];
//越界赋值,只能是之前声明过的string和number
x[3] = 'world';
//TODO 枚举 Color.Green===3,Color[3]===Green
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var dd = Color.Green;
//TODO any，就和js的变量一样
var any = '2';
var list = [1, true, "free"];
//TODO void只能赋值undefined和null
var unusable = undefined;
//TODO undefined和null
var u = undefined;
var n = null;
//TODO Never，抛出错误或是没有返回值
function error(message) {
    throw new Error(message);
}
//TODO 类型断言（类型转换）
var someValue = "this is a string";
//as法
var strLength = someValue.length;
//<>法
var str2Length = someValue.length;
