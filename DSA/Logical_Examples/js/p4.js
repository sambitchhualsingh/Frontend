
        // swap with temp variable
function swap() {
    let x = Number(prompt('Enter input 1?'));
    let y = Number(prompt('Enter input 2?'));

    document.write(`<h1> before x =  ${x} and y = ${y} </h1>`);

    let temp ;

    temp = x;
    x = y;
    y = temp;


    document.write(`<h1> after x = ${x} and y = ${y} </h1>`);
}


        // swap without temp variable
function swapWithoutTemp() {
    let a = Number(prompt('Enter input 1?'));
    let b = Number(prompt('Enter input 2?'));

    document.write(`<h2> before a = ${a} and  b = ${b}</h2>`);


    a =  a + b;
    b = a - b;
    a = a - b;

    document.write(`<h2> after a = ${a} and b = ${b}</h2>`);
}



// es 6

function swapWithArguments() {
    let a = Number(prompt('Enter input 1?'));
    let b = Number(prompt('Enter input 2?'));

    document.write(`<h1> before a = ${a} and b = ${b}</h1>`);

    [a,b] = [b,a];

    document.write(`<h1>after a = ${a} and b = ${b}</h1>`);
}


//swaping using Bitwise xor operator

function swapXor() {
    let a = Number(prompt('Enter input 1?'));
    let b = Number(prompt('Enter input 2?'));

    document.write(`<h1> before a = ${a} and b = ${b}</h1>`);

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    
    document.write(`<h1>after a = ${a} and b = ${b}</h1>`);
}