// Variable scope -  defines the accessiblit of the variable
// types block scope and function scope
// block scope - defines inside the curly brackets (let and const)
// function scope - accessed inside only the function (var)

// example 1 - global scope 
const name1 = "fleming";

function logGlobalName(){
    console.log(name1);
}

console.log(name1);
logGlobalName();

// example 2 - local scope 
const name2 = "fleming";

function logLocalName(){
    const name2 = "john";
    console.log(name2);
}

console.log(name2);
logLocalName();

// example 3 - block scope
const name3 = "fleming";

function logBlockName(){
    const name3 = "john";
    if(true){
        const name = "King";
        console.log(name3);
    }
    console.log(name3);
}

console.log(name3);
logBlockName();