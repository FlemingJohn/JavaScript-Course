// type checking - check what type of data used in the code
// built in function - typeof(), instancof()
// typeof() - defines the datatype 
// instanceof() - return true if the obj is belong to the class,construct and datatype

// typeof() example
console.log(typeof("Hello")); //string 
console.log(typeof(21)); //number 
console.log(typeof(true)); // boolean value

let a;
console.log(typeof(a)); //undefined

//instanceof() example 
console.log([] instanceof(Array)); //true (Reason [] is array)
console.log([] instanceof(Object)); //true (Reason [] is object in JSON)
console.log({} instanceof(Object)); //true (Reason {} is object in JSON);

// type conversion - convert from one datatype to another datatype 

let age = "21"; // string 
console.log(Number(age)); // converts a string to int

let height = 145;
console.log(String(height)); //converts a number to string

console.log(Boolean("")); //returns false becuase it doesnt have any values 
console.log(Boolean(age)); //returns true because age variables has values 

console.log(parseInt("1opx is a pixel value")); //parse eleminates whitespace and returns the value of the datatype defined in the 
console .log(parseFloat("120.980 is float value"));

