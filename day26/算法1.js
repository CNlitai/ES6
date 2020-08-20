// function add(...values) {
//   let sum = 0;

//   for(var val of values) {
//     sum += val;
//   }

//   return sum;
// }

function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  })
}
push(0, 1, 2, 3)