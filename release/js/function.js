/**
 * Created by asus on 2017/8/10.
 */
//TODO 函数定义
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
//TODO 参数,个数是有限制的，不能多也不能少
function buildName(firstName, lastName, fullName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
//TODO 多参数
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
