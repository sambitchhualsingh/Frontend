/* 
    sorting all zeros any array

    let res = [2,4,6,3,9,0,0,0,0];
    let res = [0,0,0,0,2,3,4,6,9];
*/

let arr = [0,2,4,0,6,0,3,0,9];

function pushToEnd(arr) {
    let n = 0;

    for(let i=0; i < arr.length; i++) 
        if(arr[i] != 0) 
            arr[n++] = arr[i];

        while(n < arr.length)
        arr[n++] = 0;

        return arr;
    
}

let res = pushToEnd(arr);

console.log('res =', res);

function sortAll(arr) {
    let out = arr.sort((a,b) => a - b);
    return out;
}

let res2 = sortAll(arr);
console.log('res2 =', res2);