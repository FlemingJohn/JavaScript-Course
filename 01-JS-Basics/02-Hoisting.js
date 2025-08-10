// hoisting - defines the behaviour and scope of the varibles   
function codeHoist(){
    a = 10;
    let b = 50;
}

codeHoist();

// for a var it automatically defines the var keyword and it is global scope
console.log(a); //10 
console.log(b); // ReferenceError: b is not defined