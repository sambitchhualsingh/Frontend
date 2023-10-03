/* W.A.P program to find largest 3 number in an array of numbers  */


let arr = [25,45,15,8,75,96,35,47];

/*
    96,75,47
*/

/* sort */

let res = arr.sort((a,b) => a - b);
console.log('sort ascending =', res);

let res1 = arr.sort((a,b) => b - a);
console.log('sort decending =', res1);

console.log('first =', res1[0]);
console.log('second =', res1[1]);
console.log('third =', res1[2]);

