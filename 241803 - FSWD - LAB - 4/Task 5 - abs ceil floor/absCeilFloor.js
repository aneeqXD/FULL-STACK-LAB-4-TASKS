// Lab 4 - Task 5: abs, ceil and floor, working just like roundMe() in Task 4
// Aneeq Abdullah
//
// no arguments       -> 0
// one argument       -> one result
// many arguments     -> array of results

// Shared helper: runs "operation" on 0..N values with the same rules as roundMe
function applyToAll(operation, values) {
  if (values.length === 0) {
    return 0;
  }
  if (values.length === 1) {
    return operation(values[0]);
  }
  return values.map(operation);
}

function absMe(...values) {
  return applyToAll(Math.abs, values);
}

function ceilMe(...values) {
  return applyToAll(Math.ceil, values);
}

function floorMe(...values) {
  return applyToAll(Math.floor, values);
}

console.log("abs:");
console.log(absMe());                 // 0
console.log(absMe(-7.5));             // 7.5
console.log(absMe(-3, 4, -0.25));     // [ 3, 4, 0.25 ]

console.log("ceil:");
console.log(ceilMe());                // 0
console.log(ceilMe(2.1));             // 3
console.log(ceilMe(2.1, -2.9, 6));    // [ 3, -2, 6 ]

console.log("floor:");
console.log(floorMe());               // 0
console.log(floorMe(2.9));            // 2
console.log(floorMe(2.9, -2.1, 6));   // [ 2, -3, 6 ]
