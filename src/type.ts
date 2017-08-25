/**
 * Created by asus on 2017/8/10.
 */
//TODO 布尔
let aBoolean: boolean = true;
//TODO 字符串
let aString: string = 'a';
//TODO 数字
let aNumber: number = 1;
//TODO 数组
let anArray: number[] = [1];
// let anArray: Array[number] = [1];
//TODO 元组
let x: [string, number] = ['a', 1];
//越界赋值,只能是之前声明过的string和number
x[3] = 'world';
//TODO 枚举 Color.Green===3,Color[3]===Green
enum Color {Red = 2, Green, Blue}
let dd: Color = Color.Green;
//TODO any，就和js的变量一样
let any: any = '2';
let list1: any[] = [1, true, "free"];
//TODO void只能赋值undefined和null
let unusable: void = undefined;
//TODO undefined和null
let u: undefined = undefined;
let n: null = null;
//TODO Never，抛出错误或是没有返回值
function error(message: string): never {
  throw new Error(message);
}
//TODO 类型断言（类型转换）
let someValue: any = "this is a string";
//as法
let strLength: number = (someValue as string).length;
//<>法
let str2Length: number = (<string>someValue).length;
