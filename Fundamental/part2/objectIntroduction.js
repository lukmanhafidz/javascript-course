const Jonas = {
    firstName: 'Jonas',
    lastName: 'Kevin',
    age: 20,
    job: 'salaryman',
    friends: ['Michael', 'Steven', 'Peter'],
}

//firstname is property
//Kevin is property's value

Jonas.location = 'USA'
Jonas['instagram'] = '@jonas123'

console.log(Jonas);
console.log(Jonas.friends);
console.log(Jonas['job']); //use bracket if you want to get jonas value from operation result

const result = prompt('What do you want to know about jonas? choose between this option (firstName, lastName, age, job, friends, location, instagram)');

console.log(Jonas[result]); //get jonas value from prompt result

/*
challenge: 
    - {Jonas} has {3} friends, and his best friend is called {Michael}
    - Get the bracket string without hard coding it
*/

console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, his best friend is called
    ${Jonas.friends[0]}`)