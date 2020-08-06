const age = [12, 14, 18, 14];
const age2 = [13, 15, 19];
const age3 = [13, 12]

// const allAges = age.concat(age2, age3, [21, 19]);
const allAges = [...age, ...age2, ...age3, 21, 19]
console.log(allAges);

const arr = [10, 20, 30];

const maximum = Math.max(...arr);
const minimum = Math.min(...arr)

console.log(maximum, minimum)