// variables - used to store values 
// types - var, let and const 

// let - mutable (can be reassigned)
// var - mutable (can be reassigned - older way, generally avoid)
// const - immutable (cannot be reassigned). The value of a const object/array can be changed, but the variable cannot point to a new object/array.

// defining the variables
var x = 10;
let y = 5;
const z = 15;

// printing 
console.log(x);
console.log(y);
console.log(z);


// creating the object in const 
const person = {
    name: "Fleming",
    age: 21
}

// changing the values of the object 
person.name = "John";
console.log(person);