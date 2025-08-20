// logical operator - used to combine or manipilate boolean values(true or false)
// types - AND(&&),OR(||),NOT(!)

const a = 42;
const b = 'Fleming John';
const c = null;

// OR - returns the value if has values doesnt returns the boolena value
console.log(a || b); //prints the first value bacuase both varibales contains values
console.log(c || b); //prints the second value baczuae c is null and b has some values 

// AND -
console.log(a && b); //prints the second the value because 
console.log(a && c); //print the seocnd value

// sample code 
function greet(name) {
    console.log(`Hello, ${name || 'visitor'}!`);
}
greet("fleming");

// $ -> placeholder where we can place the values 