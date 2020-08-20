//Animal父类
class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

}
//子类
class Dog extends Animal{
  constructor(name,age){
    super(name)
    this.age = age
  }
}

let dog = new Dog('wanngcai',6)
console.log(dog)
                    