// Lab 4 - Task 2: print the prime number that comes after a given prime
// Aneeq Abdullah

// returns true if num is prime
function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

// returns the prime that comes after the given prime
function primeAfter(givenPrime) {
  if (!checkPrime(givenPrime)) {
    return givenPrime + " is not a prime number";
  }
  let next = givenPrime + 1;
  while (checkPrime(next) === false) {
    next++;
  }
  return next;
}

// first six primes, just to check the idea from the task
let primesFound = [];
let number = 2;
while (primesFound.length < 6) {
  if (checkPrime(number)) {
    primesFound.push(number);
  }
  number++;
}
console.log("First six primes: " + primesFound.join(", "));

// hardcoded prime (no keyboard input)
let myPrime = 13;
console.log("Given prime  : " + myPrime);
console.log("Next prime   : " + primeAfter(myPrime));

// a few more hardcoded tests
let testPrimes = [3, 7, 19, 31, 101];
for (let k = 0; k < testPrimes.length; k++) {
  console.log("After " + testPrimes[k] + " comes " + primeAfter(testPrimes[k]));
}

// what happens if the number is not prime
console.log(primeAfter(20));
