// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //2009

console.log(inputYear + 18); //199118

console.log(Number('Jonas'));// NaN(Not a Number)
console.log(typeof NaN); 

console.log(String(23), 23);// "23", 23

// type coercion
console.log('I am ' + 23 + ' years old'); // + operator will force conversion to string
console.log('23' - '10' - 3); // 10
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);