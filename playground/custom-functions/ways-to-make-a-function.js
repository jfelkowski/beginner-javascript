// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// anon function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0});

// IIFE 
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!

const wes = {
  name: 'wes bos',
//   Method
  sayHi: function() {
    console.log(this);
    console.log('Hey wes');
    return 'Hey wes'
  },
//   short hanf method
  yellHi() {
    console.log('Hey WESSSS');
  },
//   arrow function
  wisperHi: () => {
    console.log('Hii wesss im a mouse');
  }
}

// callback functions
// click callback
const button = document.querySelector('.clickMe');

function handleClick(){
  console.log('Great Clicking!!');
}

button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// timer callback
setTimeout(function() {
  console.log('Done! Time to eat');
}, 1000);
