let inpArray = [1,-2,4,0,-12,20,16];

console.log('input =', inpArray);

let asc = document.getElementById("asc");
let dec = document.getElementById("dec");

function ascOrder(arr) {
    for(let i=0; i< arr.length; i++) {
        for(let j=0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

function decOrder(arr) {
    for(let i=0; i< arr.length; i++) {
        for(let j=0; j < arr.length; j++) {
            if(arr[j] < arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

let res = ascOrder(inpArray);

console.log('asc =', res);
asc.innerHTML = `<h1> Asc = ${res} </h1>`;

let res1 = decOrder(inpArray);

console.log('dec =', res1); 
dec.innerHTML = `<h1> Dec = ${res1} </h1>`;