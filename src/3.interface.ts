//TODO 接口其实就是自定义的类型(type)，行为和type关键字一样
interface  LabelledValue {
  size: number;
  label?: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
  console.log(labelledObj.size);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


//TODO 接口的定义(例子)
interface SquareConfig {
  color: string;
  width?: number; //TODO 可选的属性
  readonly height: number; //TODO 只读
  [propName: string]: any; //TODO 其他的属性(如果代码用到了其他属性，却没有在接口中声明，会报错)(没用到不会报错)
}
let square: SquareConfig = {color: '#aaa', height: 5};
//报错，size并不在接口里
//let square: SquareConfig = {color: '#aaa', height: 5, size: 30};
//报错，height是只读的
//square.height = 10;


//TODO 函数接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
};


//TODO 可索引
interface StringArray {
  readonly [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

//TODO 接口的实现类(就是接口定义了东西，然后类去实现它)
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Clock implements ClockInterface {
  currentTime: Date;

  setTime(d: Date) {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {
  }
}


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
//let square2:Square2;
let square2 = <Square2>{}; //强制类型转换
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;


//TODO 混合(函数与属性的混合)
interface Counter {
  (start: number): string; //函数
  //属性
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
  }; //强制转换
  counter.interval = 123;
  counter.reset = function () {
  };
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
