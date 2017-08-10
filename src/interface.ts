/**
 * Created by asus on 2017/8/10.
 */
//TODO 接口的定义
//其实就是自定义了类型
//此类型应有color属性，并且是个String。有可选的width属性，是个number
interface SquareConfig {
  color: string;
  //TODO 可选的属性
  width?: number;
  //只读的height
  readonly height: number;
  //TODO 其他的属性，传入未定义的属性会报错
  // [propName: string]: any;
}
//TODO 只读的属性
let square: SquareConfig = {color: '#aaa', height: 5};
//报错，size并不在接口里
// let square: SquareConfig = {color: '#aaa', height: 5, size: 30};
//报错，height是只读的
// square.height = 10;

//TODO 只读的array
let a: Array<number> = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = [1, 2, 3, 4];
// ro[0] = 12; // error!

//TODO 函数型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
};
//TODO 可索引
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
//TODO 接口继承
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square2 extends Shape, PenStroke {
  sideLength: number;
}
// let square2:Square2;
let square2 = <Square2>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
//TODO 混合
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  //TODO 带接口的声明变量，这样就不用一次把所有属性有写上
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//TODO 接口继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control {
  select() { }
}

class TextBox extends Control {
  select() { }
}

class Image1 {
  select() { }
}

class Location1 {
  select() { }
}
