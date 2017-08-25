/**
 * Created by asus on 2017/8/23.
 */
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}
//TODO 核心是for...of...语句
for (let i of list) {
  console.log(i); // "4", "5", "6"
}
