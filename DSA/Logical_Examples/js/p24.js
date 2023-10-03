let num = document.getElementById("num");
let output = document.getElementById("output");

function submitHandler(event) {
    event.preventDefault();
    let n = Number(num.value);

    if(isFinite(n)) {
        output.innerHTML =  `<h1> ${n} is an integer </h1>`;
    } else {
        output.innerHTML =  `<h1> ${n} is a decimal </h1>`;
    }
}

function isInt(n) {
    return n % 1 === 0;
}