// const numbers = [1, 2, 3];
// for (let i = 0; i < numbers.length; i ++) {
//   console.log(numbers[i]);
// }

// [1, 2, 3].forEach(function logNumber(n, i, array){
//   console.log(n, i, array);
// })

function logNumber(number) {
  console.log(number);
}

// function myForEachWithLogNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     logNumber(array[i])
//   }
// }

// myForEachWithLogNumber([1,2,3]);

// function logNumber(number, i, array) {
//   console.log(number, i, array);
// }

// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// myForEach([1,2,3], logNumber);

function add1(n) {
  console.log(n + 1, i);
}

// myForEach([1, 2, 3], add1);

// function logNumber(number) {
//   console.log(number);
// }

// [1, 2, 3].forEach(logNumber);

const numbers = [1, 2, 3];
function logNumber(number) {
  console.log(number);
}
numbers.forEach(logNumber);
numbers.forEach(add1);