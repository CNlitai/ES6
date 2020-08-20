//function和函数名之间有一个*
//函数内部使用yeild函数


// Generator返回值是一个遍历器对象
function* test(){
  yield 'hello',
  yield 'world',
  yield 'nice',
  yield 'end'
}

let res = test()
console.log(res)