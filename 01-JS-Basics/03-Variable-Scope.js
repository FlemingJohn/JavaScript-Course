// Variable scope -  defines the accessibility of a variable.
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
    console.log("Inside function, before block:", name3);

    if(true){
        const blockScopedName = "King"; // Block-scoped
        console.log("Inside block:", blockScopedName); // "King"
        console.log("Inside block, accessing function scope:", name3); // "john"
    }
    
    // console.log(blockScopedName); // This would cause a ReferenceError because blockScopedName is not accessible here.
    console.log("Inside function, after block:", name3);
}

console.log(name3);
logBlockName();