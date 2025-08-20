// nullish coalescing -> it is an logical operator similar to ternary operator
// operator -> ??
// usecase -> ignore the undefined condition 

let result = null;
console.log(result);

// ignore null and undefined values using assignment operator 
if(result == undefined || result == null){
    result = 'Fleming';
}
console.log(result);
// ignore null and undefined values without using assignment operator
result = result ?? 'John';
console.log(result);

