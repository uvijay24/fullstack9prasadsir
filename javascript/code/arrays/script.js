let arr = [5, 4, 3, 8];
console.log(arr);
console.log(arr[4]) //undefined
arr[4] = 20;
console.log(arr[4])//20
console.log(arr);
arr[10] = 15;
console.log(arr)
console.log(typeof arr)

arr = [5, 4, 3, 7, 9,3];
console.log(arr.length)
// arr.length = 3;
// console.log(arr)
// let arr2 = [[5, 30], [6, 8], [11, 10]]
// console.log(arr2);
console.log(arr.indexOf(3),arr.lastIndexOf(3),arr[3])
let y = arr.concat([11, 12, 13])
console.log(y)
arr = [1, 2];
let arr2 = [1, 2]
console.log(arr == arr2);

arr = [1, 5, 4];
// push
arr.push(6)
arr.push(10,11,12,13,14,15)
console.log(arr)
arr.pop()
arr.shift()
console.log(arr)
arr.unshift(14,15)
console.log(arr)
arr = [1, 2, 3, 4]
arr.splice(2, 0,7,8,9)
console.log(arr)//1 2 7 8 9 3 4




