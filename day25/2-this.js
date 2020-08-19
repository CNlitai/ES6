let obj = {
  name: 'tom', 
  sayName:()=>{
    console.log(this)
  }
}
//调用对象中的方法
obj.sayName()
