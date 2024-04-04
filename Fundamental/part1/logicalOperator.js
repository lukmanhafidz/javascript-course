// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!'); //will go here
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired); //true, true, false

if (hasDriversLicense && hasGoodVision && !isTired) { //A, B, C
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');//will go here
}