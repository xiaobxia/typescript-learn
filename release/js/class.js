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
/**
 * Created by asus on 2017/8/10.
 */
//TODO 声明类
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
//TODO 继承
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    //TODO 重写
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
        this.weight = 10;
    };
    return Snake;
}(Animal));
var sam = new Snake("Sammy the Python");
sam.move();
sam.name;
//报错，只有内部方法能访问到
// console.log(sam.weight)
//TODO 静态
var Grid = (function () {
    //代替，this.scale = _scale
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    //TODO 只有类有，实例里没有
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//TODO 抽象类，不可以被实例化但是可以被继承
var Animal2 = (function () {
    function Animal2() {
    }
    Animal2.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal2;
}());
