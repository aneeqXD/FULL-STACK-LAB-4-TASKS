// Lab 4 - Task 6: sum of all the multiples of x or y below z
// Aneeq Abdullah
//
// Example: below 10, the multiples of 3 or 5 are 3, 5, 6 and 9 -> 3 + 5 + 6 + 9 = 23

function sumOfMultiples(x, y, z) {
  if (x <= 0 || y <= 0) {
    return "x and y must be greater than 0";
  }
  let total = 0;
  let used = [];
  for (let num = 1; num < z; num++) {
    // the || makes sure a number like 15 (multiple of both) is added only once
    if (num % x === 0 || num % y === 0) {
      total = total + num;
      used.push(num);
    }
  }
  console.log(`Multiples of ${x} or ${y} below ${z}: ${used.length <= 15 ? used.join(", ") : used.length + " numbers"}`);
  return total;
}

console.log("Sum =", sumOfMultiples(3, 5, 10));     // 23
console.log("Sum =", sumOfMultiples(3, 5, 20));     // 78
console.log("Sum =", sumOfMultiples(2, 7, 15));     // 63
console.log("Sum =", sumOfMultiples(3, 5, 1000));   // 233168
console.log(sumOfMultiples(0, 5, 10));              // error message
