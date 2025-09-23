'use strict';

const restaurant = {
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};


const arr = [2, 3, 4];
const a = arr[0]; 
const b = arr[1]; 
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); //output: 2 3 4
console.log(arr); //output [2, 3, 4]

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //output: Italian Vegetarian

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); //output: Vegetarian Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //output: Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k); //output: 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //output: 8 9 1
