//TODO 属性重命名 (不指定类型)
let {a: newA, b: newB} = { //这里的冒号不是指类型
  a: 'a',
  b: 'b'
};
console.log(newA); //a
console.log(newB); //b
//TODO 属性重命名 (指定类型)
let {a: newA1, b: newB1}: { a: string, b: number } = {
  a: 'a',
  b: 2
};
console.log(newA1); //a
console.log(newB1); //2
