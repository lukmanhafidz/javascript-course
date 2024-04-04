// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); //strict equal

if (age == 18) console.log('You just became an adult :D (loose)'); //loose equal (coercion)

//strict equal wont force string to number
//loose equal will force string to number

// const favourite = prompt("your fav number?"); will receive input as string
const favourite = Number(prompt("your fav number?")); //will receive input as string then convert it to number
console.log(favourite);
console.log(typeof favourite); //data type

if (favourite === 23){ //it is recomended using strict equal when facing number 
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else { //else if (favourite !== 23 && favourite !== 7 && favourite !== 9)
  console.log('Number is not 23 or 7 or 9')
}


