// Lab 4 - Task 4: roundMe()
// Aneeq Abdullah
//
// roundMe()          -> 0
// roundMe(4.7)       -> 5
// roundMe(4.7, 4.4)  -> [5, 4]

function roundMe() {
  // "arguments" holds every value passed to the function, however many there are
  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return Math.round(arguments[0]);
  }

  const results = [];
  for (let i = 0; i < arguments.length; i++) {
    results.push(Math.round(arguments[i]));
  }
  return results;
}

console.log(roundMe());                    // 0
console.log(roundMe(4.7));                 // 5
console.log(roundMe(4.7, 4.4));            // [ 5, 4 ]
console.log(roundMe(1.2, 3.5, 6.9, 8));    // [ 1, 4, 7, 8 ]
console.log(roundMe(-2.6, -1.4));          // [ -3, -1 ]
