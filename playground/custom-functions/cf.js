// Function Definition
function calculateBill() {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = 100 * 1.13;
  return total;
}

// Function Call. or ** RUN **
const myTotal = calculateBill();
// console.log(`Your Total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
