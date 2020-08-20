var arr = [1,13,24,11,11,14,1,2]


for(var i = 0; i < arr.length; i++) {
  for(var j= i+1; j < arr.length; j++) {
    if(arr[i] === arr[j]){
      arr.splice(j, 1)
      j--;
    }
  }
}
console.log(arr)

// console.log(arr.pop())
// console.log(arr)