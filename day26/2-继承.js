function Animal(name,age){
  this.name = name
  this.age = age
}


function Dog(name,age,gender){
  // 借用Animal的构造函数
  Animal.apply(this, arguments);
  this.gender = gender
}

var dog = new Dog('wanngcai',6,'male');
console.log(dog)