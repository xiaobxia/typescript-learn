//TODO 自定义
type MY = [string, number];
let my1: MY = ['1', 2];

//TODO 布尔
let boolean1: boolean = true;

//TODO 字符串
let string1: string = 'a';

//TODO 数字
let number1: number = 1;

//TODO 数组 (元素的类型是相同的)
let array1: number[] = [1];
let array2: Array<number> = [1]; //数组泛型
let array6: ReadonlyArray<number> = []; //只读数组

//TODO 元组 (元素可以是不同的类型的)
let array3: [string, number] = ['a', 1];
array3[3] = 'world'; //越界赋值,只能是之前声明过的string和number
let array4: [any] = [{a: 'a'}, 'b']; //任意类型的元素的数组

//TODO 枚举 (Color.Green===3,Color[3]===Green)
enum Color {Red = 2, Green, Blue}
let dd: Color = Color.Green; //dd = 3
let cc: string = Color[3];

//TODO any (可以是任何类型，就和js的变量一样)
let any1: any = '2';
let any2: any[] = [1, true, "free"];

//TODO void (只能赋值undefined和null)
let void1: void = undefined;

//TODO undefined, null
let undefined1: undefined = undefined;
let null1: null = null;

//TODO Never (抛出错误或是没有返回值)
function error(message: string): never {
  throw new Error(message);
}

//TODO 类型转换 (不会真的转换成其他类型，只是告诉编译器把它当做什么类型)
let someValue: any = 'sss';
//as法
let someValue1: number = (someValue as number) + 1;
//<>法
let someValue2: number = (<number>someValue) + 1;
