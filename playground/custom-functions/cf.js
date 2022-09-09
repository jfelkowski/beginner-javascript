// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) 
{
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * taxRate;
  return total;
}

// Function Call. or ** RUN **
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `Hey ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
