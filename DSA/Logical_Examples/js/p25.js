let in1 = document.getElementById("x");
let in2 = document.getElementById("y");
let in3 = document.getElementById("z");
let out = document.getElementById("output");

function submitHandler(event) {
    event.preventDefault();
    let x = Number(in1.value);
    let y = Number(in2.value);
    let z = Number(in3.value);

    let product = mul(x) (y) (z);
    out.innerHTML =   `<h1> Product = ${product} </h1>`;
}

function mul(num1) {
    return function (num2) {
        return function (num3) {
            return num1 * num2 * num3;
        }
    }
}