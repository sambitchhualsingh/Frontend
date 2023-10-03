let num = document.getElementById("num");
let op = document.getElementById("op");
let output = document.getElementById("output");

function submitHandler(event) {
    event.preventDefault();
    let n = Number(num.value);

    switch(op.value) {
        case "all":
            let out1 = sumOfNatural(n);
            output.innerHTML = `<h1>Sum of All = ${out1}</h1>`;
            break; 

        case "even":
            let out2 = sumOfEven(n);
            output.innerHTML = `<h1>Sum of Even = ${out2}</h1>`;
            break;
        case "odd":
            let out3 = sumOfOdd(n);
            output.innerHTML = `<h1>Sum of Odd = ${out3}</h1>`;
            break;
        default:
            output.innerHTML = `<h1>Choose Proper Value</h1>`;
    }
}


function sumOfNatural(num) {
    let sum = 0;
    let i = 1;
        while( i < num ) {
            sum += i;
            i++;
        }
        return sum;
}

function sumOfEven(num) {
    let sum = 0;
    let i = 1;
      while( i < num ) {
        if(i % 2 === 0) {
            sum += i;
        }
        i++;
      }
      return sum;
}
function sumOfOdd(num) {
    let sum = 0;
    let i = 1;
      while( i < num ) {
        if(i % 2 !== 0) {
            sum += i;
        }
        i++;
      }
      return sum;
}
