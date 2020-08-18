// let [a, b, c] =[1,2,3]
// console.log(a,b,c)

//let [a,b,...c] =[1,2,3,4]
//console.log(a,b,c)


// let [a,b,c,d,e] = [1,2,3]
// console.log(a,b,c,d,e)

// let [a,[b],c] = [1,[2,3],4]
// console.log(a,b,c)

// let [a, b='22'] = [10, 20]
// console.log(a,b)


// 数组嵌套对象
// let [a,{name:user}] = ['hello', {name:'litai'}]
// console.log(a,user)

// 对象嵌套数组
// let {test} = {test:[1,2,3]}
// console.log(test)

// let  {name:name,age:age} = {name: 'tom', age:12}
// let  {name,age} = {name: 'tom', age:12}
// console.log(name, age)

// let {trim} = 'hello'
// console.log(trim)
// console.log(trim ===String.prototype.trim)

// let{toString} = true
// console.log(toString === Boolean.prototype.toString)

let a = 1
let b = 2
[a,b] = [b,a]
console.log(a,b)