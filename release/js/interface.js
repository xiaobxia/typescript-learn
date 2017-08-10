var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//TODO 只读的属性
var square = { color: '#aaa', height: 5 };
//报错，size并不在接口里
// let square: SquareConfig = {color: '#aaa', height: 5, size: 30};
//报错，height是只读的
// square.height = 10;
//TODO 只读的array
var a = [1, 2, 3, 4];
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray = ["Bob", "Fred"];
var myStr = myArray[0];
// let square2:Square2;
var square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
function getCounter() {
    //TODO 带接口的声明变量，这样就不用一次把所有属性有写上
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//TODO 接口继承类
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var Image1 = (function () {
    function Image1() {
    }
    Image1.prototype.select = function () { };
    return Image1;
}());
var Location1 = (function () {
    function Location1() {
    }
    Location1.prototype.select = function () { };
    return Location1;
}());
