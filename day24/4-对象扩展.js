// let name = 'tom'
// let age = 12
// let obj = {
//   name: name,
//   age: age,
//   gender:'male',
//   sayName:function(){
//     console.log('my name is ' +this.name)
//   }
// };
// obj.sayName()
// console.log(obj)

// let obj2 = {
//   name,
//   age,
//   gender:'male',
//   sayName(){
//     console.log('my name is ' +this.name)
    
//   }
// }
// obj2.sayName()


// function test() {

//   }

// let p = {
//   test() {

//   }
// }
// console.log(p.test.name)


let obj1 = {
  name: "tom"
}

let obj2 = {
  name: "zhangsan",
  age:12
}

let obj3 = {
  gender: "male",
  sayName: function() {

  }
}
let target = {}
let res = Object.assign(target, obj1, obj2, obj3)
console.log(target)
console.log(res === target)

//存在覆盖现象  合并

function myAssign(target, ...temp) {
  console.log(temp) 

 }
 myAssign(target,obj1,obj2,obj3)
//  console.log(res)

