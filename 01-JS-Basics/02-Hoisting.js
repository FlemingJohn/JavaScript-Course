// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// `var` variables are hoisted and initialized with `undefined`.
// `let` and `const` variables are hoisted but not initialized, which creates a "Temporal Dead Zone" (TDZ).

// --- `var` hoisting example ---
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// --- `let` hoisting example (Temporal Dead Zone) ---
try {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (error) {
    console.error(error.message);
}
let b = 50;
console.log(b); // 50

// Note on undeclared variables:
// In non-strict mode, assigning a value to an undeclared variable (e.g., `c = 100;`)
// automatically creates a global variable. This is generally considered bad practice.
// In strict mode, this would throw a ReferenceError.