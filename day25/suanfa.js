// 不借助临时变量，进行两个整数的交换
// 　　举例：输入 a = 2, b = 4 输出 a = 4, b =2
// 　　这种问题非常巧妙，需要大家跳出惯有的思维，利用 a , b进行置换。

let a = 2;
let b = 4;

b = b-a
a = a+b
b = a-b


console.log(a)
console.log(b)