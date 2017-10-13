/**
 * Created by asus on 2017/8/10.
 */
//TODO 声明类
class Animal {
  readonly name: string; //TODO 默认public，可被继承，可被外部访问
  private height: number; //TODO 无法被继承
  protected width: number; //TODO 可被继承，无法被外部访问
  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

//TODO 继承
class Snake extends Animal {
  private weight: number;

  constructor(name: string) {
    super(name);
  }

  //重写方法
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
    this.weight = 10;
  }
}
let sam = new Snake("Sammy the Python");
sam.move();
console.log('name', sam.name)
//报错，只有内部方法能访问到
//console.log(sam.weight)


//TODO 静态
class Grid {
  static origin = {x: 0, y: 0}; //TODO 只有类有，实例里没有

  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  //代替，this.scale = _scale
  constructor(public scale: number) {
  }
}
let grid1: Grid = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


//TODO 抽象类，不可以被实例化但是可以被继承
abstract class Animal2 {
  abstract makeSound(): void;

  move(): void {
    console.log('roaming the earch...');
  }
}
