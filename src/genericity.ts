/**
 * Created by asus on 2017/8/16.
 */
//下面这个函数可以传入任何类型，但是也会返回任何类型
function identity(arg: any): any {
  return arg;
}
//TODO 泛型，你可以输入任何类型，但是返回的类型必须和输入的相同
function identity2<T>(arg: T): T {
  return arg;
}
//TODO 泛型做接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn = identity;
//TODO 规定了为number
interface GenericIdentityFn2<T> {
  (arg: T): T;
}
function identity5<T>(arg: T): T {
  return arg;
}
let myIdentity2: GenericIdentityFn2<number> = identity5;
//TODO 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
//这里规定了用number
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
//TODO 泛型可以是任何类型，不能保证其有length属性，所以会报错，这是就要让其有length属性
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

