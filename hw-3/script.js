console.log('My name is');

let name = 'Adilet';
console.log(name);

let myName = 'Simon';
console.log('---> My name is:' + ' ' + myName);
const totalCostWord = 'total Cost:';

const dollar = '$';
console.log(totalCostWord + dollar + (5 + 3));

console.log(totalCostWord + `${dollar + (5 + 3)}`);

alert(totalCostWord + dollar + `${2 + 3 + 3}`);

console.log(totalCostWord + dollar + (599 * 295) / 19759);

console.log(totalCostWord + dollar + `${(599 * 295) / 19759}`);

alert(
  totalCostWord + dollar + `${(599 * 295) / 19759} Thank you,come again!`
);

console.log(`items(4):` + dollar + `${2 * 2095 + (2 * 799) / 100}`);

console.log(`Shipping & handling:` + dollar + `${(499 + 499) / 100}`);

console.log(
  `total before tax:` + dollar + `${2 * 2095 + 2 * 799 + 499 + 499 / 100}`
);

console.log(
  'Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 499 + 499) * 0.1) / 100}'
);

// <!--------------------------------- 13 ------------------------------------>


const names = 'Simon';
console.log(`My name is:` + names);

let cost = `${5 + 2 * 3 + 9}`;
console.log(cost);

let tax = `${cost * 0.1}`;
console.log(tax);

let totalCost = cost + tax;
console.log(totalCost);

console.log(`Total cost:` + dollar + cost + tax);


// <!------------------------------------7-------------------------------------->


let button = 0;
