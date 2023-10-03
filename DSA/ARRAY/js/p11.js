// array.every() -> it applies boolean function to an array and returns true if the function can the true for every element in the array

function isEven(val) {
    return val % 2 === 0;
}

var n2 = [12,4,56,42,50,24,42];

var ev = n2.every(isEven);

console.log('ev =', ev);

if(ev) {
    console.log('all numbers are even');

} else {
    console.log('not all numbers are even');
}