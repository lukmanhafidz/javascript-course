let friends = ['Michael', 'Steven', 'Peter'];

friends.pop() //remove last element from an array
console.log(friends)

friends.shift() //remove first element from an array
console.log(friends)

console.log(friends.indexOf('Steven')) //get index of an element from an array
console.log(friends.includes('Steven')) //check if an element is exist in an array

friends.push('Bob') //add element to last index of an array 
console.log(friends)

let newLength = friends.push('Kevin') //will return length of an array after push
console.log(friends)

friends.unshift('James') //add element to first index of an array 
console.log(friends)

let newLength2 = friends.unshift('Anthony') //will return length of an array after push
console.log(friends)

