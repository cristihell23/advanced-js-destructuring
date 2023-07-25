/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let age = [30,26,27];
// let john = age[0];
// let mary = age[1];
// let joe = age[2];
let [john,mary,joe] = age;
console.log(john,mary,joe);
// Destructuring objects
let jobs = {
    mike:'designer',
    jill:'developer',
    alicia:'accountant',
};
let {mike,jill,alicia} = jobs;
console.log(mike,jill,alicia);
// Destructuring subsets

let languages = ['english','french','spanish','german','japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, ,maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage : 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};

let {firstLanguage,thirdLanguage} = languages2;
console.log(firstLanguage,thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite,secondFavorite, others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak,'
};

let {brian,anna, ... others2} = favoriteFoods;
console.log(brian,anna,others2);