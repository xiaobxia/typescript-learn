//TODO 函数定义
function add(x: number, y: number): number {
  return x + y;
}

let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
//TODO 参数,个数是有限制的，不能多也不能少
function buildName(firstName: string, lastName = "Smith", fullName?: string) {
  return firstName + " " + lastName;
}
//TODO 多参数
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
