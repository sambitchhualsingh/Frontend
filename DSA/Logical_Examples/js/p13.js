let fNum = document.getElementById('num');
let fMethod = document.getElementById('method');
let result = document.getElementById('result');


const submithandler = (event) => {
    event.preventDefault();

    let num = fNum.value;

    switch(fMethod.value) {
        case "rec":
            let res1 = factRec(num);
            result.innerHTML = `<h1> Factorial (Recursive) = ${res1}</h1>`;
            break;
        case "for":
            let res2 = factFor(num);
            result.innerHTML = `<h1> Factorial (For) = ${res2}</h1>`;
            break;
        case "while":
             let res3 = factWhile(num);
             result.innerHTML = `<h1> Factorial (While) = ${res3}</h1>`;
             break;
        case "ternary":
            let res4 = factTer(num);
            result.innerHTML = `<h1> Factorial (ternary) = ${res4}</h1>`;
            break;
        default: result.innerHTML = `<h1> Choose Proper Method</h1>`;
            break;
    }

}

// recursion

function factRec(num){
    if(num === 0) {
        return 1;
    } else {
        return num * factRec(num - 1);
    }
}



// for
function factFor(num) {
    if(num === 0) return 1;
    let rf =1;
    for(i=2; i <= num; i++) {
        rf = rf * i;
    }
    return rf;
}

// While
function factWhile(num) {
    if(num === 0) return 1;
    let fa = 1;
    let i = 2;
    while(i<= num) {
        fa = fa * i;
        i++;
    }
    return fa;
}

// ternary
function factTer(num) {
    let fac = (num === 1 || num === 0 ) ? 1 : num * factTer(num-1);
    return fac;
}