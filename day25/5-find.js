let arr = [10, 20, 30, 40, 50];
let res = arr.find((item, index, arr) => {
  return item<30
})
console.log(res)